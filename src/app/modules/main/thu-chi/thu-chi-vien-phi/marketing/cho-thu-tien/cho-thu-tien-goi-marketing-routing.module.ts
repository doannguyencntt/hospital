import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { PermisssionGuard } from "src/app/core/guards/permission-guard.service";
import { ChiTietChoQuyetToanMarketing } from "./chi-tiet-cho-quyet-toan-goi-marketing/chi-tiet-cho-quyet-toan-goi-marketing.component";
import { DanhSachGoiMarketing } from "./danh-sach-goi-marketing/danh-sach-cho-thu-tien-goi-marketing.component";
import { ChiTietDaQuyetToanMarketing } from "./chi-tiet-da-quyet-toan-goi-marketing/chi-tiet-da-quyet-toan-goi-marketing.component";

const routes: Routes = [
	{
		path: "",
		component: DanhSachGoiMarketing,
		data: {
			title: "Danh sách thu tiền viện phí gói marketing",
			DocumentType: DocumentType.ThuNgan,
			SecurityOperation: SecurityOperation.View,
		},
		canActivate: [PermisssionGuard],
	},
	{
		path: "chi-tiet-cho-quyet-toan-marketing/:id",
		component: ChiTietChoQuyetToanMarketing,
		data: {
			title: "Chi tiết chờ quyết toán marketing",
			DocumentType: DocumentType.ThuNgan,
			SecurityOperation: SecurityOperation.View,
		},
		canActivate: [PermisssionGuard],
	}
	,
	{
		path: "chi-tiet-da-quyet-toan-marketing/:id",
		component: ChiTietDaQuyetToanMarketing,
		data: {
			title: "Chi tiết đã quyết toán marketing",
			DocumentType: DocumentType.ThuNgan,
			SecurityOperation: SecurityOperation.View,
		},
		canActivate: [PermisssionGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChoThuTienGoiMarketingRoutingModule { }
