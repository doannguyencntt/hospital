import { Component, OnInit, TemplateRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icHistory from '@iconify/icons-ic/twotone-history';
import icInfo from '@iconify/icons-ic/baseline-info';
import icWarning from '@iconify/icons-ic/twotone-warning';
import {
    GridXacNhanBhyt,
    GridBhytModel,
    DesignateCoincidentServiceModel,
    IcdKemTheoModel,
    InsuranceModelRequest,
    ThongTinHanhChinh,
    ListLoaiPhanTramPttt,
    ThongTinBaoHiemXaHoi
} from '../xac-nhan-bhyt.model';
import { BhytType, PercentTypeForPttt } from 'src/app/shared/enum/bhyt-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { NhomGoiDichVu } from 'src/app/shared/enum/nhom-goi-dich-vu.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage, DuyetBhytMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DanhSachLichXacNhanComponent } from '../danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { delayWhen, retryWhen, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bhyt-thong-tin-xac-nhan',
    templateUrl: './bhyt-thong-tin-xac-nhan.component.html',
    styleUrls: ['./bhyt-thong-tin-xac-nhan.component.scss']
})
export class BhytThongTinXacNhanComponent implements OnInit {
    gridColumnsChoXacNhanBHYT: any[] = [];
    gridColumnChuaDuocHuongBHYT: any[] = [];

