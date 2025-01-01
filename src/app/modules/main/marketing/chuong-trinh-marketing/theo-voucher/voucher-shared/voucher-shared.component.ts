import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LookupItemVo } from 'src/app/shared/models/common.model';
import { LoaiChietKhau, LoaiDichVuBenhVien, LoaiDichVuVoucherMarketing, Voucher, VoucherChiTietMienGiam } from '../voucher.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage, VoucherMarketingMessage } from 'src/app/shared/configdata/system-message';
import icDelete from '@iconify/icons-ic/twotone-delete';

@Component({
	selector: 'app-voucher-shared',
	templateUrl: './voucher-shared.component.html',
	styleUrls: ['./voucher-shared.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class VoucherSharedComponent implements OnInit {
	loaiDichVuVoucherMarketing = LoaiDichVuVoucherMarketing;
	loaiChietKhau = LoaiChietKhau;
	loaiDichVuBenhVien = LoaiDichVuBenhVien;
	loaiGia: Array<LookupItemVo>;
	
	voucher = {} as Voucher;
	dichVuVoucher = {} as VoucherChiTietMienGiam;
	// lstDichVuVouchers: DichVuVoucher[] = [];

	// loaiDichVuBenhVien: number; //DVKT, DVBV
    isCreate = true;
	validationErrors: any;
	documentType: DocumentType = DocumentType.VoucherMarketing;
	idVoucher: number = 0;
	tongSoBenhNhanSuDung: number = 0;
	isSelectingDichVu: boolean = false;
	currentDichVuId: number = 0;
	isAlreadyGetDataDichVuDonLe: boolean = false;
	isAlreadyGetDataNhomDichVu: boolean = false;

	isExistDataDichVuDonLe: boolean = false;
	isExistDataNhomDichVu: boolean = false;
	
	gridColumns: any[] = [];
	gridDataSource: any = {};

	gridNhomDichVuColumns: any[] = [];
	gridNhomDichVuDataSource: any = {};
	
	urlGetListDichVuForGrid = `Voucher/GetListDichVuForGridAsync?voucherId=${this.idVoucher}`;
	urlGetPagesListDichVuForGrid = `Voucher/GetPagesListDichVuForGridAsync?voucherId=${this.idVoucher}`;

	urlGetListNhomDichVuForGrid = `Voucher/GetListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
	urlGetPagesListNhomDichVuForGrid = `Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;

	radioDichVuItems = [
		{ Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
		{ Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
		{ Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: false }
	];

	radioChietKhauItems = [
		{ Value: this.loaiChietKhau.ChietKhauTheoSoTien, Text: 'CK theo số tiền' },
		{ Value: this.loaiChietKhau.ChietKhauTheoTiLe, Text: 'CK theo %' }
	];

	radioChietKhauChiTietItems = [
		{ Value: this.loaiChietKhau.ChietKhauTheoSoTien, Text: '$' },
		{ Value: this.loaiChietKhau.ChietKhauTheoTiLe, Text: '%' }
	];

	icDelete = icDelete;

	// @ViewChild('checkBoxHeaderTemplate', {read: TemplateRef, static: true}) checkBoxHeaderTemplate: TemplateRef<any>;
	// @ViewChild('checkBoxTemplate', {read: TemplateRef, static: true}) checkBoxTemplate: TemplateRef<any>;
	@ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
	@ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;
	@ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
	@ViewChild('chietKhauTemplate', { static: true }) chietKhauTemplate: TemplateRef<any>;
	@ViewChild('chietKhauNhomDichVuTemplate', { static: true }) chietKhauNhomDichVuTemplate: TemplateRef<any>;
	@ViewChild('donGiaSauChietKhauTemplate', { static: true }) donGiaSauChietKhauTemplate: TemplateRef<any>;
	@ViewChild('ghiChuTemplate', { static: true }) ghiChuTemplate: TemplateRef<any>;
	@ViewChild('ghiChuNhomDichVuTemplate', { static: true }) ghiChuNhomDichVuTemplate: TemplateRef<any>;
	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

	@ViewChild('gridDanhSachDichVu', { static: false }) gridDanhSachDichVu: GridComponent;
	@ViewChild('gridDanhSachNhomDichVu', { static: false }) gridDanhSachNhomDichVu: GridComponent;
	
	constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
				private baseService: BaseService,  private notificationService: NotificationService,
				private cd: ChangeDetectorRef, private dialog: MatDialog) { }

	ngOnInit() {
		const id: number = this.route.snapshot.params.id;
		
        if(id) {
			this.idVoucher = id;

			this.urlGetListDichVuForGrid = `Voucher/GetListDichVuForGridAsync?voucherId=${this.idVoucher}`;
			this.urlGetPagesListDichVuForGrid = `Voucher/GetPagesListDichVuForGridAsync?voucherId=${this.idVoucher}`;
			this.urlGetListNhomDichVuForGrid = `Voucher/GetListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
			this.urlGetPagesListNhomDichVuForGrid = `Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;

			this.getTongSoBenhNhanSuDungDichVu();
            this.getById(id);
            this.isCreate = false;
		} else {
			this.voucher.ChietKhauTatCaDichVu = true;
			this.voucher.LoaiDichVuVoucherMarketing = LoaiDichVuVoucherMarketing.DichVu;
			this.voucher.LoaiChietKhau = LoaiChietKhau.ChietKhauTheoSoTien;
			this.voucher.lstVoucherChiTietMienGiam = [];
			this.voucher.lstVoucherChiTietMienGiamNhomDichVu = [];
		}

		//Dịch vụ
		this.loaiGia = [];
		this.dichVuVoucher.LoaiGiaId = null;
		this.dichVuVoucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
		this.dichVuVoucher.TiLeChietKhau = null;
		this.dichVuVoucher.SoTienChietKhau = null;

		//Grid
		this.gridColumns = [
			// { Field: "CheckBox", Title: "", Width: 20 , Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
			{ Field: "LoaiDichVuBenhVienDisplay", Title: "", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomDichVuTemplate },
			{ Field: "MaDichVu", Title: "Mã", Width: 100 },
			{ Field: "DichVuDisplay", Title: "Tên dịch vụ", MinWidth: 180 },
			{ Field: "LoaiGiaId", Title: "Loại giá", Width: 100, Template: this.loaiGiaTemplate },
			{ Field: "DonGia", Title: "Đơn giá", Width: 150, Template: this.donGiaTemplate },
			{ Field: "ChietKhau", Title: "Chiết khấu", Width: 230, Template: this.chietKhauTemplate },
			{ Field: "DonGiaSauChietKhau", Title: "Đơn giá sau CK", Width: 150, Template: this.donGiaSauChietKhauTemplate },
			{ Field: "GhiChu", Title: "Ghi chú", Width: 200, Template: this.ghiChuTemplate },
			{ Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
		]

		this.gridNhomDichVuColumns = [
			{ Field: "NhomDichVuDisplay", Title: "Nhóm dịch vụ", MinWidth: 200 },
			{ Field: "ChietKhau", Title: "Chiết khấu", Width: 230, Template: this.chietKhauNhomDichVuTemplate },
			{ Field: "GhiChu", Title: "Ghi chú", Width: 200, Template: this.ghiChuNhomDichVuTemplate },
			{ Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
		]
	}

	getTongSoBenhNhanSuDungDichVu() {
        this.apiService.get<any>(`Voucher/GetTongSoBenhNhanSuDungDichVu?voucherId=${this.idVoucher}`).subscribe(res => {
            this.tongSoBenhNhanSuDung = res;
        }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        })
    }

	getById(id: number) {
        this.baseService.getById<Voucher>(id).subscribe(res => {
			this.voucher = res;
			// this.voucher.LoaiDichVuVoucherMarketing = LoaiDichVuVoucherMarketing.DichVu;
			// this.voucher.LoaiChietKhau = LoaiChietKhau.ChietKhauTheoSoTien;

			this.voucher.lstVoucherChiTietMienGiam = [];
			this.voucher.lstVoucherChiTietMienGiamNhomDichVu = [];

			// this.getUrlForGrid(res.LoaiDichVuVoucherMarketing);
			this.getRadioDichVuItems(res.LoaiDichVuVoucherMarketing);
			this.changeMaSo();
        }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
            this.router.navigate(['/marketing/ct-marketing/voucher']);
        })
	}

	// getUrlForGrid(loaiDichVuVoucherMarketing) {
	// 	switch(loaiDichVuVoucherMarketing)
	// 	{
	// 		// case this.loaiDichVuVoucherMarketing.DichVu:
	// 		// 	this.urlGetListDichVuForGrid = `Voucher/GetListDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 		// 	this.urlGetPagesListDichVuForGrid = `Voucher/GetPagesListDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 		// 	break;
	// 		// case this.loaiDichVuVoucherMarketing.NhomDichVu:
	// 		// 	this.urlGetListNhomDichVuForGrid = `Voucher/GetListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 		// 	this.urlGetPagesListNhomDichVuForGrid = `Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 		// 	break;
	// 		case this.loaiDichVuVoucherMarketing.TatCaDichVu:
	// 			break;
	// 		default:
	// 			this.urlGetListDichVuForGrid = `Voucher/GetListDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 			this.urlGetPagesListDichVuForGrid = `Voucher/GetPagesListDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 			this.urlGetListNhomDichVuForGrid = `Voucher/GetListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 			this.urlGetPagesListNhomDichVuForGrid = `Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
	// 			break;
	// 	}
	// }

	checkTogetRadioDichVuItems() {
		if(this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
			this.getRadioDichVuItems(this.loaiDichVuVoucherMarketing.DichVu);
		} else if(this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
			this.getRadioDichVuItems(this.loaiDichVuVoucherMarketing.NhomDichVu);
		} else {
			this.getRadioDichVuItems(0);
		}
	}
	
	getRadioDichVuItems(loaiDichVuVoucherMarketing) {
		switch(loaiDichVuVoucherMarketing)
		{
			case this.loaiDichVuVoucherMarketing.DichVu:
				this.radioDichVuItems = [
					{ Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
					{ Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
					{ Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: true }
				];
				break;
			case this.loaiDichVuVoucherMarketing.NhomDichVu:
				this.radioDichVuItems = [
					{ Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
					{ Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
					{ Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: true }
				];
				break;
			case this.loaiDichVuVoucherMarketing.TatCaDichVu:
				this.radioDichVuItems = [
					{ Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: true },
					{ Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: true },
					{ Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: false }
				];
				break;
			default:
				this.radioDichVuItems = [
					{ Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
					{ Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
					{ Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: false }
				];
				break;
		}
	}
    
    getSharedData() {
        return this.voucher;
	}

	loaiDichVuVoucherMarketingChange(evt) {
		this.validationErrors = [];

		this.dichVuVoucher = {} as VoucherChiTietMienGiam;
		this.dichVuVoucher.LoaiGiaId = null;
		this.dichVuVoucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
		this.dichVuVoucher.TiLeChietKhau = null;
		this.dichVuVoucher.SoTienChietKhau = null;
		
		this.voucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
		this.voucher.TiLeChietKhau = null;
		this.voucher.SoTienChietKhau = null;

		if(evt === this.loaiDichVuVoucherMarketing.TatCaDichVu) {
			this.voucher.ChietKhauTatCaDichVu = true;
		} else {
			this.voucher.ChietKhauTatCaDichVu = false;
		}
	}
	
	maVoucherChange(evt) {
		this.changeMaSo();
	}

	soLuongPhatHanhChange(evt) {
		this.changeMaSo();
	}

	changeMaSo() {
		if(this.voucher.Ma && this.voucher.SoLuongPhatHanh) {
			let maSoTu = '';
			maSoTu += "0".repeat(this.voucher.SoLuongPhatHanh.toString().length - 1);
			
			this.voucher.MaSoTu = `${this.voucher.Ma}-${"0".repeat(this.voucher.SoLuongPhatHanh.toString().length - 1)}1`
			this.voucher.MaSoDen = `${this.voucher.Ma}-${this.voucher.SoLuongPhatHanh}`
		} else {
			this.voucher.MaSoTu = '';
			this.voucher.MaSoDen = '';
		}
	}

	removeValidationsDichVu() {
		if(this.validationErrors && this.validationErrors.length > 0) {
			if(this.dichVuVoucher.DichVuId && this.dichVuVoucher.DichVuId !== 0) {
				this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(p => p.Field.includes('DichVuId'))), 1);
			}
			
			if(this.dichVuVoucher.LoaiGiaId && this.dichVuVoucher.LoaiGiaId !== 0) {
				this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(p => p.Field.includes('LoaiGiaId'))), 1);
			}
	
			if(this.dichVuVoucher.DonGia && this.dichVuVoucher.DonGia !== 0) {
				this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(p => p.Field.includes('DonGia'))), 1);
			}
		}
	}

	tenDichVuChange(evt) {
		if(evt) {
			this.dichVuVoucher.LoaiDichVuBenhVien = evt.LoaiDichVu;
			this.dichVuVoucher.LoaiDichVuBenhVienDisplay = evt.LoaiDichVu == this.loaiDichVuBenhVien.KhamBenh ? 'DỊCH VỤ KHÁM BỆNH' : 'DỊCH VỤ KỸ THUẬT';
			this.dichVuVoucher.DichVuDisplay = evt.DisplayName;
			this.dichVuVoucher.MaDichVu = evt.Ma;
			
			// this.apiService.post<any>(`Voucher/GetListLoaiGiaChoDichVu?dichVuId=${evt.KeyId}&loaiDichVu=${evt.LoaiDichVu}`).subscribe(res => {
			this.apiService.post<any>(`Voucher/GetListTatCaLoaiGiaChoDichVu?loaiDichVu=${evt.LoaiDichVu}`).subscribe(res => {
				this.loaiGia = res;
				this.dichVuVoucher.LoaiGiaId = res[0].KeyId;
				this.dichVuVoucher.LoaiGiaDisplay = res[0].DisplayName;

				this.getDonGia();
			}, (err: ApiError) => {
				this.notificationService.showError(err.Message);
			})
		} else {
			this.loaiGia = [];
			this.dichVuVoucher.LoaiGiaId = null;
		}
	}

	nhomDichVuChange(evt) {
		if(evt) {
			this.dichVuVoucher.NhomDichVuDisplay = evt.DisplayName;
			this.dichVuVoucher.NhomDichVuChaId = evt.ParentId;
			this.dichVuVoucher.NhomDichVuConItems = evt.Items;
		}
	}
	loaiGiaChange(evt) {
		// if(evt && )
		if(evt) {
			this.getDonGia();
		} else {
			this.dichVuVoucher.DonGia = 0;
			this.getDonGiaSauChietKhau();
		}
	}

	loaiGiaDichVuChange(evt, dataItem) {
		if(evt) {
			this.getDonGiaDichVu(dataItem);
		} else {
			dataItem.DonGia = 0;
			this.getDonGiaSauChietKhauChoDichVu(dataItem);
		}
	}

	getDonGia() {
		if(this.dichVuVoucher.DichVuId && this.dichVuVoucher.LoaiGiaId && this.dichVuVoucher.LoaiDichVuBenhVien) {
			this.apiService.post<any>(`Voucher/GetDonGiaChoDichVu?dichVuId=${this.dichVuVoucher.DichVuId}&loaiGiaId=${this.dichVuVoucher.LoaiGiaId}&loaiDichVu=${this.dichVuVoucher.LoaiDichVuBenhVien}`).subscribe(res => {
				this.dichVuVoucher.DonGia = res;

				this.getDonGiaSauChietKhau();
			}, (err: ApiError) => {
				this.notificationService.showError(err.Message);
			})
		}
	}

	getDonGiaDichVu(dataItem) {
		if(dataItem.DichVuId && dataItem.LoaiGiaId && dataItem.LoaiDichVuBenhVien) {
			this.apiService.post<any>(`Voucher/GetDonGiaChoDichVu?dichVuId=${dataItem.DichVuId}&loaiGiaId=${dataItem.LoaiGiaId}&loaiDichVu=${dataItem.LoaiDichVuBenhVien}`).subscribe(res => {
				dataItem.DonGia = res;

				this.getDonGiaSauChietKhauChoDichVu(dataItem);
			}, (err: ApiError) => {
				this.notificationService.showError(err.Message);
			})
		}
	}

	loaiChietKhauChange(evt) {
		if(evt) {
			this.dichVuVoucher.TiLeChietKhau = null;
			this.dichVuVoucher.SoTienChietKhau = null
			// this.dichVuVoucher.TiLeChietKhau = 0;
			// this.dichVuVoucher.DonGiaSauChietKhau = this.dichVuVoucher.DonGia;
			this.getDonGiaSauChietKhau();
		}
	}

	loaiChietKhauChiTietDichVuChange(evt, dataItem) {
		if(evt) {
			dataItem.TiLeChietKhau = null;
			dataItem.SoTienChietKhau = null
			// this.dichVuVoucher.TiLeChietKhau = 0;
			// this.dichVuVoucher.DonGiaSauChietKhau = this.dichVuVoucher.DonGia;
			this.getDonGiaSauChietKhauChoDichVu(dataItem);
		}
	}

	loaiChietKhauChiTietNhomDichVuChange(evt, dataItem) {
		if(evt) {
			dataItem.TiLeChietKhau = null;
			dataItem.SoTienChietKhau = null
		}
	}

	chietKhauChange(evt) {
		if(evt) {
			if(this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
				this.dichVuVoucher.SoTienChietKhau = evt > this.dichVuVoucher.DonGia ? this.dichVuVoucher.DonGia : evt;
			}

			// this.getDonGiaSauChietKhau();
		}

		this.getDonGiaSauChietKhau();
	}

	chietKhauDichVuChange(evt, dataItem) {
		if(evt) {
			if(dataItem.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
				dataItem.SoTienChietKhau = evt > dataItem.DonGia ? dataItem.DonGia : evt;

				if (this.validationErrors && this.validationErrors.some(p => p.Field.includes('dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].SoTienChietKhau'))) {
					this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(p => p.Field.includes('dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].SoTienChietKhau'))), 1);
				}
			} else {
				if (this.validationErrors && this.validationErrors.some(p => p.Field.includes('dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].TiLeChietKhau'))) {
					this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(p => p.Field.includes('dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].TiLeChietKhau'))), 1);
				}
			}

			// this.getDonGiaSauChietKhauChoDichVu(dataItem);
		}

		this.getDonGiaSauChietKhauChoDichVu(dataItem);
	}

	getDonGiaSauChietKhau() {
		if(this.dichVuVoucher.DonGia && this.dichVuVoucher.DonGia != 0) {
			switch(this.dichVuVoucher.LoaiChietKhau)
			{
				case this.loaiChietKhau.ChietKhauTheoSoTien:
					this.dichVuVoucher.SoTienChietKhau = this.dichVuVoucher.SoTienChietKhau > this.dichVuVoucher.DonGia ? this.dichVuVoucher.DonGia : this.dichVuVoucher.SoTienChietKhau;
					this.dichVuVoucher.DonGiaSauChietKhau = this.dichVuVoucher.DonGia - this.dichVuVoucher.SoTienChietKhau;
					break;
				case this.loaiChietKhau.ChietKhauTheoTiLe:
					this.dichVuVoucher.DonGiaSauChietKhau = (this.dichVuVoucher.DonGia * (100 - this.dichVuVoucher.TiLeChietKhau)) / 100;
					break;
			}
		} else {
			this.dichVuVoucher.DonGiaSauChietKhau = 0;
		}

		this.removeValidationsDichVu();
	}

	getDonGiaSauChietKhauChoDichVu(dataItem) {
		if(dataItem.DonGia && dataItem.DonGia != 0) {
			switch(dataItem.LoaiChietKhau)
			{
				case this.loaiChietKhau.ChietKhauTheoSoTien:
					dataItem.DonGiaSauChietKhau = dataItem.DonGia - dataItem.SoTienChietKhau;
					break;
				case this.loaiChietKhau.ChietKhauTheoTiLe:
					dataItem.DonGiaSauChietKhau = (dataItem.DonGia * (100 - dataItem.TiLeChietKhau)) / 100;
					break;
			}
		} else {
			dataItem.DonGiaSauChietKhau = 0;
		}
	}

	validationFormClient() {
		this.validationErrors = [];
		
		const array = [];
		
        if (this.dichVuVoucher) {
            if (this.dichVuVoucher.DichVuId === 0 || !this.dichVuVoucher.DichVuId) {
                array.push({ Field: 'DichVuId', Message: VoucherMarketingMessage.MessageDichVuRequired });
            }

            if (this.dichVuVoucher.LoaiGiaId === 0 || !this.dichVuVoucher.LoaiGiaId) {
                array.push({ Field: 'LoaiGiaId', Message: VoucherMarketingMessage.MessageLoaiGiaRequired });
			}

			if (!this.dichVuVoucher.DonGia || this.dichVuVoucher.DonGia === 0) {
				array.push({ Field: 'DonGia', Message: VoucherMarketingMessage.MessageDonGiaNotNull });
			}
			
			if(this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
				if(!this.dichVuVoucher.SoTienChietKhau || this.dichVuVoucher.SoTienChietKhau === 0) {
					array.push({ Field: 'SoTienChietKhau', Message: VoucherMarketingMessage.MessageSoTienChietKhauRequired });
				} else if (this.dichVuVoucher.SoTienChietKhau > this.dichVuVoucher.DonGia) {
					array.push({ Field: 'SoTienChietKhau', Message: VoucherMarketingMessage.MessageSoTienChietKhauGreaterThanDonGiaRequired });
				} else if (this.dichVuVoucher.SoTienChietKhau < 1000) {
					array.push({ Field: 'SoTienChietKhau', Message: VoucherMarketingMessage.MessageSoTienChietKhauItNhat1000 });
				}
			}

			if(this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe) {
				if(!this.dichVuVoucher.TiLeChietKhau || this.dichVuVoucher.TiLeChietKhau === 0) {
					array.push({ Field: 'TiLeChietKhau', Message: VoucherMarketingMessage.MessageTiLeChietKhauRequired });
				}
			}
        }

        if (this.checkExist(this.dichVuVoucher.DichVuId)) {
            array.push({ Field: 'DichVuId', Message: VoucherMarketingMessage.MessageDichVuIsExistedInList });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
	}

	validationFormNhomDichVuClient() {
		this.validationErrors = [];
		
		const array = [];
        if (this.dichVuVoucher) {
            if (this.dichVuVoucher.NhomDichVuId === 0 || !this.dichVuVoucher.NhomDichVuId) {
                array.push({ Field: 'NhomDichVuId', Message: VoucherMarketingMessage.MessageNhomDichVuRequired });
			}
			
			if(this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
				if(!this.dichVuVoucher.SoTienChietKhau || this.dichVuVoucher.SoTienChietKhau === 0) {
					array.push({ Field: 'SoTienChietKhauNhomDichVu', Message: VoucherMarketingMessage.MessageSoTienChietKhauRequired });
				} else if(this.dichVuVoucher.SoTienChietKhau < 1000) {
					array.push({ Field: 'SoTienChietKhauNhomDichVu', Message: VoucherMarketingMessage.MessageSoTienChietKhauItNhat1000 });
				}
			}

			if(this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe) {
				if(!this.dichVuVoucher.TiLeChietKhau || this.dichVuVoucher.TiLeChietKhau === 0) {
					array.push({ Field: 'TiLeChietKhauNhomDichVu', Message: VoucherMarketingMessage.MessageTiLeChietKhauRequired });
				}
			}
        }

        if (this.checkExistNhomDichVu(this.dichVuVoucher.NhomDichVuId)) {
            array.push({ Field: 'NhomDichVuId', Message: VoucherMarketingMessage.MessageNhomDichVuIsExistedInList });
		} else if(this.checkExistNhomDichVuCha(this.dichVuVoucher.NhomDichVuChaId)) {
			array.push({ Field: 'NhomDichVuId', Message: VoucherMarketingMessage.MessageNhomDichVuChaIsExistedInList });
		} else if(this.checkExistNhomDichVuCon(this.dichVuVoucher.NhomDichVuConItems)) {
			array.push({ Field: 'NhomDichVuId', Message: VoucherMarketingMessage.MessageNhomDichVuConIsExistedInList });
		}

		if (array.length > 0) { this.validationErrors = [...array]; }
	}
	
	checkExist(dichVuId: number) {
        return this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(p => p.DichVuId === dichVuId);
	}
	
	checkExistNhomDichVu(nhomDichVuId: number) {
		return this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(p => p.NhomDichVuId === nhomDichVuId)
	}

	checkExistNhomDichVuCha(nhomDichVuChaId: number) {
		return this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(p => p.NhomDichVuId === nhomDichVuChaId)
	}
	
	checkExistNhomDichVuCon(nhomDichVuConItems: any[]) {
		if(nhomDichVuConItems && nhomDichVuConItems.length > 0) {
			let existed: boolean = false;
			
			nhomDichVuConItems.forEach(item => {
				if(this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(p => p.NhomDichVuId === item.KeyId)) {
					existed = true;
				}
			})

			if(existed) {
				return true;
			}
		}

		return false;
	}

	themDichVuChoVoucher() {
		this.validationErrors = null;
		this.voucher.IsThemHoacLuuDichVu = false;
		// this.dichVuVoucher.LoaiDichVu = this.loaiDichVuBenhVien;
		this.dichVuVoucher.DichVuId = this.dichVuVoucher.DichVuId ? this.dichVuVoucher.DichVuId : null;
		this.dichVuVoucher.LoaiGiaId = this.dichVuVoucher.LoaiGiaId ? this.dichVuVoucher.LoaiGiaId : null;

		this.validationFormClient();

		if (this.validationErrors && !this.validationErrors.some(x => x)) {
			if(this.idVoucher && this.idVoucher !== 0) {
				this.apiService.post<any>(`Voucher/KiemTraDichVuDaTonTaiTrongNhomDichVu?voucherId=${this.idVoucher}&dichVuId=${this.dichVuVoucher.DichVuId}&loaiDichVuBenhVien=${this.dichVuVoucher.LoaiDichVuBenhVien}`).subscribe(res => {
					if(res) {
						this.dichVuVoucher.NhomDichVuId = null;
	
						let dichVuVoucher = {} as VoucherChiTietMienGiam;
						dichVuVoucher = { ...this.dichVuVoucher };
				
						this.voucher.lstVoucherChiTietMienGiam.push(dichVuVoucher);
						this.setDataGridView();
						this.gridDanhSachDichVu.gridDataSource = { ...this.gridDataSource };
						this.gridDanhSachDichVu.setDataSource();
			
						this.huy();
						this.checkTogetRadioDichVuItems();
					} else {
						const validate = {
							Field: 'DichVuId',
							Message: VoucherMarketingMessage.MessageDichVuIsExisted
						};
						
						this.validationErrors.push(validate);
					}
				}, (err: ApiError) => {
					err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
				})
			}
			else {
				this.apiService.post<any>(`Voucher/KiemTraDichVuDaTonTaiTrongNhomDichVuTheoDanhSach?dichVuId=${this.dichVuVoucher.DichVuId}&loaiDichVuBenhVien=${this.dichVuVoucher.LoaiDichVuBenhVien}`, this.voucher).subscribe(res => {
					if(res) {
						this.dichVuVoucher.NhomDichVuId = null;
	
						let dichVuVoucher = {} as VoucherChiTietMienGiam;
						dichVuVoucher = { ...this.dichVuVoucher };
				
						this.voucher.lstVoucherChiTietMienGiam.push(dichVuVoucher);
						this.setDataGridView();
						this.gridDanhSachDichVu.gridDataSource = { ...this.gridDataSource };
						this.gridDanhSachDichVu.setDataSource();
			
						this.huy();
						this.checkTogetRadioDichVuItems();
					} else {
						const validate = {
							Field: 'DichVuId',
							Message: VoucherMarketingMessage.MessageDichVuIsExisted
						};
						
						this.validationErrors.push(validate);
					}
				}, (err: ApiError) => {
					err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
				})
			}
		}
	}

	themNhomDichVuChoVoucher() {
		this.validationErrors = null;
		this.voucher.IsThemHoacLuuDichVu = false;
		this.dichVuVoucher.NhomDichVuId = this.dichVuVoucher.NhomDichVuId ? this.dichVuVoucher.NhomDichVuId : null;

		this.validationFormNhomDichVuClient();

		if (this.validationErrors && !this.validationErrors.some(x => x)) {
			if(this.idVoucher && this.idVoucher !== 0) {
				this.apiService.post<any>(`Voucher/KiemTraNhomDichVuDaBaoGomDichVu?voucherId=${this.idVoucher}&nhomDichVuId=${this.dichVuVoucher.NhomDichVuId}`).subscribe(res => {
					if(res) {
						this.dichVuVoucher.DichVuId = null;
						this.dichVuVoucher.LoaiGiaId = null;
	
						let dichVuVoucher = {} as VoucherChiTietMienGiam;
						dichVuVoucher = { ...this.dichVuVoucher };
				
						this.voucher.lstVoucherChiTietMienGiamNhomDichVu.push(dichVuVoucher);
						this.setDataGridViewNhomDichVu();
						this.gridDanhSachNhomDichVu.gridDataSource = { ...this.gridNhomDichVuDataSource };
						this.gridDanhSachNhomDichVu.setDataSource();
	
						this.huy();
						this.checkTogetRadioDichVuItems();
					} else {
						const validate = {
							Field: 'NhomDichVuId',
							Message: VoucherMarketingMessage.MessageNhomDichVuIsExisted
						};
						
						this.validationErrors.push(validate);
					}
				}, (err: ApiError) => {
					err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
				})
			} else {
				this.apiService.post<any>(`Voucher/KiemTraNhomDichVuDaBaoGomDichVuTheoDanhSach?&nhomDichVuId=${this.dichVuVoucher.NhomDichVuId}`, this.voucher).subscribe(res => {
					if(res) {
						this.dichVuVoucher.DichVuId = null;
						this.dichVuVoucher.LoaiGiaId = null;
	
						let dichVuVoucher = {} as VoucherChiTietMienGiam;
						dichVuVoucher = { ...this.dichVuVoucher };
				
						this.voucher.lstVoucherChiTietMienGiamNhomDichVu.push(dichVuVoucher);
						this.setDataGridViewNhomDichVu();
						this.gridDanhSachNhomDichVu.gridDataSource = { ...this.gridNhomDichVuDataSource };
						this.gridDanhSachNhomDichVu.setDataSource();
	
						this.huy();
						this.checkTogetRadioDichVuItems();
					} else {
						const validate = {
							Field: 'NhomDichVuId',
							Message: VoucherMarketingMessage.MessageNhomDichVuIsExisted
						};
						
						this.validationErrors.push(validate);
					}
				}, (err: ApiError) => {
					err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
				})
			}
		}
	}

	// themTatCaDichVuChoVoucher() {
	// 	this.validationErrors = null;

	// 	this.onValidateTatCaDichVuChoVoucher();
	// 	this.voucher.IsThemHoacLuuDichVu = false;

	// 	if (this.validationErrors && !this.validationErrors.some(x => x)) {
	// 		this.voucher.ChietKhauTatCaDichVu = true;
	// 		this.checkTogetRadioDichVuItems();
	// 	}
	// }

	xoaDichVuChoVoucher(dataItem) {
		this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá dịch vụ ${dataItem.DichVuDisplay} không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                this.voucher.lstVoucherChiTietMienGiam.splice(this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem), 1);
				this.setDataGridView();
				this.gridDanhSachDichVu.gridDataSource = { ...this.gridDataSource };
				this.gridDanhSachDichVu.setDataSource();
				this.checkTogetRadioDichVuItems();
				// this.ResetValidateForGrid();
            }
        });
	}

	xoaNhomDichVuChoVoucher(dataItem) {
		this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá nhóm dịch vụ ${dataItem.NhomDichVuDisplay} không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                this.voucher.lstVoucherChiTietMienGiamNhomDichVu.splice(this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(dataItem), 1);
				this.setDataGridViewNhomDichVu();
				this.gridDanhSachNhomDichVu.gridDataSource = { ...this.gridNhomDichVuDataSource };
				this.gridDanhSachNhomDichVu.setDataSource();
				this.checkTogetRadioDichVuItems();
				// this.ResetValidateForGrid();
            }
        });
	}

	xoaTatCaDichVuChoVoucher() {
		this.voucher.ChietKhauTatCaDichVu = false;
		this.checkTogetRadioDichVuItems();
	}

	onValidateGridDichVuChoVoucher() {
		// this.validationErrors = [];

		if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(p => !p.LoaiGiaId)) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiam.filter(p => !p.LoaiGiaId)) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].LoaiGia',
					Message: VoucherMarketingMessage.MessageLoaiGiaNotNull
				};
				this.validationErrors.push(validate);
			}
		}

		if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(p => p.LoaiGiaId && (!p.DonGia || p.DonGia === 0))) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiam.filter(p => p.LoaiGiaId && (!p.DonGia || p.DonGia === 0))) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].LoaiGia',
					Message: VoucherMarketingMessage.MessageDonGiaGridNotNull
				};
				this.validationErrors.push(validate);
			}
		}

		if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau)) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiam.filter(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau)) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].SoTienChietKhau',
					Message: VoucherMarketingMessage.MessageSoTienChietKhauNotNull
				};
				this.validationErrors.push(validate);
			}
		}

		if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000)) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiam.filter(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000)) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].SoTienChietKhau',
					Message: VoucherMarketingMessage.MessageSoTienChietKhauItNhat1000
				};
				this.validationErrors.push(validate);
			}
		}

		if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe && (!p.TiLeChietKhau || p.TiLeChietKhau === 0))) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiam.filter(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe && !p.TiLeChietKhau)) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].TiLeChietKhau',
					Message: VoucherMarketingMessage.MessageTiLeChietKhauNotNull
				};
				this.validationErrors.push(validate);
			}
		}
	}
	
	onValidateGridNhomDichVuChoVoucher() {
		// this.validationErrors = [];

		if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau)) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiamNhomDichVu.filter(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau)) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(chiTietVoucher) + '].SoTienChietKhauNhomDichVu',
					Message: VoucherMarketingMessage.MessageSoTienChietKhauNotNull
				};
				this.validationErrors.push(validate);
			}
		}

		if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000)) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiamNhomDichVu.filter(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000)) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(chiTietVoucher) + '].SoTienChietKhauNhomDichVu',
					Message: VoucherMarketingMessage.MessageSoTienChietKhauItNhat1000
				};
				this.validationErrors.push(validate);
			}
		}

		if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe && !p.TiLeChietKhau)) {
			for (const chiTietVoucher of this.voucher.lstVoucherChiTietMienGiamNhomDichVu.filter(p => p.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe && (!p.TiLeChietKhau || p.TiLeChietKhau === 0))) {
				const validate = {
					Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(chiTietVoucher) + '].TiLeChietKhauNhomDichVu',
					Message: VoucherMarketingMessage.MessageTiLeChietKhauNotNull
				};
				this.validationErrors.push(validate);
			}
		}
	}
	
	onValidateTatCaDichVuChoVoucher() {
		this.validationErrors = [];

		if (this.voucher && this.voucher.ChietKhauTatCaDichVu) {			
			if(this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
				if(!this.voucher.SoTienChietKhau || this.voucher.SoTienChietKhau === 0) {
					this.validationErrors.push({ Field: 'SoTienChietKhauTatCaDichVu', Message: VoucherMarketingMessage.MessageSoTienChietKhauRequired });
				} else if (this.voucher.SoTienChietKhau && this.voucher.SoTienChietKhau < 1000) {
					this.validationErrors.push({ Field: 'SoTienChietKhauTatCaDichVu', Message: VoucherMarketingMessage.MessageSoTienChietKhauItNhat1000 });
				}
			}

			if(this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe) {
				if(!this.voucher.TiLeChietKhau || this.voucher.TiLeChietKhau === 0) {
					this.validationErrors.push({ Field: 'TiLeChietKhauTatCaDichVu', Message: VoucherMarketingMessage.MessageTiLeChietKhauRequired });
				} else if (this.voucher.TiLeChietKhau && this.voucher.TiLeChietKhau < 1) {
					this.validationErrors.push({ Field: 'TiLeChietKhauTatCaDichVu', Message: VoucherMarketingMessage.MessageTiLeChietKhauItNhat1 });
				}
			}
		}
    }

	setDataGridView() {
        this.gridDataSource = {
            data: [...this.voucher.lstVoucherChiTietMienGiam],
            total: this.voucher.lstVoucherChiTietMienGiam.length
        };
	}
	
	setDataGridViewNhomDichVu() {
		this.gridNhomDichVuDataSource = {
            data: [...this.voucher.lstVoucherChiTietMienGiamNhomDichVu],
            total: this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length
        };
	}

	huy() {
		this.dichVuVoucher = {} as VoucherChiTietMienGiam;
		this.dichVuVoucher.LoaiGiaId = null;
		this.dichVuVoucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
		this.dichVuVoucher.TiLeChietKhau = null;
		this.dichVuVoucher.SoTienChietKhau = null;
		
		this.validationErrors = [];
	}

	luu() {
		this.voucher.IsThemHoacLuuDichVu = true;

		switch(this.voucher.LoaiDichVuVoucherMarketing)
		{
			case this.loaiDichVuVoucherMarketing.DichVu:
				this.luuDichVu();
				break;
			case this.loaiDichVuVoucherMarketing.NhomDichVu:
				this.luuNhomDichVu();
				break;
			case this.loaiDichVuVoucherMarketing.TatCaDichVu:
				this.luuTatCaDichVu();
				break;
		}
		
	}

	luuDichVu() {
		this.validationErrors = [];

		if((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
			this.notificationService.showError(VoucherMarketingMessage.MessageDichVuNotNull)
			return;
		}

		if(this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
			this.onValidateGridDichVuChoVoucher();
		}

		if(this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
			this.onValidateGridNhomDichVuChoVoucher();
		}

		if(this.validationErrors != null && this.validationErrors.length === 0) {
			this.voucher.LoaiChietKhau = null;
			this.voucher.TiLeChietKhau = null;
			this.voucher.SoTienChietKhau = null;

			this.voucher.lstVoucherChiTietMienGiam.forEach(item => {
				item.NhomDichVuId = null;
			})

			this.apiService.put<any>(`Voucher`, this.voucher).subscribe(res => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
				this.router.navigate(['/marketing/ct-marketing/voucher']);
			}, (err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
			})
		}
	}

	luuNhomDichVu() {
		this.validationErrors = [];

		if((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
			this.notificationService.showError(VoucherMarketingMessage.MessageNhomDichVuNotNull)
			return;
		}
		
		if(this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
			this.onValidateGridNhomDichVuChoVoucher();
		}

		if(this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
			this.onValidateGridDichVuChoVoucher();
		}

		if(this.validationErrors != null && this.validationErrors.length === 0) {
			this.voucher.LoaiChietKhau = null;
			this.voucher.TiLeChietKhau = null;
			this.voucher.SoTienChietKhau = null;

			this.voucher.lstVoucherChiTietMienGiamNhomDichVu.forEach(item => {
				item.DichVuId = null;
				item.LoaiGiaId = null;
			})

			this.apiService.put<any>(`Voucher`, this.voucher).subscribe(res => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
				this.router.navigate(['/marketing/ct-marketing/voucher']);
			}, (err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
			})
		}
	}

	luuTatCaDichVu() {
		this.onValidateTatCaDichVuChoVoucher();

		if(this.validationErrors != null && this.validationErrors.length === 0) {
			if(this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
				this.voucher.TiLeChietKhau = null;
			} else {
				this.voucher.SoTienChietKhau = null;
			}

			this.apiService.put<any>(`Voucher`, this.voucher).subscribe(res => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
				this.router.navigate(['/marketing/ct-marketing/voucher']);
			}, (err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
			})
		}
	}

	them() {
		this.voucher.IsThemHoacLuuDichVu = true;

		switch(this.voucher.LoaiDichVuVoucherMarketing)
		{
			case this.loaiDichVuVoucherMarketing.DichVu:
				this.themDichVu();
				break;
			case this.loaiDichVuVoucherMarketing.NhomDichVu:
				this.themNhomDichVu();
				break;
			case this.loaiDichVuVoucherMarketing.TatCaDichVu:
				this.themTatCaDichVu();
				break;
		}
	}

	themDichVu() {
		this.validationErrors = [];

		if((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
			this.notificationService.showError(VoucherMarketingMessage.MessageDichVuNotNull)
			return;
		}

		if(this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
			this.onValidateGridDichVuChoVoucher();
		}

		if(this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
			this.onValidateGridNhomDichVuChoVoucher();
		}

		if(this.validationErrors != null && this.validationErrors.length === 0) {
			this.voucher.LoaiChietKhau = null;
			this.voucher.TiLeChietKhau = null;
			this.voucher.SoTienChietKhau = null;

			this.apiService.post<any>(`Voucher`, this.voucher).subscribe(res => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
				this.router.navigate(['/marketing/ct-marketing/voucher']);
			}, (err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
			})
		}
	}

	themNhomDichVu() {
		this.validationErrors = [];

		if((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
			this.notificationService.showError(VoucherMarketingMessage.MessageNhomDichVuNotNull)
			return;
		}

		if(this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
			this.onValidateGridNhomDichVuChoVoucher();
		}

		if(this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
			this.onValidateGridDichVuChoVoucher();
		}

		if(this.validationErrors != null && this.validationErrors.length === 0) {
			this.voucher.LoaiChietKhau = null;
			this.voucher.TiLeChietKhau = null;
			this.voucher.SoTienChietKhau = null;

			this.apiService.post<any>(`Voucher`, this.voucher).subscribe(res => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
				this.router.navigate(['/marketing/ct-marketing/voucher']);
			}, (err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
			})
		}
	}

	themTatCaDichVu() {
		this.onValidateTatCaDichVuChoVoucher();

		if(this.validationErrors != null && this.validationErrors.length === 0) {
			if(this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
				this.voucher.TiLeChietKhau = null;
			} else {
				this.voucher.SoTienChietKhau = null;
			}

			this.apiService.post<any>(`Voucher`, this.voucher).subscribe(res => {
				this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
				this.router.navigate(['/marketing/ct-marketing/voucher']);
			}, (err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
			})
		}
	}

	onDataBoundGridDichVuDonLe(event: any) {
		if(!this.isAlreadyGetDataDichVuDonLe) {
			if (event && event.Data.length > 0) {
				this.voucher.lstVoucherChiTietMienGiam = event.Data;
				this.isExistDataDichVuDonLe = true;
			} else {
				this.isExistDataDichVuDonLe = false;
			}

			this.isAlreadyGetDataDichVuDonLe = true;
		} else {
			this.setDataGridView();
			this.gridDanhSachDichVu.gridDataSource = { ...this.gridDataSource };
			this.gridDanhSachDichVu.setDataSource();
			this.checkTogetRadioDichVuItems();
		}
	}
	
	onDataBoundGridNhomDichVu(event: any) {
		if(!this.isAlreadyGetDataNhomDichVu) {
			if (event && event.Data.length > 0) {
				this.voucher.lstVoucherChiTietMienGiamNhomDichVu = event.Data;
				this.isExistDataNhomDichVu = true;
			} else {
				this.isExistDataNhomDichVu = false;
			}

			this.isAlreadyGetDataNhomDichVu = true;
		} else {
			this.setDataGridViewNhomDichVu();
			this.gridDanhSachNhomDichVu.gridDataSource = { ...this.gridNhomDichVuDataSource };
			this.gridDanhSachNhomDichVu.setDataSource();
			this.checkTogetRadioDichVuItems();
		} 
	}

	keyUpDichVu(evt) {
		if (evt.key == "Enter" && !this.isSelectingDichVu) {
			if (this.isSelectingDichVu != true) {
				this.themDichVuChoVoucher();
			} else {
			  	this.isSelectingDichVu = false;
			}
		}
	}

	keyUpNhomDichVu(evt) {
		if(evt.key === 'Enter') {
			this.themNhomDichVuChoVoucher();
		}
	}

	openComboboxDichVu(event: any) {
        if(event){
            this.isSelectingDichVu = true;
        }
        else{
            this.isSelectingDichVu = false;
        }
    }
}