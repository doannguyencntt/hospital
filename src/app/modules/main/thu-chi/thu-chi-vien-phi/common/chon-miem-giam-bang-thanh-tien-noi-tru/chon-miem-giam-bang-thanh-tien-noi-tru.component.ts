import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import icClose from "@iconify/icons-ic/twotone-close";
import { SelectAllCheckboxState } from "@progress/kendo-angular-grid";
import { GroupDescriptor, State, process } from "@progress/kendo-data-query";
import { ApiService } from "src/app/core/services/api.service";
import { BaseService } from "src/app/core/services/base.service";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApDungMiemGiamThem, CongNoChoThu, DanhSachChiPhiKhamChuaBenh, DanhSachCongNoChoThu } from "../../noi-tru/cho-thu-tien/cho-thu-tien.model";
declare var jQuery: any;

@Component({
	selector: "chon-miem-giam-bang-thanh-tien-noi-tru",
	templateUrl: "./chon-miem-giam-bang-thanh-tien-noi-tru.component.html",
	styleUrls: ["./chon-miem-giam-bang-thanh-tien-noi-tru.component.scss"],
})
export class ChonMiemGiamBangThanhTienDichVuComponent implements OnInit {

	public icClose = icClose;
	public disablePhanTram: boolean = true;
	public disableSoTien: boolean = true;
	public loadingPopup: any;
	public dataSource: any = { data: [], total: 0 }
	public danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh[] = [];
	public danhSachChiPhiKhamChuaBenhtam: DanhSachChiPhiKhamChuaBenh[] = this.danhSachChiPhiKhamChuaBenh;
	public danhSachCongNoChoThus: DanhSachCongNoChoThu[] = [];
	public gridData: any;
	public keySelectBy: string = "Id";
	public mySelection: number[] = [];
	public mySelectionInPage: number[] = [];
	public selectAllState: SelectAllCheckboxState = "unchecked";

	public groups: GroupDescriptor[] = [{
		field: 'Khoa', aggregates: [
			{ field: 'ThanhTien', aggregate: 'sum' },
			{ field: 'BHYTThanhToan', aggregate: 'sum' },
			{ field: 'SoTienMG', aggregate: 'sum' },
			{ field: 'DaThanhToan', aggregate: 'sum' },
			{ field: 'BNConPhaiThanhToan', aggregate: 'sum' }
		],
	},
	{
		field: 'NgayPhatSinhDiplay', aggregates: [
			{ field: 'ThanhTien', aggregate: 'sum' },
			{ field: 'BHYTThanhToan', aggregate: 'sum' },
			{ field: 'SoTienMG', aggregate: 'sum' },
			{ field: 'DaThanhToan', aggregate: 'sum' },
			{ field: 'BNConPhaiThanhToan', aggregate: 'sum' }
		],
	}];

	public state: State = {
		group: this.groups
	};

