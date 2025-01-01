import { Component, OnInit, Optional, Inject, ViewChild, TemplateRef,Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { HttpParams } from '@angular/common/http';
import IcPDF from '@iconify/icons-ic/picture-as-pdf';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { RequestOptions, ResponseContentType, Http } from '@angular/http';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
@Component({
  selector: 'app-view-image-pdf-list',
  templateUrl: './view-image-pdf-list.component.html',
  styleUrls: ['./view-image-pdf-list.component.scss']
})
export class ViewImagePdfListComponent implements OnInit {
  hostingName: string;
  src: string = "";
  icClose = icClose;
  IcPDF = IcPDF;
  ChonKieuInChung: boolean = true;
  showLoaiPhieuIn: boolean = false; // kieu in
  HideClose: boolean = false;
  gridDataSource: any = {};
  gridColumns: any[] = [];
  dataPopup: any;
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog,
    private http: Http,
    private dialogRef: MatDialogRef<ViewImagePdfListComponent>) {
    // this.src= "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
  }
  modelPrint: any;
  ngOnInit() {
    console.log("dataa:", this.data.Model.TenGuidList)

    this.gridColumns = [
      { Field: "TenFile", Title: "Tên file", Width: 200, Sortable: false },
      { Field: "", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate, TemplateHeader: this.headerTemplate },
    ];
    this.gridDataSource = {
      data: this.data.Model.TenGuidList,
      total: this.data.Model.TenGuidList.length
    };
  }
  setDataGridView() {
    this.gridChild.gridDataSource = this.gridDataSource;

    if (this.gridChild !== undefined)
      this.gridChild.setDataSource();
  }
  ViewImagePDF(thongTinAnh) {
    const params = new HttpParams({
      fromObject: {
        tenGuid: thongTinAnh.TenGuid,
        duongDan: thongTinAnh.DuongDan,
      },
    });
    this.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((result) => {
        if (result) {
          if (
            thongTinAnh.TenGuid.indexOf(".pdf") != -1 ||
            thongTinAnh.TenGuid.indexOf(".PDF") != -1
          ) {
            // console.log(this.listPdf)
            this.dialog.open(ViewImagePdfComponent, {
              disableClose: true,
              width: '1000px',
              height: '600px',
              data: {
                Type: 'PDF', Title: 'Xem tập tin',
                Src: result
              }
            }).afterClosed()
              .subscribe((result) => {
                console.log("popup2", result);
              });
          }
          else {

            this.dialog.open(ViewImagePdfComponent, {
              disableClose: true,
              width: '1000px',
              height: '600px',
              data: {
                Type: 'Image', Title: 'Xem ảnh',
                Src: result
              }
            }).afterClosed()
              .subscribe((result) => {
                console.log("popup2", result);
              });
          }
        }
      });
  }
  downloadFile(dataItem) {
    const params = new HttpParams({
      fromObject: {
        tenGuid: dataItem.TenGuid,
        duongDan: dataItem.DuongDan,
      },
    });
    this.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((result) => {
        console.log(result);
        this.dataPopup = result;
        const options = new RequestOptions({ responseType: ResponseContentType.Blob });
        this.http.get(this.dataPopup, options).subscribe(res => {
          saveFile(res.blob(), dataItem.TenFile);
        }
        )
      });
  }
  downloadFileAll(dataItem) {
    dataItem.forEach(element => {
      const params = new HttpParams({
        fromObject: {
          tenGuid: element.TenGuid,
          duongDan: element.DuongDan,
        },
      });
      this.apiService
        .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
        .subscribe((result) => {
          console.log(result);
          this.dataPopup = result;
          const options = new RequestOptions({ responseType: ResponseContentType.Blob });
          this.http.get(this.dataPopup, options).subscribe(res => {
            saveFile(res.blob(), element.TenFile);
          }
          )
        });
    });

  }
  close(data: any) {
    this.dialogRef.close(data);
  }

}
