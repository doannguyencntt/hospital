import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef } from '@angular/core';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icVisibility from '@iconify/icons-ic/visibility';
import icBlock from '@iconify/icons-ic/block';


import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { aggregateBy } from '@progress/kendo-data-query';
import { DichVuLSCLSItem,
  KetQuaChuanDoanHinhAnhViewModel, 
  KetQuaXetNghiemViewModel } from '../../../kham-benh.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { KhamBenhComponent } from '../../kham-benh.component';

@Component({
  selector: 'app-lan-kham-hien-tai-ls-cls',
  templateUrl: './lan-kham-hien-tai-ls-cls.component.html',
  styleUrls: ['./lan-kham-hien-tai-ls-cls.component.scss']
})
export class LanKhamHienTaiLsClsComponent implements OnInit {

  documentType: DocumentType;
  gridColumns: any[] = [];
  urlGetDataGrid: string = "";
  urlGetTotalPageGrid: string = "";
  isProcessAdd: boolean = false;
  validationErrors:any;

  dichVuLSCLSNew: DichVuLSCLSItem = new DichVuLSCLSItem();

  loaiDataSource: any = [
    {
      "KeyId": 1,
      "DisplayName": "Thường"
    },
    {
      "KeyId": 2,
      "DisplayName": "Xã hội hóa"
    }
  ];

  noiThucHienDataSource: any = [
    {
      "KeyId": 1,
      "DisplayName": "Khoa nội"
    },
    {
      "KeyId": 2,
      "DisplayName": "Khoa sản"
    },
    {
      "KeyId": 3,
      "DisplayName": "Khoa Hồi Sức Cấp Cứu"
    },
    {
      "KeyId": 4,
      "DisplayName": "Tai mũi họng"
    }
  ];

  //data test
  dataSource: any = {
    data : [],
    total: 0
  }
  public aggregates: any[] = [
    {field: 'ThanhTien', aggregate: 'sum'},
    {field: 'BHChiTra', aggregate: 'sum'},
    {field: 'BNChiTra', aggregate: 'sum'},
  ];
  public total: any = aggregateBy(this.dataSource.data, this.aggregates);
  //==================
  public NhomDichVuId: number = null;
  public TenNhomDichVu: number = null;
  // icon
  icDelete =icDelete;
  icVisibility = icVisibility;
  icBlock = icBlock;

