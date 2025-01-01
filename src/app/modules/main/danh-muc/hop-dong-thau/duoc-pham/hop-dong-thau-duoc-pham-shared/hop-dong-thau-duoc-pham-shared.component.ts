import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {
    HopDongThauDuocPham,
    HopDongThauDuocPhamChiTiet
} from '../hop-dong-thau-duoc-pham.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NhapXuatKhoMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ComboboxTreeComponent } from 'src/app/shared/component/dropdowns/combobox-tree/combobox-tree.component';

@Component({
    selector: 'app-hop-dong-thau-duoc-pham-shared',
    templateUrl: './hop-dong-thau-duoc-pham-shared.component.html',
    styleUrls: ['./hop-dong-thau-duoc-pham-shared.component.scss']
})
export class HopDongThauDuocPhamSharedComponent implements OnInit {
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridDataSource: any;
    hopDongThauDuocPham = {} as HopDongThauDuocPham;
    hopDongThauDuocPhamChiTiet = {} as HopDongThauDuocPhamChiTiet;

    hopDongThauDuocPhamSource = {} as HopDongThauDuocPham;
    validationErrors: any;
    validationErrorsForDetail: any;
    _idHopDongThauChiTiet: number;
    idUpdate: number; // con số này được dùng để update cho hợp đồng thầu chi tiết
    isUpdate: boolean = false;
    format: string = 'n2';
    dataSourceCache: any;
    showGrid: boolean;
    showFormDetail: boolean = false;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;
    isDisableUpdate: boolean = false;
    isCreate: boolean = false;
    duocPhamDisabled = false;
    disabledSuDungTaiBenhVien: boolean = false;
    minYear: number = 1900;
    maxYear: number = 9999;
    arrayMaDuocPhamTemp = new Array<string>();
    isGetDuocPhamDaTao: boolean = false;
    @ViewChild('gridHdtDp', { static: false }) gridHdtDp: GridComponent;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
    @ViewChild('duocPhamThauTemplate', { static: true }) duocPhamThauTemplate: TemplateRef<any>;
    @ViewChild('maDuocPhamTemplate', { static: true }) maDuocPhamTemplate: TemplateRef<any>;

    @ViewChild('cboPhanNhomCon', { read: ComboboxTreeComponent, static: false }) cboPhanNhomCon: ComboboxTreeComponent;

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
        this.documentType = DocumentType.DanhMucHopDongThauDuocPham;
        const id: number = this.route.snapshot.params.id;

        this.hopDongThauDuocPham = new HopDongThauDuocPham();
        this.hopDongThauDuocPhamChiTiet = new HopDongThauDuocPhamChiTiet();

        this.hopDongThauDuocPhamSource = new HopDongThauDuocPham();

        const hopDongThauDuocPhamChiTietDataSource = new HopDongThauDuocPhamChiTiet();
        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.push(hopDongThauDuocPhamChiTietDataSource);
        this.ClearData();

