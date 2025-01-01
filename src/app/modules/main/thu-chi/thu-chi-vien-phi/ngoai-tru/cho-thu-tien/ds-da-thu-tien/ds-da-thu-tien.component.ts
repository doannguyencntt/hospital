import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { process, State, GroupDescriptor } from "@progress/kendo-data-query";
import { ApiService } from "src/app/core/services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import icCheck from "@iconify/icons-ic/twotone-check";
import { MatDialog } from "@angular/material";
import { NotificationService } from "src/app/core/services/notification.service";
import { DanhSachDaThuTienResp, DanhSachChiPhiKhamChuaBenh, DanhSachCongNoChoThu, CommonThuTien } from "../cho-thu-tien.model";
import { SelectAllCheckboxState } from "@progress/kendo-angular-grid";
import icRedEye from "@iconify/icons-ic/twotone-remove-red-eye";
import { MiemGiamTheoDVComponent } from "../../../common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component";
import { AuthService } from "src/app/core/services/auth.service";
declare var jQuery: any;
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { ApiError } from "src/app/shared/models/api-error.model";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
@Component({
	selector: "app-ds-da-thu-tien",
	templateUrl: "./ds-da-thu-tien.component.html",
	styleUrls: ["./ds-da-thu-tien.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class DsDaThuTienComponent implements OnInit, OnChanges {
	@Input() danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh[] = [];
	@Input() dataSourceChanged: boolean = false;

	documentType: DocumentType = DocumentType.ThuNgan;
	public gridDataDaThu: any;
	public danhSachCongNoChoThus: DanhSachCongNoChoThu[] = [];
	public yeuCauTiepNhanId: number = 0;
	public showHuyThanhToan: boolean = false;
	public showCapNhatThanhToan: boolean = false;
	public DanhSachDaThuTienResp: DanhSachDaThuTienResp;
	public icCheck = icCheck;
	public commonThuTien = new CommonThuTien();
	public icRedEye = icRedEye;

	confrim: any = null;
	validationErrors: any;
	tabIndex: number = 0;
	@Output() afterChanged = new EventEmitter<any>();
	@Output() huyThanhCong = new EventEmitter<boolean>();
	@Output() capnhatThanhCong = new EventEmitter<number>();
	@Output() loadingThanhCong = new EventEmitter<any>();
	daThuTienGridColumns: any[] = [];
	dataSource: any = {
		data: [],
		total: 0,
	};

	public groups: GroupDescriptor[] = [
		{
			field: "Nhom",
			aggregates: [
				{ field: "ThanhTien", aggregate: "sum" },
				{ field: "BHYTThanhToan", aggregate: "sum" },
				{ field: "SoTienMG", aggregate: "sum" },
				{ field: "DaThanhToan", aggregate: "sum" },
				{ field: "BNConPhaiThanhToan", aggregate: "sum" },
				{ field: "TongCongNo", aggregate: "sum" },
			],
		},
	];

	public state: State = {
		group: this.groups,
	};

	constructor(private route: ActivatedRoute, private apiService: ApiService, private dialog: MatDialog, private authService: AuthService, private notificationService: NotificationService) { }

	//--------------------------------- Begin total colunm------------------------------------------------------------
	public total(field: any) {
		switch (field) {
			case "BNConPhaiThanhToan":
				return this.XuLyTotalForField("BNConPhaiThanhToan");
				break;
			case "DaThanhToan":
				return this.XuLyTotalForField("DaThanhToan");
				break;
			case "SoTienMG":
				return this.XuLyTotalForField("SoTienMG");
				break;
			case "ThanhTien":
				return this.XuLyTotalForField("ThanhTien");
				break;
			case "BHYTThanhToan":
				return this.XuLyTotalForField("BHYTThanhToan");
				break;
			case "TongCongNo":
				return this.XuLyTotalForField("TongCongNo");
				break;
		}
	}

	XuLyTotalForField(field: any) {
		let sum = 0;
		if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null && this.danhSachChiPhiKhamChuaBenh.length > 0) {
			this.danhSachChiPhiKhamChuaBenh.forEach(element => {
				switch (field) {
					case "BNConPhaiThanhToan":
						sum = sum + element.BNConPhaiThanhToan;
						break;
					case "DaThanhToan":
						sum = sum + element.DaThanhToan;
						break;
					case "SoTienMG":
						sum = sum + element.SoTienMG;
						break;
					case "ThanhTien":
						sum = sum + element.ThanhTien;
						break;
					case "BHYTThanhToan":
						sum = sum + element.BHYTThanhToan;
						break;
					case "TongCongNo":
						sum = sum + element.TongCongNo;
						break;
				}
			});
		}
		return sum;
	}
	//--------------------------------- End total colunm-----------------------------------------------------------
	ngOnChanges(value: SimpleChanges) {
		if (this.dataSourceChanged == true) {
			this.gridDataDaThu = process(this.danhSachChiPhiKhamChuaBenh, this.state);
			this.setSelectAll();
			this.setRemoveGroupFooterOnly();
		}
	}

	ngOnInit() {
		this.yeuCauTiepNhanId = this.route.snapshot.params.id;
		if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
			this.gridDataDaThu = process(this.danhSachChiPhiKhamChuaBenh, this.state);
			this.setRemoveGroupFooterOnly();
		}
	}
	public checkboxOnly: boolean = true;
	//Xử lý checkedboxq
	public keySelectBy: string = "Id";
	public mySelection: number[] = [];
	public mySelectionInPage: number[] = [];
	public selectAllState: SelectAllCheckboxState = "unchecked";

	extCheckboxSelection(event: any[]) {
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			element.CheckedDefault = false;
		});
		if (event.length > 0) {
			for (let index = 0; index < event.length; index++) {
				this.danhSachChiPhiKhamChuaBenh.forEach(element => {
					{
						if (element.Id == event[index]) {
							return (element.CheckedDefault = true);
						}
					}
				});
			}
		}
	}

	ViewThongTinMG(dataItem: any) {
		let isView = false;
		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}
		this.confrim = this.dialog
			.open(MiemGiamTheoDVComponent, {
				disableClose: true,
				width: "500px",
				data: { dataItem, isView },
			})
			.afterClosed()
			.subscribe(result => {
				if (result != null) {
				}
			});
	}

	setSelectAll() {
		setTimeout(function () {
			if (!jQuery("#selectAllCheckboxId1").prop("checked")) {
				jQuery("#selectAllCheckboxId1").trigger("click");
			}
		}, 1000);
	}

	onSelectChangeCheckbox1(e: any, val: any) {
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

	onSelectAllChange1(checkedState: SelectAllCheckboxState) {
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

	setRemoveGroupFooterOnly() {
		setTimeout(function () {
			if (jQuery("#danhSachDaThuTienGrid .k-group-footer").length == 1) {
				jQuery("#danhSachDaThuTienGrid .k-group-footer").hide();
			} else {
				jQuery("#danhSachDaThuTienGrid .k-group-footer").show();
			}
		}, 100);
	}

	tinhTiLeMiemGiamInGrid(data: DanhSachChiPhiKhamChuaBenh) {
		let sumSoTienBenhNhanTra = data.ThanhTien - data.BHYTThanhToan - data.TongCongNo;
		if (sumSoTienBenhNhanTra == 0 || isNaN(data.SoTienMG)) {
			return 0;
		}
		return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
	}

	hoanThu(dataItem: any) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
			this.dialog
				.open(ConfirmComponent, {
					disableClose: false,
					width: "400px",
					data: {
						Title: "Xác nhận",
						Message: `<b class='text-hoan-thu'>Hoàn thu để trả lại tiền người bệnh. Nếu đã hoàn thu không hủy được phiếu thu.</b>`
					},
				})
				.afterClosed()
				.subscribe(result => {
					if (result === "Yes") {
						this.apiService.post<any>("ThuNgan/HoanThuTheoDichVu", dataItem).subscribe(
							() => {
								this.loadingThanhCong.emit(true);
							},
							(err: ApiError) => {
								err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
							}
						);
					}
				});
		} else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}
}