  @Input() data: any = null;
  
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('bHChiTraTemplate', { static: true }) bHChiTraTemplate: TemplateRef<any>;
  @ViewChild('bNChiTraTemplate', { static: true }) bNChiTraTemplate: TemplateRef<any>;
  @ViewChild('tongCongFooterTemplate', { static: true }) tongCongFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('bHChiTraFooterTemplate', { static: true }) bHChiTraFooterTemplate: TemplateRef<any>;
  @ViewChild('bNChiTraFooterTemplate', { static: true }) bNChiTraFooterTemplate: TemplateRef<any>;
  @ViewChild(KhamBenhComponent, {static: true}) shared;
  constructor(private apiService: ApiService,public intl: IntlService, 
              private _data: KhamBenhComponent,private dialog: MatDialog, 
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamBenh; // cần gán lại giá trị
    this.dataSource.data = this.data;

    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 30, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 100, Sortable: true},
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 205, Sortable: true},
      { Field: "TenLoai", Title: "Loại", Width: 80, Sortable: true},
      { Field: "SoLuong", Title: "SL", Width: 45, Sortable: true},
      { Field: "DonGia", Title: "ĐG", Width: 76, Sortable: true, TemplateFooter: this.tongCongFooterTemplate, Template: this.donGiaTemplate},
      { Field: "ThanhTien", Title: "T.Tiền", Width: 76, Sortable: true, TemplateFooter: this.thanhTienFooterTemplate, Template: this.thanhTienTemplate},
      { Field: "BHChiTra", Title: "BH trả", Width: 76, Sortable: true, TemplateFooter: this.bHChiTraFooterTemplate, Template: this.bHChiTraTemplate},
      { Field: "BNChiTra", Title: "BN trả", Width: 76, Sortable: true, TemplateFooter: this.bNChiTraFooterTemplate, Template: this.bNChiTraTemplate},
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 110, Sortable: true},
      { Field: "GhiChu", Title: "Ghi chú", Width: 70, Sortable: true},
      { Field: "TenTinhTrang", Title: "Tình trạng", Width: 105, Sortable: true},
      { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate}
    ]

    // this.getLoaiGiaData();
    // this.getKhoaPhongThucHien();
  }

  chonDichVu(event){
    // this.YeuCauDichVuKyThuat.TenDichVu = event.Ten;
    // this.YeuCauDichVuKyThuat.MaDichVu = event.Ma;
  }

  chonLoaiDichVu(event){
    // this.YeuCauDichVuKyThuat.TenLoai = event.DisplayName;
  }

  chonNoiThucHien(event){
    // this.YeuCauDichVuKyThuat.NoiThucHien = event.DisplayName;
  }

  huy()
  {
    // this.isProcessAdd = false;
    // this.dichVuLSCLSNew = new DichVuLSCLSItem();
  }


  themDichVuLSCLS(){
    // this.dichVuLSCLSNew.Gia = 150000;
    // this.dichVuLSCLSNew.ThanhTien = this.dichVuLSCLSNew.Gia * this.dichVuLSCLSNew.SoLan;
    // this.dichVuLSCLSNew.BaoHiemChiTra = this.dichVuLSCLSNew.ThanhTien;
    // this.dichVuLSCLSNew.BenhNhanChiTra = 0;
    // this.dichVuLSCLSNew.NoiThucHien = "Khoa khám bệnh";
    // this.dichVuLSCLSNew.TenTinhTrang = "Chưa đóng tiền";

    // this.dataSource.data.push(this.dichVuLSCLSNew);
    // let index: number = 1;
    // this.dataSource.data.forEach(element => {
    //   element.STT = index++;
    // });

    // this.dichVuLSCLSNew = new DichVuLSCLSItem();
    // this.total = aggregateBy(this.dataSource.data, this.aggregates);



    

   


  //   let YeuCauTiepNhan: YeuCauKhamBenhViewModel = new YeuCauKhamBenhViewModel();
  //   YeuCauTiepNhan.Id = 1;
  //   YeuCauTiepNhan.HoTen = "Tran Trong Phuc";
  //   YeuCauTiepNhan.BenhNhanId = 1;

  //   let yeuCauTiepNhanDichVuKyThuats: YeuCauTiepNhanDichVuKyThuatViewModel = new YeuCauTiepNhanDichVuKyThuatViewModel();
  //   let KetQuaChuanDoanHinhAnhs: KetQuaChuanDoanHinhAnhViewModel = new KetQuaChuanDoanHinhAnhViewModel();
  //   let KetQuaXetNghiems: KetQuaXetNghiemViewModel = new KetQuaXetNghiemViewModel();

  //   for(let i = 0; i<2 ; i++){
  //         yeuCauTiepNhanDichVuKyThuats.Id = i;
  //         yeuCauTiepNhanDichVuKyThuats.YeuCauTiepNhanId = i;
  //         yeuCauTiepNhanDichVuKyThuats.LoaiDichVuKyThuat = i;
          
  //         KetQuaChuanDoanHinhAnhs.Id = i;
  //         KetQuaChuanDoanHinhAnhs.ChuanDoanHinhAnhId = i

  //         KetQuaXetNghiems.Id = i;
  //         KetQuaXetNghiems.ChuanDoanHinhAnhId = i;

  //         yeuCauTiepNhanDichVuKyThuats.KetQuaChuanDoanHinhAnhs.push(KetQuaChuanDoanHinhAnhs);
  //         yeuCauTiepNhanDichVuKyThuats.KetQuaXetNghiems.push(KetQuaXetNghiems);
  //         YeuCauTiepNhan.YeuCauTiepNhanDichVuKyThuats.push(yeuCauTiepNhanDichVuKyThuats)
  //   }
    
  //  console.log("xuLyLuuYeuCauCKhamBenh = ",this._data.xuLyLuuYeuCauCKhamBenh(this.dataSource.data,YeuCauTiepNhan.Id,2));


    // var self=this;
    // this.dialog.open(ConfirmComponent, {
    //       disableClose: false,
    //       width: '400px',
    //       data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn chọn người bệnh để khám hay không?" }
    //     }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
    //         if (result == "Yes") {      
    //           self.apiService.post<any>("KhamBenh/ThemKhamBenhCanLamSang", YeuCauTiepNhan).subscribe(() => 
    //               {
    //                 self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm thành công"]));
    //               },
    //               (err: ApiError) => { 
    //               });

    //         }
    //     }
    // );






  }

  // xoaLSCLS(Id: number, STT: number)
  // {
  //   if(Id != null && Id != undefined)
  //   {
  //     this.dataSource.data.splice(this.dataSource.data.findIndex(x => x.Id == Id), 1);
  //   }
  //   else if(STT != null)
  //   {
  //     this.dataSource.data.splice(this.dataSource.data.findIndex(x => x.STT == STT), 1);
  //   }
  //   let index: number = 1;
  //   this.dataSource.data.forEach(element => {
  //     element.STT = index++;
  //   });
  //   this.total = aggregateBy(this.dataSource.data, this.aggregates);
  // }

  // getLoaiGiaData(){
  //   this.apiService.get<any>("KhamBenh/GetDataLoaiGiaDichVu").subscribe(resultData => {
  //     if (resultData !== undefined && resultData != null) {
  //         this.loaiDataSource = resultData
  //         console.log("this.loaiDataSource=",resultData);
  //     }
  //   });
  // }
  // getKhoaPhongThucHien(){
  //   this.apiService.get<any>("KhamBenh/GetDataNoiThucHien").subscribe(resultData => {
  //     if (resultData !== undefined && resultData != null) {
  //         this.noiThucHienDataSource = resultData
  //         console.log("this.noiThucHienDataSource=",resultData);
  //     }
  //   });
  // }
}
