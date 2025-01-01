import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DocumentType} from "src/app/shared/enum/document-type.enum";
import {SecurityOperation} from "src/app/shared/enum/security-operation.enum";
import {PermisssionGuard} from "src/app/core/guards/permission-guard.service";
import {DanhSachThuNganChoThuTienNoiTruComponent} from "./danh-sach-cho-thu-tien/danh-sach-cho-thu-tien.component";
import {ChiTietChoQuyetToanComponent} from "./chi-tiet-cho-quyet-toan/chi-tiet-cho-quyet-toan.component";
import {ChiTietDaQuyetToanComponent} from "./chi-tiet-da-quyet-toan/chi-tiet-da-quyet-toan.component";
const routes: Routes = [
	{
		path: "",
		component: DanhSachThuNganChoThuTienNoiTruComponent,
		data: {
			title: "Danh sách thu tiền viện phí nội trú",
			DocumentType: DocumentType.ThuNgan,
			SecurityOperation: SecurityOperation.View,
		},
		canActivate: [PermisssionGuard],
	},
	{
		path: "chi-tiet-cho-quyet-toan/:id",
		component: ChiTietChoQuyetToanComponent,
		data: {
			title: "Chi tiết chờ quyết toán",
			DocumentType: DocumentType.ThuNgan,
			SecurityOperation: SecurityOperation.View,
		},
		canActivate: [PermisssionGuard],
	},
	{
		path: "chi-tiet-da-quyet-toan/:id",
		component: ChiTietDaQuyetToanComponent,
		data: {
			title: "Chi tiết đã quyết toán",
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
export class ChoThuTienNoiTruRoutingModule {}
