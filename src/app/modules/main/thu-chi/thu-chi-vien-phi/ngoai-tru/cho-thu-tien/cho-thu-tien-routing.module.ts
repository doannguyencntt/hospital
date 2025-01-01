import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ChiTietCacKhoanPhaiThuComponent} from "./chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component";
import {DocumentType} from "src/app/shared/enum/document-type.enum";
import {SecurityOperation} from "src/app/shared/enum/security-operation.enum";
import {PermisssionGuard} from "src/app/core/guards/permission-guard.service";
import {DanhSachThuTienNgoaiTruComponent} from "./danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component";
import {ThongTinChiTietDaThuComponent} from "./thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component";

const routes: Routes = [
	{
		path: "",
		component: DanhSachThuTienNgoaiTruComponent,
		data: {
			title: "Danh sách chờ thu phí",
			DocumentType: DocumentType.ThuNgan,
			SecurityOperation: SecurityOperation.View,
		},
		canActivate: [PermisssionGuard],
	},
	{
		path: "thong-tin-chi-tiet-cho-thu-tien/:id",
		component: ChiTietCacKhoanPhaiThuComponent,
		data: {
			title: "Thông tin chi tiết chờ thu ngân",
			DocumentType: DocumentType.ThuNgan,
			SecurityOperation: SecurityOperation.View,
		},
		canActivate: [PermisssionGuard],
	},
	{
		path: "thong-tin-chi-tiet-da-thu-tien/:id",
		component: ThongTinChiTietDaThuComponent,
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
export class ChoThuTienRoutingModule {}
