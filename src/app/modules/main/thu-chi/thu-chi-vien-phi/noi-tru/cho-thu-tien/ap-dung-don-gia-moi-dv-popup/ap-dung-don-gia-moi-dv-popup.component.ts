import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import * as _ from "underscore";
import { CapNhatDonGiaMoi, DanhSachChiPhiKhamChuaBenh } from "../cho-thu-tien.model";

@Component({
	selector: "app-ap-dung-don-gia-moi-dv-popup",
	templateUrl: "./ap-dung-don-gia-moi-dv-popup.component.html",
	styleUrls: ["./ap-dung-don-gia-moi-dv-popup.component.scss"],
})
export class ApDungDonGiaMoiDichVuComponent implements OnInit {
	public danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh;

	icClose = icClose;
	tenDichVu: string = null;
	validationErrors: any;
	capNhatDonGiaMoi: CapNhatDonGiaMoi = new CapNhatDonGiaMoi();

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService,
		public sanitizer: DomSanitizer, private notificationService: NotificationService,
		private dialogRef: MatDialogRef<any>, private cdRef: ChangeDetectorRef) { }

	ngOnInit() {

		this.tenDichVu = this.data.dataItem.TenDichVu;
		this.danhSachChiPhiKhamChuaBenh = this.data.dataItem;

		this.capNhatDonGiaMoi.Id = this.danhSachChiPhiKhamChuaBenh.Id;
		this.capNhatDonGiaMoi.LoaiNhom = this.danhSachChiPhiKhamChuaBenh.LoaiNhom;
		this.capNhatDonGiaMoi.DonGia = this.danhSachChiPhiKhamChuaBenh.DonGia;
		this.capNhatDonGiaMoi.DonGiaCapNhat = this.danhSachChiPhiKhamChuaBenh.DonGia;
	}

	close() {
		this.dialogRef.close();
	}

	huy() { this.dialogRef.close(); }

	apDungGiaMoi() {

		this.validationErrors = [];
		this.cdRef.detectChanges();
		if (this.capNhatDonGiaMoi.DonGiaCapNhat === null) {
			this.validationErrors.push({
				Message: "Đơn giá cập nhật bắt buộc phải nhập",
				Field: "DonGiaCapNhat",
			});
			return;
		}
		this.apiService
			.post("ThuNganNoiTru/CapNhatDonGiaMoi", this.capNhatDonGiaMoi).subscribe(
				(res) => {
					this.dialogRef.close(res);
				},
				(err: ApiError) => {
					if (err.Message != "Validation Failed") {
						this.notificationService.showError(err.Message);
					}
				}
			);
	}
}
