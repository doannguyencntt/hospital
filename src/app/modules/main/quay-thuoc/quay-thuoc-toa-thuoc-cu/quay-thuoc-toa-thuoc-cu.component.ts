import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ToaThuocCuTimKiem } from '../quay-thuoc.model';
import { ActivatedRoute,Router } from '@angular/router';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-quay-thuoc-toa-thuoc-cu',
  templateUrl: './quay-thuoc-toa-thuoc-cu.component.html',
  styleUrls: ['./quay-thuoc-toa-thuoc-cu.component.scss']
})
export class QuayThuocToaThuocCuComponent implements OnInit {
  id:number=this.route.snapshot.params.id;
  idSub:number=0;
  donThuocToa : any[];
  laDuocPhamBenhVien : boolean;
timKiemToaThuocCu:ToaThuocCuTimKiem;
gridColumns: any[] = [];
gridChildColumns: any[] = [];
donThuocId : any[]=[];
  constructor(private route: ActivatedRoute,private router: Router,private notificationService: NotificationService) {
   }
  urlGetDataGridChild: string = "QuayThuoc/GetDataForGridToaThuocCuAsync?tiepNhanId="+ this.id;
  urlGetTotalPageGridChild: string = "QuayThuoc/GetTotalPageForGridToaThuocCuAsync?tiepNhanId="+ this.id;
  urlGetDataGridChild1: string = "QuayThuoc/GetDataForGridChildAsync"; 
  urlGetTotalPageGridChild1: string = "QuayThuoc/GetTotalPageForGridChildAsync";
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('detailTemplateCT', { static: true }) actionChiTietTemplate: TemplateRef<any>;
  ngOnInit() {
    this.idSub = this.route.snapshot.params.ttcheck;
    this.id = this.route.snapshot.params.id;
    this.timKiemToaThuocCu = new ToaThuocCuTimKiem();
    this.gridColumns = [
      { Field: "DVKham", Title: "DV Khám", Width: 200, Sortable: true },
      { Field: "ChuanDoan", Title: "Chẩn đoán", MinWidth: 120, Sortable: true },
      { Field: "BacSiKham", Title: "BS Khám", Width: 150, Sortable: true },
      { Field: "NgayKham", Title: "Ngày Khám", Width: 200, Sortable: true },
    ];
    this.gridChildColumns = [
      { Field: "TenThuoc", Title: "Tên thuốc", Width: 200, Sortable: true,LinkDetail:false },
      { Field: "HoatChat", Title: "Hoạt Chất", MinWidth: 200, Sortable: true},
      { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: true},
      { Field: "SoLuong", Title: "Số lượng", Width: 100, Sortable: true },
      { Field: "LaDuocPhamBenhVien", Title: "", Width: 200, Template: this.actionChiTietTemplate }
    ];
  }
  onKey(event: any) {
    if (event.key == "Enter") {
        this.TimKiem();
    }
  }
  ConvertDateTime(datime): String {
    var date = new Date(datime);
    var year = date.getFullYear();
    var rawMonth = parseInt(String(date.getMonth())) + 1;
    var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
    var rawDay = parseInt(String(date.getDate()));
    var day = rawDay < 10 ? '0' + rawDay : rawDay;
    // return day + '/' + month + '/' + year;
    return year + '-' + month + '-' + day;
}
  TimKiem() {
    let dvKhamQueryString = null;
    let ChuanDoanQueryString = null;
    let BSQueryString = null;
    let ngayKhamStartQueryString = null;
    let ngayKhamEndQueryString = null;

    if (this.timKiemToaThuocCu.DVKhamHienThi != null) {
      dvKhamQueryString = "\"" + this.timKiemToaThuocCu.DVKhamHienThi + "\"";
    }
    if (this.timKiemToaThuocCu.ChuanDoan != null) {
      ChuanDoanQueryString = "\"" + this.timKiemToaThuocCu.ChuanDoan + "\"";
    }
    if (this.timKiemToaThuocCu.BSKham != null) {
      BSQueryString = "\"" + this.timKiemToaThuocCu.BSKham + "\"";
    }
    if (this.timKiemToaThuocCu.RangeDate.startDate != null) {
      ngayKhamStartQueryString = "\"" + CommonService.formatDateTime(this.timKiemToaThuocCu.RangeDate.startDate, "mm/dd/yyyy") + "\"";
    }
    if (this.timKiemToaThuocCu.RangeDate.endDate != null) {
      ngayKhamEndQueryString = "\"" + CommonService.formatDateTime(this.timKiemToaThuocCu.RangeDate.endDate, "mm/dd/yyyy") + "\"";
    }

    let queryString = "{\"DVKham\":" + dvKhamQueryString + ",\"ChuanDoan\":" + ChuanDoanQueryString
    + ",\"BacSi\":" + BSQueryString + ",\"DateStart\":" + ngayKhamStartQueryString + ",\"DateEnd\":" + ngayKhamEndQueryString + "}";
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }
  extCheckboxSelection(event: any)
  {
    this.donThuocId = event;
  }
  ChonThuoc(){
    //this.router.navigate(['quay-thuoc/mua-thuoc/'+ this.id +'/' + 0 + '/1/'],this.donThuocId);
    if(this.donThuocId.length == 0){
      this.notificationService.showError("Bạn chưa chọn toa thuốc.")
    }
    else{
      this.router.navigate(['/nha-thuoc/khach-vang-lai'], { queryParams: { ToaThuoc: this.donThuocId,maBN: this.id,ttCheck:this.idSub} }); // idSub là trạng thái check
    }
    
  }
  Huy(){
    this.router.navigate(['nha-thuoc']);
  }
  onKey3(event: any) {
    if (event.key == 'Enter') {
      // this.TimKiem();
    }
  }
  changRange(event: any) {
    // this.TimKiem();
  }
}
