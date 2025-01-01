import {Component, OnInit} from "@angular/core";
import {ThongTinBenhNhan} from "../cho-thu-tien.model";
import {ActivatedRoute} from "@angular/router";
import {BaseService} from "src/app/core/services/base.service";
import {HttpParams} from "@angular/common/http";
import {ApiService} from "src/app/core/services/api.service";
import {MatDialog} from "@angular/material";
import {ViewImagePdfComponent} from "src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component";

@Component({
	selector: "app-thong-tin-chung-benh-nhan",
	templateUrl: "./thong-tin-chung-benh-nhan.component.html",
	styleUrls: ["./thong-tin-chung-benh-nhan.component.scss"],
})
export class ThongTinChungBenhNhanComponent implements OnInit {
	public thongTinBenhNhan: ThongTinBenhNhan;
	public idYeuCauTiepNhan: number = 0;

	constructor(private route: ActivatedRoute, private baseService: BaseService, private apiService: ApiService, private dialog: MatDialog) {}

	ngOnInit() {
		this.thongTinBenhNhan = {} as ThongTinBenhNhan;
		this.idYeuCauTiepNhan = this.route.snapshot.params.id;
		if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
			this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
		}
	}

	getThongTinYeuCauBenhNhan(id) {
		this.baseService.getById<any>(id).subscribe(resultData => {
			if (resultData !== null && resultData !== undefined) {
				this.thongTinBenhNhan = resultData;
			}
		});
	}

	async xemTaiLieu(dataItem) {
		const params = new HttpParams({
			fromObject: {
				tenGuid: dataItem.TenGuid,
				duongDan: dataItem.DuongDan,
			},
		});
		this.apiService.get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe(resp => {
			if (resp) {
				if (dataItem.TenGuid.indexOf(".pdf") != -1 || dataItem.TenGuid.indexOf(".PDF") != -1) {
					this.dialog.open(ViewImagePdfComponent, {
						disableClose: false,
						width: "1000px",
						height: "600px",
						data: {
							Type: "PDF",
							Title: "Xem tài liệu",
							Description: resp.MoTa !== null ? resp.MoTa : "",
							Src: resp,
						},
					});
				} else {
					this.dialog.open(ViewImagePdfComponent, {
						disableClose: false,
						width: "1000px",
						height: "600px",
						data: {
							Type: "Image",
							Title: "Xem ảnh",
							Description: resp.MoTa !== null ? resp.MoTa : "",
							Src: resp,
						},
					});
				}
			}
		});
	}
}
