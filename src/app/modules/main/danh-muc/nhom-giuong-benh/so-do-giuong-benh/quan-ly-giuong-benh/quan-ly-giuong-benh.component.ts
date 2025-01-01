import { Component, OnInit, ViewChild, TemplateRef, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SoDoGiuongBenhSearchHeader } from '../so-do-giuong-benh.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quan-ly-giuong-benh',
  templateUrl: './quan-ly-giuong-benh.component.html',
  styleUrls: ['./quan-ly-giuong-benh.component.scss']
})
export class QuanLyGiuongBenhComponent implements OnInit {

  phongId: number;
  khoaId: number;

  documentType: DocumentType;
  gridColumns: any[] = [];
  dataSource: any;

  tenKhoa: string = "";
  maTenPhong: string = "";

  searchCtrl = new FormControl;

  soDoGiuongBenhSearch: SoDoGiuongBenhSearchHeader = new SoDoGiuongBenhSearchHeader();

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('benhNhanTemplate', { static: true }) benhNhanTemplate: TemplateRef<any>;
  @ViewChild('benhNhan2Template', { static: true }) benhNhan2Template: TemplateRef<any>;
  @ViewChild('benhNhan3Template', { static: true }) benhNhan3Template: TemplateRef<any>;
  @ViewChild('benhNhan4Template', { static: true }) benhNhan4Template: TemplateRef<any>;
  @ViewChild('benhNhan5Template', { static: true }) benhNhan5Template: TemplateRef<any>;
  @ViewChild('benhNhan6Template', { static: true }) benhNhan6Template: TemplateRef<any>;
  @ViewChild('benhNhan7Template', { static: true }) benhNhan7Template: TemplateRef<any>;
  @ViewChild('benhNhan8Template', { static: true }) benhNhan8Template: TemplateRef<any>;
  @ViewChild('benhNhan9Template', { static: true }) benhNhan9Template: TemplateRef<any>;
  @ViewChild('benhNhan10Template', { static: true }) benhNhan10Template: TemplateRef<any>;
  //Footer template
  // @ViewChild('khoaFooterTemplate', { static: true }) khoaFooterTemplate: TemplateRef<any>;
  // @ViewChild('giuongTrongFooteremplate', { static: true }) giuongTrongFooteremplate: TemplateRef<any>;
  // @ViewChild('giuongCoBenhNhanFooteremplate', { static: true }) giuongCoBenhNhanFooteremplate: TemplateRef<any>;
  // @ViewChild('giuongBenhCuaKhoaFooteremplate', { static: true }) giuongBenhCuaKhoaFooteremplate: TemplateRef<any>;
  //Data footer
  totalGiuongTrong: string = "0";
  totalGiuongCoBenhNhan: string = "0 (0)";
  totalTongGiuongBenhCuaKhoa: string = "0";
  

  //
  urlTotal: string;
  urlData: string;

  icSearch = icSearch;
  searchString: string;

  constructor(private authService: AuthService, private router: Router,
    private notificationService: NotificationService, private dialog: MatDialog,
    private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.TinhTrangGiuongBenh;
    this.phongId = this.route.snapshot.params.phongId;
    this.khoaId = this.route.snapshot.params.khoaId;

    this.urlTotal  = "SoDoGiuongBenh/GetTotalPageForGridSoDoGiuongBenhKhoaPhongAsync/?khoaId=" + this.khoaId + "&phongId=" + this.phongId;
    this.urlData = "SoDoGiuongBenh/GetDataForGridSoDoGiuongBenhKhoaPhongAsync/?khoaId=" + this.khoaId + "&phongId=" + this.phongId;

    this.getTenKhoa(this.khoaId).then(obj => {
      this.tenKhoa = obj;
    });

    this.getMaTenPhong(this.phongId).then(obj => {
      this.maTenPhong = obj;
    });

    this.setDefaultColumnGrid();

    // this.gridColumns.push({ Field: "TongGiuongBenhCuaKhoa", Title: "Tổng Số Giường", Width: 200, Sortable: true,
    // TemplateFooter: this.giuongBenhCuaKhoaFooteremplate });

    //console.log("ngOnInit = ", this.phongId, this.khoaId);

  }

  getTenKhoa(id: number) {
    return this.apiService.post<string>("SoDoGiuongBenh/GetTenKhoa?khoaId=" + id).toPromise().catch(() => "");
  }

  getMaTenPhong(id: number) {
    return this.apiService.post<string>("SoDoGiuongBenh/GetMaTenPhong?phongId=" + id).toPromise().catch(() => "");
  }

  getDataSource(resultData){
    this.setDefaultColumnGrid();

    //console.log("getDataSource = ", resultData);
    let soBenhNhanMax = 0;

    if(resultData != null && resultData != undefined){
      resultData.forEach(e => {
        if(e.lstBenhNhanGiuong != null && e.lstBenhNhanGiuong != undefined 
            && soBenhNhanMax < e.lstBenhNhanGiuong.length)
        {
          soBenhNhanMax = e.lstBenhNhanGiuong.length;
        }
      });
    }
    
    this.setBenhNhanColumnForGrid(soBenhNhanMax);
    this.setBenhNhanDataForGrid(resultData);
    
    //set datasource
    this.dataSource = resultData;
  }

