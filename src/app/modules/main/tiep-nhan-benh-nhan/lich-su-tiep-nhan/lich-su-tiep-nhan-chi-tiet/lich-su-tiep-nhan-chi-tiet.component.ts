import { Component, OnInit, ViewRef, ChangeDetectorRef, ViewChild, TemplateRef, HostListener } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TiepNhanBenhNhanViewModel, ThemBaoHiemTuNhanGridVo, ThemChiDinhDichVu, ThemBaoHiemTuNhan, BaoHiemTuNhanViewModel, ChiDinhDichVuGridVo, GridLichSuKCB, BenhNhanTiepNhanBenhNhanViewModel, ThemTaiLieuDinhKem, TimKiemBenhNhanGridVo, HoSoYeuCauTiepNhanViewModel, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham } from '../../tiep-nhan-benh-nhan.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { TinhTrangThe } from 'src/app/shared/enum/tinh-trang-the.enum';
import { State, process, GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { BaoHiemYTe, ThongTinBenhNhan } from '../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { HttpParams } from '@angular/common/http';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { parseDate } from '@progress/kendo-angular-intl';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-lich-su-tiep-nhan-chi-tiet',
  templateUrl: './lich-su-tiep-nhan-chi-tiet.component.html',
  styleUrls: ['./lich-su-tiep-nhan-chi-tiet.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LichSuTiepNhanChiTietComponent implements OnInit {

  tiepNhanBenhNhan: TiepNhanBenhNhanViewModel;
  public loaiVoucher: number = 0;
  soPhanTramHuongBHYT: number = null;
  themChiDinhDichVuModel: ThemChiDinhDichVu = new ThemChiDinhDichVu();
  themChiDinhGoiModel: ThemChiDinhDichVu = new ThemChiDinhDichVu();
  themBaoHiemTuNhanModel: ThemBaoHiemTuNhan = new ThemBaoHiemTuNhan();
  lstBHTN: ThemBaoHiemTuNhanGridVo[] = [];
  gridDataSourceBHTN: any;
  isHaveBHYTUpdated: boolean = false;
  duocHuongBHYT = false;
  gridDataKhacCoChietKhauArray: any[] = [];
  gridDataKhacDisplay: any;
  gridDataKhacCoChietKhauDisplay: ChiDinhDichVuGridVo[];
  soLuongGoiCoChietKhau: number = 0;
  soTienBHYTSeThanhToan: number = 0;
  yeuCauTiepNhanId: number = null;
  thongTinBenhNhan: ThongTinBenhNhan;
  lichSuKCB: GridLichSuKCB[] = new Array<GridLichSuKCB>();
  gridColumns: any[] = [];
  gridKhamBenhColumns: any[] = [];
  gridKyThuatColumns: any[] = [];
  gridKhongChietKhauColumns: any[] = [];
  gridCoChietKhauColumns: any[] = [];
  gridTaiLieuDinhKemColumns: any[] = [];
  gridDataTaiLieuDinhKem: any;
  TrieuChungTiepNhanResource: any;
  documentType: DocumentType;
  isUpdateGrid: boolean = false;
  thongTinTaiKhoanBenhNhan: any;
  themTaiLieu: ThemTaiLieuDinhKem = new ThemTaiLieuDinhKem();
  isDungTuyenDisplay: string = null;
  isDungTuyen: boolean = false;
  isOutOfDate: boolean = false;
  isSearchQRCodeEnable: boolean = true;
  soTuoiDisplay: string;
  hoTenDaTimKiem: string;
  maSoTheDaTimKiem: string;
  ngaySinhDaTimKiem: Date;
  totalBenhNhan: number = 0;
  validationErrors: any;
  modelQRCode: BaoHiemYTe;
  public listVoucherItem: Array<string> = [];
  public value: any = [];

  lstBenhNhan: TimKiemBenhNhanGridVo[] = new Array<TimKiemBenhNhanGridVo>();
  modelTimKiemBenhNhan: TimKiemBenhNhanGridVo = new TimKiemBenhNhanGridVo();
  under6yearsold: boolean = false;

  groupChietKhau: GroupDescriptor[] = [
    {
      field: 'Nhom', aggregates: [
        { field: 'ThanhTien', aggregate: 'sum' },
        { field: 'CongNo', aggregate: 'sum' },
        { field: 'SoTienMienGiam', aggregate: 'sum' },
        { field: 'ThanhTienTrongGoi', aggregate: 'sum' }
      ]
    }
  ];


  // group
  groupKhongChietKhau: GroupDescriptor[] = [
    {
      field: 'Nhom', aggregates: [
        { field: 'ThanhTien', aggregate: 'sum' },
        { field: 'BHYTThanhToan', aggregate: 'sum' },
        { field: 'SoTienMG', aggregate: 'sum' },
        { field: 'BnThanhToan', aggregate: 'sum' },
        { field: 'CongNo', aggregate: 'sum' },
        { field: 'SoTienMienGiam', aggregate: 'sum' },
      ]
    }
  ];
  //1 kham benh, 2 ky thuat, 3 giuong
  loaiTiepNhan: number = 1;
  isGoiCoChietKhau: boolean = null;

  dichVuSarsCoVs:number[]=[];
  loaiBenhPhamText:string =null;
  loaiBenhPham:number =null;
  showbuttonLuuVaInPhieuXetNghiem:boolean = false;

  @ViewChild('gridBHTN', { static: false }) gridChildBHTN: GridComponent;
  @ViewChild('gridCoChietKhau', { static: false }) gridChildCoChietKhau: GridComponent;
  @ViewChild('gridKhongChietKhau', { static: false }) gridChildKhongChietKhau: GridComponent;
  @ViewChild('gridTaiLieuDinhKem', { static: false }) gridTaiLieuDinhKem: GridComponent;
  @ViewChild('taiLieuTemplate', { static: true }) taiLieuTemplate: TemplateRef<any>;
  @ViewChild('actionTaiLieuTemplate', { static: true }) actionTaiLieuTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienChietKhauTemplate', { static: true }) noiThucHienChietKhauTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  // đơn giá
  @ViewChild('donGiaKhamBenhFooterTemplate', { static: true }) donGiaKhamBenhFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhamBenhTemplate', { static: true }) donGiaKhamBenhTemplate: TemplateRef<any>;

  // thành tiền
  @ViewChild('thanhTienKhamBenhTemplate', { static: true }) thanhTienKhamBenhTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhamBenhFooterTemplate', { static: true }) thanhTienKhamBenhFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhamBenhGroupFooterTemplate', { static: true }) thanhTienKhamBenhGroupFooterTemplate: TemplateRef<any>;

  // bhyt thanh toán
  @ViewChild('bhytThanhToanKhamBenhTemplate', { static: true }) bhytThanhToanKhamBenhTemplate: TemplateRef<any>;
  @ViewChild('bhytThanhToanKhamBenhFooterTemplate', { static: true }) bhytThanhToanKhamBenhFooterTemplate: TemplateRef<any>;
  @ViewChild('bhytThanhToanKhamBenhGroupFooterTemplate', { static: true }) bhytThanhToanKhamBenhGroupFooterTemplate: TemplateRef<any>;


  // người bệnh thanh toán
  @ViewChild('bnThanhToanKhamBenhTemplate', { static: true }) bnThanhToanKhamBenhTemplate: TemplateRef<any>;
  @ViewChild('bnThanhToanKhamBenhFooterTemplate', { static: true }) bnThanhToanKhamBenhFooterTemplate: TemplateRef<any>;
  @ViewChild('bnThanhToanKhamBenhGroupFooterTemplate', { static: true }) bnThanhToanKhamBenhGroupFooterTemplate: TemplateRef<any>;


  // đơn giá
  @ViewChild('donGiaKyThuatFooterTemplate', { static: true }) donGiaKyThuatFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaKyThuatTemplate', { static: true }) donGiaKyThuatTemplate: TemplateRef<any>;

  // thành tiền
  @ViewChild('thanhTienKyThuatTemplate', { static: true }) thanhTienKyThuatTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKyThuatFooterTemplate', { static: true }) thanhTienKyThuatFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKyThuatGroupFooterTemplate', { static: true }) thanhTienKyThuatGroupFooterTemplate: TemplateRef<any>;


  // người bệnh thanh toán
  @ViewChild('bnThanhToanKyThuatTemplate', { static: true }) bnThanhToanKyThuatTemplate: TemplateRef<any>;
  @ViewChild('bnThanhToanKyThuatFooterTemplate', { static: true }) bnThanhToanKyThuatFooterTemplate: TemplateRef<any>;
  @ViewChild('bnThanhToanKyThuatGroupFooterTemplate', { static: true }) bnThanhToanKyThuatGroupFooterTemplate: TemplateRef<any>;


  // đơn giá
  @ViewChild('donGiaKhongChietKhauFooterTemplate', { static: true }) donGiaKhongChietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhongChietKhauTemplate', { static: true }) donGiaKhongChietKhauTemplate: TemplateRef<any>;

  // thành tiền
  @ViewChild('thanhTienKhongChietKhauTemplate', { static: true }) thanhTienKhongChietKhauTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhongChietKhauFooterTemplate', { static: true }) thanhTienKhongChietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhongChietKhauGroupFooterTemplate', { static: true }) thanhTienKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

  // bhyt thanh toán
  @ViewChild('bhytThanhToanKhongChietKhauTemplate', { static: true }) bhytThanhToanKhongChietKhauTemplate: TemplateRef<any>;
  @ViewChild('bhytThanhToanKhongChietKhauFooterTemplate', { static: true }) bhytThanhToanKhongChietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('bhytThanhToanKhongChietKhauGroupFooterTemplate', { static: true }) bhytThanhToanKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

  // số tiền mg

  // người bệnh thanh toán
  @ViewChild('bnThanhToanKhongChietKhauTemplate', { static: true }) bnThanhToanKhongChietKhauTemplate: TemplateRef<any>;
  @ViewChild('bnThanhToanKhongChietKhauFooterTemplate', { static: true }) bnThanhToanKhongChietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('bnThanhToanKhongChietKhauGroupFooterTemplate', { static: true }) bnThanhToanKhongChietKhauGroupFooterTemplate: TemplateRef<any>;

  // nơi thực hiện
  @ViewChild('noiThucHienKhongChietKhauTemplate', { static: true }) noiThucHienKhongChietKhauTemplate: TemplateRef<any>;

  // checkbox được hưởng bhyt
  @ViewChild('duocHuongBHYTTemplate', { static: true }) duocHuongBHYTTemplate: TemplateRef<any>;


  // đơn giá
  @ViewChild('donGiaChietKhauTemplate', { static: true }) donGiaChietKhauTemplate: TemplateRef<any>;
  @ViewChild('donGiaChietKhauFooterTemplate', { static: true }) donGiaChietKhauFooterTemplate: TemplateRef<any>;

  // thành tiền
  @ViewChild('thanhTienChietKhauTemplate', { static: true }) thanhTienChietKhauTemplate: TemplateRef<any>;
  @ViewChild('thanhTienChietKhauFooterTemplate', { static: true }) thanhTienChietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienChietKhauGroupFooterTemplate', { static: true }) thanhTienChietKhauGroupFooterTemplate: TemplateRef<any>;

  // tỷ lệ chiết khấu
  @ViewChild('tyLeChietKhauCoChietKhauTemplate', { static: true }) tyLeChietKhauCoChietKhauTemplate: TemplateRef<any>;

  // được giảm trong gói
  @ViewChild('duocGiamTrongGoiCoChietKhauTemplate', { static: true }) duocGiamTrongGoiCoChietKhauTemplate: TemplateRef<any>;
  @ViewChild('duocGiamTrongGoiCoChietKhauFooterTemplate', { static: true }) duocGiamTrongGoiCoChietKhauFooterTemplate: TemplateRef<any>;

  // thành tiền trong gói
  @ViewChild('thanhTienTrongGoiChietKhauTemplate', { static: true }) thanhTienTrongGoiChietKhauTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTrongGoiChietKhauFooterTemplate', { static: true }) thanhTienTrongGoiChietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTrongGoiChietKhauGroupFooterTemplate', { static: true }) thanhTienTrongGoiChietKhauGroupFooterTemplate: TemplateRef<any>;


  // đơn giá
  @ViewChild('congNoTemplate', { static: true }) congNoTemplate: TemplateRef<any>;
  @ViewChild('soTienMGTemplate', { static: true }) soTienMGTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;


  @ViewChild('congNoFooterTemplate', { static: true }) congNoFooterTemplate: TemplateRef<any>;
  @ViewChild('soTienMGFooterTemplate', { static: true }) soTienMGFooterTemplate: TemplateRef<any>;

  @ViewChild('congNoGroupFooterTemplate', { static: true }) congNoGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('soTienMGGroupFooterTemplate', { static: true }) soTienMGGroupFooterTemplate: TemplateRef<any>;


  //STT grid
  @ViewChild('sttKhongChietKhauTemplate', { static: true }) sttKhongChietKhauTemplate: TemplateRef<any>;
  @ViewChild('sttCoChietKhauTemplate', { static: true }) sttCoChietKhauTemplate: TemplateRef<any>;

  public aggregatesKhamBenh: any[] = [{ field: 'ThanhTien', aggregate: 'sum' }
    , { field: 'BHYTThanhToan', aggregate: 'sum' }
    , { field: 'BnThanhToan', aggregate: 'sum' }];

  public stateKhamBenh: State = {
    skip: 0,
    take: 200,
    group: [{ field: 'Nhom', aggregates: this.aggregatesKhamBenh }]
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location

  ) { }

  ngOnInit() {
    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
    this.getListDichVuSarsCoVs();
    this.getBenhNhan(this.yeuCauTiepNhanId);
    this.documentType = DocumentType.LichSuTiepNhan;
    this.getSoTienBHYTSeThanhToan();
    this.getListTenTrieuChungKham();
    this.setDefaultData();
    this.thongTinBenhNhan = new ThongTinBenhNhan();
    this.lichSuKCB = new Array<GridLichSuKCB>();

    this.gridTaiLieuDinhKemColumns = [
      { Field: "LoaiDisplay", Title: "Loại", Width: 200 },
      { Field: "Ten", Title: "Tài liệu", MinWidth: 200, Template: this.taiLieuTemplate },
      { Field: "MoTa", Title: "Mô tả", Width: 200 },
    ];

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50 },
      { Field: "CongTyDisplay", Title: "Công ty", Width: 250 },
      { Field: "MaSoThe", Title: "Số thẻ", Width: 150 },
      { Field: "NgayHieuLucDisplay", Title: "Từ ngày", Width: 100 },
      { Field: "NgayHetHanDisplay", Title: "Đến ngày", Width: 100 },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 100 },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200 },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ];

    this.gridKhamBenhColumns = [
      { Field: "Ma", Title: "Mã", Width: 80 },
      { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140 },
      { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },
      { Field: "SoLuong", Title: "SL", Width: 30 },
      { Field: "DonGia", Title: "Đơn Giá", Width: 100, Template: this.donGiaKhamBenhTemplate, TemplateFooter: this.donGiaKhamBenhFooterTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienKhamBenhTemplate, TemplateFooter: this.thanhTienKhamBenhFooterTemplate, TemplateGroupFooter: this.thanhTienKhamBenhGroupFooterTemplate },
      { Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Template: this.bhytThanhToanKhamBenhTemplate, TemplateFooter: this.bhytThanhToanKhamBenhFooterTemplate, TemplateGroupFooter: this.bhytThanhToanKhamBenhGroupFooterTemplate },
      {
        Field: "CongNo", Title: "Công Nợ", Width: 100,
        Template: this.congNoTemplate,
        TemplateFooter: this.congNoFooterTemplate,
        TemplateGroupFooter: this.congNoGroupFooterTemplate
      },
      {
        Field: "SoTienMienGiam", Title: "Miễn Giảm", Width: 100,
        Template: this.soTienMGTemplate,
        TemplateFooter: this.soTienMGFooterTemplate,
        TemplateGroupFooter: this.soTienMGGroupFooterTemplate
      },
      { Field: "BnThanhToan", Title: "BN thanh toán", Width: 150, Template: this.bnThanhToanKhamBenhTemplate, TemplateFooter: this.bnThanhToanKhamBenhFooterTemplate, TemplateGroupFooter: this.bnThanhToanKhamBenhGroupFooterTemplate },
      {
        Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230,
      },
    ];

    this.gridKyThuatColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 80 },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140 },
      { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },
      { Field: "SoLuong", Title: "SL", Width: 30 },
      {
        Field: "DonGia", Title: "Đơn Giá", Width: 100,
        Template: this.donGiaKyThuatTemplate,
        TemplateFooter: this.donGiaKyThuatFooterTemplate
      },
      {
        Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
        Template: this.thanhTienKyThuatTemplate,
        TemplateFooter: this.thanhTienKyThuatFooterTemplate,
        TemplateGroupFooter: this.thanhTienKyThuatGroupFooterTemplate
      },
      {
        Field: "BnThanhToan", Title: "BN thanh toán", Width: 100,
        Template: this.bnThanhToanKyThuatTemplate,
        TemplateFooter: this.bnThanhToanKyThuatFooterTemplate,
        TemplateGroupFooter: this.bnThanhToanKyThuatGroupFooterTemplate
      },
      {
        Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230
      },
    ];

    this.gridKhongChietKhauColumns = [
      {
        Field: "id", Title: "#", Width: 45, Sortable: true,
        Template: this.sttKhongChietKhauTemplate
      },
      { Field: "Ma", Title: "Mã", Width: 80 },
      { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      {
        Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 200,
        TemplateFooter: this.donGiaKhongChietKhauFooterTemplate
      },
      { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },

      { Field: "SoLuong", Title: "SL", Width: 30 },
      {
        Field: "DonGia", Title: "Đơn Giá", Width: 100,
        Template: this.donGiaKhongChietKhauTemplate
      },
      {
        Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
        Template: this.thanhTienKhongChietKhauTemplate,
        TemplateGroupFooter: this.thanhTienKhongChietKhauGroupFooterTemplate,
        TemplateFooter: this.thanhTienKhongChietKhauFooterTemplate,
      },
      {
        Field: "DuocHuongBHYT", Title: "ĐH BHYT", Width: 60,
        Template: this.duocHuongBHYTTemplate
      },
      {
        Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100,
        Template: this.bhytThanhToanKhongChietKhauTemplate,
        TemplateFooter: this.bhytThanhToanKhongChietKhauFooterTemplate,
        TemplateGroupFooter: this.bhytThanhToanKhongChietKhauGroupFooterTemplate
      },
      {
        Field: "CongNo", Title: "Công Nợ", Width: 100,
        Template: this.congNoTemplate,
        TemplateFooter: this.congNoFooterTemplate,
        TemplateGroupFooter: this.congNoGroupFooterTemplate
      },
      {
        Field: "SoTienMienGiam", Title: "Miễn Giảm", Width: 100,
        Template: this.soTienMGTemplate,
        TemplateFooter: this.soTienMGFooterTemplate,
        TemplateGroupFooter: this.soTienMGGroupFooterTemplate
      },

      // { Field: "TLMGDisplay", Title: "TL MG", Width: 60 },
      {
        Field: "BnThanhToan", Title: "BN thanh toán", Width: 100,
        Template: this.bnThanhToanKhongChietKhauTemplate,
        TemplateFooter: this.bnThanhToanKhongChietKhauFooterTemplate,
        TemplateGroupFooter: this.bnThanhToanKhongChietKhauGroupFooterTemplate
      },
      {
        Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230,
        Template: this.noiThucHienKhongChietKhauTemplate
      },
      {
        Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100, 
        Template: this.tinhTrangTemplate,

      },
    ];

    this.gridCoChietKhauColumns = [
      {
        Field: "id", Title: "#", Width: 45, Sortable: true,
        Template: this.sttCoChietKhauTemplate
      },
      { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 80 },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 200 },
      { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },
      { Field: "SoLuong", Title: "SL", Width: 30 },
      {
        Field: "DonGia", Title: "Đơn Giá", Width: 100,
        Template: this.donGiaChietKhauTemplate,
        TemplateFooter: this.donGiaChietKhauFooterTemplate
      },
      {
        Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
        Template: this.thanhTienChietKhauTemplate,
        TemplateFooter: this.thanhTienChietKhauFooterTemplate,
        TemplateGroupFooter: this.thanhTienChietKhauGroupFooterTemplate
      },
      {
        Field: "TyLeChietKhauDisplay", Title: "TL CK", Width: 100,
        Template: this.tyLeChietKhauCoChietKhauTemplate,
      },
      {
        Field: "DuocGiamTrongGoi", Title: "DG Trong Gói", Width: 100,
        Template: this.duocGiamTrongGoiCoChietKhauTemplate,
        TemplateFooter: this.duocGiamTrongGoiCoChietKhauFooterTemplate
      },
      {
        Field: "ThanhTienTrongGoi", Title: "TT Trong Gói", Width: 100,
        Template: this.thanhTienTrongGoiChietKhauTemplate,
        TemplateFooter: this.thanhTienTrongGoiChietKhauFooterTemplate,
        TemplateGroupFooter: this.thanhTienTrongGoiChietKhauGroupFooterTemplate
      },
      {
        Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230,
        Template: this.noiThucHienChietKhauTemplate
      }
      ,
      {
        Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100,
        Template: this.tinhTrangTemplate,
      }
    ];

    //chua co documenttype
    this.documentType = DocumentType.DanhMucBenhVien;
    this.tiepNhanBenhNhan = new TiepNhanBenhNhanViewModel;
    this.tiepNhanBenhNhan.BenhNhan = new BenhNhanTiepNhanBenhNhanViewModel();

    this.lstBHTN = new Array<ThemBaoHiemTuNhanGridVo>();

    this.setValueForGridBHTN();
    this.huyBHTN();
    this.refreshGrid();

    this.themChiDinhDichVuModel = new ThemChiDinhDichVu();
    this.themChiDinhGoiModel = new ThemChiDinhDichVu();

    //this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;

    this.clearThongTinTaiKhoanBenhNhan();
    this.clearThemTaiLieu();

    
  }

  getSoTienBHYTSeThanhToan() {
    this.apiService.get<any>("TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan").subscribe(
      resultData => {
        this.soTienBHYTSeThanhToan = resultData;
        //console.log("getSoTienBHYTSeThanhToan = ", this.soTienBHYTSeThanhToan);
      }
    )
  }
  getListTenTrieuChungKham() {
    this.apiService.get<Array<string>>("TiepNhanBenhNhan/GetListTenTrieuChungKhamAsync").subscribe(
      resultData => {
        this.TrieuChungTiepNhanResource = resultData;
      }
    )
  }


  huyBHTN() {
    this.isUpdateGrid = false;
    this.clearThemBHTN();
  }

  clearThemBHTN() {
    this.themBaoHiemTuNhanModel = new ThemBaoHiemTuNhan();
  }

  clearThongTinTaiKhoanBenhNhan() {
    this.thongTinTaiKhoanBenhNhan = null;
  }

  clearThemTaiLieu() {
    this.themTaiLieu = new ThemTaiLieuDinhKem();
  }

  setDefaultData() {
    this.isDungTuyenDisplay = null;
    this.isDungTuyen = false;
    this.isSearchQRCodeEnable = true;
    this.soTuoiDisplay = null;
    this.hoTenDaTimKiem = null;
    this.maSoTheDaTimKiem = null;
    this.ngaySinhDaTimKiem = null;
    this.soPhanTramHuongBHYT = null;

    this.totalBenhNhan = 0;
    this.lstBenhNhan = new Array<TimKiemBenhNhanGridVo>();
    this.modelTimKiemBenhNhan = new TimKiemBenhNhanGridVo();

    this.isOutOfDate = false;
  }

  getBenhNhan(id: number) {
    this.showPopupLoadingData();
    this.apiService.post<TiepNhanBenhNhanViewModel>("TiepNhanBenhNhan/GetYeuCauKhamBenh?id=" + id).subscribe(
      resultData => {
        if (resultData == null || resultData == undefined) return;
        this.tiepNhanBenhNhan = resultData;
        console.log("getBenhNhan", this.tiepNhanBenhNhan)
        var ngaySinh = parseDate(this.tiepNhanBenhNhan.NgayThangNamSinh)
        if (ngaySinh != null) {
          this.ThongTinBenhNhanNgaySinhChange(ngaySinh);
        }
        this.closePopupLoadingData();
        if (resultData.LoaiVoucher == null) {
          this.loaiVoucher = 0;
        }
        else {
          this.loaiVoucher = resultData.LoaiVoucher;
        }
        // thong tin BHYT
        if (resultData.BHYTNgayHieuLuc != null && resultData.BHYTNgayHieuLuc != undefined) {
          let ngayCoHieuLuc = new Date(resultData.BHYTNgayHieuLuc);

          this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = CommonService.formatDate(ngayCoHieuLuc, "dd/mm/yyyy");

        }
        if (resultData.BHYTNgayHetHan != null && resultData.BHYTNgayHetHan != undefined) {
          let ngayHetHan = new Date(resultData.BHYTNgayHetHan);
          this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = CommonService.formatDate(ngayHetHan, "dd/mm/yyyy");
        }
        if (resultData.BHYTNgayDu5Nam != null && resultData.BHYTNgayDu5Nam != undefined) {
          let ngayDu5Nam = new Date(resultData.BHYTNgayDu5Nam);
          this.tiepNhanBenhNhan.NgayDu5NamDisplay = CommonService.formatDate(ngayDu5Nam, "dd/mm/yyyy");
        }
        if (resultData.BHYTMaDKBD != null && resultData.BHYTMaDKBD != undefined) {
          this.setSoPhanTramHuongBHYT(resultData.BHYTMaSoThe)
          this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + resultData.BHYTMaDKBD).subscribe(
            resultData => {
              this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;

            },
            () => {
            });
        }


        // BHTN
        if (resultData.BaoHiemTuNhans != undefined && resultData.BaoHiemTuNhans != null) {
          resultData.BaoHiemTuNhans.forEach(item => {
            let model = new ThemBaoHiemTuNhanGridVo();
            model.Id = item.Id;
            model.CongTyBaoHiemTuNhanId = item.BHTNCongTyBaoHiemId;
            model.CongTyDisplay = item.CongTyDisplay;
            model.DiaChi = item.BHTNDiaChi;
            model.MaSoThe = item.BHTNMaSoThe;
            model.SoDienThoai = item.BHTNSoDienThoai;


            model.NgayHetHan = item.BHTNNgayHetHan;
            if (item.BHTNNgayHetHan != null) {
              let dateNgayHetHan = new Date(model.NgayHetHan);
              model.NgayHetHanDisplay = CommonService.formatDate(dateNgayHetHan, "dd/mm/yyyy");
            }
            else {
              model.NgayHetHanDisplay = null;
            }

            model.NgayHieuLuc = item.BHTNNgayHieuLuc;
            if (item.BHTNNgayHieuLuc != null) {
              let dateNgayHieuLuc = new Date(model.NgayHieuLuc);
              model.NgayHieuLucDisplay = CommonService.formatDate(dateNgayHieuLuc, "dd/mm/yyyy");
            }
            else {
              model.NgayHieuLucDisplay = null;
            }

            this.lstBHTN.push(model);
          });

          this.setValueForGridBHTN();
        }
        // BHTN
        this.isHaveBHYTUpdated = resultData.CoBHYT
        this.tiepNhanBenhNhan.BenhNhan.GioiTinhDisplay = resultData.BenhNhan.GioiTinh == 1 ? "Nam" : "Nữ";
        if (this.tiepNhanBenhNhan.BHYTMucHuong == null) {
          this.tiepNhanBenhNhan.IsCheckedBHYT = false;
        }
        if (this.tiepNhanBenhNhan.IsCheckedBHYT) {
        }
        else {
          this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
        }

        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        this.setDataForDichVuKhac();
        this.setDataForTaiLieuDinhKem();
        this.refreshGrid();
      },
      () => {
        //console.log("error")
      });
  }

  setDuocHuongBHYT(CoBHYT: boolean = false, LyDoVaoVien: number = 1) {
    let dateNow = new Date();
    let dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
    if (CoBHYT && LyDoVaoVien == 1 && dateNgayHetHan > dateNow) {
      this.themChiDinhDichVuModel.DuocHuongBHYT = true;
      this.themChiDinhGoiModel.DuocHuongBHYT = true;
      this.duocHuongBHYT = true;

      this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
      this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
      this.addBHYTForGridChiDinhDichVu();
    }
    else {
      this.themChiDinhDichVuModel.DuocHuongBHYT = false;
      this.themChiDinhGoiModel.DuocHuongBHYT = false;
      this.duocHuongBHYT = false;

      this.themChiDinhDichVuModel.BHYTMucHuong = null;
      this.themChiDinhGoiModel.BHYTMucHuong = null;
      //this.removeBHYTForGridChiDinhDichVu();
    }
  }

  removeBHYTForGridChiDinhDichVu() {

    //khac
    for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
      const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
      if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0) {
        item.DuocHuongBHYT = false;
      }
    }
    this.setDataForDichVuKhac();
    this.refreshGrid();
  }

  setDataForDichVuKhac() {
    if(this.tiepNhanBenhNhan.YeuCauKhacGrid != null)
    {
        if(this.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0)
        {
            this.showbuttonLuuVaInPhieuXetNghiem = false;
        }else{
            if(this.showbuttonLuuVaInPhieuXetNghiem == false)
            {
                this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(element => {
                    this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(element.MaDichVuId);
                });
            }
           
        }
    }


    this.gridDataKhacCoChietKhauArray = [];
    this.gridDataKhacDisplay = {
      data: this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null),
      total: this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null).length
    };
    let arrayNhomGoiCoChietKhau: string[] = [];
    this.gridDataKhacCoChietKhauDisplay = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.IsGoiCoChietKhau == true);
    this.gridDataKhacCoChietKhauDisplay.forEach(e => {
      if (!arrayNhomGoiCoChietKhau.some(o => o == e.TenGoiChietKhau)) {
        arrayNhomGoiCoChietKhau.push(e.TenGoiChietKhau);
      }
    });

    arrayNhomGoiCoChietKhau.forEach(e => {
      let resultArray: ChiDinhDichVuGridVo[] = [];
      this.gridDataKhacCoChietKhauDisplay.forEach(o => {
        if (e == o.TenGoiChietKhau) {
          resultArray.push(o);
        }
      });

      this.gridDataKhacCoChietKhauArray.push(process(resultArray, this.stateKhamBenh));
    });
    this.setSoLuongChoGridKhac();
  }

  checkValidAddGoiCoChietKhau(id: number) {
    let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
      .find(obj => obj.GoiCoChietKhauId == id);
    if (model != undefined) {
      return false;
    }
    return true;
  }

  setSoLuongChoGridKhac() {
    this.soLuongGoiCoChietKhau = this.gridDataKhacCoChietKhauArray.length - 1;
  }
  setDataForTaiLieuDinhKem() {
    //console.log("abc = ", this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length);
    this.gridDataTaiLieuDinhKem = {
      data: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans,
      total: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length
    };
  }


  refreshGrid() {

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridChildBHTN != undefined) {
      this.gridChildBHTN.setDataSource();
    }

    if (this.gridChildCoChietKhau != undefined) {
      this.gridChildCoChietKhau.setDataSource();
    }

    //console.log("grid ko chiet khau ", this.gridChildKhongChietKhau)

    if (this.gridChildKhongChietKhau != undefined) {
      this.gridChildKhongChietKhau.setDataSource();
    }

    if (this.gridTaiLieuDinhKem != undefined) {
      this.gridTaiLieuDinhKem.setDataSource();
    }

    //this.cdRef.detectChanges();
  }

  addBHYTForGridChiDinhDichVu() {
    //khac
    for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
      const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
    }
    //this.setGiaBHYT();
    this.setDataForDichVuKhac();
    this.refreshGrid();
  }

  setValueForGridBHTN() {
    let index = 1;
    this.lstBHTN.forEach(obj => {
      obj.STT = index;
      index = index + 1;
    });

    this.updateBHTN();
    this.gridDataSourceBHTN = {
      data: this.lstBHTN,
      total: this.lstBHTN.length
    }
  }
  updateBHTN() {
    this.tiepNhanBenhNhan.BaoHiemTuNhans = new Array<BaoHiemTuNhanViewModel>();
    this.lstBHTN.forEach(obj => {
      let model = new BaoHiemTuNhanViewModel();
      model.Id = obj.Id;
      model.BHTNCongTyBaoHiemId = obj.CongTyBaoHiemTuNhanId;
      model.BHTNDiaChi = obj.DiaChi;
      model.BHTNMaSoThe = obj.MaSoThe;
      model.BHTNNgayHetHan = obj.NgayHetHan;
      model.BHTNNgayHieuLuc = obj.NgayHieuLuc;
      model.BHTNSoDienThoai = obj.SoDienThoai;
      this.tiepNhanBenhNhan.BaoHiemTuNhans.push(model);
    });
  }


  setSoPhanTramHuongBHYT(maThe: string) {
    let maTheArray = maThe.split("");
    if (maTheArray[2] == '1') {
      this.soPhanTramHuongBHYT = 100;
    }
    else if (maTheArray[2] == '2') {
      this.soPhanTramHuongBHYT = 100;
    }
    else if (maTheArray[2] == '3') {
      this.soPhanTramHuongBHYT = 95;
    }
    else if (maTheArray[2] == '4') {
      this.soPhanTramHuongBHYT = 80;
    }
    else {
      this.soPhanTramHuongBHYT = 100;
    }
    this.tiepNhanBenhNhan.BHYTMucHuong = this.soPhanTramHuongBHYT;
    this.themChiDinhDichVuModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
    this.themChiDinhGoiModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
  }


  duocHuongBHYTChange($event, maDichVuId, nhom) {

    let item = this.tiepNhanBenhNhan.YeuCauKhacGrid
      .filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
      .find(obj => obj.MaDichVuId == maDichVuId && obj.Nhom == nhom);
    //console.log("duocHuongBHYTChange = ", maDichVuId, nhom, $event, item);
    item.DuocHuongBHYT = $event;
    if ($event) {
      item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100;
      item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
      item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    }
    else {
      item.BHYTThanhToan = 0;
      item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
      item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    }
    this.setGiaBHYT();

    //this.setDataForDichVuKhac();
    //this.refreshGrid();
  }


  setGiaBHYT() {
    //console.log("setGiaBHYT = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
    //this.setGiaBHYTSoLanKham();
    let soLanKham = 1;
    let tyLeLan1 = 0;
    let tyLeLan2 = 0;
    let tyLeLan3 = 0;
    let tyLeLan4 = 0;
    let tyLeLan5 = 0;
    ;
    this.apiService.get<Array<number>>("TiepNhanBenhNhan/GetTyLeSoLanHuongBHYTDichVu").subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          //console.log("setGiaBHYTSoLanKham = ", resultData, resultData[0],  resultData[1]);
          tyLeLan1 = resultData[0];
          tyLeLan2 = resultData[1];
          tyLeLan3 = resultData[2];
          tyLeLan4 = resultData[3];
          tyLeLan5 = resultData[4];
          //console.log("Trươc = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
          if (this.tiepNhanBenhNhan.YeuCauKhacGrid != null && this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined) {
            for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
              const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
              //console.log("index = ", item, soLanKham);
              if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && item.GiaBHYT != 0) {
                if (item.Nhom == 'DỊCH VỤ KHÁM BỆNH') {
                  if (soLanKham == 1) {
                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan1 / 100;
                    soLanKham = soLanKham + 1;
                  }
                  else if (soLanKham == 2) {
                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan2 / 100;
                    soLanKham = soLanKham + 1;
                  }
                  else if (soLanKham == 3) {
                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan3 / 100;
                    soLanKham = soLanKham + 1;

                  }
                  else if (soLanKham == 4) {
                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan4 / 100;
                    soLanKham = soLanKham + 1;

                  }
                  else if (soLanKham == 5) {
                    item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan5 / 100;
                    soLanKham = soLanKham + 1;

                  }
                  else {
                    item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100 * 0 / 100;
                    soLanKham = soLanKham + 1;

                  }
                }
                else {
                  item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100;
                }

                item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
              }
            }
          }
        }
        let bhytKhacKhamBenh = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.BHYTThanhToan, 0);

        if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh < this.soTienBHYTSeThanhToan) {
          for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
              item.BHYTThanhToan = item.BHYTThanhToan;
              item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
              item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
            }
          }
        }
        else if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh >= this.soTienBHYTSeThanhToan) {
          for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
              item.BHYTThanhToan = item.BHYTThanhToan * this.tiepNhanBenhNhan.BHYTMucHuong / 100;
              item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
              item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
            }
          }

        }
        this.setDataForDichVuKhac();
        this.refreshGrid();
      }
    )
  }

  public totalKhac(field: any, goiCoChietkhauId: any = 0) {
    switch (field) {
      case 'TongThanhTien':
        return (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.ThanhTien, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == true)
            .reduce((sum, item) => sum + item.ThanhTien, 0));

      case 'ThanhTien':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.ThanhTien, 0);

      case 'CongNo':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.CongNo, 0);
      case 'SoTienMienGiam':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.SoTienMienGiam, 0);

      case 'ThanhTienGoiChietKhau':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
          .reduce((sum, item) => sum + item.ThanhTien, 0);
      case 'TongThanhTienGoiChietKhau':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == true)
          .reduce((sum, item) => sum + item.ThanhTien, 0);
      case 'BHYTThanhToan':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.BHYTThanhToan, 0);
      case 'SoTienMG':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.SoTienMG, 0);
      case 'BnThanhToan':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.BnThanhToan, 0);

      case 'TongBnThanhToan':
        return (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.BnThanhToan, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == true)
            .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0));

      case 'ThanhTienTrongGoi':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
          .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
      case 'TongThanhTienTrongGoi':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == true)
          .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);

      case 'TongThanhTienGoi':
        return this.tiepNhanBenhNhan.YeuCauKhacGrid
          .reduce((sum, item) => sum + item.ThanhTien, 0);

      case 'TongThanhTienBNTra':
        return (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
          .reduce((sum, item) => sum + item.BnThanhToan, 0)) + this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == true)
            .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
    }
  };


  onTabSelect(event: any) {
    this.removeThemDichVuValue();
    this.removeThemGoiValue();
  }
  removeThemDichVuValue() {
    this.themChiDinhDichVuModel = new ThemChiDinhDichVu();
    this.themChiDinhDichVuModel.ThanhTien = null;
    this.loaiTiepNhan = 1;
    this.isGoiCoChietKhau = null;
    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
  }
  removeThemGoiValue() {
    this.themChiDinhGoiModel = new ThemChiDinhDichVu();
    this.themChiDinhGoiModel.ThanhTien = null;
    this.loaiTiepNhan = 1;
    this.isGoiCoChietKhau = null;
    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
  }
  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
  }
  closePopupLoadingData() {
    this.dialog.closeAll();
  }
  viewTaiLieu(file: HoSoYeuCauTiepNhanViewModel) {
    let duongDan = file.DuongDan;
    if (file.AddNew) {
      duongDan = file.DuongDanTmp;
    }
    const params = new HttpParams(
      {
        fromObject: {
          tenGuid: file.TenGuid,
          duongDan: duongDan,
        }
      });
    this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((resp) => {
      if (resp) {

        if (file.TenGuid.indexOf(".pdf") != -1 || file.TenGuid.indexOf(".PDF") != -1) {
          var html = "<div class=\"showFile\">";
          html += "<div class=\"overlay\"></div>";
          html += "<div class=\"middle\">";
          html += "<div class=\"inner\">";
          html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
          html += "<iframe src='" + resp + "' style=\"width:770px; height:570px;\" frameborder=\"0\"></iframe>";
          html += "</div>";
          html += "</div>";
          html += "</div>"
          $(html).appendTo('app-main');
        }
        else {
          var html = "<div class=\"showFile\">";
          html += "<div class=\"overlay\"></div>";
          html += "<div class=\"middle\">";
          html += "<div class=\"inner\">";
          html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
          html += "<img src='" + resp + "' alt='' style=\"max-width: 770px;max-height: 570px;\"/>";
          html += "</div>";
          html += "</div>";
          html += "</div>"
          $(html).appendTo('app-main');
        }
      }
    })

  }


  quayLai() {
    // this.router.navigate(['/lich-su-tiep-nhan']);
    this.location.back();
  }

  ThongTinBenhNhanNgaySinhChange(event: any) {
    if (this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen && this.ngaySinhDaTimKiem == event
      && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
      this.isSearchQRCodeEnable = false;
    }
    else {
      this.isSearchQRCodeEnable = true;
    }
    // if (this.tiepNhanBenhNhan.NgayThangNamSinh != null) {
    //   this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
    // }
    if (event == null || event == undefined) {
      this.under6yearsold = false;
      this.tiepNhanBenhNhan.NamSinh = null;
    }
    //console.log("ThongTinBenhNhanNgaySinhChange = ", $event);

    this.getAge(event, new Date)
  }

  DaysInMonth(date2_UTC: any) {
    let monthStart: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
    let monthEnd: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }
  getAge(date_1: any, date_2: any) {

    //convert to UTC
    let date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));
    let date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate()));

    var yAppendix: any, mAppendix: any, dAppendix: any;
    //--------------------------------------------------------------
    let days = date2_UTC.getDate() - date1_UTC.getDate();
    if (days < 0) {

      date2_UTC.setMonth(date2_UTC.getMonth() - 1);
      days += this.DaysInMonth(date2_UTC);
    }
    //--------------------------------------------------------------
    let months = date2_UTC.getMonth() - date1_UTC.getMonth();
    if (months < 0) {
      date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
      months += 12;
    }
    //--------------------------------------------------------------
    let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
    if (years > 1) yAppendix = " years";
    else yAppendix = " year";
    if (months > 1) mAppendix = " months";
    else mAppendix = " month";
    if (days > 1) dAppendix = " days";
    else dAppendix = " day";

    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
      this.under6yearsold = true;
    }
    else {
      this.under6yearsold = false;
    }
    this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
    //console.log(years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.quayLai();
      event.preventDefault();
    }
  }
  // BVHD-3761
    //================================================================================================
    getListDichVuSarsCoVs(){
      this.apiService.get<DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham>("TiepNhanBenhNhan/GetSarsCoVs").subscribe(
          resultData => {
              this.dichVuSarsCoVs = [];
              this.dichVuSarsCoVs =resultData.Ids;
              this.loaiBenhPham = resultData.LoaiMauXetNghiem
              this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText
          });
  }
  //================================================================================================
}
