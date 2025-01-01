import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { YeuCauKhamBenh, BenhVienHangDoi, YeuCauTiepNhan, ThongTinKhamPrevious } from '../../../kham-benh.model';
import { BaseService } from 'src/app/core/services/base.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent } from 'src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { KetQuaMauPopupComponent } from 'src/app/modules/main/kham-doan/kham-doan-ket-luan-cls-ksk/ket-qua-mau-popup/ket-qua-mau-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
declare var jQuery: any;
import addIcon from "@iconify/icons-ic/add-circle";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NoiDungMauKhamBenhPopupComponent } from '../noi-dung-mau-kham-benh-popup/noi-dung-mau-kham-benh-popup.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
    selector: 'app-lan-kham-hien-tai-kham-benh',
    templateUrl: './lan-kham-hien-tai-kham-benh.component.html',
    styleUrls: ['./lan-kham-hien-tai-kham-benh.component.scss']
})
export class LanKhamHienTaiKhamBenhComponent implements OnInit, OnChanges {

    addIcon = addIcon;

    //documentType: DocumentType;
    benhNhanHienTai = new BenhVienHangDoi();
    thongTinKhamTemp: ThongTinKhamPrevious;
    tenKhoaPhong: string = null;
    phongKhamHienTai: number = 0;
    popupLoadingData: any;
    showNoiDungKhamKhac: boolean = false;
    dataPhanLoaiSucKhoes: Array<any> = [];

    @Input() templateKhamCacCoQuanObj: any;

    @Input() data: any = null;
    @Input() templateKP: string = null;
    @Input() tenKP: string = null;
    @Input() phongKhamId: number = 0;
    @Input() isKhamDoan: boolean = false;
    @Input() documentType: DocumentType = DocumentType.KhamBenh;
    // @Input() changeData: boolean = false;

    @Input() templateDichVuKhamSucKhoes: any;
    @Input() isKhamDoanTatCa: boolean = false;
    @Input() timeSaveChangeDataChuyenKhoaKSK: Date = null;
    @Input() isReadOnly: boolean = false;
    @Input() laChuyenKhoaKhamNhieu: boolean = false;
    showAction: boolean = false;

