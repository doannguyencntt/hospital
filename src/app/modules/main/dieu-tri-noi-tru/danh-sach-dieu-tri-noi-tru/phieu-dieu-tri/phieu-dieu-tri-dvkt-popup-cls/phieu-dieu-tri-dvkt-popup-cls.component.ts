import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';
import icClose from '@iconify/icons-ic/close';
import IcPDF from '@iconify/icons-ic/picture-as-pdf';
import icFile from '@iconify/icons-ic/twotone-insert-drive-file'
import { Http, RequestOptions, ResponseContentType } from '@angular/http';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { HttpParams } from '@angular/common/http';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';

@Component({
  selector: 'app-phieu-dieu-tri-dvkt-popup-cls',
  templateUrl: './phieu-dieu-tri-dvkt-popup-cls.component.html',
  styleUrls: ['./phieu-dieu-tri-dvkt-popup-cls.component.scss']
})
export class PhieuDieuTriDvktPopupClsComponent implements OnInit {

  icClose = icClose;
	icPDF = IcPDF;
	icFile = icFile;

	loaiTapTin = LoaiTapTin;
	dataPopup: any;
	
	ketQuaCanLamSanPTTT: any;

	gridDataSource: any = [];
    gridColumns: any[] = [];

	@ViewChild('downloadHeaderTemplate', { static: true }) downloadHeaderTemplate: TemplateRef<any>;
	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>, private http: Http,
  private apiService: ApiService, private notificationService: NotificationService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.gridColumns = [
			{ Field: "TenFile", Title: "Tên File", Width: 150 },
            { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate, TemplateHeader: this.downloadHeaderTemplate }
        ];
			
		this.gridDataSource = this.data.KetQuaCanLamSanPTTT;
  }

  close() {
		this.dialogRef.close('close');
	}

	ViewImageAndPdf(item) {
		let type = null, title = null, description = null;

		switch(item.LoaiTapTin)
		{
			case this.loaiTapTin.Image:
				type = 'Image';
				title = 'Xem ảnh';
				description = item.MoTa ? item.MoTa : '';
				break;
			case this.loaiTapTin.Pdf:
				type = 'PDF';
				title = 'Xem tập tin';
				description = item.MoTa ? item.MoTa : '';
				break;
			default:
				break;
		}

		this.dialog.open(ViewImagePdfComponent, {
			disableClose: false,
			width: '1000px',
			height: '600px',
			data: {
				Type: type,
				Title: title,
				Description: description,
				Src: item.Url
			}
		});
	}

	DownloadFile(item) {
		const params = new HttpParams({
			fromObject: {
				tenGuid: item.TenGuid,
				duongDan: item.DuongDan,
			},
		});

		this.apiService.get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe((result) => {
			this.dataPopup = result;
			
			const options = new RequestOptions({ responseType: ResponseContentType.Blob });
			this.http.get(this.dataPopup, options).subscribe(res => {
				saveFile(res.blob(), item.TenFile);
			})
		});
	}

	DownloadAllFiles() {
		this.data.KetQuaCanLamSanPTTT.forEach(item => {
			const params = new HttpParams({
				fromObject: {
					tenGuid: item.TenGuid,
					duongDan: item.DuongDan,
				},
			});

			this.apiService.get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe((result) => {
				this.dataPopup = result;
				
				const options = new RequestOptions({ responseType: ResponseContentType.Blob });
				this.http.get(this.dataPopup, options).subscribe(res => {
					saveFile(res.blob(), item.TenFile);
				})
			});
		})
  }

}
