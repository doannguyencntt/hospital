import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApDungMiemGiamThem } from "../../noi-tru/cho-thu-tien/cho-thu-tien.model";
import { ChonMiemGiamBangThanhTienDichVuNgoaiTruComponent } from "../chon-miem-giam-bang-thanh-tien-ngoai-tru/chon-miem-giam-bang-thanh-tien-ngoai-tru.component";
import { ChonMiemGiamBangThanhTienDichVuComponent } from "../chon-miem-giam-bang-thanh-tien-noi-tru/chon-miem-giam-bang-thanh-tien-noi-tru.component";
import icAdd from '@iconify/icons-ic/twotone-add';
import { AuthService } from "src/app/core/services/auth.service";
import { NoiDungGhiChuMauPopupComponent } from "../noi-dung-ghi-chu-mau-popup/noi-dung-ghi-chu-mau-popup.component";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { NotificationService } from "src/app/core/services/notification.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
	selector: "ap-dung-miem-giam-them-popup",
	templateUrl: "./ap-dung-miem-giam-them-popup.component.html",
	styleUrls: ["./ap-dung-miem-giam-them-popup.component.scss"],
})
export class ApDungMiemGiamThemComponent implements OnInit {
	icClose = icClose;
	icAdd = icAdd;

	disablePhanTram: boolean = true;
	disableSoTien: boolean = true;
	apDungMiemGiamThem = new ApDungMiemGiamThem();
	validationErrors: any;
	public confrim: any = null;


	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private authService: AuthService,
		private notificationService: NotificationService,
		public sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) { }
	public documentType: DocumentType = DocumentType.ThuNgan;

	ngOnInit() { }

	apDungPhanTram(ev: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();

		this.disablePhanTram = !ev;
		this.apDungMiemGiamThem.TiLe = 0;
	}

	apDungSoTien(ev: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();

		this.disableSoTien = !ev;
		this.apDungMiemGiamThem.SoTien = 0;
	}

	replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, "g"), replace);
	}

	apDungMiemGiamBangThanhTien() {
		let yeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
		let type = this.data.type;
		switch (type) {
			case 'NoiTru':
				this.miemGiamBangThanhTienNoiTru(yeuCauTiepNhanId);
				break;
			case 'NgoaiTru':
				this.miemGiamBangThanhTienNgoaiTru(yeuCauTiepNhanId);
				break;
		}
	}

	miemGiamBangThanhTienNoiTru(yeuCauTiepNhanId: any) {
		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}

		this.confrim = this.dialog.open(ChonMiemGiamBangThanhTienDichVuComponent, {
			disableClose: true,
			width: "1200px",
			data: { yeuCauTiepNhanId }
		}).afterClosed().subscribe((result) => {
			if (result != null) {
				this.cdRef.detectChanges();
				let dataRes = {
					DataResult: result,
					Type: `MiemGiamBangThanhTien`
				};
				this.dialogRef.close(dataRes);
			}
		});
	}

	miemGiamBangThanhTienNgoaiTru(yeuCauTiepNhanId: any) {
		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}
		this.confrim = this.dialog.open(ChonMiemGiamBangThanhTienDichVuNgoaiTruComponent, {
			disableClose: true,
			width: "1200px",
			data: { yeuCauTiepNhanId }
		}).afterClosed().subscribe((result) => {
			if (result != null) {
				this.cdRef.detectChanges();
				let dataRes = {
					DataResult: result,
					Type: `MiemGiamBangThanhTien`
				};
				this.dialogRef.close(dataRes);
			}
		});
	}

	HuyApDungMGT() {
		this.dialogRef.close(null);
	}

	ApDungMGT() {
		this.validationErrors = [];
		this.cdRef.detectChanges();
	
		if (this.apDungMiemGiamThem.NoiDungGhiChuMiemGiamId == undefined || this.apDungMiemGiamThem.NoiDungGhiChuMiemGiamId == null) {
			this.notificationService.showError("Vui lòng chọn lý do miễn giảm");
			return true;
		}

		let dataRes = {
			DataResult: this.apDungMiemGiamThem,
			Type: `MiemGiam`			
		};

		this.dialogRef.close(dataRes);

		//====================================trường hơp ko chọn gì hết====================================
		if (!this.apDungMiemGiamThem.ChietKhauTheoTiLe && !this.apDungMiemGiamThem.ChietKhauTheoSoTien) {
			this.dialogRef.close(null);
		}
		//=================================================================================================
	}

	close() {
		this.dialogRef.close(null);
	}

	showPopupGhiChuMiemGiam() {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
			this.dialog.open(NoiDungGhiChuMauPopupComponent, {
				disableClose: false,
				width: '1400px',
				// data: { "LoaiBenhAn": this.LoaiBenhAn }
			}).afterClosed().subscribe(result => {

			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	selectionChonNoiDungMiemGiam(event: any) {
		if (event != undefined && event != null) {
			this.apDungMiemGiamThem.NoiDungGhiChuMiemGiamId= event.KeyId;
			this.apDungMiemGiamThem.GhiChu= event.NoiDungMiemGiam;
		} else {
			this.apDungMiemGiamThem.NoiDungGhiChuMiemGiamId = null;
			this.apDungMiemGiamThem.GhiChu = null;
		}
	}
}