        if (id) {
            this.getById(id);
        } else {
            this.showGrid = true;
            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(0, 1);
            this.setDataGridView(this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets);
            this.isCreate = true;
        }
        this.gridColumns = [
            { Field: "DuocPham", Title: "Dược Phẩm", MinWidth: 150, Template: this.duocPhamThauTemplate },
            { Field: "Gia", Title: "Giá", Width: 150, Template: this.giaTemplate },
            { Field: "SoLuongDisplay", Title: "Số Lượng", Width: 150 },
            { Field: 'SuDungTaiBenhVienDisplay', Title: 'Sử Dụng tại BV', Width: 150 },
            { Field: 'MaDuocPhamBenhVien', Title: 'Mã tại BV', Width: 150, Template: this.maDuocPhamTemplate },
            // { Field: 'DuocPhamBenhVienPhanNhomId', Title: 'Nhóm dịch vụ', Width: 150 },
            { Field: "Action", Title: "", Width: 150, Template: this.trangThaiTemplate }
        ];
    }

    setDataGridView(dataSource: any) {
        this.dataSourceCache = dataSource;
        this.gridDataSource = {
            data: this.dataSourceCache,
            total: 1
        };


        if (this.gridHdtDp) {
            this.gridHdtDp.gridDataSource = { ...this.gridDataSource };
            this.gridHdtDp.setDataSource();
        }
    }

    getSharedData() {
        return this.hopDongThauDuocPham;
    }

    getById(id: number) {
        this.baseService.getById<HopDongThauDuocPham>(id).subscribe(resultData => {
            if (resultData.NhapKhoDuocPhamChiTiets.length != 0) {
                this.isDisableUpdate = true;
            }

            this.showGrid = true;
            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(0, 1);
            this.hopDongThauDuocPham = resultData;
            var len = this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.length;

            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    let hopDongChiTietDataSource = this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i];
                    hopDongChiTietDataSource.SoLuongDisplay =
                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i].SoLuong.toLocaleString("vi-VI");
                    this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i].IdGrid = Math.random();
                    hopDongChiTietDataSource.IdGrid = this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i].IdGrid;
                    if (hopDongChiTietDataSource.SuDungTaiBenhVien == true) {
                        hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Có";
                    }
                    else {
                        hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Không";
                    }
                    this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.push(hopDongChiTietDataSource);
                }
                this._idHopDongThauChiTiet = this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[len - 1].Id + 1;
                this.setDataGridView(this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets);
            } else {
                this.setDataGridView([]);
            }
        });
    }

    onChangeDuocPham(event: any) {
        if (event) {
            this.hopDongThauDuocPhamChiTiet.DuocPham = event.DisplayName;
            this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien = event.SuDungTaiBenhVien;
            this.disabledSuDungTaiBenhVien = event.SuDungTaiBenhVien == true;
            this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = event.MaDuocPhamBenhVien;

            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = null;

            this.isGetDuocPhamDaTao = false;
            if(event.DuocPhamBenhVienId != null && event.DuocPhamBenhVienId != 0 && event.SuDungTaiBenhVien == true)
            {
                this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = event.DuocPhamBenhVienId;
                let phanNhomConId = null;
                let tenPhanNhomCon = null;
                this.apiService.get<any>("HopDongThauDuocPham/GetThongTinPhanNhomDuocPhamBenhVien?id="+ event.DuocPhamBenhVienId).subscribe(resultData => {
                    if(resultData)
                    {
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = resultData.DuocPhamBenhVienPhanNhomChaId;
                        this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = resultData.TenDuocPhamBenhVienPhanNhomCha;
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = resultData.DuocPhamBenhVienPhanNhomId;
                        // this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = resultData.DuocPhamBenhVienPhanNhomConId;
                        // this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = resultData.TenDuocPhamBenhVienPhanNhomCon;
                        // this.cboPhanNhomCon.setValueDefaultWhenUpdateDatasource();

                        phanNhomConId = resultData.DuocPhamBenhVienPhanNhomConId;
                        tenPhanNhomCon = resultData.TenDuocPhamBenhVienPhanNhomCon;
                        this.isGetDuocPhamDaTao = true;
                    }
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                }, () => {
                    var self = this;
                    self.cboPhanNhomCon.queryInfo.ParameterDependencies = "{DuocPhamBenhVienPhanNhomChaId:" + this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId + "}";
                    self.cboPhanNhomCon.getDataForLookup();
                    setTimeout(function () {
                        self.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = phanNhomConId;
                        self.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = tenPhanNhomCon;
                    }, 500);
                 });
            }
            else
            {
                this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = null;
                this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = null;
                this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
                this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
                this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
            }
        }
    }
    modelChangeSuDungTaiBenhVien(event: any) {
        this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = null;
        this.getMaTaoMoiDuocPham();
    }
    ConfirmDelete(dataItem: any) {
        this.validationErrors = [];
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length === 1) {
                    this.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa hết"]) }
                    }).afterClosed().subscribe(result => {
                        if (result === 'Yes') {
                            this.Delete(dataItem.IdGrid);
                        }
                    });
                }
                else {
                    this.Delete(dataItem.IdGrid);
                }
            }
        });
    }

    Delete(id: number) {
        this.ClearData();

        // find position
        let hopDongThauDuocPhamChiTiet = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets;

        let maDuocPham = null;
        for (const chiTiet of hopDongThauDuocPhamChiTiet) {
            if (chiTiet.IdGrid === id) {
                var position = hopDongThauDuocPhamChiTiet.indexOf(chiTiet);
                if(chiTiet.DuocPhamBenhVienId == null || chiTiet.DuocPhamBenhVienId == null)
                {
                    maDuocPham = chiTiet.MaDuocPhamBenhVien;
                }
                break;
            }
        }

        // delete by its position
        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.splice(position, 1);
        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(position, 1);
        if(maDuocPham != null && maDuocPham != "")
        {
            this.arrayMaDuocPhamTemp = this.arrayMaDuocPhamTemp.filter(x => x != maDuocPham);
        }
        this.notificationService.showSuccess(NhapXuatKhoMessage.MessageRemoveItemGrid);
    }

    ThemDuocPham() {
        this.showFormDetail = !this.showFormDetail;

        if (this.validationErrors == null) {
            this.validationErrors = [];
        } else {
            if (this.validationErrors != null && this.validationErrors.length != 0) {
                this.validationErrors = [];
            }
        }
    }

    BindValue(dataItem: any) {
        this.hopDongThauDuocPhamChiTiet = new HopDongThauDuocPhamChiTiet();
        if (this.validationErrors == null) {
            this.validationErrors = [];
        } else {
            if (this.validationErrors != null && this.validationErrors.length != 0) {
                this.validationErrors = [];
            }
        }

        this.hopDongThauDuocPhamChiTiet.DuocPhamId = dataItem.DuocPhamId;
        this.hopDongThauDuocPhamChiTiet.DuocPham = dataItem.DuocPham;
        this.hopDongThauDuocPhamChiTiet.Gia = dataItem.Gia;
        this.hopDongThauDuocPhamChiTiet.SoLuong = dataItem.SoLuong;
        this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien = dataItem.SuDungTaiBenhVien;
        if (this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien == true) {
            this.disabledSuDungTaiBenhVien = true;

            //BVHD-3454
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = dataItem.DuocPhamBenhVienId;
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = dataItem.DuocPhamBenhVienPhanNhomId;
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = dataItem.DuocPhamBenhVienPhanNhomChaId;
            this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = dataItem.TenDuocPhamBenhVienPhanNhomCha;

            var self = this;
            setTimeout(function () {
                self.cboPhanNhomCon.getDataForLookup();
                self.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = dataItem.DuocPhamBenhVienPhanNhomConId;
                self.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = dataItem.TenDuocPhamBenhVienPhanNhomCon;
            }, 200);
            
        }
        else{
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = null;
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = null;
            this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = null;
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
            this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
        }
        this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = dataItem.MaDuocPhamBenhVien;
        this.idUpdate = dataItem.IdGrid;
        this.isUpdate = true;
        this.showFormDetail = true;
    }

    ClearData() {
        this.hopDongThauDuocPham.Nam = (new Date()).getFullYear();
        this.showFormDetail = false;
        this.hopDongThauDuocPhamChiTiet.DuocPhamId = null;
        this.hopDongThauDuocPhamChiTiet.DuocPham = null;
        this.hopDongThauDuocPhamChiTiet.Gia = null;
        this.hopDongThauDuocPhamChiTiet.SoLuong = null;
        this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien = false;
        this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = null;

        //BVHD-3454
        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = null;
        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
        this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = null;
        this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = null;

        this.isUpdate = false;
    }

    Add() {
        // add into grid
        this._idHopDongThauChiTiet = this._idHopDongThauChiTiet + 1;
        let hopDongChiTietDataSource = this.hopDongThauDuocPhamChiTiet;
        //this.validationFormClient(hopDongChiTietDataSource, 0, 0);

        if (this.hopDongThauDuocPhamChiTiet.DuocPhamId != null 
            && this.hopDongThauDuocPhamChiTiet.DuocPhamId != 0 
            && this.checkExist(this.hopDongThauDuocPhamChiTiet.DuocPhamId)) {
            this.notificationService.showError("Dược phẩm này đã có trong danh sách thầu chi tiết");
            return;
        }

        //if (hopDongChiTietDataSource.DuocPhamId != null) {
        this.validationErrorsForDetail = [];
        this.hopDongThauDuocPhamChiTiet.MaDuocPhamTemps = [];
        this.arrayMaDuocPhamTemp.forEach(element => {
            this.hopDongThauDuocPhamChiTiet.MaDuocPhamTemps.push(element);
        });
        this.apiService.post<any>("HopDongThauDuocPham/KiemTraHopDongThauDuocPhamChiTiet", this.hopDongThauDuocPhamChiTiet).subscribe(resultValid => {
            // this.apiService.post<any>("HopDongThauDuocPham/GetHieuLucDuocPham?id=" + hopDongChiTietDataSource.DuocPhamId).subscribe(resultData => {
            //     if (resultData) {
            //         if (resultData === false) {
            //             if (this.validationErrorsForDetail == null) {
            //                 this.validationErrorsForDetail = [];
            //             }
            //             this.validationErrorsForDetail.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã hết hiệu lực" });
            //         }
                    hopDongChiTietDataSource.HopDongThauDuocPhamId = this.hopDongThauDuocPham.Id;

                    // update Id cho row, rất quan trọng, nếu ko có dòng này thì row sẽ bị xử lý bậy bạ
                    hopDongChiTietDataSource.Id = this._idHopDongThauChiTiet;

                    //if (!this.validationErrorsForDetail) {
                        hopDongChiTietDataSource.GiaDisplay = hopDongChiTietDataSource.Gia.toLocaleString("vi-VI");
                        hopDongChiTietDataSource.SoLuongDisplay = hopDongChiTietDataSource.SoLuong.toLocaleString("vi-VI");
                        hopDongChiTietDataSource.IdGrid = Math.random();
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.push(hopDongChiTietDataSource);

                        // add into data
                        let hopDongChiTiet = new HopDongThauDuocPhamChiTiet();
                        hopDongChiTiet.HopDongThauDuocPhamId = this.hopDongThauDuocPham.Id;
                        hopDongChiTiet.DuocPhamId = this.hopDongThauDuocPhamChiTiet.DuocPhamId;
                        hopDongChiTiet.DuocPham = hopDongChiTietDataSource.DuocPham;
                        hopDongChiTiet.Gia = this.hopDongThauDuocPhamChiTiet.Gia;
                        hopDongChiTiet.GiaDisplay = hopDongChiTietDataSource.GiaDisplay;
                        hopDongChiTiet.SoLuong = this.hopDongThauDuocPhamChiTiet.SoLuong;
                        hopDongChiTiet.SoLuongDisplay = hopDongChiTietDataSource.SoLuongDisplay;
                        hopDongChiTiet.SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
                        if (hopDongChiTiet.SuDungTaiBenhVien == true) {
                            hopDongChiTiet.SuDungTaiBenhVienDisplay = "Có";

                            hopDongChiTiet.DuocPhamBenhVienId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId;
                            hopDongChiTiet.DuocPhamBenhVienPhanNhomId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId;
                            hopDongChiTiet.DuocPhamBenhVienPhanNhomConId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId;
                            hopDongChiTiet.TenDuocPhamBenhVienPhanNhomCon = this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon;
                            hopDongChiTiet.DuocPhamBenhVienPhanNhomChaId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId;
                            hopDongChiTiet.TenDuocPhamBenhVienPhanNhomCha = this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha;
                            this.arrayMaDuocPhamTemp.push(this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien);
                        }
                        else {
                            hopDongChiTiet.SuDungTaiBenhVienDisplay = "Không";
                        }

                        hopDongChiTiet.MaDuocPhamBenhVien = hopDongChiTietDataSource.MaDuocPhamBenhVien;
                        hopDongChiTiet.SoLuongDaCap = 0;
                        hopDongChiTiet.IdGrid = hopDongChiTietDataSource.IdGrid;

                        if (this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.length > 0) {
                            if (this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[0].DuocPham === null) {
                                this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.splice(0, 1);
                            }
                        }

                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.push(hopDongChiTiet);

                        for (const chiTiet of this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets) {
                            if (chiTiet.Id === this._idHopDongThauChiTiet) {
                                const position = this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.indexOf(chiTiet);
                                this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].Id = 0;
                                break;
                            }
                        }

                        this.RemoveRedundantItem();
                        // clear data on screen
                        this.setDataGridView(this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets);
                        this.hopDongThauDuocPhamChiTiet = new HopDongThauDuocPhamChiTiet();
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
        this.hopDongThauDuocPhamChiTiet.GiaDisplay = this.hopDongThauDuocPhamChiTiet.Gia.toLocaleString("vi-VI");
        this.hopDongThauDuocPhamChiTiet.SoLuongDisplay = this.hopDongThauDuocPhamChiTiet.SoLuong.toLocaleString("vi-VI");
        let id = this.idUpdate;

        for (const chiTiet of this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets) {
            if (chiTiet.IdGrid === id) {
                var position = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.indexOf(chiTiet);
                break;
            }
        }

        let hopDongChiTietDataSource = this.hopDongThauDuocPhamChiTiet;
        //this.validationFormClient(hopDongChiTietDataSource, 1, position);

        if (this.hopDongThauDuocPhamChiTiet.DuocPhamId != null 
            && this.hopDongThauDuocPhamChiTiet.DuocPhamId != 0 
            && this.checkExistOnAmendation(this.hopDongThauDuocPhamChiTiet.DuocPhamId, position)) {
                this.notificationService.showError("Dược phẩm này đã có trong danh sách thầu chi tiết");
                return;
        }

        //if (hopDongChiTietDataSource.DuocPhamId) {
            this.apiService.post<any>("HopDongThauDuocPham/KiemTraHopDongThauDuocPhamChiTiet", this.hopDongThauDuocPhamChiTiet).subscribe(resultValid => {
            // this.apiService.post<any>("HopDongThauDuocPham/GetHieuLucDuocPham?id=" + hopDongChiTietDataSource.DuocPhamId).subscribe(resultData => {
            //     if (resultData) {
            //         if (resultData === false) {
            //             if (this.validationErrors == null) {
            //                 this.validationErrors = [];
            //             }
            //             this.validationErrors.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã hết hiệu lực" });
            //         }

            //         if (!this.validationErrors) {
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPham = hopDongChiTietDataSource.DuocPham;
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamId =
                            hopDongChiTietDataSource.DuocPhamId;
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].GiaDisplay =
                            this.hopDongThauDuocPhamChiTiet.GiaDisplay;
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SoLuongDisplay =
                            this.hopDongThauDuocPhamChiTiet.SoLuongDisplay;
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
                        if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVien == true) {
                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVienDisplay = "Có";

                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId;
                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienPhanNhomId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId;
                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienPhanNhomConId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId;
                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].TenDuocPhamBenhVienPhanNhomCon = this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon;
                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienPhanNhomChaId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId;
                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].TenDuocPhamBenhVienPhanNhomCha = this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha;
                            this.arrayMaDuocPhamTemp.push(this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien);
                        }
                        else {
                            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVienDisplay = "Không";
                        }
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].MaDuocPhamBenhVien = hopDongChiTietDataSource.MaDuocPhamBenhVien;

                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].DuocPham = hopDongChiTietDataSource.DuocPham;
                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].DuocPhamId = hopDongChiTietDataSource.DuocPhamId;
                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].GiaDisplay = hopDongChiTietDataSource.GiaDisplay;
                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].SoLuongDisplay =
                            hopDongChiTietDataSource.SoLuongDisplay;

                        // update into data
                        // let hopDongChiTiets = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets;
                        // let hopDongThauDuocPhamChiTiet = new HopDongThauDuocPhamChiTiet();
                        // let hopDongThauDuocPham = new HopDongThauDuocPham();
                        // hopDongThauDuocPham = this.hopDongThauDuocPham;
                        // hopDongThauDuocPhamChiTiet = this.hopDongThauDuocPhamChiTiet;
                        // hopDongChiTiets.forEach(hopDongChiTiet => {
                        //     if (hopDongChiTiet.IdGrid === id) {
                        //         hopDongChiTiet.HopDongThauDuocPhamId = hopDongThauDuocPham.Id;
                        //         hopDongChiTiet.DuocPhamId = hopDongThauDuocPhamChiTiet.DuocPhamId;
                        //         hopDongChiTiet.Gia = hopDongThauDuocPhamChiTiet.Gia;
                        //         hopDongChiTiet.SoLuong = hopDongThauDuocPhamChiTiet.SoLuong;
                        //     }
                        // });
                        // this.RemoveRedundantItem();
                        this.setDataGridView(this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets);
                        // clear
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

    RemoveRedundantItem() {
        var len = this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.length;

        if (this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[len - 1].Id === 0
            && this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[len - 1].DuocPham === null) {
            this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.splice(len - 1, 1);
        }

        var lenDataSource = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length;

        if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[lenDataSource - 1].Id === 0
            && this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[lenDataSource - 1].DuocPham === null) {
            this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(lenDataSource - 1, 1);
        }
    }

    validationFormClient(dataval: any, type: number, position: number) {
        // type = 0 là add, type = 1 là update
        this.validationErrors = null;
        let array = [];
        if (dataval) {
            if (dataval.DuocPhamId == null || dataval.DuocPhamId == 0)
                array.push({ Field: "DuocPhamId", Message: "Yêu cầu chọn dược phẩm" })

            if (dataval.Gia == null || dataval.Gia == 0)
                array.push({ Field: "Gia", Message: "Giá yêu cầu nhập" })

            if (dataval.SoLuong == null || dataval.SoLuong == 0)
                array.push({ Field: "SoLuong", Message: "Số lượng yêu cầu nhập" })
        }

        if (type === 0) {
            if (this.checkExist(dataval.DuocPhamId)) {
                array.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã có trong danh sách thầu chi tiết" })
            }
        }

        if (type === 1) {
            if (this.checkExistOnAmendation(dataval.DuocPhamId, position)) {
                array.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã có trong danh sách thầu chi tiết" })
            }
        }
        if (this.disabledSuDungTaiBenhVien == false && this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien == true) {
            if (this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien == null || this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien == "") {
                this.validationErrorsForDetail.push({ Field: 'MaDuocPhamBenhVien', Message: 'Yêu cầu nhập Mã dược phẩm bệnh viện' });
                // this.apiService.post<any>("HopDongThauDuocPham/ValidateHopDongThauDuocPham",this.hopDongThauDuocPhamChiTiet).subscribe(resultData => {
                //     if (resultData) {
                //     }
                //       this.validationErrorsForDetail.push({ Field: 'MaDuocPhamBenhVien', Message: 'Yêu cầu nhập Mã dược phẩm bệnh viện' });
                //     });

            }
        }
        if (array.length > 0) this.validationErrors = array;

    }

    checkExist(duocPhamId: number) {
        let len = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length;

        for (let i = 0; i < len; i++) {
            if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[i].DuocPhamId === duocPhamId) {
                return true;
            }
        }

        return false;
    }

    checkExistOnAmendation(duocPhamId: number, position: number) {
        let len = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length;

        for (let i = 0; i < len; i++) {
            if (i === position) {
                continue;
            }
            if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[i].DuocPhamId === duocPhamId) {
                return true;
            }
        }

        return false;
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/hop-dong-thau/duoc-pham']);
    }

    onKeyAddDp(keyInput: any) {
        if (keyInput.keyCode === 13) {
            if (!this.isUpdate) {
                if (this.duocPhamDisabled !== true) {
                    this.Add();
                } else {
                    this.duocPhamDisabled = false;
                }
            } else {
                if (this.duocPhamDisabled !== true) {
                    this.Update();
                } else {
                    this.duocPhamDisabled = false;
                }
            }
        }
    }

    openComboboxHdt(isOpen: boolean) {
        this.duocPhamDisabled = isOpen;
    }

    ngayChange(dataItem: any, laCongBo: boolean) {
        this.validationErrors = [];
        if (laCongBo) {
            if (dataItem != undefined && dataItem != null) {
                this.hopDongThauDuocPham.NgayHieuLuc = dataItem;
            } else {
                this.hopDongThauDuocPham.NgayHieuLuc = null;
            }
        } else {
            if (dataItem != undefined && dataItem != null) {
                this.hopDongThauDuocPham.CongBo = dataItem;
            } else {
                this.hopDongThauDuocPham.CongBo = null;
            }
        }
    }


    // BVHD-3454
    nhomChaChange(duocPhamBenhVienPhanNhomChaId: number) {
        if(!this.isGetDuocPhamDaTao)
        {
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
            this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
        }
        else{
            this.isGetDuocPhamDaTao = false;
        }

        if (duocPhamBenhVienPhanNhomChaId != undefined && duocPhamBenhVienPhanNhomChaId != null) {
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomChaId;
        } else {
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
        }
        this.cboPhanNhomCon.queryInfo.ParameterDependencies = "{DuocPhamBenhVienPhanNhomChaId:" + this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId + "}";
        this.cboPhanNhomCon.getDataForLookup();
        this.getMaTaoMoiDuocPham(null, this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId);
    }

    nhomConChange(duocPhamBenhVienPhanNhomConId: number) {
        if (duocPhamBenhVienPhanNhomConId != undefined && duocPhamBenhVienPhanNhomConId != null) {
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomConId;
        } else {
            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId;
        }
        this.getMaTaoMoiDuocPham(null, this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId);
    }

    getMaTaoMoiDuocPham(tenDuocPham: string = null, phanNhomId: number = null) {
        if ((this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId == null || this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId == 0)) { //&& !this.disabledSuDungTaiBenhVien
            let tenDuocPhamTemp = tenDuocPham == null ? this.hopDongThauDuocPhamChiTiet.DuocPham : tenDuocPham;
            let phanNhomIdTemp = phanNhomId == null ? this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId : phanNhomId;
            if (tenDuocPhamTemp != null && phanNhomIdTemp != null) {
                var obj = {
                    TenDuocPham: tenDuocPhamTemp,
                    PhanNhomId: phanNhomIdTemp,
                    MaDuocPhamTemps: this.arrayMaDuocPhamTemp
                }
                this.apiService.post<any>("DuocPhamBenhVien/GetMaTaoMoiDuocPham", obj).subscribe(
                    resultData => {
                        if (resultData) {
                            this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = resultData;
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
