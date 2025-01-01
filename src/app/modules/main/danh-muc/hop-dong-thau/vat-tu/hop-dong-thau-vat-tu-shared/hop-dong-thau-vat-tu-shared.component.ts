import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {
    HopDongThauVatTu,
    HopDongThauVatTuChiTiet
} from '../hop-dong-thau-vat-tu.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { HopDongThauVatTuMessage, NhapXuatKhoMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-hop-dong-thau-vat-tu-shared',
    templateUrl: './hop-dong-thau-vat-tu-shared.component.html',
    styleUrls: ['./hop-dong-thau-vat-tu-shared.component.scss']
})
export class HopDongThauVatTuSharedComponent implements OnInit {
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridDataSource: any;
    hopDongThauVatTu: HopDongThauVatTu = new HopDongThauVatTu();
    hopDongThauVatTuChiTiet: HopDongThauVatTuChiTiet = new HopDongThauVatTuChiTiet();

    hopDongThauVatTuSource: HopDongThauVatTu = new HopDongThauVatTu();
    validationErrors: any;
    validationErrorsForDetail: any;
    _idHopDongThauChiTiet: number;
    idUpdate: number; // con số này được dùng để update cho hợp đồng thầu chi tiết
    isUpdate = false;
    format = 'n2';
    dataSourceCache: any;
    showGrid: boolean;
    showFormDetail = false;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;
    isDisableUpdate = false;
    isCreate = false;
    vatTuDisabled = false;

    minYear = 1900;
    maxYear = 9999;
    disabledSuDungTaiBenhVien: boolean = false;
    arrayMaVatTuTemp = new Array<string>();
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
    @ViewChild('gridHdtVt', { static: false }) gridHdtVt: GridComponent;
    @ViewChild('vatTuThauTemplate', { static: true }) vatTuThauTemplate: TemplateRef<any>;
    @ViewChild('maVatTuTemplate', { static: true }) maVatTuTemplate: TemplateRef<any>;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private baseService: BaseService,
        private dialog: MatDialog,
        private apiService: ApiService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.showGrid = false;
        this._idHopDongThauChiTiet = 0;
        this.documentType = DocumentType.DanhMucHopDongThauVatTu;
        const id: number = this.route.snapshot.params.id;

        this.hopDongThauVatTu = new HopDongThauVatTu();
        this.hopDongThauVatTuChiTiet = new HopDongThauVatTuChiTiet();

        this.hopDongThauVatTuSource = new HopDongThauVatTu();

        const hopDongThauVatTuChiTietDataSource = new HopDongThauVatTuChiTiet();
        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.push(hopDongThauVatTuChiTietDataSource);
        this.ClearData();

