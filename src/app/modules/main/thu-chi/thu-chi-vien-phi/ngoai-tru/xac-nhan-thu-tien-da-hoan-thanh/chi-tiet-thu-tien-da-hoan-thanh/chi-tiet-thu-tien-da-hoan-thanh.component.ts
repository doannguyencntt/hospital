import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  HostListener,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";
import { FormControl } from "@angular/forms";
import { TabStripComponent } from "@progress/kendo-angular-layout";
import {
  ThongTinBenhNhan,
  DanhSachChiPhiKhamChuaBenh,
  DanhSachChiPhiKhamChuaBenhLogList,
} from "../xac-nhan-thu-tien-hoan-thanh";
import { GridComponent } from "@progress/kendo-angular-grid";
import { BaseService } from "src/app/core/services/base.service";
import { MatDialog } from "@angular/material";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { HttpParams } from "@angular/common/http";
import { ViewImagePdfComponent } from "src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component";
import { process, State, GroupDescriptor } from "@progress/kendo-data-query";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { Location } from '@angular/common';
import { MiemGiamTheoDVComponent } from '../ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component';

declare var jQuery: any;
@Component({
  selector: "app-chi-tiet-thu-tien-da-hoan-thanh",
  templateUrl: "./chi-tiet-thu-tien-da-hoan-thanh.component.html",
  styleUrls: ["./chi-tiet-thu-tien-da-hoan-thanh.component.scss"],
})
export class ChiTietThuTienDaHoanThanhComponent implements OnInit {
  public danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh[] = [];
  public danhSachChiPhiKhamChuaBenhLogList: DanhSachChiPhiKhamChuaBenhLogList[] = [];
  gridColumns: any[] = [];
  documentType: DocumentType;
  idYeuCauTiepNhan = this.route.snapshot.params.id;
  thongTinBaoHiemXaHoi: any;
  tabIndex = 0;
  confrim: any;
  
  position = new FormControl("above");
  @ViewChild("tabDaThu", { static: true }) tabDaThu: TabStripComponent;
  thongTinBenhNhan = {} as ThongTinBenhNhan;
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  tab = 1;
  gridThuNganChoThuPhiColumns: any[] = [];
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<
    any
  >;
  @ViewChild("templateTextSoTienChoXacNhan", { static: true })
  templateTextSoTienChoXacNhan: TemplateRef<any>;
  @ViewChild("templateTextTienMat", { static: true })
  templateTextTienMat: TemplateRef<any>;
  @ViewChild("templateTextChuyenKhoan", { static: true })
  templateTextChuyenKhoan: TemplateRef<any>;
  @ViewChild("templateTextPos", { static: true }) templateTextPos: TemplateRef<
    any
  >;
  @ViewChild("templateTrangThai", { static: true })
  templateTrangThai: TemplateRef<any>;

  //=====================Template Cha =================
  @ViewChild("tienMatTemplate", { static: true })
  tienMatTemplate: TemplateRef<any>;
  @ViewChild("chuyenKhoanTemplate", { static: true })
  chuyenKhoanTemplate: TemplateRef<any>;
  @ViewChild("posTemplate", { static: true })
  posTemplate: TemplateRef<any>;
  @ViewChild("soTienMiemGiamTemplate", { static: true })
  soTienMiemGiamTemplate: TemplateRef<any>;
  @ViewChild("soTienCongNoTemplate", { static: true })
  soTienCongNoTemplate: TemplateRef<any>;
  //=====================Template Con ==================

  //---------------------------------thành tiền------------------------------------------------------------------
  @ViewChild("thanhTienTemplate", { static: true })
  thanhTienTemplate: TemplateRef<any>;
  @ViewChild("thanhTienFooterTemplate", { static: true })
  thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild("thanhTienGroupFooterTemplate", { static: true })
  thanhTienGroupFooterTemplate: TemplateRef<any>;

  //---------------------------------bảo hiểm y tế thanh toán------------------------------------------------------------------
  @ViewChild("bhythanhToanTemplate", { static: true })
  bhythanhToanTemplate: TemplateRef<any>;
  @ViewChild("bhythanhToanFooterTemplate", { static: true })
  bhythanhToanFooterTemplate: TemplateRef<any>;
  @ViewChild("bhythanhToanGroupFooterTemplate", { static: true })
  bhythanhToanGroupFooterTemplate: TemplateRef<any>;

