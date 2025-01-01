import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor, State, process } from '@progress/kendo-data-query';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-ket-qua-tim-kiem',
  templateUrl: './ket-qua-tim-kiem.component.html',
  styleUrls: ['./ket-qua-tim-kiem.component.scss']
})
export class KetQuaTimKiemComponent implements OnInit {
  icSearch = icSearch;
  searchString: string = null;
  gridColumns: any[] = [];
  paramsSubscription: any;

  public sortConfig = [
    {
      field: "NgayTiepNhanDT",
      dir: "desc",
    }
  ];

  @ViewChild('grid', { static: false }) grid: GridComponent;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('NgayTiepNhanDTTemplate', { static: true }) NgayTiepNhanDTTemplate: TemplateRef<any>;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router, private notificationService: NotificationService) {
    this.paramsSubscription = this.route.queryParams.subscribe(params => {
      if (params['tuKhoa'] != undefined && params['tuKhoa'] != null) {
        this.searchString = decodeURIComponent(params['tuKhoa']);
        this.reloadTimKiem(this.searchString);
      }
    });

  }

  ngOnInit() {
    this.gridColumns = [
      { Field: 'MaTN', Title: 'Mã TN', Width: 80, Sortable: true, Template: this.maTNTemplate },
      { Field: 'MaBN', Title: 'Mã NB', Width: 80, Sortable: true },
      { Field: 'HoTen', Title: 'Họ Tên', Width: 120, Sortable: true },
      { Field: 'NgaySinhDisplay', Title: 'Năm Sinh', Width: 80, Sortable: true },
      { Field: 'GioiTinhDisplay', Title: 'Giới tính', Width: 80, Sortable: true },
      { Field: 'SoDienThoai', Title: 'Điện thoại', Width: 80, Sortable: true },
      { Field: 'DiaChi', Title: 'Địa chỉ', MinWidth: 200, Sortable: true },
      { Field: 'KhoaDieuTri', Title: 'Khoa Điều trị', Width: 150, Sortable: true },
      { Field: 'PhongDieuTri', Title: 'Phòng Điều trị', Width: 150, Sortable: true },
      { Field: 'NgayTiepNhanDT', Title: 'Tiếp nhận lúc', Width: 150, Sortable: true , Template: this.NgayTiepNhanDTTemplate},
      { Field: 'LoaiYeuCauTiepNhan', Title: 'Loại', Width: 100, Sortable: true },
      { Field: 'DoiTuong', Title: 'Viện phí/BHYT', Width: 100, Sortable: true },
      { Field: 'TinhTrang', Title: 'Tình Trạng', Width: 150, Sortable: true }
    ];
    //this.getData();
  }
  viewDetail(dataItem: any) {
    if (dataItem.Url != null && dataItem.Url != ""){
      if (dataItem.ChuyenKhoa) {
        this.router.navigate(["/dieu-tri-noi-tru/chi-tiet-dieu-tri/" + dataItem.Id + "/" + 'chuyenKhoa']);
      }else{
        this.router.navigate([dataItem.Url]);
      }     
    }   
    else {  this.notificationService.showError("YCTN này đã hủy không thể xem chi tiết.");}    
  }


  onKey(event: any) {
    if (event.key == "Enter") {
      this.router.navigate(["/ket-qua-tim-kiem"], { queryParams: { 'tuKhoa': encodeURIComponent(this.searchString) } });
      this.reloadTimKiem(this.searchString);
    }
  }

  reloadTimKiem(tukhoa: any) {
    if (this.grid != undefined && this.grid != null) {
      this.grid.searchString = tukhoa;
      this.grid.search();
    }
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.grid.searchString = null;
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
