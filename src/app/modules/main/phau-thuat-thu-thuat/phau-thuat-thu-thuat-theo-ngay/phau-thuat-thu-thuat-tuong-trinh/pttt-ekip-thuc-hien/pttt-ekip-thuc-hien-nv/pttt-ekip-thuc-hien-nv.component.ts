import { Component, OnInit, TemplateRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { Ekip, EkipDataSource } from '../../../../phau-thuat-thu-thuat.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-pttt-ekip-thuc-hien-nv',
    templateUrl: './pttt-ekip-thuc-hien-nv.component.html',
    styleUrls: ['./pttt-ekip-thuc-hien-nv.component.scss']
})
export class PhauThuatThuThuatEkipThucHienNvComponent implements OnInit {
    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    isAllowAdd = true;
    isLoadingNhomChucDanh = false;
    isLoadingBacSiDieuDuong = false;
    isLoadingVaiTro = false;
    urlVaiTro: string;
    url = 'PhauThuatThuThuat/GetListBacSiDieuDuong?nhomChucDanh=';
    queryInfo: LookupQueryInfo = new LookupQueryInfo();
    gridNhanVienColumns: any[] = [];
    validationMsg = null;
    @Input() ycdvktId;
    dataSourceNhanVien: EkipDataSource = {
        data: [],
        total: 0
    };
    canChange = false;
    validationErrors: any;
    documentType: DocumentType;
    @Input() IsPhauThuat = false;
    @Input() IsDaTuongTrinh = false;
    @Input() dataBenhNhan: any = null;
    @ViewChild('chucDanhTemplate', { static: true }) chucDanhTemplate: TemplateRef<any>;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('vaiTroTemplate', { static: true }) vaiTroTemplate: TemplateRef<any>;
    @ViewChild('actionNhanVienTemplate', { static: true }) actionNhanVienTemplate: TemplateRef<any>;
    @ViewChild('gridForEkips', { static: false }) gridForEkips: GridComponent;
    @Output() outDisplaySaveCancel: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private broadcastService: BroadcastService
    ) { }

    ngOnInit() {
        const self = this;
        self.canChange = false;
        self.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        self.gridNhanVienColumns = [
            { Field: 'NhomChucDanh', Title: 'Chức danh', Width: 150, Template: self.chucDanhTemplate },
            { Field: 'BacSi', Title: 'Họ tên', Width: 200, Template: self.hoTenTemplate },
            { Field: 'VaiTro', Title: 'Vai trò', Width: 200, Template: self.vaiTroTemplate },
            { Field: '_', Title: '', Width: 50, Template: self.actionNhanVienTemplate }
        ];
        self.LoadEkip(self.ycdvktId);
    }

    themNguoiThucHien(isFirstLoading = false) {
        const self = this;
        self.validationMsg = null;

        if(isFirstLoading) {
            for(let i = 1; i <= 3; i++) {
                const ekip = new Ekip();

                ekip.IdDb = 0;
                ekip.Id = i;
        
                self.dataSourceNhanVien.data.push(ekip);
                self.dataSourceNhanVien.total += 1;
            }
        } else {
            const ekip = new Ekip();
    
            if (!isFirstLoading) {
                self.changeData();
            }
    
            ekip.IdDb = 0;
            ekip.Id = 1;
    
            if (self.dataSourceNhanVien != null) {
                let lastEkip = null;
                lastEkip = self.dataSourceNhanVien.data[self.dataSourceNhanVien.data.length - 1];
                ekip.Id = lastEkip != null ? lastEkip.Id + 1 : ekip.Id;
            }
    
            self.dataSourceNhanVien.data.push(ekip);
            self.dataSourceNhanVien.total += 1;
        }
    }

    ValidateEkipsClient(ekips: Ekip[]) {
        const self = this;
        self.validationErrors = [];
        ekips.filter(x => x.NhomChucDanh == null).forEach((ele) => {
            const err = {
                Field: 'Ekips[' + ekips.indexOf(ele) + '].NhomChucDanh',
                Message: PtttMessage.MessageChucDanhNotAllowNull
            };
            self.validationErrors.push(err);
        });

        ekips.filter(x => x.BacSiId == null).forEach((ele) => {
            const err = {
                Field: 'Ekips[' + ekips.indexOf(ele) + '].BacSiId',
                Message: PtttMessage.MessageHoTenNotAllowNull
            };
            self.validationErrors.push(err);
        });

        if(this.IsPhauThuat) {
            ekips.filter(x => x.VaiTroId == null).forEach((ele) => {
                const err = {
                    Field: 'Ekips[' + ekips.indexOf(ele) + '].VaiTroId',
                    Message: PtttMessage.MessageVaiTroNotAllowNull
                };
                self.validationErrors.push(err);
            });
        }
    }

    ValidateTrungBacSi(ekips: Ekip[]) {
        this.validationErrors = [];
        const nhomBacSiTrung = ekips.filter(x => x.NhomChucDanh === EnumNhomChucDanh.BacSi)
            .map(w => w.BacSiId)
            .filter((value, index, self) => {
                return self.indexOf(value) !== index;
            });
        const nhomDieuDuongTrung = ekips.filter(x => x.NhomChucDanh === EnumNhomChucDanh.DieuDuong)
            .map(w => w.BacSiId)
            .filter((value, index, self) => {
                return self.indexOf(value) !== index;
            });
        nhomBacSiTrung.forEach(w => {
            const err = {
                Field: 'Ekips[' + ekips.map(q => q.BacSiId).indexOf(w) + '].BacSiId',
                Message: PtttMessage.MessageSameBacSiNotAllow
            };
            this.validationErrors.push(err);
        });
        nhomDieuDuongTrung.forEach(w => {
            const err = {
                Field: 'Ekips[' + ekips.map(q => q.BacSiId).indexOf(w) + '].BacSiId',
                Message: PtttMessage.MessageSameDieuDuongNotAllow
            };
            this.validationErrors.push(err);
        });
    }

    LoadEkip(ycdvkt: number = -1) {
        const self = this;
        if (self.validationErrors != null && self.validationErrors.some(x => x)) {
            self.validationErrors = [];
        }
        if (ycdvkt === -1) {
            self.dataSourceNhanVien.data = [];
            self.dataSourceNhanVien.total = 0;
            return;
        }
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.get<any>(`PhauThuatThuThuat/LoadEkip?ycdvktId=${ycdvkt}`)
                .subscribe(resultData => {
                    self.canChange = true;
                    if (resultData.Data.length !== 0) {
                        self.dataSourceNhanVien.data = resultData.Data;
                        self.dataSourceNhanVien.data.forEach(elementEkip => {
                            elementEkip.VaiTroId = elementEkip.VaiTroBacSi != null ? elementEkip.VaiTroBacSi : elementEkip.VaiTroDieuDuong;
                            elementEkip.VaiTro = elementEkip.VaiTroBacSi != null ?
                                elementEkip.VaiTroBacSiDisplay : elementEkip.VaiTroDieuDuongDisplay;
                            elementEkip.UrlVaiTro = elementEkip.NhomChucDanh === EnumNhomChucDanh.BacSi ?
                                PtttMessage.UrlVaiTroBsi : PtttMessage.UrlVaiTroDd;
                        });
                        self.dataSourceNhanVien.total = resultData.TotalRowCount;
                    }

                    if (resultData.Data.length === 0) {
                        self.dataSourceNhanVien.data = resultData.Data;
                        self.dataSourceNhanVien.total = resultData.TotalRowCount;
                        if (self.gridForEkips != null) {
                            self.gridForEkips.setDataSource();
                        }
                        self.themNguoiThucHien(true);
                    }
                }, (err: any) => {
                    self.notificationService.showError(err.Message);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    chonNhomChucDanh(event: { DisplayName: string; KeyId: EnumNhomChucDanh; }, item: Ekip) {
        this.changeData();
        this.validationMsg = null;
        if (event) {
            item.NhomChucDanhDisplay = event.DisplayName;
            item.UrlVaiTro = event.KeyId === EnumNhomChucDanh.BacSi ?
                PtttMessage.UrlVaiTroBsi : PtttMessage.UrlVaiTroDd;
            item.BacSi = null;
            item.BacSiId = null;
            item.NhomChucDanh = event.KeyId;
            item.VaiTro = null;
            item.VaiTroId = null;
        } else {
            item.NhomChucDanhDisplay = null;
            item.BacSi = null;
            item.BacSiId = null;
            item.NhomChucDanh = null;
            item.VaiTro = null;
            item.VaiTroId = null;
        }
        item.VaiTroBacSi = null;
        item.VaiTroDieuDuong = null;
    }

    chonBacSiDieuDuong(event: { DisplayName: string; KeyId: number; }, item: Ekip) {
        this.changeData();
        this.validationMsg = null;
        if (event) {
            item.BacSi = event.DisplayName;
            item.BacSiId = event.KeyId;
        } else {
            item.BacSi = null;
            item.BacSiId = null;
        }
    }

    chonVaiTro(event: { DisplayName: string; KeyId: number; }, item: Ekip) {
        this.changeData();
        this.validationMsg = null;
        if (event) {
            if (item.NhomChucDanh === EnumNhomChucDanh.BacSi) {
                item.VaiTroBacSi = event.KeyId;
                item.VaiTro = event.DisplayName;
                return;
            }
            item.VaiTroDieuDuong = event.KeyId;
            item.VaiTro = event.DisplayName;
        } else {
            item.VaiTroId = null;
            item.VaiTro = null;
            item.VaiTroBacSi = null;
            item.VaiTroDieuDuong = null;
        }
    }

    closeAllDialog() {
        if (!this.isLoadingNhomChucDanh && !this.isLoadingBacSiDieuDuong && !this.isLoadingVaiTro) {
            this.dialog.closeAll();
        }
    }

    changeData() {
        this.outDisplaySaveCancel.emit(true);
    }

    xoaNhanVien(item) {
        this.validationMsg = null;
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceNhanVien.data.splice(this.dataSourceNhanVien.data.findIndex(x => x === item), 1);
                this.validationErrors = [];
                this.changeData();
            }
        });
    }
}