    currentWarningMucHuongDaDuyetMessage = null;
    serviceGroupIds: DesignateCoincidentServiceModel[] = [];
    dataHuongBh: GridBhytModel = {
        data: [],
        total: 0
    };
    dataChuaHuongBh: GridBhytModel = {
        data: [],
        total: 0
    };
    thisId: number = this.route.snapshot.params.id;
    @Input() bhytHanhChinh: ThongTinHanhChinh;
    @Input() validationErrors: any;
    @Input() bhytInfo: ThongTinBaoHiemXaHoi[];
    icHistory = icHistory;
    icInfo = icInfo;
    icWarning = icWarning;
    searchString = null;
    gridQueryInfo: GridQueryInfo;
    skip = 0;
    pageSize = 10;
    take: number;
    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'asc'
    }];
    documentType: DocumentType;
    lazyLoadPage = false;
    currentWarningMessage = null;
    currentBenefitRatio = null;
    icdChinh = null;
    ghiChuIcd = null;
    mucHuong15Percent = null;
    icdKems: IcdKemTheoModel[] = [];
    ptPttts: ListLoaiPhanTramPttt[] = [];
    messageWarningTrangThaiThanhToan = DuyetBhytMessage.MessageNotAllowModifyDaThanhToan;
    percentTypeForPtttLabel = new Map<number, string>([
        [PercentTypeForPttt.Per100, '100%'],
        [PercentTypeForPttt.Per80, '80%'],
        [PercentTypeForPttt.Per50, '50%']
    ]);
    gridHuongBhyts: number[] = [];
    getAsyncDone = false;

    bhytDuocHuong: string = "bhytDuocHuong";
    bhytChuaDuocHuong: string = "bhytChuaDuocHuong";

    @ViewChild('gridHuongBhyt', { static: false }) gridHuongBhyt: GridComponent;
    @ViewChild('gridChuaHuongBhyt', { static: false }) gridChuaHuongBhyt: GridComponent;

    // ---------------------------------ThanhTien------------------------------------------------------------------
    @ViewChild('donGiaBenhVienTemplate', { static: true }) donGiaBenhVienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;

    @ViewChild('thanhTienKHBHYTFooterTemplate', { static: true }) thanhTienKHBHYTFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienKhongDuocHuongBHYTGroupFooterTemplate', { static: true }) thanhTienKhongDuocHuongBHYTGroupFooterTemplate: TemplateRef<any>;

    // ---------------------------------TTBHYTChiTra------------------------------------------------------------------
    @ViewChild('ttBHYTChiTraTemplate', { static: true }) ttBHYTChiTraTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraFooterTemplate', { static: true }) ttBHYTChiTraFooterTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraGroupFooterTemplate', { static: true }) ttBHYTChiTraGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('ttKBHYTChiTraFooterTemplate', { static: true }) ttKBHYTChiTraFooterTemplate: TemplateRef<any>;
    // ---------------------------------BNThanhToan------------------------------------------------------------------
    @ViewChild('bnThanhToanTemplate', { static: true }) bnThanhToanTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanFooterTemplate', { static: true }) bnThanhToanFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanGroupFooterTemplate', { static: true }) bnThanhToanGroupFooterTemplate: TemplateRef<any>;

    @ViewChild('bnThanhKhongDHBHYTToanGroupFooterTemplate', { static: true }) bnThanhKhongDHBHYTToanGroupFooterTemplate: TemplateRef<any>;

    // dgbhyt tham khảo
    @ViewChild('dgbhytThamKhaoTemplate', { static: true }) dgbhytThamKhaoTemplate: TemplateRef<any>;

    // thành tiền bhyt tham khảo
    @ViewChild('thanhTienBHYTThamKhaoTemplate', { static: true }) thanhTienBHYTThamKhaoTemplate: TemplateRef<any>;
    @ViewChild('tiLeTheoDvTemplate', { static: true }) tiLeTheoDvTemplate: TemplateRef<any>;
    @ViewChild('mucHuongTemplate', { static: true }) mucHuongTemplate: TemplateRef<any>;
    @ViewChild('tenDvTemplate', { static: true }) tenDvTemplate: TemplateRef<any>;
    @ViewChild('templateDGBHYTCT', { static: true }) templateDGBHYTCT: TemplateRef<any>;
    @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('huongBhytTemplate', { static: true }) huongBhytTemplate: TemplateRef<any>;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('maSoTheTemplate', { static: true }) maSoTheTemplate: TemplateRef<any>;
    @ViewChild('khoaTemplate', { static: true }) khoaTemplate: TemplateRef<any>;

    groups: GroupDescriptor[] = [
        {
            field: 'MaSoTheBHYT', aggregates: [
                { field: 'ThanhTienBenhVien', aggregate: 'sum' },
                { field: 'TTBHYTChiTra', aggregate: 'sum' },
                { field: 'BNThanhToan', aggregate: 'sum' }
            ]
        },
        {
            field: 'Khoa', aggregates: [
                { field: 'ThanhTienBenhVien', aggregate: 'sum' },
                { field: 'TTBHYTChiTra', aggregate: 'sum' },
                { field: 'BNThanhToan', aggregate: 'sum' }
            ]
        },
        {
            field: 'NgayPhatSinhDiplay', aggregates: [
                { field: 'ThanhTienBenhVien', aggregate: 'sum' },
                { field: 'TTBHYTChiTra', aggregate: 'sum' },
                { field: 'BNThanhToan', aggregate: 'sum' }
            ]
        }
    ];

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private dialog: MatDialog,
        private authService: AuthService,
        private cdRef: ChangeDetectorRef
    ) { }

    public totalThanhTienDHBHYT(field: string, typeGrid: string) {
        switch (field) {
            case 'ThanhTienBenhVien': {
                if (this.dataHuongBh.data.length !== 0) {
                    return this.dataHuongBh.data
                        .reduce((sum: number, item: GridXacNhanBhyt) => sum + item.ThanhTienBenhVien, 0);
                }
            }
        }
    }

    public totalThanhTienKDHBYT(field: string, typeGrid: string) {
        switch (field) {
            case 'ThanhTienBenhVien': {
                if (this.dataChuaHuongBh.data.length !== 0) {
                    return this.dataChuaHuongBh.data.reduce((sum: number, item: GridXacNhanBhyt) => sum + item.ThanhTienBenhVien, 0);
                }
            }
        }
    }

    public totalTTBHYTChiTra(field: string, typeGrid: string) {
        switch (field) {
            case 'TTBHYTChiTra': {
                if (this.dataHuongBh.data.length !== 0) {
                    return this.dataHuongBh.data.reduce((sum: number, item: GridXacNhanBhyt) => sum + item.TTBHYTChiTra, 0);
                }
            }
        }
    }

    public totalKTTBHYTChiTra(field: string, typeGrid: string) {
        switch (field) {
            case 'TTBHYTChiTra': {
                if (this.dataChuaHuongBh.data.length !== 0) {
                    return this.dataChuaHuongBh.data.reduce((sum: number, item: GridXacNhanBhyt) => sum + item.TTBHYTChiTra, 0);
                }
            }
        }
    }

    public totalBNConPhaiThanhToanDHBHYT(field: any, typeGrid: string) {
        switch (field) {
            case 'BNThanhToan': {
                if (this.dataHuongBh.data.length !== 0) {
                    return this.dataHuongBh.data.reduce((sum: number, item: GridXacNhanBhyt) => sum + item.BNThanhToan, 0);
                }
            }
        }
    }

    public totalBNConPhaiThanhToanKDHBYT(field: any, typeGrid: string) {
        switch (field) {
            case 'BNThanhToan': {
                if (this.dataChuaHuongBh.data.length !== 0) {
                    return this.dataChuaHuongBh.data.reduce((sum: number, item: GridXacNhanBhyt) => sum + item.BNThanhToan, 0);
                }
            }
        }
    }

    ngOnInit() {
        const self = this;
        self.documentType = DocumentType.XacNhanBhytNoiTru;
        self.gridColumnsChoXacNhanBHYT = [
            { Field: 'STT', Title: '#', Width: 35, Template: self.sttTemplate },
            { Field: 'Khoa', Title: 'Khoa', Hidden: true, TemplateGroupHeader: this.khoaTemplate },
            { Field: 'MaSoTheBHYT', Title: 'Mã thẻ BHYT', Hidden: true, TemplateGroupHeader: this.maSoTheTemplate },
            { Field: 'NgayPhatSinhDiplay', Title: 'Ngày phát sinh', Hidden: true },
            { Field: 'MaDichVu', Title: 'Mã', ShowTooltip: true, Width: 60 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 150, ShowTooltip: true, Template: self.tenDvTemplate },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 80 },
            { Field: 'SoLuong', Title: 'SL', Width: 40 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 114, Template: self.donGiaBenhVienTemplate,
                TemplateFooter: self.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 96, Template: self.thanhTienTemplate,
                TemplateFooter: self.thanhTienFooterTemplate
            },
            { Field: 'DGBHYTThamKhao', Title: 'ĐG BHYT', Width: 93, Template: self.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBHYTThamKhao', Title: 'Thành tiền BHYT', Width: 131, Template: self.thanhTienBHYTThamKhaoTemplate },
            { Field: 'HuongBhyt', Title: 'BHYT CHI TRẢ', Width: 73, Template: self.huongBhytTemplate },
            { Field: 'TiLeTheoDichVu', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: self.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: self.mucHuongTemplate },
            { Field: 'DGBHYTChiTra', Title: 'ĐG BHYT chi trả', Width: 129, Template: self.templateDGBHYTCT },
            {
                Field: 'TTBHYTChiTra', Title: 'TT BHYT Chi Trả', Width: 127, Template: self.ttBHYTChiTraTemplate,
                TemplateFooter: self.ttBHYTChiTraFooterTemplate
            },
            {
                Field: 'BNThanhToan', Title: 'BN thanh toán', Width: 124, Template: self.bnThanhToanTemplate,
                TemplateFooter: self.bnThanhToanFooterTemplate
            },
            {
                Field: 'Action', Title: '', Width: 83, Template: self.actionTemplate
            }
        ];

        self.gridColumnChuaDuocHuongBHYT = [
            { Field: 'STT', Title: '#', Width: 35, Template: self.sttTemplate },
            { Field: 'Khoa', Title: 'Khoa', Hidden: true, TemplateGroupHeader: this.khoaTemplate },
            { Field: 'MaSoTheBHYT', Title: 'Mã thẻ BHYT', Hidden: true, TemplateGroupHeader: this.maSoTheTemplate },
            { Field: 'NgayPhatSinhDiplay', Title: 'Ngày phát sinh', Hidden: true },
            { Field: 'MaDichVu', Title: 'Mã', ShowTooltip: true, Width: 60 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 150, ShowTooltip: true, Template: self.tenDvTemplate },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 80 },
            { Field: 'SoLuong', Title: 'SL', Width: 40 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 114, Template: self.donGiaBenhVienTemplate,
                TemplateFooter: self.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 96, Template: self.thanhTienTemplate,
                TemplateFooter: self.thanhTienKHBHYTFooterTemplate
            },
            { Field: 'DGBHYTThamKhao', Title: 'ĐG BHYT', Width: 93, Template: self.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBHYTThamKhao', Title: 'Thành tiền BHYT', Width: 131, Template: self.thanhTienBHYTThamKhaoTemplate },
            { Field: 'HuongBhyt', Title: 'DUYỆT BHYT', Width: 73, Template: self.huongBhytTemplate },
            { Field: 'TiLeTheoDichVu', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: self.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: self.mucHuongTemplate },
            { Field: 'DGBHYTChiTra', Title: 'ĐG BHYT chi trả', Width: 129, Template: self.templateDGBHYTCT },
            {
                Field: 'TTBHYTChiTra', Title: 'TT BHYT Chi Trả', Width: 127, Template: self.ttBHYTChiTraTemplate,
                TemplateFooter: self.ttKBHYTChiTraFooterTemplate
            },
            {
                Field: 'BNThanhToan', Title: 'BN thanh toán', Width: 124, Template: self.bnThanhToanTemplate,
                TemplateFooter: self.bnThanhKhongDHBHYTToanGroupFooterTemplate
            },
            {
                Field: 'Action', Title: '', Width: 83, Template: self.actionTemplate
            }
        ];

        self.GetListLoaiPhanTramForPttt();
        self.GetMucHuong15Percent();

    }
    GetMucHuong15Percent() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService
                .get<any>('TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan')
                .subscribe(resultData => {
                    self.mucHuong15Percent = resultData;
                    self.GetDataSourceDetail();

                }, err => {
                    self.notificationService.showError(err.Message);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }


    extCheckboxSelectionDuocHuongBHYT(dataDaChon: any[]) {
        if (dataDaChon.length > 0) {
            for (let index = 0; index < dataDaChon.length; index++) {
                this.dataHuongBh.data.forEach(element => {
                    {
                        if (element.Id == dataDaChon[index]) {
                            return (element.CheckedDefault = true);
                        }
                    }
                });
            }
        }
    }

    extCheckboxSelectionKhongHuongBHYT(dataDaChon: any[]) {
        if (dataDaChon.length > 0) {
            for (let index = 0; index < dataDaChon.length; index++) {
                this.dataChuaHuongBh.data.forEach(element => {
                    {
                        if (element.Id == dataDaChon[index]) {
                            return (element.CheckedDefault = true);
                        }
                    }
                });
            }
        }
    }

    CloseLoading() {
        this.dialog.closeAll();
    }

    renderMaSoTheGroup(group: any) {
        return `Mã thẻ BHYT: ${group.value}`;
    }

    renderKhoa(group: any) {
        return `Khoa: ${group.value}`;
    }

    GetDataSourceDetail() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            Observable.forkJoin([
                this.apiService.get<any>
                    (`XacNhanBHYT/GetDataForDvChuaHuongBhytNoiTruAsync?yeuCauTiepNhanId=${this.thisId}`)
                    .pipe(retryWhen(errors =>
                        errors.pipe(
                            tap(_ => {
                                this.dataChuaHuongBh.data = [];
                            }),
                            delayWhen(_ => {
                                return timer(5 * 1000);
                            })
                        ))),
                this.apiService.get<any>
                    (`XacNhanBHYT/GetDataForDvHuongBhytNoiTruAsync?yeuCauTiepNhanId=${this.thisId}`)
                    .pipe(retryWhen(errors =>
                        errors.pipe(
                            tap(_ => {
                                this.dataHuongBh.data = [];
                            }),
                            delayWhen(_ => {
                                return timer(5 * 1000);
                            })
                        )))
            ]).subscribe(results => {
                this.dataChuaHuongBh.data = [...results[0].Data];
                this.dataHuongBh.data = [...results[1].Data];
                this.gridHuongBhyts =
                    [...this.dataHuongBh.data].map(x => x.TheBHYTId)
                        .filter((value, index, self) => self.indexOf(value) === index);
                this.dataHuongBh.data.filter(x => x.IsDaXacNhan).forEach(daXacNhanItem => {
                    daXacNhanItem.HighLightClass = 'bg-row-lightblue';
                });
                this.dataChuaHuongBh.data.filter(x => x.IsDaXacNhan).forEach(daXacNhanItem => {
                    daXacNhanItem.HighLightClass = 'bg-row-lightblue';
                });
                setTimeout(() => {
                    this.dataHuongBh.data.forEach((element) => {
                        if (element.CheckedDefault) {
                            $('#' + 'bhytDuocHuongselectCheckboxId' + element.Id).trigger('click');
                        }
                    });
                    this.dataChuaHuongBh.data.forEach((element) => {
                        if (element.CheckedDefault) {
                            $('#' + 'bhytChuaDuocHuongselectCheckboxId' + element.Id).trigger('click');
                        }
                    });
                }, 300);

                this.kiemTraDuyetTruocDo();
                this.getAsyncDone = true;
                this.SetWarning();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    ResetBhytChuaHuong() {
        this.dataChuaHuongBh.data.forEach(bhyt => {
            this.SetupRatioForSpecificBenefitInsurance(bhyt, 0, 0);
        });
    }

    SetupRatioForSpecificBenefitInsurance(
        benefitInsurance: GridXacNhanBhyt, currentRatio: number,
        wholeRatio: number = 100, giaSu: boolean = false, ignoreMucHuongSystem: boolean = false) {
        // benefitInsurance: chỉ định bhyt nào sẽ được thiết lập
        // currentRatio: chỉ định tỉ lệ hưởng theo dịch vụ
        // wholeRatio: (optional) chỉ định mức hưởng
        // giaSu: (optional) nếu là true thì chỉ là áp dụng thử, ko bị ảnh hưởng trên display grid
        if (benefitInsurance.IsDaXacNhan) {
            if (wholeRatio > benefitInsurance.MucHuongSystem && !ignoreMucHuongSystem) {
                wholeRatio = benefitInsurance.MucHuongSystem;
            }
        }

        if (giaSu) {
            const specificRatio = (currentRatio * wholeRatio) / 100;
            const dgBhytTra = (specificRatio * benefitInsurance.DGBHYTThamKhao) / 100;
            benefitInsurance.TTBHYTChiTraGiaSu = dgBhytTra * benefitInsurance.SoLuong;
        } else {
            const specificRatio = (currentRatio * wholeRatio) / 100;
            benefitInsurance.TiLeTheoDichVu = currentRatio;
            benefitInsurance.MucHuong = wholeRatio;
            benefitInsurance.DGBHYTChiTra = (specificRatio * benefitInsurance.DGBHYTThamKhao) / 100;
            benefitInsurance.TTBHYTChiTra = benefitInsurance.DGBHYTChiTra * benefitInsurance.SoLuong;
            benefitInsurance.BNThanhToan = benefitInsurance.ThanhTienBenhVien - benefitInsurance.TTBHYTChiTra;
        }
    }

    showMucHuongDaDuyetTooltip(dataItem: GridXacNhanBhyt) {
        const self = this;
        if (dataItem != null) {
            self.currentWarningMucHuongDaDuyetMessage = CommonService.format(DuyetBhytMessage.MessageSpecifyMucHuongDaDuyet,
                [dataItem.MucHuongDaDuyet.toString()]);
        }
    }

    onChangeTiLe(dataItem: GridXacNhanBhyt, event: any) {
        dataItem.MucHuong = event;
        dataItem.MucHuongSystem = event;

        const specificRatio = (dataItem.TiLeTheoDichVu * event) / 100;
        dataItem.DGBHYTChiTra = (specificRatio * dataItem.DGBHYTThamKhao) / 100;

        if (dataItem.DGBHYTChiTra > dataItem.DonGiaBenhVien) {
            dataItem.DGBHYTChiTra = dataItem.DonGiaBenhVien;
        }

        dataItem.TTBHYTChiTra = dataItem.DGBHYTChiTra * dataItem.SoLuong;
        dataItem.BNThanhToan = dataItem.ThanhTienBenhVien - dataItem.TTBHYTChiTra;
        this.kiemTraDuyetTruocDo();
    }

    CalcRatioForBenefitInsurance(handlePttt: boolean = false) {
        // this.dataHuongBh.data.forEach(huongBhItem => {
        //     this.SetupRatioForSpecificBenefitInsurance(huongBhItem, huongBhItem.MucHuongSystem, huongBhItem.TiLeDv);
        // });

        // if (handlePttt) {
        //     this.dataHuongBh.data.filter(x => x.IsPttt).forEach(ptttEle => {
        //         this.HandlePttt(ptttEle);
        //     });
        // }

        // hàm này dùng để xử lý việc tính toán cho các dịch vụ được hưởng bảo hiểm
        const self = this;

        //áp cho dịch vụ mức hưởng 100% cho các dịch vụ
        self.SetBenefitRaioForWholeBenefitInsurance(100, false, true);

        //sumOfTTBHYTChiTraCurrent 100 %
        const sumOfTTBHYTChiTraCurrent = self.dataHuongBh.data
            .reduce((sum: number, item: GridXacNhanBhyt) => sum + item.TTBHYTChiTra, 0);

        //Check thêm hàm áp dụng 100% nếu TTBHYTCT < mucHuong15Percent thì áp 100% mức hưởng
        if (sumOfTTBHYTChiTraCurrent < self.mucHuong15Percent) {
            self.SetBenefitRaioForWholeBenefitInsurance(100, false, true);
        }
        else if (sumOfTTBHYTChiTraCurrent >= self.mucHuong15Percent) {
            self.SetBenefitRaioForWholeBenefitInsurance(self.bhytInfo[0].BhytMucHuong);
        }

        if (handlePttt) {
            self.dataHuongBh.data.filter(x => x.IsPttt).forEach(ptttEle => {
                self.HandlePttt(ptttEle);
            });
        }
    }

    SetBenefitRaioForWholeBenefitInsurance(wholeRatio: number = 100, isGiaSu: boolean = false, ignoreMucHuongSystem: boolean = false) {
        const self = this;
        self.currentBenefitRatio = wholeRatio;
        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)) {
            self.SetBenefitRatio(NhomGoiDichVu.DichVuKhamBenh, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuKyThuat)) {
            self.SetBenefitRatio(NhomGoiDichVu.DichVuKyThuat, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.VatTuTieuHao)) {
            self.SetBenefitRatio(NhomGoiDichVu.VatTuTieuHao, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DuocPham)) {
            self.SetBenefitRatio(NhomGoiDichVu.DuocPham, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuGiuongBenh)) {
            self.SetBenefitRatio(NhomGoiDichVu.DichVuGiuongBenh, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DonThuocThanhToan)) {
            self.SetBenefitRatio(NhomGoiDichVu.DonThuocThanhToan, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }
    }

    SetBenefitRatio(groupType: NhomGoiDichVu, wholeRatio: number = 100, isGiaSu: boolean = false, ignoreMucHuongSystem: boolean = false) {
        const self = this;

        if (groupType === NhomGoiDichVu.DichVuKhamBenh) {
            const firstCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[0];
            const secondCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[1];
            const thirdCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[2];
            const fourthCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[3];
            const lastCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[4];

            // lần 1: 100%
            // first loading sẽ giữ nguyên giá bảo hiểm cho bảo hiểm đã xác nhận
            // tslint:disable-next-line: triple-equals
            if (firstCuring != undefined) {
                // move service sẽ tính toán lại giá bảo hiểm theo rule 100, 30, 30, 30, 10
                self.SetupRatioForSpecificBenefitInsurance(firstCuring, 100, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }

            // lần 2: 30%
            // tslint:disable-next-line: triple-equals
            if (secondCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(secondCuring, 30, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }

            // lần 3: 30%
            // tslint:disable-next-line: triple-equals
            if (thirdCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(thirdCuring, 30, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }

            // lần 4: 30%
            // tslint:disable-next-line: triple-equals
            if (fourthCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(fourthCuring, 30, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }

            // lần 5: 10%
            // tslint:disable-next-line: triple-equals
            if (lastCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(lastCuring, 10, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }
        } else if (groupType === NhomGoiDichVu.DonThuocThanhToan ||
            groupType === NhomGoiDichVu.DuocPham ||
            groupType === NhomGoiDichVu.VatTuTieuHao) {
            self.dataHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
                self.SetupRatioForSpecificBenefitInsurance(huongBhItem, huongBhItem.TiLeDv, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            });
        } else {
            self.dataHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
                self.SetupRatioForSpecificBenefitInsurance(huongBhItem, 100, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            });
        }
    }

    ChangeTiLeDvPttt(eventData: any, dataItem: GridXacNhanBhyt) {
        const self = this;
        dataItem.TiLeTheoDichVu = dataItem.TiLeDv = self.GetPhanTramTheoEnum(eventData.KeyId);
        const specificRatio = (dataItem.TiLeTheoDichVu * dataItem.MucHuong) / 100;
        dataItem.DGBHYTChiTra = (specificRatio * dataItem.DGBHYTThamKhao) / 100;
        dataItem.TTBHYTChiTra = dataItem.DGBHYTChiTra * dataItem.SoLuong;
        dataItem.BNThanhToan = dataItem.ThanhTienBenhVien - dataItem.TTBHYTChiTra;
    }

    GetPhanTramTheoEnum(keyId: number) {
        if (keyId === 1) {
            return 100;
        }

        return keyId === 2 ? 80 : 50;
    }

    GetListLoaiPhanTramForPttt() {
        const self = this;

        // tslint:disable-next-line: forin
        for (const loaiPt in PercentTypeForPttt) {
            if (!isNaN(Number(loaiPt))) {
                const ptPttt: ListLoaiPhanTramPttt = {
                    DisplayName: self.percentTypeForPtttLabel.get(Number(loaiPt)),
                    KeyId: Number(loaiPt)
                };
                self.ptPttts.push(ptPttt);
            }
        }
    }

    SetWarning() {
        const self = this;

        if (self.dataChuaHuongBh.data.some(x => x)) {
            self.ResetBhytChuaHuong();
        }

        if (self.dataHuongBh.data.some(x => x)) {
            self.ResetBhytChuaHuong();
            self.CalcRatioForBenefitInsurance(true);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)) {
            self.SetupWarning(NhomGoiDichVu.DichVuKhamBenh);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuKyThuat) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuKyThuat)) {
            self.SetupWarning(NhomGoiDichVu.DichVuKyThuat);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.VatTuTieuHao) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.VatTuTieuHao)) {
            self.SetupWarning(NhomGoiDichVu.VatTuTieuHao);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DuocPham) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DuocPham)) {
            self.SetupWarning(NhomGoiDichVu.DuocPham);
        }

        if (self.dataHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuGiuongBenh) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === NhomGoiDichVu.DichVuGiuongBenh)) {
            self.SetupWarning(NhomGoiDichVu.DichVuGiuongBenh);
        }

        self.SetDataSource();
        self.CloseLoading();
    }

    SetupWarning(groupType: NhomGoiDichVu) {
        const self = this;

        // 1/ get all coincident ids of dichvukhambenh-group of huong-bhyt-datasource
        // 2/ add all coincident ids to serviceGroupIds
        self.dataHuongBh.data.filter(x => x.GroupType === groupType)
            .filter((value: GridXacNhanBhyt, index: number, list: GridXacNhanBhyt[]) => {
                const dichVuIds = [];
                list.filter(z => z.GroupType === groupType).forEach(item => {
                    dichVuIds.push(item.DichVuId);
                });
                return dichVuIds.indexOf(value.DichVuId) !== index;
            }).forEach(uniqueItem => {
                let serviceCoincidentDesignation = new DesignateCoincidentServiceModel();
                serviceCoincidentDesignation = {
                    Id: uniqueItem.Id,
                    ServiceId: uniqueItem.DichVuId,
                    ServiceGroup: groupType,
                    PhongBenhVienChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh,
                    BacSyChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh
                };
                self.serviceGroupIds.push(serviceCoincidentDesignation);
            });

        // 3/ get all coincient ids of dichvukhambenh-group of chua-huong-bhyt-datasource
        // 4/ for every single coincident id of chua-huong-bhyt-datasource, we need to compare its service to
        // huong-bhyt-datasource's service, if there is coincident, we need to add the first service of
        // chua-huong-bhyt to serviceGroupIds
        // serviceGroupIds is important, we use this to display warning whose data is coincident.
        self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType)
            .filter((value: GridXacNhanBhyt, index: number, list: GridXacNhanBhyt[]) => {
                const dichVuIds = [];
                list.filter(z => z.GroupType === groupType).forEach(item => {
                    dichVuIds.push(item.DichVuId);
                });
                return dichVuIds.indexOf(value.DichVuId) !== index;
            }).forEach(uniqueItem => {
                if (self.dataHuongBh.data.some(x => x.GroupType === groupType && x.DichVuId === uniqueItem.DichVuId)) {
                    if (!self.serviceGroupIds.some(x => x.Id === self.dataChuaHuongBh.data
                        .filter(w => w.GroupType === groupType && w.DichVuId === uniqueItem.DichVuId)[0].Id)) {
                        let firstServiceCoincidentDesignation = new DesignateCoincidentServiceModel();
                        firstServiceCoincidentDesignation = {
                            Id: self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType &&
                                x.DichVuId === uniqueItem.DichVuId)[0].Id,
                            ServiceId: uniqueItem.DichVuId,
                            ServiceGroup: groupType,
                            PhongBenhVienChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                                x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh,
                            BacSyChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                                x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh
                        };
                        self.serviceGroupIds.push(firstServiceCoincidentDesignation);
                    }
                    let serviceCoincidentDesignation = new DesignateCoincidentServiceModel();
                    serviceCoincidentDesignation = {
                        Id: uniqueItem.Id,
                        ServiceId: uniqueItem.DichVuId,
                        ServiceGroup: groupType,
                        PhongBenhVienChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                            x.DichVuId === uniqueItem.DichVuId) ? self.dataHuongBh.data
                                .filter(x => x.GroupType === groupType &&
                                    x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh : self.dataChuaHuongBh.data
                                        .filter(x => x.GroupType === groupType &&
                                            x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh,
                        BacSyChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                            x.DichVuId === uniqueItem.DichVuId) ? self.dataHuongBh.data
                                .filter(x => x.GroupType === groupType &&
                                    x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh : self.dataChuaHuongBh.data
                                        .filter(x => x.GroupType === groupType &&
                                            x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh
                    };
                    self.serviceGroupIds.push(serviceCoincidentDesignation);
                }
            });

        // 5/ update datasource
        self.UpdateWarning(groupType);
    }

    UpdateWarning(groupType: NhomGoiDichVu) {
        const self = this;
        self.dataHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
            huongBhItem.IsWarning = false;
        });
        self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
            huongBhItem.IsWarning = false;
        });
        self.serviceGroupIds.filter(z => z.ServiceGroup === groupType).forEach(serviceGroupDesignationItem => {
            if (self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                x.Id === serviceGroupDesignationItem.Id)) {
                self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                    x.Id === serviceGroupDesignationItem.Id)[0].IsWarning = true;
            }
            if (self.dataChuaHuongBh.data.some(x => x.GroupType === groupType &&
                x.Id === serviceGroupDesignationItem.Id)) {
                self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType &&
                    x.Id === serviceGroupDesignationItem.Id)[0].IsWarning = true;
            }
        });

        self.dataHuongBh.data.filter(
            (value: GridXacNhanBhyt, index: number, list: GridXacNhanBhyt[]) => {
                const dichVuIds = [];
                list.filter(x => x.GroupType === groupType).forEach(item => {
                    dichVuIds.push(item.DichVuId);
                });
                return dichVuIds.indexOf(value.DichVuId) === index;
            }).forEach(designationItem => {
                if (self.dataChuaHuongBh.data.some(x => x.GroupType === groupType &&
                    !x.IsWarning && x.DichVuId === designationItem.DichVuId)) {
                    self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType &&
                        !x.IsWarning && x.DichVuId === designationItem.DichVuId)
                        .forEach(chuaHuongItem => {
                            chuaHuongItem.IsWarning = true;
                            let serviceCoincidentDesignation = new DesignateCoincidentServiceModel();
                            serviceCoincidentDesignation = {
                                Id: chuaHuongItem.Id,
                                ServiceId: chuaHuongItem.DichVuId,
                                ServiceGroup: groupType,
                                PhongBenhVienChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                                    x.DichVuId === chuaHuongItem.DichVuId) ? self.dataHuongBh.data
                                        .filter(x => x.GroupType === groupType &&
                                            x.DichVuId === chuaHuongItem.DichVuId)[0].NoiChiDinh : self.dataChuaHuongBh.data
                                                .filter(x => x.GroupType === groupType &&
                                                    x.DichVuId === chuaHuongItem.DichVuId)[0].NoiChiDinh,
                                BacSyChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                                    x.DichVuId === chuaHuongItem.DichVuId) ? self.dataHuongBh.data
                                        .filter(x => x.GroupType === groupType &&
                                            x.DichVuId === chuaHuongItem.DichVuId)[0].NhanVienChiDinh : self.dataChuaHuongBh.data
                                                .filter(x => x.GroupType === groupType &&
                                                    x.DichVuId === chuaHuongItem.DichVuId)[0].NhanVienChiDinh
                            };
                            self.serviceGroupIds.push(serviceCoincidentDesignation);
                        });
                }
            });
    }

    kiemTraDuyetTruocDo() {
        //kiểm tra MucHuongDaDuyet có đung giá trị không nếu có change khác show cảnh báo để bít
        setTimeout(() => {
            this.dataHuongBh.data.forEach((dataItem) => {
                if (dataItem.MucHuongDaDuyet != null && dataItem.MucHuongDaDuyet != dataItem.MucHuong) {
                    if (!dataItem.showInfoChangeMucHuongDuyet) {
                        $('#' + 'bhytDuocHuongselectCheckboxId' + dataItem.Id).trigger('click');
                    }
                    dataItem.CheckedDefault = true;
                    dataItem.showInfoChangeMucHuongDuyet = true;
                }
                if (dataItem.MucHuongDaDuyet != null && dataItem.showInfoChangeMucHuongDuyet && dataItem.MucHuongDaDuyet == dataItem.MucHuong) {

                    if (dataItem.showInfoChangeMucHuongDuyet) {
                        $('#' + 'bhytDuocHuongselectCheckboxId' + dataItem.Id).trigger('click');
                    }
                    dataItem.CheckedDefault = false;
                    dataItem.showInfoChangeMucHuongDuyet = false;
                }
            });
        }, 300);
    }

    OnChangeHuongBhyt(dataItem: GridXacNhanBhyt) {
        const self = this;
        if (self.dataHuongBh.data.indexOf(dataItem) !== -1) {
            this.dichVuKhamBenhCungYeuCauKhamBenhId(dataItem);
            self.dataHuongBh.data.splice(self.dataHuongBh.data.indexOf(dataItem), 1);
            self.cdRef.detectChanges();
            dataItem.HighLightClass = '';
            dataItem.HuongBhyt = false;

            self.PushToXacNhanBhyt(BhytType.ChuaDuocHuong, dataItem);
            self.CalcRatioForBenefitInsurance();

            if (dataItem.IsPttt) {
                self.HandlePttt(dataItem, true);
            }
        } else {
            self.dataChuaHuongBh.data.splice(self.dataChuaHuongBh.data.indexOf(dataItem), 1);
            self.cdRef.detectChanges();
            dataItem.HuongBhyt = true;

            if (dataItem.IsDaXacNhan) {
                dataItem.HighLightClass = DuyetBhytMessage.BlueColorRow;
            }

            self.PushToXacNhanBhyt(BhytType.DuocHuong, dataItem);
            self.MoveCuringServicesFromHuongInsuranceToNotHuongInsurance();
            self.ResetBhytChuaHuong();
            self.CalcRatioForBenefitInsurance();

            if (dataItem.IsPttt) {
                self.HandlePttt(dataItem);
            }
        }
        this.kiemTraDuyetTruocDo();
        self.SetDataSource();
        this.kiemTraDichVuDuyetRoiDuaXuongCheckDuyet(dataItem.Id);
    }

    kiemTraDichVuDuyetRoiDuaXuongCheckDuyet(id: any) {
        if ($('#' + 'bhytChuaDuocHuongselectCheckboxId' + id).is(":checked")) {
            $('#' + 'bhytChuaDuocHuongselectCheckboxId' + id).trigger('click');
        }
        setTimeout(() => {
            this.dataChuaHuongBh.data.filter(c=>c.Id == id).forEach((dataItem) => {
                if (dataItem.IsDaXacNhan !=true || dataItem.MucHuongDaDuyet != null && dataItem.MucHuongDaDuyet != dataItem.MucHuong) {
                    $('#' + 'bhytChuaDuocHuongselectCheckboxId' + dataItem.Id).trigger('click');
                    dataItem.CheckedDefault = true;
                }
            });
            var fillterYCKB = this.dataChuaHuongBh.data.filter(c => c.IsDaXacNhan != true || c.YeuCauKhamBenhId === id && c.MucHuongDaDuyet != null && c.MucHuongDaDuyet != c.MucHuong);
            if (fillterYCKB.length > 0) {
                fillterYCKB.forEach(dataChuaHuongBh => {
                    if (!$('#' + 'bhytChuaDuocHuongselectCheckboxId' + dataChuaHuongBh.Id).is(":checked")) {
                        $('#' + 'bhytChuaDuocHuongselectCheckboxId' + dataChuaHuongBh.Id).trigger('click');
                        dataChuaHuongBh.CheckedDefault = true;
                    }
                });
            }
        }, 500);
    }

    dichVuKhamBenhCungYeuCauKhamBenhId(dataItem: GridXacNhanBhyt) {
        const self = this;
        var fillterYCKB = self.dataHuongBh.data.filter(c => c.YeuCauKhamBenhId === dataItem.Id);
        if (fillterYCKB.length > 0) {
            fillterYCKB.forEach(dsDuocHuong => {
                if (dsDuocHuong.CanModify && dsDuocHuong.YeuCauKhamBenhId === dataItem.Id) {
                    self.dataHuongBh.data.splice(self.dataHuongBh.data.indexOf(dsDuocHuong), 1);

                    self.cdRef.detectChanges();
                    dsDuocHuong.HighLightClass = '';
                    dsDuocHuong.HuongBhyt = false;

                    self.PushToXacNhanBhyt(BhytType.ChuaDuocHuong, dsDuocHuong);
                    self.CalcRatioForBenefitInsurance();

                    if (dsDuocHuong.IsPttt) {
                        self.HandlePttt(dsDuocHuong, true);
                    }
                }
            });
        }
    }

    MoveCuringServicesFromHuongInsuranceToNotHuongInsurance() {
        if (this.dataHuongBh.data.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh).length > 5) {
            const insert = (arr: GridXacNhanBhyt[], index: number, newItem: GridXacNhanBhyt) => [
                ...arr.slice(0, index),
                newItem,
                ...arr.slice(index)
            ];

            const dataHuongMovingList = this.dataHuongBh.data
                .filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)
                .splice(5, this.dataHuongBh.data.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh).length);

            for (const dataHuongMove of dataHuongMovingList) {
                dataHuongMove.HighLightClass = '';
                dataHuongMove.HuongBhyt = false;
                const pushedPosition = this.dataChuaHuongBh.data.some(x => x) ? this.dataChuaHuongBh.data.indexOf
                    (this.dataChuaHuongBh.data.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh && x.Id > dataHuongMove.Id)[0]) : 0;
                this.dataChuaHuongBh.data = insert(this.dataChuaHuongBh.data, pushedPosition, dataHuongMove);
                this.dataHuongBh.data.splice(this.dataHuongBh.data.indexOf(dataHuongMove), 1);
            }
        }
    }

    HandlePttt(pttt: GridXacNhanBhyt, reset: boolean = false) {
        const self = this;
        if (reset) {
            pttt.TiLeTheoDichVu = 0;
            return;
        }

        if (pttt.TiLeDv === 50 || pttt.TiLeDv === 80) {
            pttt.TiLeTheoDichVu = pttt.TiLeDv;
            pttt.LoaiPhanTram = pttt.TiLeTheoDichVu === 50 ? PercentTypeForPttt.Per50 : PercentTypeForPttt.Per80;
            pttt.LoaiPhanTramText = self.percentTypeForPtttLabel.get(pttt.LoaiPhanTram);
        } else {
            pttt.TiLeTheoDichVu = 100;
            pttt.LoaiPhanTram = PercentTypeForPttt.Per100;
            pttt.LoaiPhanTramText = self.percentTypeForPtttLabel.get(pttt.LoaiPhanTram);
        }

        const specificRatio = (pttt.TiLeTheoDichVu * pttt.MucHuong) / 100;
        pttt.DGBHYTChiTra = (specificRatio * pttt.DGBHYTThamKhao) / 100;
        pttt.TTBHYTChiTra = pttt.DGBHYTChiTra * pttt.SoLuong;
        pttt.BNThanhToan = pttt.ThanhTienBenhVien - pttt.TTBHYTChiTra;
    }

    SetDataSource() {
        this.dataHuongBh.total = this.dataHuongBh.data.length;
        if (this.gridHuongBhyt) {
            this.gridHuongBhyt.setDataSource();
        }
        this.dataChuaHuongBh.total = this.dataChuaHuongBh.data.length;
        if (this.gridChuaHuongBhyt) {
            this.gridChuaHuongBhyt.setDataSource();
        }
    }

    PushToXacNhanBhyt(bhytType: BhytType, dataItem: GridXacNhanBhyt) {
        const insert = (arr, index, newItem) => [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index)
        ];
        if (bhytType === BhytType.ChuaDuocHuong) {
            let pushedPosition = 0;

            if (this.dataChuaHuongBh.data.some(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id)) {
                pushedPosition = this.dataChuaHuongBh.data.indexOf
                    (this.dataChuaHuongBh.data.filter(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id).reverse()[0]) + 1;
            }

            this.SetupRatioForSpecificBenefitInsurance(dataItem, 0, 0);
            this.dataChuaHuongBh.data = insert(this.dataChuaHuongBh.data, pushedPosition, dataItem);
        } else {
            let pushedPosition = 0;

            if (this.dataHuongBh.data.some(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id)) {
                pushedPosition = this.dataHuongBh.data.indexOf
                    (this.dataHuongBh.data.filter(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id).reverse()[0]) + 1;
            }

            this.dataHuongBh.data = insert(this.dataHuongBh.data, pushedPosition, dataItem);
        }
    }

    lichSuXacNhan(dataItem: GridXacNhanBhyt) {
        const self = this;
        const lichSuModel = {
            Id: dataItem.Id,
            Group: dataItem.GroupType
        };
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.post('XacNhanBHYT/GetHistoryLog', lichSuModel).subscribe(
                (resultData: any) => {
                    const dataPassingToDanhSachPopUp = {
                        listHistory: resultData.Value.Value,
                        title: dataItem.TenDichVu
                    };
                    self.dialog.open(DanhSachLichXacNhanComponent, {
                        disableClose: false,
                        width: '1200px',
                        data: { Title: 'Xác nhận', Model: dataPassingToDanhSachPopUp }
                    }).afterClosed().subscribe(() => { });
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showTooltip(dataItem: GridXacNhanBhyt) {
        const self = this;

        if (dataItem != null) {
            self.currentWarningMessage = CommonService.format(DuyetBhytMessage.MessageSpecifyPhong,
                [self.serviceGroupIds.filter(x => x.Id === dataItem.Id)[0].PhongBenhVienChiDinh,
                self.serviceGroupIds.filter(x => x.Id === dataItem.Id)[0].BacSyChiDinh]);
        }
    }

    setUpIcdTooltip(dataItem: GridXacNhanBhyt) {
        this.icdChinh = dataItem.IcdChinh;
        this.ghiChuIcd = dataItem.GhiChuIcdChinh;
        this.icdKems = dataItem.IcdKemTheos;
    }

    GetSharedData() {
        const insuranceModelRequest = {} as InsuranceModelRequest;
        if (this.dataHuongBh.data != null) {
            insuranceModelRequest.BenefitInsurance = this.dataHuongBh.data;
        } else {
            insuranceModelRequest.BenefitInsurance = [];
        }

        if (this.dataChuaHuongBh.data != null) {
            insuranceModelRequest.NonBenefitInsurance = this.dataChuaHuongBh.data;
        } else {
            insuranceModelRequest.NonBenefitInsurance = [];
        }

        insuranceModelRequest.IdYeuCauTiepNhan = this.bhytHanhChinh.Id;
        return insuranceModelRequest;
    }
}