  setDefaultColumnGrid(){
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 60},
      { Field: "TenGiuong", Title: "Tên Giường", MinWidth: 200, Sortable: true},
      { Field: "DonGiaDisplay", Title: "Đơn Giá", Width: 150, Sortable: true},
      //{ Field: "GiuongCoBenhNhan", Title: "Số Giường Có Người Bệnh", Width: 200, Sortable: true},
      // { Field: "TongGiuongBenhCuaKhoa", Title: "Tổng Số Giường", Width: 200, Sortable: true,
      // TemplateFooter: this.giuongBenhCuaKhoaFooteremplate }
    ];
  }

  setBenhNhanColumnForGrid(soBenhNhanMax: number){
    if(soBenhNhanMax != 0){
      for(var i = 0; i < soBenhNhanMax; i++)
      {
        //let columnTemplate = this.gridColumns;
        let title = "Người Bệnh " + (i + 1);
        let fieldName = "BenhNhan" + (i + 1);

        //console.log("testTemplate = ", this.testTemplate);
        switch (i) {
          case 0:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhanTemplate })
            break;
          case 1:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan2Template })
            break;
          case 2:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan3Template })
            break;
          case 3:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan4Template })
            break;
          case 4:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan5Template })
            break;
          case 5:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan6Template })
            break;
          case 6:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan7Template })
            break;
          case 7:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan8Template })
            break;
          case 8:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan9Template })
            break;
          case 9:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan10Template })
            break;
          default:
            this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true })
            break;
      }
        

        this.gridChild._gridColumns = this.gridColumns;
      }
    }
  }

  // Xem(data: any, rowIndex: any, abc: any){
  //   console.log("Xem = ", data, rowIndex, abc);
  // }

  getTotalBottomGrid(numberType: number = 1){
    if(this.dataSource == null || this.dataSource == undefined || this.dataSource.length == 0){
      return "0";
    }

    let result = "0";
    switch (numberType) {
      case 1:
        result = this.dataSource[0].TongSoGiuong;
        return result;
      case 2:
        result = this.dataSource[0].TongSoGiuongTrong;
        return result;
      case 3:
        result = this.dataSource[0].TongSoGiuongCoBenhNhan;
        return result;
      case 4:
        result = this.dataSource[0].TongSoGiuongNamGhep;
        return result;
      default:
        return "0";
  }
  }

  setTitle(data: any, index: number = 1){
    //return "Hello, World! \nvu le";

    let result = "Mã NB: MaBN \nKhoa điều trị: KhoaDieuTri \nPhòng: Phong \n" 
                        + "Họ và tên: HoVaTen \nNăm sinh: NamSinh \nSĐT: SoDienThoai \nTình trạng bệnh: TinhTrangBenh \n" 
                        + "Ngày vào viện: NgayVaoVien \nNgày ra viện: NgayRaVien";

    let item = data.lstBenhNhanGiuong[index - 1];


    //console.log("setTitle = ", data, index, item, data.lstBenhNhanGiuong[index]);

    if(item != undefined){
      result = result.replace("MaBN", (item.MaBenhNhan == null ? "" : item.MaBenhNhan))
      .replace("KhoaDieuTri", (item.KhoaDieuTri == null ? "" : item.KhoaDieuTri))
      .replace("Phong", (item.Phong == null ? "" : item.Phong))
      .replace("HoVaTen", (item.HoVaTen == null ? "" : item.HoVaTen))
      .replace("NamSinh", (item.NamSinh == null ? "" : item.NamSinh))
      .replace("SoDienThoai", (item.SoDienThoai == null ? "" : item.SoDienThoai))
      .replace("TinhTrangBenh", (item.TinhTrangBenh == null ? "" : item.TinhTrangBenh))
      .replace("NgayVaoVien", (item.NgayVaoVien == null ? "" : item.NgayVaoVien))
      .replace("NgayRaVien", (item.NgayRaVien == null ? "" : item.NgayRaVien));
    }
    else{
      result = null;
    }

    return result;
  }

  displayFieldBenhNhan(data: any, index: number = 1){
    let result = "";
    switch (index) {
      case 1:
        result = data.BenhNhan1;
        return result;
      case 2:
        result = data.BenhNhan2;
        return result;
      case 3:
        result = data.BenhNhan3;
        return result;
      case 4:
        result = data.BenhNhan4;
        return result;
      case 5:
        result = data.BenhNhan5;
        return result;
      case 6:
        result = data.BenhNhan6;
        return result;
      case 7:
        result = data.BenhNhan7;
        return result;
      case 8:
        result = data.BenhNhan8;
        return result;
      case 9:
        result = data.BenhNhan9;
        return result;
      case 10:
        result = data.BenhNhan10;
        return result;
      default:
        return "";
  }

  }

  setBenhNhanDataForGrid(resultData: any){
    if(resultData != null && resultData != undefined){
      //console.log("setBenhNhanDataForGrid - resultData = ", resultData);
      resultData.forEach(e => {
        let stt = 0;
        if (e.lstBenhNhanGiuong != null && e.lstBenhNhanGiuong != undefined) {
          e.lstBenhNhanGiuong.forEach(p => {
              e["BenhNhan" + (stt + 1)] = p.HoVaTen;
              stt = stt + 1;
          });
        }
      });
    }

    //console.log("setBenhNhanDataForGrid = ", resultData);
  }

  quayLai(){
    this.router.navigate(['danh-muc/nhom-giuong-benh/so-do-giuong-benh/chinh-sua/' + this.khoaId]);
  }

  blur(){
    //console.log("blur = ");
    this.timKiem();
  }

  clearSearch(event){
    //console.log("clearSearch = ", event);
    this.searchString = event;
    if(event == ""){
      this.timKiem();
    }
  }

  onKey(event){
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  timKiem(){
    this.gridChild.searchString = this.searchString;
    this.gridChild.search();
  }
}