  //---------------------------------Số tiền MG------------------------------------------------------------------
  @ViewChild("soTienMGTemplate", { static: true })
  soTienMGTemplate: TemplateRef<any>;
  @ViewChild("tLMGFooterTemplate", { static: true })
  tLMGFooterTemplate: TemplateRef<any>;
  @ViewChild("tLMGGroupFooterTemplate", { static: true })
  tLMGGroupFooterTemplate: TemplateRef<any>;
  //---------------------------------Số tiền Công Nợ------------------------------------------------------------------
  @ViewChild("soTienCongNoGridConTemplate", { static: true })
  soTienCongNoGridConTemplate: TemplateRef<any>;
  @ViewChild("congNoFooterTemplate", { static: true })
  congNoFooterTemplate: TemplateRef<any>;
  @ViewChild("congNoGroupFooterTemplate", { static: true })
  congNoGroupFooterTemplate: TemplateRef<any>;

  //---------------------------------Số Da Thanh Toan------------------------------------------------------------------
  @ViewChild("daThanhToanTemplate", { static: true })
  daThanhToanTemplate: TemplateRef<any>;
  @ViewChild("daThanhToanFooterTemplate", { static: true })
  daThanhToanFooterTemplate: TemplateRef<any>;
  @ViewChild("daThanhToanGroupFooterTemplate", { static: true })
  daThanhToanGroupFooterTemplate: TemplateRef<any>;

  //---------------------------------BNConPhaiThanhToann------------------------------------------------------------------
  @ViewChild("bnConPhaiThanhToanTemplate", { static: true })
  bnConPhaiThanhToanTemplate: TemplateRef<any>;
  @ViewChild("bnConPhaiThanhToanFooterTemplate", { static: true })
  bnConPhaiThanhToanFooterTemplate: TemplateRef<any>;
  @ViewChild("bnConPhaiThanhToanGroupFooterTemplate", { static: true })
  bnConPhaiThanhToanGroupFooterTemplate: TemplateRef<any>;