    @Output() chonShowKetQuaMauKhamBenh: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        private apiService: ApiService,
        public intl: IntlService, private dialog: MatDialog,
        private notificationService: NotificationService,
        private authService: AuthService) { }

    ngOnInit() {
        //this.documentType = DocumentType.KhamBenh;
        this.benhNhanHienTai = this.data;
        if(this.isKhamDoan)
        {
            this.getDataPhanLoaiKSK();
        }
        
    }

    ngAfterViewInit() {
        if(this.isKhamDoan)
        {
            jQuery(".kham-doan-cac-co-quan").css({"min-height":jQuery(window).height()-270});
            this.scrollTo();
        }
    }

    scrollTo():void {
        if (jQuery('#contentbpk').position() != undefined) {
            jQuery('.sidenav-content').animate({ scrollTop: jQuery('#contentbpk').position().top+20 });
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes);
        this.tenKhoaPhong = this.tenKP;
        this.phongKhamHienTai = this.phongKhamId;
        if(changes['templateKhamCacCoQuanObj'] && changes['templateKhamCacCoQuanObj'].previousValue != null && changes['templateKhamCacCoQuanObj'].previousValue != changes['templateKhamCacCoQuanObj'].currentValue)
        {
            this.templateKhamCacCoQuanObj = changes['templateKhamCacCoQuanObj'].currentValue;
            this.kiemTraKetLuanKhamSucKhoe();
        }

        if (changes['templateDichVuKhamSucKhoes'] && changes['templateDichVuKhamSucKhoes'].previousValue != null && changes['templateDichVuKhamSucKhoes'].previousValue != changes['templateDichVuKhamSucKhoes'].currentValue) {
            this.templateDichVuKhamSucKhoes = changes['templateDichVuKhamSucKhoes'].currentValue;
        }

        if (changes['timeSaveChangeDataChuyenKhoaKSK'] && changes['timeSaveChangeDataChuyenKhoaKSK'].previousValue != changes['timeSaveChangeDataChuyenKhoaKSK'].currentValue) {
            this.timeSaveChangeDataChuyenKhoaKSK = changes['timeSaveChangeDataChuyenKhoaKSK'].currentValue;
            this.ketQuaMauKhamBenh();
        }
    }

    dataChange(){
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;
    }

    chonChanDoanSoBoICD(event)
    {
        if(event != undefined && event != null)
        {
            this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD = event.DisplayName;
            this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu = event.Ten
        }
        else{
            this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD = null;
            this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu = null;
        }
    }

    showPopupLoadingData() {
        console.log('this.popupLoadingData.openDialogs', this.popupLoadingData);
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    

    ketQuaMauKhamBenh() {
        var self = this;
        self.showPopupLoadingData();
        var obj = {
            "YeuCauTiepNhanId": self.benhNhanHienTai.YeuCauTiepNhanId,
            "HopDongKhamSucKhoeNhanVienId": self.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId
        }
        self.apiService.post<any>("KhamBenh/GetKetQuaMauDichVuKhamBenh", obj).subscribe((resultData) => {
            self.closePopupLoadingData();
            if (resultData != undefined && resultData != null) {
                self.dialog.open(KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent, {
                    disableClose: false,
                    width: "400px",
                    data: resultData,
                }).afterClosed().subscribe(datas => {
                    if (datas != undefined && datas != null && datas.length > 0) {
                        self.dataChange();
                        datas.forEach(element => {
                            if (element.IsCheck) {
                                if (self.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat == null) {
                                    self.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat = "";
                                }
                                self.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat += element.Value + "; ";
                            }
                        });
                    }
                });
            }
        }, (err: ApiError) => {
            self.benhNhanHienTai.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingData();
        });
    }

    showKetQuaMauKhamBenh(){
        console.log('this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh', this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh);
        if(this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh)
        {
            this.chonShowKetQuaMauKhamBenh.emit(true);
        }
        else
        {
            this.ketQuaMauKhamBenh();
        }
    }

    ketQuaMauDichVuKyThuat() {
        var self = this;
        self.showPopupLoadingData();
        var obj = {
            "YeuCauTiepNhanId": self.benhNhanHienTai.YeuCauTiepNhanId,
            "HopDongKhamSucKhoeNhanVienId": self.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId
        }
        self.apiService.post<any>("KhamBenh/GetKetQuaMauDichVuKyThuat", obj).subscribe((resultData) => {
            self.closePopupLoadingData();
            if (resultData != undefined && resultData != null) {
                self.dialog.open(KetQuaMauPopupComponent, {
                    disableClose: false,
                    width: "400px",
                    data: { Model: {Data: resultData} }
                }).afterClosed().subscribe(datas => {
                    if (datas != undefined && datas != null) {
                        self.dataChange();
                        datas.Model.Data.forEach(element => {
                            if (element.isCheck == true) {
                                self.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang += element.NoiDung + ',';
                            }
                        });
                    }
                });
            }
        }, (err: ApiError) => {
            self.benhNhanHienTai.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingData();
        });
    }

    ketQuaMauDichVuKyThuatVer2() {
        this.apiService.post<any>("KhamDoan/GetListKetQuaTheoYeuCauTiepNhan?yeuCauTiepNhanId=" + this.benhNhanHienTai.YeuCauTiepNhanId)
            .subscribe((resultData) => {
                this.dialog
                    .open(KetQuaMauPopupComponent, {
                        width: "400px",
                        data: { Model: resultData }
                    })
                    .afterClosed()
                    .subscribe((result) => {
                        if (result != undefined) {
                            this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang = "";
                            let number = 1;
                            let resultLenght = result.length;
                            result.forEach(element => {
                                if (element.IsCheck == true) {
                                    this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang += element.KetQuaCLS;
                                    if (resultLenght > number) {
                                        this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang += "; ";
                                    }
                                    number++;
                                }
                                // if (element.IsCheck == true) {
                                //     this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang += element.KetQuaCLS;
                                // }
                            });
                        }

                    });
            },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                });
    }

    xuLyChonKhamDichVu(event, item)
    {
        this.dataTemplateDichVuKhamChange(item);
        if(event)
        {
            if (
                // item.TemplateKhamCacCoQuanObj != null
                // && item.TemplateKhamCacCoQuanObj.ComponentDynamics != null
                // && item.TemplateKhamCacCoQuanObj.ComponentDynamics.length > 0
                item.ThongTinKhamTheoDichVuDataDefault != null
                && item.ThongTinKhamTheoDichVuDataDefault != "") {
                let dataDefaultObj = JSON.parse(item.ThongTinKhamTheoDichVuDataDefault);
                let itemTemp = null;
                item.TemplateKhamCacCoQuanObj.ComponentDynamics.forEach(
                    (item) => {
                        if (
                            item.groupItems != undefined &&
                            item.groupItems != null &&
                            item.groupItems.length > 0
                        ) {
                            item.groupItems.forEach((element) => {
                                itemTemp = dataDefaultObj.DataKhamTheoTemplate.find(
                                    (x) => x.Id == element.Id
                                );
                                if (itemTemp != null) {
                                    element.Value = itemTemp.Value;
                                }
                            });
                        } else {
                            itemTemp = dataDefaultObj.DataKhamTheoTemplate.find(
                                (x) => x.Id == item.Id
                            );
                            if (itemTemp != null) {
                                item.Value = itemTemp.Value;
                            }
                        }
                    }
                );
            }
        }
        else
        {
            item.TemplateKhamCacCoQuanObj.ComponentDynamics.forEach(
                (item) => {
                    if (
                        item.groupItems != undefined &&
                        item.groupItems != null &&
                        item.groupItems.length > 0
                    ) {
                        item.groupItems.forEach((element) => {
                            element.Value = null;
                        });
                    } else {
                        item.Value = null;
                    }
                }
            );
        }
    }

    dataTemplateDichVuKhamChange(item){
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;
        item.IsChangeData = true;

        this.kiemTraKetLuanKhamSucKhoe();
    }

    kiemTraKetLuanKhamSucKhoe(){
        // kiểm tra số chuyên khoa đang chọn
        var lstDichVuKhamDangChon = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.filter(x => x.ChuyenKhoaKhamSucKhoe != null && x.IsCheckedDichVu == true);

        var countDichVuThuocNhomChinh = 0;
        lstDichVuKhamDangChon.forEach(element => {
            var index = this.benhNhanHienTai.YeuCauTiepNhan.ChuyenKhoaKhamSucKhoeChinhs.findIndex(x => x == element.ChuyenKhoaKhamSucKhoe);
            if(index != -1)
            {
                countDichVuThuocNhomChinh++;
            }
        });
        this.benhNhanHienTai.YeuCauTiepNhan.IsDuChuyenKhoaKhamSucKhoeChinh = 
            this.benhNhanHienTai.YeuCauTiepNhan.ChuyenKhoaKhamSucKhoeChinhs.length == countDichVuThuocNhomChinh;
            // this.benhNhanHienTai.YeuCauTiepNhan.ChuyenKhoaKhamSucKhoeChinhs.findIndex(x => lstDichVuKhamDangChon.findIndex(y => y.ChuyenKhoaKhamSucKhoe == x) != -1) != -1
            // && this.benhNhanHienTai.YeuCauTiepNhan.ChuyenKhoaKhamSucKhoeChinhs.length <= lstDichVuKhamDangChon.length;
    }

    getDataPhanLoaiKSK() {
        var self = this;
        self.apiService
            .post<Array<any>>("KhamDoan/GetPhanLoaiSucKhoes", new LookupQueryInfo())
            .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    self.dataPhanLoaiSucKhoes = resultData;
                }
            });
    }

    //===========================BVHD-3574=================================
    scrollToKhamKhac(id: string):void {
        if (jQuery('#contentkhamkhac').position() != undefined) {
            jQuery('.sidenav-content').animate({ scrollTop: jQuery('#' + id).position().top });
        }
    }

    xuLyAnHienKhamKhac(hienKhamKhac: boolean = true, id: string)
    {
        var self = this;
        self.showNoiDungKhamKhac = hienKhamKhac;
        setTimeout(function () {
            self.scrollToKhamKhac(id);
        }, 100);
    }

    showPopupNoiDungMauKhamBenh(){
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.dialog.open(NoiDungMauKhamBenhPopupComponent, {
              disableClose: false,
              width: '1400px',
              data: {
                  documentType: this.documentType
              }
            }).afterClosed().subscribe(result => {
      
            });
          }
          else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
    }

    chonNoiDungMauKhamBenh(dataItem)
    {
        if(dataItem)
        {
            this.dataChange();
            this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh = dataItem.NoiDung;
        }
    }
    //=====================================================================
}
