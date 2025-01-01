import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SoDoGiuongBenhSearchHeader } from '../so-do-giuong-benh.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-quan-ly-giuong-benh-phong',
  templateUrl: './quan-ly-giuong-benh-phong.component.html',
  styleUrls: ['./quan-ly-giuong-benh-phong.component.scss']
})
export class QuanLyGiuongBenhPhongComponent implements OnInit {

  documentType: DocumentType;
  gridColumns: any[] = [];

  id: number;

  tenKhoa: string = "";

  soDoGiuongBenhSearch: SoDoGiuongBenhSearchHeader = new SoDoGiuongBenhSearchHeader();

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('phongTemplate', { static: true }) phongTemplate: TemplateRef<any>;

  //Footer template
  @ViewChild('khoaFooterTemplate', { static: true }) khoaFooterTemplate: TemplateRef<any>;
  @ViewChild('giuongTrongFooteremplate', { static: true }) giuongTrongFooteremplate: TemplateRef<any>;
  @ViewChild('giuongCoBenhNhanFooteremplate', { static: true }) giuongCoBenhNhanFooteremplate: TemplateRef<any>;
  @ViewChild('giuongBenhCuaKhoaFooteremplate', { static: true }) giuongBenhCuaKhoaFooteremplate: TemplateRef<any>;
  //Data footer
  totalGiuongTrong: string = "0";
  totalGiuongCoBenhNhan: string = "0 (0)";
  totalTongGiuongBenhCuaKhoa: string = "0";

  //
  urlTotal: string;
  urlData: string;

  
  constructor(private authService: AuthService, private router: Router,
    private notificationService: NotificationService, private dialog: MatDialog,
    private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.TinhTrangGiuongBenh;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 60},
      { Field: "Ten", Title: "Phòng", MinWidth: 200, Sortable: true, Template: this.phongTemplate,
          TemplateFooter: this.khoaFooterTemplate },
      { Field: "GiuongTrong", Title: "Số Giường Trống", Width: 150, Sortable: true,
          TemplateFooter: this.giuongTrongFooteremplate },
      { Field: "GiuongCoBenhNhan", Title: "Số Giường Có Người Bệnh", Width: 200, Sortable: true,
      TemplateFooter: this.giuongCoBenhNhanFooteremplate },
      { Field: "TongGiuongBenhCuaKhoa", Title: "Tổng Số Giường", Width: 200, Sortable: true,
      TemplateFooter: this.giuongBenhCuaKhoaFooteremplate }
    ];

    this.id = this.route.snapshot.params.id;

    this.getTenKhoa(this.id).then(obj => {
      this.tenKhoa = obj;
    });

    this.urlTotal = "SoDoGiuongBenh/GetTotalPageForGridSoDoGiuongBenhPhongAsync/?khoaId=" + this.id;
    this.urlData = "SoDoGiuongBenh/GetDataForGridSoDoGiuongBenhPhongAsync?khoaId=" + this.id;
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
  
  Xem(event){
    // console.log("event = ", event);
    this.router.navigate(['danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-phong-khoa/'+ event.Id + '/' + this.id]);
  }

  quayLai(){
    this.router.navigate(['danh-muc/nhom-giuong-benh/so-do-giuong-benh/']);
  }

  getTenKhoa(id: number) {
    return this.apiService.post<string>("SoDoGiuongBenh/GetTenKhoa?khoaId=" + id).toPromise().catch(() => "");
  }
}
