import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from '@iconify/icons-ic/close';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import icPDF from '@iconify/icons-ic/picture-as-pdf';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { Http, RequestOptions, ResponseContentType } from '@angular/http';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import { FileKetQuaCanLamSangs } from '../../../phau-thuat-thu-thuat.model';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDownward from "@iconify/icons-ic/baseline-cloud-download";
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-lich-su-hinh-anh-cls-popup',
  templateUrl: './lich-su-hinh-anh-cls-popup.component.html',
  styleUrls: ['./lich-su-hinh-anh-cls-popup.component.scss']
})
export class LichSuHinhAnhClsPopupComponent implements OnInit {
  fileKetQuaCanLamSangsLoai1: FileKetQuaCanLamSangs[] = [];
  fileKetQuaCanLamSangsLoai2: FileKetQuaCanLamSangs[] = [];
  fileKetQuaCanLamSangsLoaiAll: any;
  dataPopup: any;
  isAll: boolean = null;
  icClose = icClose;
  icPDF = icPDF;
  icDownward = icDownward;
  icRedEye = icRedEye;
  icMoreHoriz = icMoreHoriz;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  documentType: DocumentType = DocumentType.LichSuPhauThuatThuThuat;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('downLoadAllTemplate', { static: true }) downLoadAllTemplate: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private apiService: ApiService,
    private http: Http,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "Ten", Title: "Tên file", Width: 100 },
      { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate, TemplateHeader: this.downLoadAllTemplate }
    ];
    this.gridDataSource = {
      data: this.data,
      total: 0
    }
    this.fileKetQuaCanLamSangsLoaiAll = this.data;
  }

  close() {
    this.dialog.closeAll();
  }

  Xem(dataItem: any) {
    let type = null;
    let tilte = null;
    if (dataItem.LoaiFile == 2) {
      type = "PDF";
      tilte = "Tài liệu";
    } else {
      type = "Image";
      tilte = "Hình ảnh";
    }
    this.dialog.open(ViewImagePdfComponent, {
      disableClose: false,
      width: '1000px',
      height: '600px',
      data: {
        Type: type, Title: tilte,
        Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""),
        Src: dataItem.Url
      }
    });
  }

  Download(dataItem: any) {
    var self = this;
    const params = new HttpParams({
      fromObject: {
        tenGuid: dataItem.TenGuid,
        duongDan: dataItem.DuongDan,
      },
    });
    self.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((result) => {
        self.dataPopup = result;
        const options = new RequestOptions({ responseType: ResponseContentType.Blob });
        self.http.get(self.dataPopup, options).subscribe(res => {
          saveFile(res.blob(), dataItem.Ten);
        }
        )
      });
  }

  downloadFile() {
    var self = this;
    self.fileKetQuaCanLamSangsLoaiAll.forEach(element => {
      const params = new HttpParams({
        fromObject: {
          tenGuid: element.TenGuid,
          duongDan: element.DuongDan,
        },
      });
      self.apiService
        .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
        .subscribe((result) => {
          self.dataPopup = result;
          const options = new RequestOptions({ responseType: ResponseContentType.Blob });
          self.http.get(self.dataPopup, options).subscribe(res => {
            saveFile(res.blob(), element.Ten);
          }
          )
        });
    });
  }

}