  @ViewChild("donGiaTemplate", { static: true }) donGiaTemplate: TemplateRef<
    any
  >;
  @ViewChild("donGiaFooterTemplate", { static: true })
  donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true })
  nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild("tLMGPerTemplate", { static: true }) tLMGPerTemplate: TemplateRef<
    any
  >;
  @ViewChild("nguoiThuTemplate", { static: true })
  nguoiThuTemplate: TemplateRef<any>;

  @ViewChild("sttTemplate", { static: true })
  sttTemplate: TemplateRef<any>;

  gridParentColumns: any[] = [];
  gridChildColumns: any[] = [];

  urlGetDataGridParentAsync = "ThuNgan/GetDataThuChiTienForThuNganAsync";
  urlGetDataGridChildAsync = "ThuNgan/GetDataChiTietChiThuForGridAsync";

  currentMasterName: string = null;

  public gridDataDaThu: any;
  daThuTienGridColumns: any[] = [];
  dataSource: any = {
    data: [],
    total: 0,
  };
  public total(field: any) {
    switch (field) {
      case "BNConPhaiThanhToan":
        return this.XuLyTotalForField("BNConPhaiThanhToan");
        break;
      case "DaThanhToan":
        return this.XuLyTotalForField("DaThanhToan");
        break;
      case "SoTienMG":
        return this.XuLyTotalForField("SoTienMG");
        break;
      case "ThanhTien":
        return this.XuLyTotalForField("ThanhTien");
        break;
      case "BHYTThanhToan":
        return this.XuLyTotalForField("BHYTThanhToan");
        break;
      case "TongCongNo":
        return this.XuLyTotalForField("TongCongNo");
        break;
    }
  }

  XuLyTotalForField(field: any) {
    let sum = 0;
    this.danhSachChiPhiKhamChuaBenh.forEach((element) => {
      if (element.CheckedDefault) {
        switch (field) {
          case "BNConPhaiThanhToan":
            sum = sum + element.BNConPhaiThanhToan;
            break;
          case "DaThanhToan":
            sum = sum + element.DaThanhToan;
            break;
          case "SoTienMG":
            sum = sum + element.SoTienMG;
            break;
          case "ThanhTien":
            sum = sum + element.ThanhTien;
            break;
          case "BHYTThanhToan":
            sum = sum + element.BHYTThanhToan;
            break;
          case "TongCongNo":
            sum = sum + element.TongCongNo;
            break;
        }
      }
    });
    return sum;
  }

  public totalChiTietNguoiThu(field: any, idGroup: string) {
    switch (field) {
      case "BNConPhaiThanhToan":
        return this.XuLyChiTietTotalForField("BNConPhaiThanhToan", idGroup);
        break;
      case "DaThanhToan":
        return this.XuLyChiTietTotalForField("DaThanhToan", idGroup);
        break;
      case "SoTienMG":
        return this.XuLyChiTietTotalForField("SoTienMG", idGroup);
        break;
      case "ThanhTien":
        return this.XuLyChiTietTotalForField("ThanhTien", idGroup);
        break;
      case "BHYTThanhToan":
        return this.XuLyChiTietTotalForField("BHYTThanhToan", idGroup);
        break;
      case "TongCongNo":
        return this.XuLyChiTietTotalForField("TongCongNo", idGroup);
        break;
    }
  }

  XuLyChiTietTotalForField(field: any, idGroup: string) {
    let sum = 0;
    switch (field) {
      case "BNConPhaiThanhToan":
        if (
          this.danhSachChiPhiKhamChuaBenhLogList.length !== 0 &&
          this.danhSachChiPhiKhamChuaBenhLogList.filter(
            (x) => x.Id === Number(idGroup)
          ).length !== 0
        ) {
          return this.danhSachChiPhiKhamChuaBenhLogList
            .filter((x) => x.Id === Number(idGroup))[0]
            .LanThuTien.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0);
        }
        break;
      case "DaThanhToan":
        if (
          this.danhSachChiPhiKhamChuaBenhLogList.length !== 0 &&
          this.danhSachChiPhiKhamChuaBenhLogList.filter(
            (x) => x.Id === Number(idGroup)
          ).length !== 0
        ) {
          var bndtt = this.danhSachChiPhiKhamChuaBenhLogList
            .filter((x) => x.Id === Number(idGroup))[0]
            .LanThuTien.reduce((sum, item) => sum + item.DaThanhToan, 0);
          return bndtt;
        }
        break;
      case "SoTienMG":
        if (
          this.danhSachChiPhiKhamChuaBenhLogList.length !== 0 &&
          this.danhSachChiPhiKhamChuaBenhLogList.filter(
            (x) => x.Id === Number(idGroup)
          ).length !== 0
        ) {
          return this.danhSachChiPhiKhamChuaBenhLogList
            .filter((x) => x.Id === Number(idGroup))[0]
            .LanThuTien.reduce((sum, item) => sum + item.SoTienMG, 0);
        }
      case "ThanhTien":
        if (
          this.danhSachChiPhiKhamChuaBenhLogList.length !== 0 &&
          this.danhSachChiPhiKhamChuaBenhLogList.filter(
            (x) => x.Id === Number(idGroup)
          ).length !== 0
        ) {
          return this.danhSachChiPhiKhamChuaBenhLogList
            .filter((x) => x.Id === Number(idGroup))[0]
            .LanThuTien.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
      case "BHYTThanhToan":
        if (
          this.danhSachChiPhiKhamChuaBenhLogList.length !== 0 &&
          this.danhSachChiPhiKhamChuaBenhLogList.filter(
            (x) => x.Id === Number(idGroup)
          ).length !== 0
        ) {
          return this.danhSachChiPhiKhamChuaBenhLogList
            .filter((x) => x.Id === Number(idGroup))[0]
            .LanThuTien.reduce((sum, item) => sum + item.BHYTThanhToan, 0);
        }
      case "TongCongNo":
        if (
          this.danhSachChiPhiKhamChuaBenhLogList.length !== 0 &&
          this.danhSachChiPhiKhamChuaBenhLogList.filter(
            (x) => x.Id === Number(idGroup)
          ).length !== 0
        ) {
          return this.danhSachChiPhiKhamChuaBenhLogList
            .filter((x) => x.Id === Number(idGroup))[0]
            .LanThuTien.reduce((sum, item) => sum + item.TongCongNo, 0);
        }
    }
    return sum;
  }

  public groups: GroupDescriptor[] = [
    {
      field: "Nhom",
      aggregates: [
        { field: "ThanhTien", aggregate: "sum" },
        { field: "BHYTThanhToan", aggregate: "sum" },
        { field: "SoTienMG", aggregate: "sum" },
        { field: "DaThanhToan", aggregate: "sum" },
        { field: "BNConPhaiThanhToan", aggregate: "sum" },
        { field: "TongCongNo", aggregate: "sum" }       
      ],
    },
  ];

  sortLichSuDaThu = [
    {
      field: "NgayThuStrSACH",
      dir: "desc",
    },
  ];

  tinhTiLeMiemGiamInGrid(data: DanhSachChiPhiKhamChuaBenh) {
    let sumSoTienBenhNhanTra =
      data.ThanhTien - data.BHYTThanhToan - data.TongCongNo;
    if (sumSoTienBenhNhanTra == 0 || isNaN(data.SoTienMG)) {
      return 0;
    }
    return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
  }
  public state: State = {
    group: this.groups,
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private baseService: BaseService,
    private apiService: ApiService,
    private location: Location
  ) {
    this.baseService.controllerName = "ThuNgan";
  }

  ngOnInit() {
    this.documentType = DocumentType.ThuNgan;
    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
      this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
    }

    //grid cha và con
    this.gridParentColumns = [
      { Field: "SoBLHD", Title: "Mã Phiếu", Width: 85 },
      { Field: "ThuChiTienBenhNhanStr", Title: "Hình Thức Thu", Width: 200 },
      { Field: "NgayThuStrSACH", Title: "Ngày thu", Width: 150 },
      {
        Field: "TienMat",
        Title: "Tiền mặt",
        Width: 100,
        Template: this.tienMatTemplate,
      },
      {
        Field: "ChuyenKhoan",
        Title: "Chuyển khoản",
        Width: 100,
        Template: this.chuyenKhoanTemplate,
      },
      { Field: "Pos", Title: "Pos", Width: 100, Template: this.posTemplate },
      {
        Field: "SoTienMiemGiam",
        Title: "Số tiền MG",
        Width: 100,
        Template: this.soTienMiemGiamTemplate,
      },
      {
        Field: "SoTienCongNo",
        Title: "Số tiền công nợ",
        Width: 100,
        Template: this.soTienCongNoTemplate,
      },
      { Field: "NguoiThu", Title: "Người Thu", Width: 110 },
    ];
    this.gridChildColumns = [
      {
        Field: "",
        Title: "#",
        Width: 100,
        Sortable: true,
        Template: this.sttTemplate,
      },
      {
        Field: "Nhom",
        Title: "Nhóm",
        Width: 110,
        Sortable: true,
        Hidden: true,
        TemplateGroupHeader: this.nhomGroupHeaderTemplate,
      },
      { Field: "Ma", Title: "Mã", Width: 100, Sortable: true },
      { Field: "TenDichVu", Title: "Tên DV", MinWidth: 200, Sortable: true },
      { Field: "LoaiGia", Title: "Loại giá", Width: 120, Sortable: true },
      { Field: "Soluong", Title: "SL", Width: 40, Sortable: true },
      {
        Field: "DonGia",
        Title: "Đơn giá",
        Width: 100,
        Sortable: true,
        Template: this.donGiaTemplate,
        TemplateFooter: this.donGiaFooterTemplate,
      },
      {
        Field: "ThanhTien",
        Title: "Thành Tiền",
        Width: 100,
        Sortable: true,
        Template: this.thanhTienTemplate,
        TemplateFooter: this.thanhTienFooterTemplate,
        TemplateGroupFooter: this.thanhTienGroupFooterTemplate,
      },
      {
        Field: "BHYTThanhToan",
        Title: "BHYT TT",
        Width: 100,
        Sortable: true,
        Template: this.bhythanhToanTemplate,
        TemplateFooter: this.bhythanhToanFooterTemplate,
        TemplateGroupFooter: this.bhythanhToanGroupFooterTemplate,
      },
      {
        Field: "TongCongNo",
        Title: "Tổng Công Nợ",
        Width: 100,
        Sortable: true,
        Template: this.soTienCongNoGridConTemplate,
        TemplateFooter: this.congNoFooterTemplate,
        TemplateGroupFooter: this.congNoGroupFooterTemplate,
      },
      // {
      //   Field: "TLMG",
      //   Title: "TLMG",
      //   Width: 70,
      //   Sortable: true,
      //   Template: this.tLMGPerTemplate,
      // },
      {
        Field: "SoTienMG",
        Title: "Số tiền MG",
        Width: 100,
        Sortable: true,
        Template: this.soTienMGTemplate,
        TemplateFooter: this.tLMGFooterTemplate,
        TemplateGroupFooter: this.tLMGGroupFooterTemplate,
      },
      {
        Field: "DaThanhToan",
        Title: "Đã TT",
        Width: 100,
        Sortable: true,
        Template: this.daThanhToanTemplate,
        TemplateFooter: this.daThanhToanFooterTemplate,
        TemplateGroupFooter: this.daThanhToanGroupFooterTemplate,
      },
      {
        Field: "BNConPhaiThanhToan",
        Title: "BN còn phải TT",
        Width: 100,
        Sortable: true,
        Template: this.bnConPhaiThanhToanTemplate,
        TemplateFooter: this.bnConPhaiThanhToanFooterTemplate,
        TemplateGroupFooter: this.bnConPhaiThanhToanGroupFooterTemplate,
      },
      {
        Field: "NoiThucHien",
        Title: "Nơi thực hiện",
        Width: 100,
        Sortable: true,
      },
      {
        Field: "NguoiThu",
        Title: "Người thu",
        Width: 100,
        Sortable: true,
        Template: this.nguoiThuTemplate,
      },
    ];
  }

  getThongTinYeuCauBenhNhan(id) {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: {},
    });
    this.baseService.getById<any>(id).subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.thongTinBenhNhan = resultData;
        this.getDanhSachThuPhiDaThuPhiDichVu(this.idYeuCauTiepNhan);
      }
    });
  }

  onTabSelect(ev: any) {
    const self = this;
    self.tabIndex = ev.index;
  }

  onHuy() {
    // this.router.navigateByUrl("/xac-nhan-thu-tien-da-hoan-thanh");
    this.location.back();
  }

  async xemTaiLieu(dataItem) {
    const params = new HttpParams({
      fromObject: {
        tenGuid: dataItem.TenGuid,
        duongDan: dataItem.DuongDan,
      },
    });
    this.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((resp) => {
        if (resp) {
          if (
            dataItem.TenGuid.indexOf(".pdf") != -1 ||
            dataItem.TenGuid.indexOf(".PDF") != -1
          ) {
            this.dialog.open(ViewImagePdfComponent, {
              disableClose: false,
              width: "1000px",
              height: "600px",
              data: {
                Type: "PDF",
                Title: "Xem tài liệu",
                Description: resp.MoTa !== null ? resp.MoTa : "",
                Src: resp,
              },
            });
          } else {
            this.dialog.open(ViewImagePdfComponent, {
              disableClose: false,
              width: "1000px",
              height: "600px",
              data: {
                Type: "Image",
                Title: "Xem ảnh",
                Description: resp.MoTa !== null ? resp.MoTa : "",
                Src: resp,
              },
            });
          }
        }
      });
  }

  getDanhSachThuPhiDaThuPhiDichVu(id) {
    this.apiService
      .get<any>("ThuNgan/GetDanhSachThuPhiDaThuPhiDichVu/" + id)
      .subscribe((resultData) => {
        this.danhSachChiPhiKhamChuaBenh = resultData;
        this.gridDataDaThu = process(
          this.danhSachChiPhiKhamChuaBenh,
          this.state
        );
        this.setRemoveGroupFooterOnly();
        this.dialog.closeAll();
      });
  }

  setRemoveGroupFooterOnly() {
    setTimeout(function () {
      if (jQuery("#danhSachDaThuTienGrid .k-group-footer").length == 1) {
        jQuery("#danhSachDaThuTienGrid .k-group-footer").hide();
      } else {
        jQuery("#danhSachDaThuTienGrid .k-group-footer").show();
      }
    }, 100);
  }

  onDataBoundForChildren(event: any) {
    const lanThu: DanhSachChiPhiKhamChuaBenh[] = [];
    this.danhSachChiPhiKhamChuaBenh = event.Data;
    this.danhSachChiPhiKhamChuaBenh.forEach((duyetChiTietItem) => {
      lanThu.push(duyetChiTietItem);
    });

    let moiLanThu = new DanhSachChiPhiKhamChuaBenhLogList();
    moiLanThu = {
      Id: Number(this.currentMasterName),
      LanThuTien: lanThu,
    };
    this.danhSachChiPhiKhamChuaBenhLogList.push(moiLanThu);
  }

  setMasterName(eventData: any) {
    this.currentMasterName = eventData.dataItem.SoBLHD.toString();
  }

  ViewThongTinMG(dataItem: any) {
    let isView = false;
    if (this.confrim != null) {
      this.dialog.closeAll();
      this.confrim = null;
    }
    this.confrim = this.dialog.open(MiemGiamTheoDVComponent, {
      disableClose: true,
      width: "500px",
      data: { dataItem, isView },
    }).afterClosed().subscribe((result) => {
      if (result != null) {
      }
    });
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    if (event.keyCode === 112 && event.ctrlKey) {
      // ctrl + f1
      this.tabDaThu.selectTab(0);
      event.preventDefault();
    }

    // tslint:disable-next-line: deprecation
    if (event.keyCode === 113 && event.ctrlKey) {
      // ctrl + f2
      this.tabDaThu.selectTab(1);
      event.preventDefault();
    }

    // tslint:disable-next-line: deprecation
    if (event.keyCode === 27 && !event.ctrlKey) {
      // esc
      this.onHuy();
      event.preventDefault();
    }
  }
}
