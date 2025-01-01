import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataType } from 'src/app/shared/enum/document-type.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Cauhinh, CauHinhDanhSachChiTiet, CauHinhTheoThoiGianChiTiet } from '../cau-hinh-he-thong.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { LoaiCauHinh } from 'src/app/shared/enum/cau-hinh.enum';

@Component({
    selector: 'app-cau-hinh-he-thong-shared',
    templateUrl: './cau-hinh-he-thong-shared.component.html',
    styleUrls: ['./cau-hinh-he-thong-shared.component.scss']
})

export class CauHinhHeThongSharedComponent implements OnInit {
    @Input() type: number;
    cauhinh = {} as Cauhinh;
    validationErrors: any;
    documentType: DocumentType;
    loaiCauHinh = 1;
    icAdd = icAdd;
    icRemove = icRemove;
    icDelete = icDelete;
    public idUrl: number = this.route.snapshot.params.id;

    loaiCauHinhGachNo: LoaiCauHinh = LoaiCauHinh.CauHinhGachNo;
    loaiCauHinhNoiTru: LoaiCauHinh = LoaiCauHinh.CauHinhNoiTru;
    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private apiService: ApiService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.QuanLyCacCauHinh;
        if (this.route.snapshot.queryParams.loaiCauHinh != undefined) {
            this.loaiCauHinh = this.route.snapshot.queryParams.loaiCauHinh;
        }
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }
    getSharedData() {
        const cauhinhCopy = Object.assign({}, this.cauhinh);//{ ...this.cauhinh };

        if (this.loaiCauHinh == 1) {
            if (cauhinhCopy.Value != null) {
                if (cauhinhCopy.DataType == 5) {
                    cauhinhCopy.Value = CommonService.formatDate(cauhinhCopy.Value, 'yyyy/mm/dd');
                } else if (cauhinhCopy.DataType == 7) {
                    cauhinhCopy.Value = CommonService.formatDateTime(cauhinhCopy.Value, 'dd/MM/yyyy').toString();
                } else {
                    cauhinhCopy.Value = this.cauhinh.Value.toString();
                }
            }
            if (cauhinhCopy.DataType == 10) {
                cauhinhCopy.CauHinhDanhSachChiTiets = [];
                this.cauhinh.CauHinhDanhSachChiTiets.forEach(val => 
                    {
                        let data = Object.assign({}, val);
                        if (data.Value != null) {
                            if (data.DataType == 5) {
                                data.Value = CommonService.formatDate(data.Value, 'yyyy/mm/dd');
                            } else if (data.DataType == 7) {
                                data.Value = CommonService.formatDateTime(data.Value, 'dd/MM/yyyy').toString();
                            } else {
                                data.Value = data.Value.toString();
                            }
                        }
                        cauhinhCopy.CauHinhDanhSachChiTiets.push(data);
                    }
                );
            }
            cauhinhCopy.LoaiCauHinh = 1;
        }

        if (this.loaiCauHinh == 2) {
            cauhinhCopy.CauHinhTheoThoiGianChiTiets = [];
            this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(element => {
                var cauHinhChiTiet = new CauHinhTheoThoiGianChiTiet();
                var value = element.Value;
                if (value != null) {
                    if (cauhinhCopy.DataType == 5) {
                        cauHinhChiTiet = {
                            CauHinhTheoThoiGianId: element.CauHinhTheoThoiGianId,
                            FromDate: element.FromDate,
                            ToDate: element.ToDate,
                            Value: CommonService.formatDate(value, "yyyy/mm/dd"),
                            Id: element.Id != null ? element.Id : 0
                        }
                    } else if (cauhinhCopy.DataType == 7) {
                        cauHinhChiTiet = {
                            CauHinhTheoThoiGianId: element.CauHinhTheoThoiGianId,
                            FromDate: element.FromDate,
                            ToDate: element.ToDate,
                            Value: CommonService.formatDateTime(value, "dd/MM/yyyy").toString(),
                            Id: element.Id != null ? element.Id : 0
                        }
                    } else {
                        cauHinhChiTiet = {
                            CauHinhTheoThoiGianId: element.CauHinhTheoThoiGianId,
                            FromDate: element.FromDate,
                            ToDate: element.ToDate,
                            Value: value.toString(),
                            Id: element.Id != null ? element.Id : 0
                        }
                    }
                } else {
                    cauHinhChiTiet = {
                        CauHinhTheoThoiGianId: element.CauHinhTheoThoiGianId,
                        FromDate: element.FromDate,
                        ToDate: element.ToDate,
                        Value: null,
                        Id: element.Id != null ? element.Id : 0
                    }
                }
                cauhinhCopy.CauHinhTheoThoiGianChiTiets.push(cauHinhChiTiet);
            });
            cauhinhCopy.Value = "1";
            cauhinhCopy.LoaiCauHinh = 2;
        }

        return cauhinhCopy;
    }

    getById(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.apiService.get<any>("CauHinh/GetById?id=" + id + "&loaiCauHinh=" + this.loaiCauHinh).subscribe(
                resultData => {
                    this.cauhinh = resultData;
                    this.type = resultData.DataType;

                    if (this.loaiCauHinh == 1) {
                        switch (this.type) {
                            case DataType.Boolean:
                                this.cauhinh.Value = this.cauhinh.Value == "true" ? true : false;
                                break;
                            case DataType.Integer:
                                this.cauhinh.Value = Number(this.cauhinh.Value);
                                break;
                            case DataType.String:
                                break;
                            case DataType.Double:
                                this.cauhinh.Value = Number(this.cauhinh.Value);
                                break;
                            case DataType.Date:
                                this.cauhinh.Value = new Date(this.cauhinh.Value);
                                break;
                            case DataType.Time:
                                this.cauhinh.Value = Number(this.cauhinh.Value);
                                break;
                            case DataType.Datetime:
                                this.cauhinh.Value = new Date(this.cauhinh.Value);
                                break;
                            case DataType.Phone:
                                break;
                            case DataType.Email:
                                break;
                            case DataType.List:
                                let arrData = JSON.parse(this.cauhinh.Value);
                                arrData.forEach(element => {
                                    if (element.Value) {
                                        switch (element.DataType) {
                                            case DataType.Boolean:
                                                element.Value = element.Value == "true" ? true : false;
                                                break;
                                            case DataType.Integer:
                                                element.Value = Number(element.Value);
                                                break;
                                            case DataType.String:
                                                break;
                                            case DataType.Double:
                                                element.Value = Number(element.Value);
                                                break;
                                            case DataType.Date:
                                                element.Value = new Date(element.Value);
                                                break;
                                            case DataType.Time:
                                                element.Value = Number(element.Value);
                                                break;
                                            case DataType.Datetime:
                                                element.Value = new Date(element.Value);
                                                break;
                                            case DataType.Phone:
                                                break;
                                            case DataType.Email:
                                                break;
                                        }
                                    }
                                });
                                this.cauhinh.CauHinhDanhSachChiTiets = arrData;
                                break;
                        }
                    }

                    if (this.loaiCauHinh == 2) {
                        switch (this.type) {
                            case DataType.Boolean:
                                {
                                    this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(element => {
                                        element.Value = element.Value == "true" ? true : false;
                                    });
                                    break;
                                }
                            case DataType.Integer:
                                {
                                    this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(element => {
                                        element.Value = Number(element.Value);
                                    });
                                    break;
                                }
                            case DataType.String:
                                break;
                            case DataType.Double:
                                {
                                    this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(element => {
                                        element.Value = Number(element.Value);
                                    });
                                    break;
                                }
                            case DataType.Date:
                                {
                                    this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(element => {
                                        element.Value = new Date(element.Value);
                                    });
                                    break;
                                }
                            case DataType.Time:
                                {
                                    this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(element => {
                                        element.Value = Number(element.Value);
                                    });
                                    break;
                                }
                            case DataType.Datetime:
                                {
                                    this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(element => {
                                        element.Value = new Date(element.Value);
                                    });
                                    break;
                                }
                            case DataType.Phone:
                                break;
                            case DataType.Email:
                                break;
                        }
                    }
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    XoaCauHinh(position: any) {
        if (this.cauhinh.CauHinhTheoThoiGianChiTiets.length > 1) {
            this.cauhinh.CauHinhTheoThoiGianChiTiets.splice(position, 1);
        }
    }

    ThemCauHinh() {
        let flagError = false;
        var self = this;

        if (this.cauhinh.CauHinhTheoThoiGianChiTiets != undefined) {
            this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(function (currentObject, currentIndex, array) {
                if (currentIndex == array.length - 1) {
                    if (currentObject.Value == null || currentObject.FromDate == null) {
                        flagError = true;
                    }
                }
            });

            if (flagError) {
                this.notificationService.showError("Bạn vẫn chưa nhập hoàn chỉnh cấu hình!");
                return;
            }

            const viTriNew = new CauHinhTheoThoiGianChiTiet();
            this.cauhinh.CauHinhTheoThoiGianChiTiets.push(viTriNew);

            this.cauhinh.CauHinhTheoThoiGianChiTiets.forEach(function (currentObject, currentIndex, array) {
                if (currentIndex == array.length - 1) {
                    currentObject.CauHinhTheoThoiGianId = Number(self.idUrl);
                }
            });
        }
    }

    addNewItems(){
        var newItem = new CauHinhDanhSachChiTiet();
        this.cauhinh.CauHinhDanhSachChiTiets.push(newItem);
    }

    deleteItems(index){
        this.validationErrors = [];
        //this.cauhinh.CauHinhDanhSachChiTiets = this.cauhinh.CauHinhDanhSachChiTiets.filter(x => x.STT != dataItem.STT);
        this.cauhinh.CauHinhDanhSachChiTiets.splice(index, 1);
    }
}
