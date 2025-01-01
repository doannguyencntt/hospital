import { KetQuaKhamChuyenKhoaMat,KetQuaKhamChuyenKhoaNoi,KetQuaNgoaiDaLieuSanPhuKhoa,
  ItemEditKetQua,KetQuaKhamChuyenKhoaTaiMuiHong,KetQuaKhamChuyenKhoaNoiRangHamMat,LoaiChuyenKhoaVaDichVuKyThuat } from '../kham-doan-ket-luan.model';
import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef, TemplateRef,Output,EventEmitter } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
@Component({
  selector: 'app-popup-ket-qua-ksk-shared',
  templateUrl: './popup-ket-qua-ksk-shared.component.html',
  styleUrls: ['./popup-ket-qua-ksk-shared.component.scss']
})
export class PopupKetQuaKskSharedComponent implements OnInit {
  documentType: DocumentType;
  icClose = icClose;
  validationErrors :any;
  ketQuaKhamChuyenKhoaMat = {} as  KetQuaKhamChuyenKhoaMat;
  ketQuaKhamChuyenKhoaNoi = {} as  KetQuaKhamChuyenKhoaNoi;
  KetQuaKhamChuyenKhoaTaiMuiHong = {} as KetQuaKhamChuyenKhoaTaiMuiHong;
  ketQuaKhamChuyenKhoaNoiRangHamMat= {} as KetQuaKhamChuyenKhoaNoiRangHamMat;
  ketQuaNgoaiDaLieuSanPhuKhoa = {} as KetQuaNgoaiDaLieuSanPhuKhoa;
  itemEditKetQua = {} as ItemEditKetQua;
  @Output() returnItemEditKetQua: EventEmitter<ItemEditKetQua> = new EventEmitter<ItemEditKetQua>();
 constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PopupKetQuaKskSharedComponent>,private route: ActivatedRoute, private router: Router,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef){}

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanKetLuanKhamSucKhoeDoan;
    if(this.data.JsonStringKetQua == null)
    {
      this.apiService.post<any>("KhamDoan/GetDataKetQuaKhamTheoKhoa?id="+ this.data.Id + "&type=" + this.data.Type).subscribe(
        (resData) => {
          if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaNoi)
          {
            this.ketQuaKhamChuyenKhoaNoi = resData.KetQuaKhamChuyenKhoaNoiOBJ;
          }
          if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaTaiMuiHong)
          {
            this.KetQuaKhamChuyenKhoaTaiMuiHong = resData.KetQuaKhamChuyenKhoaTaiMuiHongOBJ;
          }
          if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaRangHamMat)
          {
            this.ketQuaKhamChuyenKhoaNoiRangHamMat = resData.KetQuaKhamChuyenKhoaNoiRangHamMatOBJ;
          }
          if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaMat)
          {
            this.ketQuaKhamChuyenKhoaMat = resData.KetQuaKhamChuyenKhoaMatOBJ;
          }
         
          if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenSanPhuKhoa || this.data.Type ==LoaiChuyenKhoaVaDichVuKyThuat.ChuyenDaLieu  || this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenNgoaiKhoa)
          {
            this.ketQuaNgoaiDaLieuSanPhuKhoa = resData.KetQuaNgoaiDaLieuSanPhuKhoaOBJ;
          }
          if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.Dvkt) // dịch vụ kỹ thuật
          {
            this.ketQuaNgoaiDaLieuSanPhuKhoa = resData.KetQuaDVKTOBJ;
           
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
    else{
      let jsonPar = JSON.parse(this.data.JsonStringKetQua);
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaNoi)
      {
        this.ketQuaKhamChuyenKhoaNoi = jsonPar;
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaTaiMuiHong)
      {
        this.KetQuaKhamChuyenKhoaTaiMuiHong = jsonPar;
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaRangHamMat)
      {
        this.ketQuaKhamChuyenKhoaNoiRangHamMat = jsonPar;
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaMat)
      {
        this.ketQuaKhamChuyenKhoaMat = jsonPar;
      }
     
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenSanPhuKhoa || this.data.Type ==LoaiChuyenKhoaVaDichVuKyThuat.ChuyenDaLieu  || this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenNgoaiKhoa)
      {
        this.ketQuaNgoaiDaLieuSanPhuKhoa = jsonPar;
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.Dvkt) // dịch vụ kỹ thuật
      {
        this.ketQuaNgoaiDaLieuSanPhuKhoa = jsonPar;
       
      }
    }
  
   
  }
  
  close(result: any) {
    if(result =='Yes')
    {
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaNoi)
      {
        this.itemEditKetQua = new ItemEditKetQua();
        this.itemEditKetQua.Id = this.data.Id;
        this.itemEditKetQua.Type = this.data.Type;
        this.itemEditKetQua.value = "Tuần hoàn: " + this.ketQuaKhamChuyenKhoaNoi.TuanHoan + " ," + 
                                    "Hô hấp: " + this.ketQuaKhamChuyenKhoaNoi.HoHap + " ," +
                                    "Tiêu hóa: " + this.ketQuaKhamChuyenKhoaNoi.TieuHoa + " ," +
                                    "Thận tiết niệu: " + this.ketQuaKhamChuyenKhoaNoi.ThanTietNieu + " ," +
                                    "Nội tiết: " + this.ketQuaKhamChuyenKhoaNoi.NoiTiet + " ," +
                                    "Thần kinh: " + this.ketQuaKhamChuyenKhoaNoi.ThanKinh + " ," +
                                    "Cơ xương khớp: " + this.ketQuaKhamChuyenKhoaNoi.CoXuongKhop + " ," +
                                    "Tâm thần: " + this.ketQuaKhamChuyenKhoaNoi.TamThan ;
                                    this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaKhamChuyenKhoaNoi);
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaTaiMuiHong)
      {
        this.itemEditKetQua = new ItemEditKetQua();
        this.itemEditKetQua.Id = this.data.Id;
        this.itemEditKetQua.Type = this.data.Type;
        this.itemEditKetQua.value = "Tai phải nói thường: " + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiPhaiNoiThuong + " ," + 
                                    "Tai phải nói thầm:" + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiPhaiNoiTham + " ," +
                                    "Tai trái nói thường: " + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiTraiNoiThuong + " ," +
                                    "Tai trái nói thầm: " + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiTraiNoiTham + " ," +
                                    "Các bệnh tai mũi họng (nếu có): " + this.KetQuaKhamChuyenKhoaTaiMuiHong.CacBenhTaiMuiHong ;
                                    this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.KetQuaKhamChuyenKhoaTaiMuiHong);
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaRangHamMat)
      {
        this.itemEditKetQua = new ItemEditKetQua();
        this.itemEditKetQua.Id = this.data.Id;
        this.itemEditKetQua.Type = this.data.Type;
        this.itemEditKetQua.value = "Hàm trên: " + this.ketQuaKhamChuyenKhoaNoiRangHamMat.HamTren + " ," + 
                                    "Hàm dưới: " + this.ketQuaKhamChuyenKhoaNoiRangHamMat.HamDuoi + " ," +
                                    "Các bệnh răng hàm mặt(nếu có): " + this.ketQuaKhamChuyenKhoaNoiRangHamMat.CacBenhRangHamMat ;
                                    this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaKhamChuyenKhoaNoiRangHamMat);
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenKhoaMat)
      {
        this.itemEditKetQua = new ItemEditKetQua();
        this.itemEditKetQua.Id = this.data.Id;
        this.itemEditKetQua.Type = this.data.Type;
        this.itemEditKetQua.value = "Không kính mắt phải: " + this.ketQuaKhamChuyenKhoaMat.KhongKinhMatPhai + " ," + 
                                    "Không kính mắt trái: " + this.ketQuaKhamChuyenKhoaMat.KhongKinhMatTrai + " ," +
                                    "Có kinh mắt phải: " + this.ketQuaKhamChuyenKhoaMat.CoKinhMatPhai + " ," +
                                    "Có kính mắt trái: " + this.ketQuaKhamChuyenKhoaMat.CoKinhMatTrai + " ," +
                                    "Các bệnh về mắt (nếu có): " + this.ketQuaKhamChuyenKhoaMat.CacBenhVeMat ;
                                    this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaKhamChuyenKhoaMat);
      }
     
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenSanPhuKhoa || this.data.Type ==LoaiChuyenKhoaVaDichVuKyThuat.ChuyenDaLieu  || this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenNgoaiKhoa)
      {
        this.itemEditKetQua = new ItemEditKetQua();
        this.itemEditKetQua.Id = this.data.Id;
        this.itemEditKetQua.Type = this.data.Type;
        this.itemEditKetQua.value = this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenSanPhuKhoa ? "Sản phụ khoa: " + this.ketQuaNgoaiDaLieuSanPhuKhoa.value :
                                    this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenDaLieu  ?"Da liễu: " + this.ketQuaNgoaiDaLieuSanPhuKhoa.value :
                                    this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.ChuyenNgoaiKhoa  ?"Ngoại khoa: " + this.ketQuaNgoaiDaLieuSanPhuKhoa.value :"";
                                    this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaNgoaiDaLieuSanPhuKhoa);
      }
      if(this.data.Type == LoaiChuyenKhoaVaDichVuKyThuat.Dvkt) // dịch vụ kỹ thuật
      {
        this.itemEditKetQua.Id = this.data.Id;
        this.itemEditKetQua.Type = this.data.Type;
        this.itemEditKetQua.value = this.ketQuaNgoaiDaLieuSanPhuKhoa.value;
        this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaNgoaiDaLieuSanPhuKhoa);
      }
  
      this.dialogRef.close(this.itemEditKetQua);
    }
    else{
      this.dialogRef.close(result);
    }
   
  }
}
