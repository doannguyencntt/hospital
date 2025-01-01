import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { TongHopDuTruMuaTaiKhoaDuoc ,TrangThaiDuyet,TongHopDuTruTuaTaiKhoaDuocSearch,ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc,ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-shared',
  templateUrl: './tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.scss']
})
export class TongHopDuTruMuaTaiKhoaDuocSharedComponent implements OnInit {
  thongTinDuTruMuaDuocPhamTaiKhoaDuoc :TongHopDuTruMuaTaiKhoaDuoc;
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  gridChildChildColumns: any[] = [];
  validationErrors : any;
  trangThaiDuyet: boolean = null;
 // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
 isDisableTrangThai : boolean = false;
 @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyet> = new EventEmitter<TrangThaiDuyet>();
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
) { }
  ngOnInit() {
    this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = new TongHopDuTruMuaTaiKhoaDuoc();
    const id : number = this.route.snapshot.params.id;
    if(id != undefined || id == null)
    {
      this.getById(id);
      this.getTrangThaiDuyet(id);
    }
    this.gridChildColumns = [
      { Field: 'STT', Title: '#', Width: 50, Sortable: false},
      { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true },
      { Field: 'DuocPham', Title: 'Dược', Width: 120, Sortable: true },
      { Field: 'HoatChat', Title: 'Hoạt chất', Width: 80, Sortable: true },
      { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 200, Sortable: true},
      { Field: 'SĐK', Title: 'SĐK', Width: 80, Sortable: true},
      { Field: 'DVT', Title: 'DVT', Width: 100, Sortable: true},
      { Field: 'DD', Title: 'ĐD', Width: 100, Sortable: true},
      { Field: 'NhaSanXuat', Title: 'Nhà sản xuất', Width: 200, Sortable: true },
      { Field: 'NuocSanXuat', Title: 'Nước sản xuất', Width: 200, Sortable: true},
      { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 200, Sortable: true },
      { Field: 'SoLuongDuKienSuDungTrong', Title: 'Số lượng dự kiến sử dụng trong', Width: 200, Sortable: true },
      { Field: 'KhoDuTruTon', Title: 'Kho dự trù tồn', Width: 200, Sortable: true },
      { Field: 'KhoTongTon', Title: 'Kho tổng ', Width: 200, Sortable: true },
      { Field: 'HĐChua', Title: 'HĐ chưa', Width: 200, Sortable: true },
      { Field: 'SLDuTruTKhoa', Title: 'SL dự trù T. khoa', Width: 200, Sortable: true },
      { Field: 'SLDuTruKDuocDuyet', Title: 'SL dự trù K. đươc duyệt', minWidth: 200, Sortable: true },
  ];
  this.gridChildChildColumns =[
    { Field: 'STT', Title: '#', Width: 50, Sortable: false},
      { Field: 'LoaiDuTru', Title: 'Nhóm', Width: 150, Sortable: true },
      { Field: 'Kho', Title: 'Kho', Width: 150, Sortable: true },
      { Field: 'TuNgay', Title: 'Từ ngày', Width: 150, Sortable: true},
      { Field: 'DenNgay', Title: 'Đên ngày', Width: 150, Sortable: true},
      { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true},
      { Field: 'SLDuKienTrongKy', Title: 'SL dự kiến trong kỳ', minWidth: 200, Sortable: true },
  ];
  }
  getTrangThaiDuyet(id) {
    this.apiService.post<boolean>('YeuCauLinhDuocPham/GetTrangThaiDuyet?IdYeuCauLinh=' + id).subscribe(
      resultData => {
        this.trangThaiDuyet = resultData;
        if (this.trangThaiDuyet == true) {
          this.trangThaiYeuCau.emit(new TrangThaiDuyet("Đã duyệt", resultData));
        }
        else if (this.trangThaiDuyet == false) {
          this.trangThaiYeuCau.emit(new TrangThaiDuyet("Từ chối duyệt", resultData));
        }
        else {
          this.trangThaiYeuCau.emit(new TrangThaiDuyet("Đang chờ duyệt", resultData));
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
getById(id)
{
  this.apiService.get<TongHopDuTruMuaTaiKhoaDuoc>("YeuCauMuaDuocPham/GetThongTinMuaDuocPhamTaiKho?id=" + id)
      .subscribe((resultData) => {
        if (resultData !== undefined && resultData != null) {
          
        }
      });

}
}