        if (id) {
            this.getById(id);
        } else {
            this.showGrid = true;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(0, 1);
            this.setDataGridView(this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets);
            this.isCreate = true;
        }
        this.gridColumns = [
            { Field: 'VatTu', Title: 'Vật tư', MinWidth: 150, Template: this.vatTuThauTemplate },
            { Field: 'Gia', Title: 'Giá', Width: 150, Template: this.giaTemplate },
            { Field: 'SoLuongDisplay', Title: 'Số Lượng', Width: 150 },
            { Field: 'SuDungTaiBenhVienDisplay', Title: 'Sử Dụng tại BV', Width: 150 },
            { Field: 'MaVatTuBenhVien', Title: 'Mã tại BV', Width: 150, Template: this.maVatTuTemplate },
            { Field: 'LoaiSuDungText', Title: 'Loại sử dung', Width: 150},
            { Field: 'Action', Title: '', Width: 150, Template: this.trangThaiTemplate }
        ];
    }

    setDataGridView(dataSource: any) {
        this.dataSourceCache = dataSource;
        this.gridDataSource = {
            data: this.dataSourceCache,
            total: 1
        };
        if (this.gridHdtVt) {
            this.gridHdtVt.gridDataSource = { ...this.gridDataSource };
            this.gridHdtVt.setDataSource();
        }
    }

    getSharedData() {
        if (this.hopDongThauVatTu.Id == null) {
            this.hopDongThauVatTu.Id = this.hopDongThauVatTu.Id != null ? this.hopDongThauVatTu.Id : 0;
        }

        this.hopDongThauVatTu.HopDongThauVatTuChiTiets.filter(x => x.Id == null).forEach(hopDongVtChiTiet => {
            hopDongVtChiTiet.Id = 0;
        });

        return this.hopDongThauVatTu;
    }

    onValidate(allowValidate: any) {
        this.validationErrors = [];
        const today: Date = new Date();
        if (allowValidate) {
            if (this.hopDongThauVatTu.NhaThauId == null) {
                const validate = {
                    Field: 'NhaThauId',
                    Message: HopDongThauVatTuMessage.MessageNhaThauNotEmpty
                };
                this.validationErrors.push(validate);
            }

            // if (this.hopDongThauVatTu.SoHopDong == null || this.hopDongThauVatTu.SoHopDong === '') {
            //     const validate = {
            //         Field: 'SoHopDong',
            //         Message: HopDongThauVatTuMessage.MessageSoHopDongNotEmpty
            //     };
            //     this.validationErrors.push(validate);
            // }

            if (this.hopDongThauVatTu.SoQuyetDinh == null || this.hopDongThauVatTu.SoQuyetDinh === '') {
                const validate = {
                    Field: 'SoQuyetDinh',
                    Message: HopDongThauVatTuMessage.MessageSoQuyetDinhNotEmpty
                };
                this.validationErrors.push(validate);
            }

            if (this.hopDongThauVatTu.CongBo == null) {
                const validate = {
                    Field: 'CongBo',
                    Message: HopDongThauVatTuMessage.MessageCongBoNotEmpty
                };
                this.validationErrors.push(validate);
            }

            // if (this.hopDongThauVatTu.NgayKy == null) {
            //     const validate = {
            //         Field: 'NgayKy',
            //         Message: HopDongThauVatTuMessage.MessageNgayKyNotEmpty
            //     };
            //     this.validationErrors.push(validate);
            // }

            if (this.hopDongThauVatTu.NgayHieuLuc == null) {
                const validate = {
                    Field: 'NgayHieuLuc',
                    Message: HopDongThauVatTuMessage.MessageNgayHieuLucNotEmpty
                };
                this.validationErrors.push(validate);
            }

            if (this.hopDongThauVatTu.NgayHetHan == null) {
                const validate = {
                    Field: 'NgayHetHan',
                    Message: HopDongThauVatTuMessage.MessageNgayHetHanNotEmpty
                };
                this.validationErrors.push(validate);
            }

            if (this.hopDongThauVatTu.NgayHetHan != null && this.hopDongThauVatTu.NgayHetHan <= today) {
                const validate = {
                    Field: 'NgayHetHan',
                    Message: HopDongThauVatTuMessage.MessageNgayHetHanNotValid
                };
                this.validationErrors.push(validate);
            }

            if (this.hopDongThauVatTu.Nam == null) {
                const validate = {
                    Field: 'Nam',
                    Message: HopDongThauVatTuMessage.MessageNamNotEmpty
                };
                this.validationErrors.push(validate);
            }

            if (this.hopDongThauVatTu.LoaiThau == null) {
                const validate = {
                    Field: 'LoaiThau',
                    Message: HopDongThauVatTuMessage.MessageLoaiThauNotEmpty
                };
                this.validationErrors.push(validate);
            }

            if (this.hopDongThauVatTu.NhomThau == null || this.hopDongThauVatTu.NhomThau === '') {
                const validate = {
                    Field: 'NhomThau',
                    Message: HopDongThauVatTuMessage.MessageNhomThauNotEmpty
                };
                this.validationErrors.push(validate);
            }

            if (this.hopDongThauVatTu.GoiThau == null || this.hopDongThauVatTu.GoiThau === '') {
                const validate = {
                    Field: 'GoiThau',
                    Message: HopDongThauVatTuMessage.MessageGoiThauNotEmpty
                };
                this.validationErrors.push(validate);
            }
        }
    }

    getById(id: number) {
        this.baseService.getById<HopDongThauVatTu>(id).subscribe(resultData => {
            this.isDisableUpdate = resultData.CoNhapKho;
            this.showGrid = true;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(0, 1);
            this.hopDongThauVatTu = resultData;
            const len = this.hopDongThauVatTu.HopDongThauVatTuChiTiets.length;

            if (len > 0) {
                for (let i = 0; i < len; i++) {
                    const hopDongChiTietDataSource = this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i];
                    hopDongChiTietDataSource.SoLuongDisplay =
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i].SoLuong.toLocaleString('vi-VI');
                    this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i].IdGrid = Math.random();
                    hopDongChiTietDataSource.IdGrid = this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i].IdGrid;
                    if (hopDongChiTietDataSource.SuDungTaiBenhVien == true) {
                        hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Có";
                    }
                    else {
                        hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Không";
                    }

                    this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.push(hopDongChiTietDataSource);
                }
                this._idHopDongThauChiTiet = this.hopDongThauVatTu.HopDongThauVatTuChiTiets[len - 1].Id + 1;
                this.setDataGridView(this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets);
            } else {
                this.setDataGridView([]);
            }
        });
    }

    onChangeVatTu(event: any) {
        if (event) {
            this.hopDongThauVatTuChiTiet.VatTu = event.DisplayName;
            this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien = event.SuDungTaiBenhVien;
            this.disabledSuDungTaiBenhVien = event.SuDungTaiBenhVien == true;
            this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = event.MaTaiBenhVien;
            this.hopDongThauVatTuChiTiet.LoaiSuDungId = event.LoaiSuDungId;
            this.hopDongThauVatTuChiTiet.LoaiSuDungText = event.LoaiSuDungText;

            this.hopDongThauVatTuChiTiet.VatTuBenhVienId = event.DichVuBenhVienId;
        }
    }
    onChangeLoaiSuDung(event: any) {
        if (event) {
            this.hopDongThauVatTuChiTiet.LoaiSuDungText = event.DisplayName;
        }
    }
    modelChangeSuDungTaiBenhVien(event: any) {
        this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungId = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungText = null;
        this.getMaTaoMoiVatTu();
    }

    ConfirmDelete(dataItem: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length === 1) {
                    this.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa hết']) }
                    }).afterClosed().subscribe(resultData => {
                        if (resultData === 'Yes') {
                            this.Delete(dataItem.IdGrid);
                        }
                    });
                } else {
                    this.Delete(dataItem.IdGrid);
                }
            }
        });
    }

    Delete(id: number) {
        this.ClearData();

        // find position
        const hopDongThauVatTuChiTiet = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets;
        let position = 0;
        for (const chiTiet of hopDongThauVatTuChiTiet) {
            if (chiTiet.IdGrid === id) {
                position = hopDongThauVatTuChiTiet.indexOf(chiTiet);
                break;
            }
        }

        // delete by its position
        this.hopDongThauVatTu.HopDongThauVatTuChiTiets.splice(position, 1);
        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(position, 1);
        this.notificationService.showSuccess(NhapXuatKhoMessage.MessageRemoveItemGrid);
    }

    ThemVatTu() {
        this.showFormDetail = !this.showFormDetail;

        if (this.validationErrors == null) {
            this.validationErrors = [];
        } else {
            if (this.validationErrors != null && this.validationErrors.length !== 0) {
                this.validationErrors = [];
            }
        }
    }

    BindValue(dataItem: any) {
        if (this.validationErrors == null) {
            this.validationErrors = [];
        } else {
            if (this.validationErrors != null && this.validationErrors.length !== 0) {
                this.validationErrors = [];
            }
        }

        this.hopDongThauVatTuChiTiet.VatTuId = dataItem.VatTuId;
        this.hopDongThauVatTuChiTiet.VatTu = dataItem.VatTu;
        this.hopDongThauVatTuChiTiet.Gia = dataItem.Gia;
        this.hopDongThauVatTuChiTiet.SoLuong = dataItem.SoLuong;
        this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien = dataItem.SuDungTaiBenhVien;
        if (this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien == true) {
            this.disabledSuDungTaiBenhVien = true;

            this.hopDongThauVatTuChiTiet.VatTuBenhVienId = dataItem.VatTuBenhVienId;
        }
        this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = dataItem.MaVatTuBenhVien;
        this.hopDongThauVatTuChiTiet.LoaiSuDungId = dataItem.LoaiSuDungId;
        this.hopDongThauVatTuChiTiet.LoaiSuDungText = dataItem.LoaiSuDungText;
        this.idUpdate = dataItem.IdGrid;
        this.isUpdate = true;
        this.showFormDetail = true;
    }

    ClearData() {
        this.hopDongThauVatTu.Nam = (new Date()).getFullYear();
        this.showFormDetail = false;
        this.hopDongThauVatTuChiTiet.VatTuId = null;
        this.hopDongThauVatTuChiTiet.VatTu = null;
        this.hopDongThauVatTuChiTiet.Gia = null;
        this.hopDongThauVatTuChiTiet.SoLuong = null;
        this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien = false;
        this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungId = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungText = null;
        this.isUpdate = false;
    }

    Add() {
        // add into grid
        this._idHopDongThauChiTiet = this._idHopDongThauChiTiet + 1;
        const hopDongChiTietDataSource = this.hopDongThauVatTuChiTiet;
        //this.validationFormClient(hopDongChiTietDataSource, 0, 0);

        if (this.hopDongThauVatTuChiTiet.VatTuId != null 
            && this.hopDongThauVatTuChiTiet.VatTuId != 0 
            && this.checkExist(this.hopDongThauVatTuChiTiet.VatTuId)) {
            this.notificationService.showError("Vật tư này đã có trong danh sách thầu vật tư chi tiết");
            return;
        }

        //if (hopDongChiTietDataSource.VatTuId != null) {
        this.validationErrorsForDetail = [];
        this.hopDongThauVatTuChiTiet.MaVatTuTemps = [];
        this.arrayMaVatTuTemp.forEach(element => {
            this.hopDongThauVatTuChiTiet.MaVatTuTemps.push(element);
        });
        this.apiService.post<any>("HopDongThauVatTu/KiemTraHopDongThauVatTuChiTiet", this.hopDongThauVatTuChiTiet).subscribe(resultValid => {
            // this.apiService.post<any>('HopDongThauVatTu/GetHieuLucVatTu?id=' + hopDongChiTietDataSource.VatTuId).subscribe(resultData => {
            //     if (resultData != null) {
            //         if (resultData === false) {
            //             if (this.validationErrorsForDetail == null) {
            //                 this.validationErrorsForDetail = [];
            //             }
            //             this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Vật tư này đã hết hiệu lực' });
            //         }
                    hopDongChiTietDataSource.HopDongThauVatTuId = this.hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;

                    // update Id cho row, rất quan trọng, nếu ko có dòng này thì row sẽ bị xử lý bậy bạ
                    hopDongChiTietDataSource.Id = this._idHopDongThauChiTiet;

                    //if (this.validationErrorsForDetail != null && !this.validationErrorsForDetail.some(x => x)) {
                        hopDongChiTietDataSource.GiaDisplay = hopDongChiTietDataSource.Gia.toLocaleString('vi-VI');
                        hopDongChiTietDataSource.SoLuongDisplay = hopDongChiTietDataSource.SoLuong.toLocaleString('vi-VI');
                        hopDongChiTietDataSource.IdGrid = Math.random();
                        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.push(hopDongChiTietDataSource);

                        // add into data
                        const hopDongChiTiet = new HopDongThauVatTuChiTiet();
                        hopDongChiTiet.HopDongThauVatTuId = this.hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;
                        hopDongChiTiet.VatTuId = this.hopDongThauVatTuChiTiet.VatTuId;
                        hopDongChiTiet.VatTu = hopDongChiTietDataSource.VatTu;
                        hopDongChiTiet.Id = hopDongChiTiet.Id == null ? 0 : hopDongChiTiet.Id;
                        hopDongChiTiet.Gia = this.hopDongThauVatTuChiTiet.Gia;
                        hopDongChiTiet.GiaDisplay = hopDongChiTietDataSource.GiaDisplay;
                        hopDongChiTiet.SoLuong = this.hopDongThauVatTuChiTiet.SoLuong;
                        hopDongChiTiet.SoLuongDisplay = hopDongChiTietDataSource.SoLuongDisplay;
                        hopDongChiTiet.SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
                        if (hopDongChiTiet.SuDungTaiBenhVien == true) {
                            hopDongChiTiet.SuDungTaiBenhVienDisplay = "Có";

                            hopDongChiTiet.VatTuBenhVienId = this.hopDongThauVatTuChiTiet.VatTuBenhVienId;
                            this.arrayMaVatTuTemp.push(this.hopDongThauVatTuChiTiet.MaVatTuBenhVien);
                        }
                        else {
                            hopDongChiTiet.SuDungTaiBenhVienDisplay = "Không";
                        }

                        hopDongChiTiet.MaVatTuBenhVien = hopDongChiTietDataSource.MaVatTuBenhVien;
                        hopDongChiTiet.LoaiSuDungId = hopDongChiTietDataSource.LoaiSuDungId;
                        hopDongChiTiet.LoaiSuDungText = hopDongChiTietDataSource.LoaiSuDungText;
                        hopDongChiTiet.SoLuongDaCap = 0;
                        hopDongChiTiet.IdGrid = hopDongChiTietDataSource.IdGrid;
                        this.hopDongThauVatTu.Id = this.hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;
                        if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets.length > 0) {
                            if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets[0].VatTu === null) {
                                this.hopDongThauVatTu.HopDongThauVatTuChiTiets.splice(0, 1);
                            }
                        }

                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets.push(hopDongChiTiet);

                        for (const chiTiet of this.hopDongThauVatTu.HopDongThauVatTuChiTiets) {
                            if (chiTiet.Id === this._idHopDongThauChiTiet) {
                                const position = this.hopDongThauVatTu.HopDongThauVatTuChiTiets.indexOf(chiTiet);
                                this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].Id = 0;
                                break;
                            }
                        }

                        this.RemoveRedundantItem();
                        // clear data on screen
                        this.setDataGridView(this.hopDongThauVatTu.HopDongThauVatTuChiTiets);
                        this.hopDongThauVatTuChiTiet = new HopDongThauVatTuChiTiet();
                        this.ClearData();
                    //}
            //     }
            // },
            //     (err: any) => {
            //         this.notificationService.showError(err.Message);
            //     });
            },
            (err: ApiError) => {
                this.validationErrorsForDetail = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        //}
    }

    Update() {
        // update into grid
        this.hopDongThauVatTuChiTiet.GiaDisplay = this.hopDongThauVatTuChiTiet.Gia.toLocaleString('vi-VI');
        this.hopDongThauVatTuChiTiet.SoLuongDisplay = this.hopDongThauVatTuChiTiet.SoLuong.toLocaleString('vi-VI');
        const id = this.idUpdate;

        let position = 0;
        for (const chiTiet of this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets) {
            if (chiTiet.IdGrid === id) {
                position = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.indexOf(chiTiet);
                break;
            }
        }

        const hopDongChiTietDataSource = this.hopDongThauVatTuChiTiet;
        //this.validationFormClient(hopDongChiTietDataSource, 1, position);

        if (this.hopDongThauVatTuChiTiet.VatTuId != null
            && this.hopDongThauVatTuChiTiet.VatTuId != 0
            && this.checkExistOnAmendation(this.hopDongThauVatTuChiTiet.VatTuId, position)) {
            this.notificationService.showError("Vật tư này đã có trong danh sách thầu vật tư chi tiết");
            return;
        }

        //if (hopDongChiTietDataSource.VatTuId) {
            this.apiService.post<any>("HopDongThauVatTu/KiemTraHopDongThauVatTuChiTiet", this.hopDongThauVatTuChiTiet).subscribe(resultValid => {
            // this.apiService.post<any>('HopDongThauVatTu/GetHieuLucVatTu?id=' + hopDongChiTietDataSource.VatTuId).subscribe(resultData => {
            //     if (resultData) {
            //         if (resultData === false) {
            //             if (this.validationErrors == null) {
            //                 this.validationErrors = [];
            //             }
            //             this.validationErrors.push({ Field: 'VatTuId', Message: 'Vật tư này đã hết hiệu lực' });
            //         }

            //         if (this.validationErrors != null && !this.validationErrors.some(x => x)) {
                        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].VatTu = hopDongChiTietDataSource.VatTu;
                        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].VatTuId =
                            hopDongChiTietDataSource.VatTuId;
                        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
                        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].GiaDisplay =
                            this.hopDongThauVatTuChiTiet.GiaDisplay;
                        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
                        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].SoLuongDisplay =
                            this.hopDongThauVatTuChiTiet.SoLuongDisplay;

                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].VatTu = hopDongChiTietDataSource.VatTu;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].VatTuId =
                            hopDongChiTietDataSource.VatTuId;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].GiaDisplay =
                            this.hopDongThauVatTuChiTiet.GiaDisplay;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SoLuongDisplay =
                            this.hopDongThauVatTuChiTiet.SoLuongDisplay;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
                        if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVien == true) {
                            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVienDisplay = "Có";

                            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].VatTuBenhVienId = this.hopDongThauVatTuChiTiet.VatTuBenhVienId;
                            this.arrayMaVatTuTemp.push(this.hopDongThauVatTuChiTiet.MaVatTuBenhVien);
                        }
                        else {
                            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVienDisplay = "Không";
                        }
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].MaVatTuBenhVien = hopDongChiTietDataSource.MaVatTuBenhVien;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].LoaiSuDungId = hopDongChiTietDataSource.LoaiSuDungId;
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].LoaiSuDungText = hopDongChiTietDataSource.LoaiSuDungText;

                        // update into data
                        // const hopDongChiTiets = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets;
                        // let hopDongThauVatTuChiTiet = new HopDongThauVatTuChiTiet();
                        // let hopDongThauVatTu = new HopDongThauVatTu();
                        // hopDongThauVatTu = this.hopDongThauVatTu;
                        // hopDongThauVatTuChiTiet = this.hopDongThauVatTuChiTiet;
                        // hopDongChiTiets.forEach((hopDongChiTiet) => {
                        //     if (hopDongChiTiet.IdGrid === id) {
                        //         hopDongChiTiet.HopDongThauVatTuId = hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;
                        //         hopDongChiTiet.VatTuId = hopDongThauVatTuChiTiet.VatTuId;
                        //         hopDongChiTiet.Gia = hopDongThauVatTuChiTiet.Gia;
                        //         hopDongChiTiet.SoLuong = hopDongThauVatTuChiTiet.SoLuong;
                        //     }
                        // });

                        // this.RemoveRedundantItem();
                        this.setDataGridView(this.hopDongThauVatTu.HopDongThauVatTuChiTiets);
                        // clear
                        this.ClearData();
                    //}
                },
                (err: ApiError) => {
                    this.validationErrorsForDetail = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            // },
            //     (err: any) => {
            //         this.notificationService.showError(err.Message);
            //     });
        //}
    }

    RemoveRedundantItem() {
        const len = this.hopDongThauVatTu.HopDongThauVatTuChiTiets.length;

        if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets[len - 1].Id === 0
            && this.hopDongThauVatTu.HopDongThauVatTuChiTiets[len - 1].VatTu === null) {
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets.splice(len - 1, 1);
        }

        const lenDataSource = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length;

        if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[lenDataSource - 1].Id === 0
            && this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[lenDataSource - 1].VatTu === null) {
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(lenDataSource - 1, 1);
        }
    }

    validationFormClient(dataval: any, type: number, position: number) {
        // type = 0 là add, type = 1 là update
        this.validationErrorsForDetail = [];
        if (dataval !== null) {
            if (dataval.VatTuId == null || dataval.VatTuId === 0) {
                this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Yêu cầu chọn vật tư' });
            }

            if (dataval.Gia == null || dataval.Gia === 0) {
                this.validationErrorsForDetail.push({ Field: 'Gia', Message: 'Giá yêu cầu nhập' });
            }

            if (dataval.SoLuong == null) {
                this.validationErrorsForDetail.push({ Field: 'SoLuong', Message: 'Số lượng yêu cầu nhập' });
            }

            if (dataval.SoLuong === 0) {
                this.validationErrorsForDetail.push({ Field: 'SoLuong', Message: 'Số lượng yêu cầu khác 0' });
            }
            if (this.disabledSuDungTaiBenhVien == false && this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien == true) {
                if (this.hopDongThauVatTuChiTiet.MaVatTuBenhVien == null || this.hopDongThauVatTuChiTiet.MaVatTuBenhVien == "") {
                    this.validationErrorsForDetail.push({ Field: 'MaVatTuBenhVien', Message: 'Yêu cầu nhập Mã vật tư bệnh viện' });
                }
                if (dataval.LoaiSuDungId == null || dataval.LoaiSuDungId === 0) {
                    this.validationErrorsForDetail.push({ Field: 'LoaiSuDungId', Message: 'Yêu cầu chọn Loại sử dụng' });
                }

            }
        }

        if (type === 0) {
            if (this.checkExist(dataval.VatTuId)) {
                this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Vật tư này đã có trong danh sách thầu vật tư chi tiết' });
            }
        }

        if (type === 1) {
            if (this.checkExistOnAmendation(dataval.VatTuId, position)) {
                this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Vật tư này đã có trong danh sách thầu vật tư chi tiết' });
            }
        }
    }

    checkExist(VatTuId: number) {
        const len = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length;

        for (let i = 0; i < len; i++) {
            if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[i].VatTuId === VatTuId) {
                return true;
            }
        }

        return false;
    }

    checkExistOnAmendation(VatTuId: number, position: number) {
        const len = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length;

        for (let i = 0; i < len; i++) {
            if (i === position) {
                continue;
            }
            if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[i].VatTuId === VatTuId) {
                return true;
            }
        }

        return false;
    }

    onCreated() {
        this.router.navigate(['/danh-muc/hop-dong-thau/vat-tu']);
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/hop-dong-thau/vat-tu']);
    }

    onKeyAddVt(keyInput: any) {
        if (keyInput.keyCode === 13) {
            if (!this.isUpdate) {
                if (this.vatTuDisabled !== true) {
                    this.Add();
                } else {
                    this.vatTuDisabled = false;
                }
            } else {
                if (this.vatTuDisabled !== true) {
                    this.Update();
                } else {
                    this.vatTuDisabled = false;
                }
            }
        }
    }

    openComboboxHdt(isOpen: boolean) {
        this.vatTuDisabled = isOpen;
    }

    ngayChange(dataItem: any, laCongBo: boolean) {
        this.validationErrors = []
        if (laCongBo) {
            if (dataItem != undefined && dataItem != null) {
                this.hopDongThauVatTu.NgayHieuLuc = dataItem;
            } else {
                this.hopDongThauVatTu.NgayHieuLuc = null;
            }
        } else {
            if (dataItem != undefined && dataItem != null) {
                this.hopDongThauVatTu.CongBo = dataItem;
            } else {
                this.hopDongThauVatTu.CongBo = null;
            }
        }
    }


    // BVHD-3472
    getMaTaoMoiVatTu(tenVatTu: string = null) {
        if (this.hopDongThauVatTuChiTiet.VatTuBenhVienId == null || this.hopDongThauVatTuChiTiet.VatTuBenhVienId == 0) {
            let tenVatTuTemp = tenVatTu == null ? this.hopDongThauVatTuChiTiet.VatTu : tenVatTu;
            if (tenVatTuTemp != null) {
                var obj = {
                    TenVatTu: tenVatTuTemp,
                    MaVatTuTemps: this.arrayMaVatTuTemp
                }
                this.apiService.post<any>("VatTuBenhVien/GetMaTaoMoiVatTu", obj).subscribe(
                    resultData => {
                        if (resultData) {
                            this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = resultData;
                        }
                    },
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
            }
        }
    }
}
