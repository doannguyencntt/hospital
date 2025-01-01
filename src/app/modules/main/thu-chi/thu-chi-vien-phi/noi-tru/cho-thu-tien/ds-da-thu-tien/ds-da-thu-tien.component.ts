import {Component, OnInit, Output, EventEmitter, HostListener, Input, ChangeDetectorRef, SimpleChanges, OnChanges, ViewEncapsulation} from "@angular/core";
import {process, State, GroupDescriptor} from "@progress/kendo-data-query";
import {ActivatedRoute} from "@angular/router";
import icCheck from "@iconify/icons-ic/twotone-check";
import {MatDialog} from "@angular/material";
import {DanhSachDaThuTienResp, DanhSachChiPhiKhamChuaBenh, DanhSachCongNoChoThu, CommonThuTien} from "../cho-thu-tien.model";
import icRedEye from "@iconify/icons-ic/twotone-remove-red-eye";
import icInfo from "@iconify/icons-ic/twotone-info";
import {SecurityOperation} from "src/app/shared/enum/security-operation.enum";
import {NotificationService} from "src/app/core/services/notification.service";
import {AuthService} from "src/app/core/services/auth.service";
import {SystemMessage} from "src/app/shared/configdata/system-message";
import {ApiError} from "src/app/shared/models/api-error.model";
import {ApiService} from "src/app/core/services/api.service";
import {DocumentType} from "src/app/shared/enum/document-type.enum";
import {ConfirmComponent} from "src/app/shared/component/dialogs/confirm/confirm.component";
import {MiemGiamTheoDVComponent} from "../../../common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component";
declare var jQuery: any;
@Component({
	selector: "app-ds-da-thu-tien",
	templateUrl: "./ds-da-thu-tien.component.html",
	styleUrls: ["./ds-da-thu-tien.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class DsDaThuTienComponent implements OnInit, OnChanges {
	documentType: DocumentType = DocumentType.ThuNgan;
	@Input() danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh[] = [];
	@Input() dataSourceChanged: boolean = false;
	public danhSachChiCapNhatLai: DanhSachChiPhiKhamChuaBenh[] = [];
	public gridDataDaThu: any;
	public danhSachCongNoChoThus: DanhSachCongNoChoThu[] = [];
	public yeuCauTiepNhanId: number = 0;
	public showHuyThanhToan: boolean = false;
	public showCapNhatThanhToan: boolean = false;
	public DanhSachDaThuTienResp: DanhSachDaThuTienResp;
	public icCheck = icCheck;
	public commonThuTien = new CommonThuTien();
	public icRedEye = icRedEye;
	icInfo = icInfo;
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
			field: "Khoa",
			aggregates: [
				{field: "ThanhTien", aggregate: "sum"},
				{field: "BHYTThanhToan", aggregate: "sum"},
				{field: "SoTienMG", aggregate: "sum"},
				{field: "DaThanhToan", aggregate: "sum"},
				{field: "BNConPhaiThanhToan", aggregate: "sum"},
				{field: "TongCongNo", aggregate: "sum"},
			],
		},
		{
			field: "NgayPhatSinhDiplay",
			aggregates: [
				{field: "ThanhTien", aggregate: "sum"},
				{field: "BHYTThanhToan", aggregate: "sum"},
				{field: "SoTienMG", aggregate: "sum"},
				{field: "DaThanhToan", aggregate: "sum"},
				{field: "BNConPhaiThanhToan", aggregate: "sum"},
				{field: "TongCongNo", aggregate: "sum"},
			],
		},
	];

	public state: State = {
		group: this.groups,
	};

	ngOnChanges(value: SimpleChanges) {
		if (this.dataSourceChanged == true) {
			this.gridDataDaThu = process(this.danhSachChiPhiKhamChuaBenh, this.state);
			this.setRemoveGroupFooterOnly();
		}
	}

	onTabSelect() {}
	constructor(private route: ActivatedRoute, private dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService, private cdRef: ChangeDetectorRef, private apiService: ApiService) {}

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
		this.danhSachChiPhiKhamChuaBenh.forEach((element) => {
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
		return sum;
	}

	ngOnInit() {
		this.yeuCauTiepNhanId = this.route.snapshot.params.id;
		this.gridDataDaThu = process(this.danhSachChiPhiKhamChuaBenh, this.state);
		this.setRemoveGroupFooterOnly();
	}

	ngAfterViewChecked() {
		this.cdRef.detectChanges();
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
				data: {dataItem, isView},
			})
			.afterClosed()
			.subscribe((result) => {
				if (result != null) {
				}
			});
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
				.subscribe((result) => {
					if (result === "Yes") {
						this.apiService.post<any>("ThuNganNoiTru/HoanThuTheoDichVu", dataItem).subscribe(
							(resultData) => {
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

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 119 && event.ctrlKey) {
			event.preventDefault();
		}
	}
}
