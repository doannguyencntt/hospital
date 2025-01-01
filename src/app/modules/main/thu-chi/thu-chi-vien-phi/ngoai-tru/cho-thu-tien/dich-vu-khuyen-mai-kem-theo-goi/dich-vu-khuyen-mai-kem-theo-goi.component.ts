import { Component, Inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ApiError } from "src/app/shared/models/api-error.model";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { AuthService } from "src/app/core/services/auth.service";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApDungKhuyenMaiBenhNhan, DanhSachDichVuKhuyenMaiBenhNhan } from "../cho-thu-tien.model";
import { GroupDescriptor } from "@progress/kendo-data-query";
declare var $: any;
@Component({
	selector: "app-dich-vu-khuyen-mai-kem-theo-goi",
	templateUrl: "./dich-vu-khuyen-mai-kem-theo-goi.component.html",
	styleUrls: ["./dich-vu-khuyen-mai-kem-theo-goi.component.scss"],
})
export class DichVuKhuyenMaiKemTheoGoi implements OnInit {
	public documentType: DocumentType = DocumentType.ThuNgan;
	danhSachDichVuKhuyenMaiBenhNhan: DanhSachDichVuKhuyenMaiBenhNhan[] = [];
	apDungKhuyenMaiBenhNhan = new ApDungKhuyenMaiBenhNhan();

	icClose = icClose;
	gridColumns: any[] = [];
	validationErrors: any[] = [];
	loadingPopup: any;
	benhNhanId: any;
	yeuCauTiepNhanId : any;

	groups: GroupDescriptor[] = [{
		field: 'Nhom', aggregates: [
			{ field: 'SoTienPhaiTraLaiBenhNhan', aggregate: 'sum' }
		]
	}];

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, private dialog: MatDialog,
		private authService: AuthService, private notificationService: NotificationService,private dialogRef: MatDialogRef<any> ,
		private apiService: ApiService) {
		this.benhNhanId = data.benhNhanId;
		this.yeuCauTiepNhanId = data.yeuCauTiepNhanId;
	}

	@ViewChild("gridList", { static: true }) gridList: GridComponent;
	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
	@ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

	@ViewChild('goiGiaTemplate', { static: true }) goiGiaTemplate: TemplateRef<any>;
	@ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
	@ViewChild('donGiaKMTemplate', { static: true }) donGiaKMTemplate: TemplateRef<any>;
	@ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
	@ViewChild('soTienMGTemplate', { static: true }) soTienMGTemplate: TemplateRef<any>;

	ngOnInit() {
		if (this.benhNhanId != undefined && this.benhNhanId != null) {
			this.getThongTinChuaThuGoiQuyetToan(this.yeuCauTiepNhanId)
		}

		this.gridColumns = [
			{ Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
			{ Field: "Ma", Title: "Mã", Width: 30, Sortable: false },
			{ Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 100, Sortable: false },
			{ Field: "LoaiGia", Title: "Loại giá", Width: 70, Sortable: false },

			{ Field: "GiaGoi", Title: "Gói giá", Width: 50, Sortable: false , Template: this.goiGiaTemplate },
			{ Field: "Soluong", Title: "Số Lượng", Width: 50, Sortable: false  },
			{ Field: "DonGia", Title: "Dơn giá", Width: 80, Sortable: false , Template: this.donGiaTemplate },
			{ Field: "DonGiaKM", Title: "Dơn giá KM", Width: 80, Sortable: false , Template: this.donGiaKMTemplate},
			{ Field: "ThanhTien", Title: "Thành tiền", Width: 80, Sortable: false , Template: this.thanhTienTemplate },
			{ Field: "SoTienMG", Title: "Số tiền MG", Width: 80, Sortable: false , Template: this.soTienMGTemplate },

			{ Field: "HanSuDungDisplay", Title: "Hạn sử dụng", Width: 80, Sortable: false },
			{ Field: "SoLuongDaDung", Title: "Số Lượng Đã Dùng", Width: 80, Sortable: false },
			{ Field: "GhiChu", Title: "Ghi chú", Width: 80, Sortable: false },
		];

		
	}

	close() {
		this.dialog.closeAll();
	}

	apDung() {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apDungKhuyenMaiBenhNhan.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
			this.apDungKhuyenMaiBenhNhan.DsKhuyenMaiBenhNhans = this.danhSachDichVuKhuyenMaiBenhNhan;
			
			this.apiService.put(`ThuNgan/ApDungDichVuKhuyenMai`, this.apDungKhuyenMaiBenhNhan).subscribe((response: any) => {
				if (response != undefined && response != null) {
					this.danhSachDichVuKhuyenMaiBenhNhan = response.Data;				
					this.dialogRef.close("Yes");				
				}
				this.closeAllDialogs();
				this.dialog.closeAll();
			}, (err: ApiError) => {
				err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
					this.validationErrors = err.ValidationErrors;
				this.closeAllDialogs();
			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			this.closeAllDialogs();
		}
	}
	
	extCheckboxSelection(event: any[]) {		
		this.danhSachDichVuKhuyenMaiBenhNhan.forEach((e) => {
			e.DanhSachDichVuTrongGoiKhuyenMais.forEach((e) => {
				{
					return (e.DaChon = false);
				}
			});
			if (event.length > 0) {
				for (let index = 0; index < event.length; index++) {
					e.DanhSachDichVuTrongGoiKhuyenMais.forEach((element) => {
						{
							if (element.Id == event[index]) {
								element.DaChon = true;								
								return (element);
							}
						}
					});
				}
			}
		});		
	}

	getThongTinChuaThuGoiQuyetToan(yeuCauTiepNhanId: number) {
		this.showLoadingPopup();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
			this.apiService.get(`ThuNgan/GetDataDichVuKhuyenMaiBenhNhanForGrid?yeuCauTiepNhanId=` + yeuCauTiepNhanId).subscribe((response: any) => {
				if (response != undefined && response != null) {
					this.danhSachDichVuKhuyenMaiBenhNhan = response.Data;
					setTimeout(() => {
						this.danhSachDichVuKhuyenMaiBenhNhan.forEach((element) => {						
							element.DanhSachDichVuTrongGoiKhuyenMais.forEach((item) => {
								if (item.DaChon) {
									if (!$('#' + element.Id + 'selectCheckboxId' + item.Id).prop('checked')){
										$('#' + element.Id + 'selectCheckboxId' + item.Id).trigger('click');                       
									}						
								}
							});                
						});
					}, 100);
				}
				this.closeAllDialogs();
			}, (err: ApiError) => {
				err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
					this.validationErrors = err.ValidationErrors;
				this.closeAllDialogs();
			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
			this.closeAllDialogs();
		}
	}

	showLoadingPopup() {
		if (!this.loadingPopup) {
			this.loadingPopup = this.dialog.open(LoadingComponent, {
				disableClose: true,
				width: '200px',
				height: '90px',
				data: { Title: 'Đang tải...' }
			});
		}
	}

	showSavingPopup() {
		if (!this.loadingPopup) {
			this.loadingPopup = this.dialog.open(LoadingComponent, {
				disableClose: true,
				width: '200px',
				height: '90px',
				data: { Title: 'Đang lưu...' }
			});
		}
	}

	closeAllDialogs() {
		if (this.loadingPopup) {
			this.loadingPopup.close();
			this.loadingPopup = null;
		}
	}
}
