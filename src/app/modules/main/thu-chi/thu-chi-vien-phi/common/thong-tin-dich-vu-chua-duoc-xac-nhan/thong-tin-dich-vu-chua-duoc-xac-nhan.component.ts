import {Component, OnInit, ViewChild, TemplateRef, Inject} from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {GroupDescriptor} from "@progress/kendo-data-query";
import {MatDialogRef} from "@angular/material";
import {BaseService} from "src/app/core/services/base.service";
import { ThongTinBenhNhan } from "../../ngoai-tru/cho-thu-tien/cho-thu-tien.model";


@Component({
	selector: "app-thong-tin-dich-vu-chua-duoc-xac-nhan",
	templateUrl: "./thong-tin-dich-vu-chua-duoc-xac-nhan.component.html",
	styleUrls: ["./thong-tin-dich-vu-chua-duoc-xac-nhan.component.scss"],
})
export class ThongTinDichVuChuaDuocXacNhanComponent implements OnInit {
	icClose = icClose;
	tongTienBNThanhToan: number = 0;

	duaLaiBenhNhan: boolean = false;

	tongDichVu: number = 0;
	public thongTinBenhNhan: ThongTinBenhNhan;

	constructor(@Inject(MAT_DIALOG_DATA) public danhSachChuaThanhToans: any, private dialog: MatDialog, private baseService: BaseService, private dialogRef: MatDialogRef<any>) {}
	gridColumnsChuaThuTien: any[] = [];
	dataSourceChuaThuTien: any = {
		data: [],
		total: 0,
	};
	groups: GroupDescriptor[] = [
		{
			field: "Nhom",
			aggregates: [{field: "ThanhTien", aggregate: "sum"}],
		},
	];
	benhNhanPhaiTra: number = 0;
	hoTenBenhNhan: string = "";
	@ViewChild("actionTemplateBHYTXacNhan", {static: true})
	actionTemplateBHYTXacNhan: TemplateRef<any>;
	//---------------------------------thành tiền------------------------------------------------------------------
	ngOnInit() {
		this.icClose;		
		this.tongTienBNThanhToan = this.danhSachChuaThanhToans.soTienBenhNhanTra;
		this.duaLaiBenhNhan = this.danhSachChuaThanhToans.duaLaiBenhNhan;
		this.hoTenBenhNhan = this.danhSachChuaThanhToans.hoten;
	}

	close() {
		this.dialog.closeAll();
	}
	ThanhToanPhiBenhNhan() {
		this.dialog.closeAll();
		this.dialogRef.close("Yes");
	}
}
