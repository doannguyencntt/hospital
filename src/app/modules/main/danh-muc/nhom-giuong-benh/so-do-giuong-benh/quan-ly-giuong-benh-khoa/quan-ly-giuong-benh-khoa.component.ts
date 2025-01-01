import { Component, OnInit, ViewChild, TemplateRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SoDoGiuongBenhSearchHeader } from '../so-do-giuong-benh.model';
import { MatDialog } from '@angular/material';
import { SoDoGiuongPopupComponent } from '../so-do-giuong-popup/so-do-giuong-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
  selector: 'app-quan-ly-giuong-benh-khoa',
  templateUrl: './quan-ly-giuong-benh-khoa.component.html',
  styleUrls: ['./quan-ly-giuong-benh-khoa.component.scss']
})
export class QuanLyGiuongBenhKhoaComponent implements OnInit {

  icFilterList = icFilterList;

  documentType: DocumentType;
  gridColumns: any[] = [];

  icFileExcel=icFileExcel;

  soDoGiuongBenhSearch: SoDoGiuongBenhSearchHeader = new SoDoGiuongBenhSearchHeader();

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('soDoGiuongTemplate', { static: true }) soDoGiuongTemplate: TemplateRef<any>;

  //Footer template
  @ViewChild('khoaFooterTemplate', { static: true }) khoaFooterTemplate: TemplateRef<any>;
  @ViewChild('giuongTrongFooteremplate', { static: true }) giuongTrongFooteremplate: TemplateRef<any>;
  @ViewChild('giuongCoBenhNhanFooteremplate', { static: true }) giuongCoBenhNhanFooteremplate: TemplateRef<any>;
  @ViewChild('giuongBenhCuaKhoaFooteremplate', { static: true }) giuongBenhCuaKhoaFooteremplate: TemplateRef<any>;
  //Data footer
  totalGiuongTrong: string = "0";
  totalGiuongCoBenhNhan: string = "0 (0)";
  totalTongGiuongBenhCuaKhoa: string = "0";

  constructor(private authService: AuthService, private router: Router,
    private notificationService: NotificationService, private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.TinhTrangGiuongBenh;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 60},
      { Field: "Ten", Title: "Khoa", MinWidth: 200, Sortable: true,LinkDetail:true,
          TemplateFooter: this.khoaFooterTemplate },
      { Field: "GiuongTrong", Title: "Giường Trống", Width: 150, Sortable: true,
          TemplateFooter: this.giuongTrongFooteremplate },
      { Field: "GiuongCoBenhNhan", Title: "Giường Có Người Bệnh", Width: 200, Sortable: true,
      TemplateFooter: this.giuongCoBenhNhanFooteremplate },
      { Field: "TongGiuongBenhCuaKhoa", Title: "Tổng Giường Bệnh Của Khoa", Width: 200, Sortable: true,
      TemplateFooter: this.giuongBenhCuaKhoaFooteremplate },
      { Field: "Id", Title: "Sơ Đồ Giường", Width: 100, Template: this.soDoGiuongTemplate },
    ];

  }


  getDataSource(resultData){
    //console.log("getDataSource = ", resultData);
    if(resultData != null && resultData != undefined && resultData.length > 0){
      this.totalGiuongTrong = resultData[0].TongSoGiuongTrong;
      this.totalGiuongCoBenhNhan = resultData[0].TongSoGiuongCoBenhNhan + " (" + resultData[0].TongSoGiuongGhep + ")";
      this.totalTongGiuongBenhCuaKhoa = resultData[0].TongSoTongGiuongBenhCuaKhoa;
    }
  }

  khoaChange(event){
    this.soDoGiuongBenhSearch.KhoaId = event;
    this.TimkiemNangCao();
  }

  TimkiemNangCao(){
    var queryString = JSON.stringify(this.soDoGiuongBenhSearch);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  Xem(item) {
    //console.log("Xem = ", item, this.gridChild._gridDataSource.data[0]);

    let dialogRef = this.dialog.open(SoDoGiuongPopupComponent, {
      disableClose: false,
      width: '1000px',
      height: '500px',
      data: item.Id,
    });
    dialogRef.afterClosed().subscribe(result => {

    });

  }
  totalKhac(item)
  {
    //console.log("totalKhac = ", item);
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("SoDoGiuongBenh/ExportSoDoGiuongBenh", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "SoDoGiuongBenh" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