	apDungMiemGiamThem = new ApDungMiemGiamThem();
	public checkboxOnly: boolean = false;
	
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer,
		private baseService: BaseService, private apiService: ApiService, private dialog: MatDialog,
		private route: ActivatedRoute, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) { }

	ngOnInit() {
		let yeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
		this.getThongTinYeuCauBenhNhan(yeuCauTiepNhanId);
	}

	mapCongTyBHTN(responseThongTinBenhNhan: any) {
		let danhSachCongNoChoThu = new DanhSachCongNoChoThu;
		if (responseThongTinBenhNhan !== null && responseThongTinBenhNhan !== undefined) {
			for (let index = 0; index < responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length; index++) {
				let congNo = new CongNoChoThu;
				congNo.ViTri = index;
				congNo.CongTyBaoHiemTuNhanId = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].Id;
				congNo.TenCongTy = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].TenCongTy;
				congNo.SoTienCongNoChoThu = 0;
				danhSachCongNoChoThu.CongNoChoThus.push(congNo);
			}
		}
		return danhSachCongNoChoThu;
	}

	public total(field: any) {
		switch (field) {
			case 'BNConPhaiThanhToan':
				return this.XuLyTotalForField('BNConPhaiThanhToan');
			case 'DaThanhToan':
				return this.XuLyTotalForField('DaThanhToan');
			case 'SoTienMG':
				return this.XuLyTotalForField('SoTienMG');
			case 'ThanhTien':
				return this.XuLyTotalForField('ThanhTien');
			case 'BHYTThanhToan':
				return this.XuLyTotalForField('BHYTThanhToan');
		}
	};

	XuLyTotalForField(field: any) {
		let sum = 0;
		if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
			this.danhSachChiPhiKhamChuaBenh.forEach(element => {
				switch (field) {
					case 'BNConPhaiThanhToan':
						sum = sum + element.BNConPhaiThanhToan;
						break;
					case 'DaThanhToan':
						sum = sum + element.DaThanhToan;
						break;
					case 'SoTienMG':
						sum = sum + element.SoTienMG;
						break;
					case 'ThanhTien':
						sum = sum + element.ThanhTien;
						break;
					case 'BHYTThanhToan':
						sum = sum + element.BHYTThanhToan;
						break;
				}
			});
			return sum;
		}
	}

	extCheckboxSelection(event: any[]) {
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			return (element.CheckedDefault = false);
		});
		if (event.length > 0) {
			for (let index = 0; index < event.length; index++) {
				this.danhSachChiPhiKhamChuaBenh.forEach(element => {
					if (element.Id == event[index]) {					
						return (element.CheckedDefault = true);
					}
				});
			}
		}
	}

	onSelectChangeCheckbox(e: any, val: any) {
		//this.unCheckedBindSoTienMG(val);
		this.mySelection = [];
		if (e.target.checked) {
			this.mySelectionInPage.push(val);
		} else {
			this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(val), 1);
		}
		var allData = this.dataSource.data;
		const len = this.mySelectionInPage.length;
		this.mySelection = this.mySelection.concat(this.mySelectionInPage);

		if (len === 0) {
			this.selectAllState = "unchecked";
		} else if (len > 0 && len < allData.filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).length) {
			this.selectAllState = "indeterminate";
		} else {
			this.selectAllState = "checked";
		}
		this.extCheckboxSelection(this.mySelection);
	}
	
	onSelectAllChange(checkedState: SelectAllCheckboxState) {
		var allData = this.dataSource.data;
		if (allData == undefined) allData = [];
		if (checkedState === "checked") {
			this.mySelectionInPage = allData.filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map(item => item[this.keySelectBy]);
			this.mySelection = this.mySelection.concat(this.mySelectionInPage);
			this.selectAllState = "checked";
		} else {
			var mySelectionRemove = allData.filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map(item => item[this.keySelectBy]);
			if (mySelectionRemove != null && mySelectionRemove.length > 0) {
				mySelectionRemove.forEach(obj => {
					this.mySelection.splice(this.mySelection.indexOf(obj), 1);
				});
			}
			this.mySelectionInPage = [];
			this.selectAllState = "unchecked";
		}
		this.extCheckboxSelection(this.mySelection);
	}

	async getThongTinYeuCauBenhNhan(id) {
		this.showLoadingPopup();

		let danhSachCongNoChoThu = new DanhSachCongNoChoThu;
		let responseThongTinBenhNhan = await this.baseService.getById<any>(id).toPromise();

		if (responseThongTinBenhNhan !== undefined && responseThongTinBenhNhan !== null)
			danhSachCongNoChoThu = this.mapCongTyBHTN(responseThongTinBenhNhan);

		if (responseThongTinBenhNhan != undefined && responseThongTinBenhNhan != null) {
			let responseDanhSachThuPhiDichVuNoiTru = await this.apiService.get<any>("ThuNganNoiTru/DanhSachThuPhiDichVuNoiTru/" + id).toPromise();
			if (responseDanhSachThuPhiDichVuNoiTru != undefined && responseDanhSachThuPhiDichVuNoiTru != null) {

				this.dataSource.data = responseDanhSachThuPhiDichVuNoiTru;
				this.danhSachChiPhiKhamChuaBenh = responseDanhSachThuPhiDichVuNoiTru;


				if (this.danhSachChiPhiKhamChuaBenh.length > 0 && danhSachCongNoChoThu.CongNoChoThus.length > 0) {
					for (let index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {

						let dsDanhSachCongNoChoThus = this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus;
						this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus = [];

						for (let subIndex = 0; subIndex < danhSachCongNoChoThu.CongNoChoThus.length; subIndex++) {
							let soTienCongNoChoThuByTheoCongTy = dsDanhSachCongNoChoThus.filter(c =>
								c.CongTyBaoHiemTuNhanId == danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId)
								.reduce((sum, item) => sum + item.SoTienCongNoChoThu, 0);

							let congNoItem = new CongNoChoThu();
							congNoItem.CongTyBaoHiemTuNhanId = danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId;
							congNoItem.SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[subIndex].SoTienCongNoChoThu = soTienCongNoChoThuByTheoCongTy > 0 ? soTienCongNoChoThuByTheoCongTy : 0;
							congNoItem.TenCongTy = danhSachCongNoChoThu.CongNoChoThus[subIndex].TenCongTy;
							congNoItem.ViTri = danhSachCongNoChoThu.CongNoChoThus[subIndex].ViTri;
							this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus.push(congNoItem);
						}
					}

					this.danhSachCongNoChoThus = [];
					this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
				}
			}

			this.gridData = process(this.danhSachChiPhiKhamChuaBenh, this.state);
			this.setRemoveGroupFooterOnly();
			this.closeAllDialogs();
		}
	}
	
	setRemoveGroupFooterOnly() {
		setTimeout(function () {
			if (jQuery("#danhSachChuaThuTienGrid .k-group-footer").length == 1) {
				jQuery("#danhSachChuaThuTienGrid .k-group-footer").hide();
			}
			else {
				jQuery("#danhSachChuaThuTienGrid .k-group-footer").show();
			}
		}, 100);

	}

	replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, "g"), replace);
	}

	HuyApDungMGT() {
		this.dialogRef.close(null);
	}

	apDungMiemGiamBangThanhTien() {
		this.cdRef.detectChanges();
		let danhSachDuocMiemGiam = this.danhSachChiPhiKhamChuaBenh.filter(e => e.CheckedDefault == true);
	
		this.dialogRef.close(danhSachDuocMiemGiam);
	}

	close() {
		this.dialogRef.close(null);
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
