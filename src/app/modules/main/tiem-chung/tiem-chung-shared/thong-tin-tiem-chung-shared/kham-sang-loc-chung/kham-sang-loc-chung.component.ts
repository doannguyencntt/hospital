import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { YeuCauDichVuKyThuat } from '../../../tiem-chung.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoaiKetLuanKhamSangLocTiemChung } from 'src/app/shared/enum/tiem-vacxin.enum';
import { khamSangLocSoSinhTrongBenhVien } from './mau-sang-loc/mau-sang-loc-example';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
    selector: 'app-kham-sang-loc-chung',
    templateUrl: './kham-sang-loc-chung.component.html',
    styleUrls: ['./kham-sang-loc-chung.component.scss']
})

export class KhamSangLocChungComponent implements OnInit {
    validationErrors: any;
    loadingDataPopup: any;
    loaiKetLuanKhamSangLocTiemChung = LoaiKetLuanKhamSangLocTiemChung;
    chiSoSinhTons: any[] = [];

    thongTinMauKhamSangLocChung: any = khamSangLocSoSinhTrongBenhVien;
    
    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isTabKhamLocChungReadOnly: boolean = false;
    
    constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj = JSON.parse(this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplate);
        this.bindDataDynamicComponent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj = JSON.parse(this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplate);
            this.bindDataDynamicComponent();
        };
    }

    evtLuaChonBenhVienChange(evt) {
        this.evtModelOnChange();

        this.showPopupLoadingData(EnumTypeLoadingData.View);

        this.apiService.get<any>(`TiemChung/GetTemplateKhamSangLoc?yeuCauTiepNhanId=${this.thongTinBenhNhan.YeuCauTiepNhanId}&nhomKhamSangLoc=${evt}`).subscribe(res => {
            this.closePopupLoadingData();
            this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplate = res;
            this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj = JSON.parse(res);
            this.bindDataDynamicComponent();
        }, (err: any) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.thongTinBenhNhan.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }

    evtDeNghiKhamSangLocChange(evt) {
        this.evtModelOnChange();
        
        if(!evt) {
            this.thongTinBenhNhan.KhamSangLocTiemChung.LyDoDeNghi = null;
        }
    }

    initDataDynamicComponent() {
        let dataKhamTheoTemplate: any;
        let lstDataKhamTheoTemplate: any[] = [];

        if (this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj) {
            this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj.ComponentDynamics.forEach(
                (component) => {
                    if (component.groupItems && component.groupItems.length > 0) {
                        component.groupItems.forEach((element) => {
                            dataKhamTheoTemplate = {
                                Id: element.Id,
                                Value: element.Value,
                            };

                            lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                        });
                    } else {
                        dataKhamTheoTemplate = {
                            Id: component.Id,
                            Value: component.Value,
                        };

                        lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                    }
                }
            );

            this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungData = `{"DataKhamTheoTemplate": ${JSON.stringify(lstDataKhamTheoTemplate)}}`;
        }
    }

    bindDataDynamicComponent() {
        if(!this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungData) {
            this.initDataDynamicComponent();
        }

        let strData = this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungData;
        // let canNang = null, thanNhiet = null;

        // if (this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus && this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus.length > 0) {
        //     let lstCanNang = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus.filter(p => p.CanNang);
        //     let lstThanNhiet = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus.filter(p => p.ThanNhiet);

        //     if(lstCanNang.length > 0) {
        //         canNang = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus.filter(p => p.CanNang).pop().CanNang * 1000;
        //     }

        //     if(lstThanNhiet.length > 0) {
        //         thanNhiet = this.thongTinBenhNhan.KhamSangLocTiemChung.KetQuaSinhHieus.filter(p => p.ThanNhiet).pop().ThanNhiet;
        //     }
        // }

        if (strData) {
            let dataObj = JSON.parse(strData);
            let itemTemp = null;

            if (this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj) {
                this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj.ComponentDynamics.forEach(itemObj => {
                    if (itemObj.groupItems && itemObj.groupItems.length > 0) {
                        itemObj.groupItems.forEach((element) => {
                            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
                            
                            if (itemTemp) {
                                element.Value = itemTemp.Value;
                            }
                        });
                    } else {
                        itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == itemObj.Id);
                        
                        if (itemTemp) {
                            itemObj.Value = itemTemp.Value;
                            // itemObj.Value = itemTemp.Value ? itemTemp.Value : 
                            //     (
                            //         itemTemp.Id == 'CanNang' && canNang ? canNang : 
                            //         (
                            //             itemTemp.Id == 'ThanNhiet' && thanNhiet ? thanNhiet : null
                            //         )
                            //     );
                        }
                    }
                })
            }
        }
    }

    processDynamicComponent() {
        this.validationErrors = [];

        let dataKhamTheoTemplate: any;
        let lstDataKhamTheoTemplate: any[] = [];

        if (this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj) {
            this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj.ComponentDynamics.forEach(
                (component) => {
                    if (component.groupItems && component.groupItems.length > 0) {
                        component.groupItems.forEach((element) => {
                            if(element.required && element.Value == null) {
                                let err = {
                                    Field: element.Id,
                                    Message: `${element.Label} yêu cầu nhập`
                                };
                                this.validationErrors.push(err);
                            }

                            if (element.Value != null) {
                                dataKhamTheoTemplate = {
                                    Id: element.Id,
                                    Value: element.Value,
                                };
                                lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                            }
                        });
                    } else {
                        if(component.required && component.Value == null) {
                            let err = {
                                Field: component.Id,
                                Message: `${component.Label} yêu cầu nhập`
                            };
                            this.validationErrors.push(err);
                        } 

                        if (component.Value != null) {
                            dataKhamTheoTemplate = {
                                Id: component.Id,
                                Value: component.Value,
                            };
    
                            lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                        }
                    }
                }
            );

            this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungData = `{"DataKhamTheoTemplate": ${JSON.stringify(lstDataKhamTheoTemplate)}}`;

            return this.validationErrors.length == 0;
        }

        return false;
    }

    evtModelOnChange() {
        this.thongTinBenhNhan.isDataKhamSangLocChungChange = true;
    }

    evtCanNangThanNhietChanged(evt) {
        if(evt) {
            this.chiSoSinhTons = evt;

            if(!this.thongTinBenhNhan.YeuCauDichVuKyThuatKhamSangLocTiemChungId) {
                let strData = this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungData;
                let canNang = null, thanNhiet = null;
    
                if (this.chiSoSinhTons && this.chiSoSinhTons.length > 0) {
                    let lstCanNang = this.chiSoSinhTons.filter(p => p.CanNang);
                    let lstThanNhiet = this.chiSoSinhTons.filter(p => p.ThanNhiet);
    
                    if(lstCanNang.length > 0) {
                        canNang = this.thongTinBenhNhan.SoThangTuoi >= 1 ? this.chiSoSinhTons.filter(p => p.CanNang).pop().CanNang : this.chiSoSinhTons.filter(p => p.CanNang).pop().CanNang * 1000;
                    }
    
                    if(lstThanNhiet.length > 0) {
                        thanNhiet = this.chiSoSinhTons.filter(p => p.ThanNhiet).pop().ThanNhiet;
                    }
                }
    
    
                if (strData) {
                    let dataObj = JSON.parse(strData);
                    let itemTemp = null;
    
                    if (this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj) {
                        this.thongTinBenhNhan.KhamSangLocTiemChung.ThongTinKhamSangLocTiemChungTemplateObj.ComponentDynamics.forEach(itemObj => {
                            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == itemObj.Id);
                            
                            if (itemTemp) {
                                itemObj.Value = itemTemp.Value ? itemTemp.Value : 
                                    (
                                        itemTemp.Id == 'CanNang' && canNang ? canNang : 
                                        (
                                            itemTemp.Id == 'ThanNhiet' && thanNhiet ? thanNhiet : null
                                        )
                                    );
                            }
                        })
                    }
                }
            }
        }
    }

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = "Đang tải dữ liệu..."; break;
            case EnumTypeLoadingData.Update:
                mess = "Đang lưu dữ liệu..."; break;
            case EnumTypeLoadingData.Delete:
                mess = "Đang xóa dữ liệu..."; break;
            case EnumTypeLoadingData.Cancel:
                mess = "Đang hủy dữ liệu..."; break;
            default: mess = "Đang tải dữ liệu...";
        }

        this.loadingDataPopup = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    closePopupLoadingData() {
        if (this.loadingDataPopup) {
            this.loadingDataPopup.close();
        }
    }
}