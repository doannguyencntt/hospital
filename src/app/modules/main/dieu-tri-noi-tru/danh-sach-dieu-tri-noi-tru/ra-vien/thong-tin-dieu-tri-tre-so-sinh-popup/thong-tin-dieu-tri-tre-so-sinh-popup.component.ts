import { Component, Inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { CommonService } from "src/app/core/utilities/common.helper";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from "src/app/shared/models/api-error.model";
import icFullscreen from "@iconify/icons-ic/twotone-fullscreen";
import icFullscreenExit from "@iconify/icons-ic/twotone-fullscreen-exit";
import { GroupDescriptor } from "@progress/kendo-data-query";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ThoiGianDieuTriSoSinhRaVienViewModel, UpdateDieuTriSoSinhRaVienViewModel } from "../thong-tin-ra-vien.model";
declare var jQuery: any;
@Component({
	selector: "thong-tin-dieu-tri-tre-so-sinh-popup",
	templateUrl: "./thong-tin-dieu-tri-tre-so-sinh-popup.component.html",
	styleUrls: ["./thong-tin-dieu-tri-tre-so-sinh-popup.component.scss"],
})
export class ThongTinDieuTriTreSoSinhComponent implements OnInit {
	icClose = icClose;

	gridThoiGianDieuTriColumns: any;
	dataSourceThoiGianDieuTri: any = {
		data: [],
		total: 0
	}
	updateDieuTriSoSinhRaVienViewModel : UpdateDieuTriSoSinhRaVienViewModel = new UpdateDieuTriSoSinhRaVienViewModel();
	thoiGianDieuTriSoSinhRaVienViewModel: ThoiGianDieuTriSoSinhRaVienViewModel[] = [];
	groups: GroupDescriptor[] = [{ field: 'NgayDieuTriString' }];
	validationErrors = [];

	@ViewChild('tuGioTemplate', { static: true }) tuGioTemplate: TemplateRef<any>;
	@ViewChild('denGioTemplate', { static: true }) denGioTemplate: TemplateRef<any>;
	@ViewChild('ghiChuTemplate', { static: true }) ghiChuTemplate: TemplateRef<any>;
	@ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
	@ViewChild('GridSoSinh', { static: false }) gridChild: GridComponent;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<any>,private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService) { }

	ngOnInit() {
		let noiTruBenhAnId = this.data;
		this.getThongTinBenAnSoSinh(noiTruBenhAnId);
		this.gridThoiGianDieuTriColumns = [
			{ Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 80, Sortable: false },
			{ Field: "GioBatDau", Title: "Từ", Width: 90, Sortable: false, Template: this.tuGioTemplate },
			{ Field: "GioKetThuc", Title: "Đến", Width: 90, Sortable: false, Template: this.denGioTemplate },
			{ Field: "GhiChuDieuTri", Title: "Ghi chú", Width: 150, Sortable: false, Template: this.ghiChuTemplate }
		];
	}

	getThongTinBenAnSoSinh(noiTruBenhAnId: any) {
		this.apiService.get<any>("DieuTriNoiTru/GetThongTinThoiGianDieuTriBenhAnSoSinh?noiTruBenhAnId=" + noiTruBenhAnId).subscribe(
			resultData => {
				if (resultData != null && resultData != undefined) {
					var listNgayDieutris = [];
					resultData.forEach(element => {
						var model = new ThoiGianDieuTriSoSinhRaVienViewModel();
						var key = element.NgayDieuTriString;
						model.NgayDieuTriString = key;
						model.NoiTruBenhAnId = element.NoiTruBenhAnId;
						model.NoiTruPhieuDieuTriId = element.NoiTruPhieuDieuTriId;

						if (!listNgayDieutris.includes(key)) {
							resultData.forEach(data => {
								if (data.NgayDieuTriString === key) {
									model.ThoiGianDieuTriSoSinhViewModels.push(data);
								}
							});
							listNgayDieutris.push(key);
							this.thoiGianDieuTriSoSinhRaVienViewModel.push(model);
						}
					});
				}
			},
			(err: ApiError) => {

			});
	}

	luuThoiGianDieuTriSoSinh() {
        if(this.thoiGianDieuTriSoSinhRaVienViewModel.length > 0){
			this.updateDieuTriSoSinhRaVienViewModel.ThoiGianDieuTriSoSinhRaVienViewModel = this.thoiGianDieuTriSoSinhRaVienViewModel;
		}
		this.apiService.post<any>("DieuTriNoiTru/UpdateThoiGianSoSinhRaVien", this.updateDieuTriSoSinhRaVienViewModel).subscribe(
			resultData => {
				this.dialogRef.close("Yes");
				this.notificationService.showSuccess("Cập nhật thời gian điều trị sơ sinh thành công");
			},
			(err: ApiError) => {
				this.validationErrors = err.ValidationErrors;
				if (err.Message != "Validation Failed") {
					this.notificationService.showError(err.Message);
				}
			});
	}
}