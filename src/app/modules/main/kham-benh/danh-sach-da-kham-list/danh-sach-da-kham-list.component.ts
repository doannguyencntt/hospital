import { Component, OnInit, ViewChild, TemplateRef, Input, SimpleChanges } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icicclose from '@iconify/icons-ic/twotone-close';
import { MatMenuTrigger } from '@angular/material';
import { TagItem } from '../../tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model';
import { DanhSachDaKhamSearch } from '../kham-benh.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { LichSuKhamBenhPopupComponent } from '../lich-su-kham-benh-popup/lich-su-kham-benh-popup.component';
import icPlay from "@iconify/icons-ic/play-circle-filled";
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { SortDescriptor } from '@progress/kendo-data-query';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icPrint from '@iconify/icons-ic/twotone-print';
import { LoaiPhieuIn } from 'src/app/shared/enum/kham-benh.enum';
import { ToaThuocKhamBenhConfirmComponent } from '../lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component';
import { PopupChonLoaiInViewComponent } from '../../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PhieuKhamBenhVaoVienPopupComponent } from '../kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component';
import { ToaThuocKhamBenhComfirmDkComponent } from './toa-thuoc-kham-benh-comfirm-dk/toa-thuoc-kham-benh-comfirm-dk.component';
import { PopupMessageKhongCoDvInDkComponent } from './popup-message-khong-co-dv-in-dk/popup-message-khong-co-dv-in-dk.component';
import { ToaThuocKhamBenhDkPopupComponent } from './toa-thuoc-kham-benh-dk-popup/toa-thuoc-kham-benh-dk-popup.component';

@Component({
  selector: 'app-danh-sach-da-kham-list',
  templateUrl: './danh-sach-da-kham-list.component.html',
  styleUrls: ['./danh-sach-da-kham-list.component.scss']
})
export class DanhSachDaKhamListComponent implements OnInit {

  //documentType: DocumentType;
  gridColumns: any[] = [];
  searchString: string;
  icSearch = icSearch;
  icicclose = icicclose;
  icPlay = icPlay;
  isFirst: boolean = true;
  danhSachDaKhamSearch: DanhSachDaKhamSearch;
  danhSachDaKhamSearchDefault: DanhSachDaKhamSearch;
  showCancelSearch: boolean = false;
  loadPageStart: boolean = false;
  listTagShowOnHeader: Array<TagItem>;
  listTagSearch: Array<TagItem>;
  icPrint =icPrint;
  icMoreHoriz =icMoreHoriz;

  sort: SortDescriptor[] = [{
    field: "BacSiThucHien",
    dir: 'desc'
  }, {
    field: "ThoiDiemHoanThanhKhamDisplay",
    dir: 'desc'
  }];

  urlGetData: string = "KhamBenh/GetDataForGridAsyncDanhSachDaKham"; // cần gán url
  urlGetTotalPage: string = "KhamBenh/GetTotalPageForGridAsyncDanhSachDaKham"; // cần gán url
  @ViewChild("gridDaKham", { static: true }) gridChild: GridComponent;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild('MaTNTemplate', { static: true }) MaTNTemplate: TemplateRef<any>;
  @ViewChild('TrangThaiTemplate', { static: true }) TrangThaiTemplate: TemplateRef<any>;
  @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('acTionTemplate', { static: true }) acTionTemplate: TemplateRef<any>;

  @Input() phongKham: number;
  @Input() documentType: DocumentType = DocumentType.KhamBenh;
  @Input() isKhamDoan: boolean = false;
  @Input() isKhamDoanTatCa: boolean = false;
  @Input() isReadOnly: boolean = false;

  phongKhamTemp: number = 0;
  constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService,
    private route: ActivatedRoute, private authService: AuthService) {

  }

  ngOnInit() {
    this.danhSachDaKhamSearch = new DanhSachDaKhamSearch();
    this.danhSachDaKhamSearchDefault = new DanhSachDaKhamSearch();
    this.listTagSearch = new Array<TagItem>();
    //this.documentType = DocumentType.KhamBenh; // giá trị tạm để test

    // cập nhật dùng chung khám sức khỏe: ẩn chức năng khám lại
    this.route.queryParams.subscribe(param => {
      console.log('param[IsKhamDoan]', param['IsKhamDoan']);
      if (param['IsKhamDoan'] != undefined) {
        this.isKhamDoan = param['IsKhamDoan'] == 'true';
      }
    });
    this.danhSachDaKhamSearch.LaKhamDoan = this.isKhamDoan;
    this.danhSachDaKhamSearch.IsKhamDoanTatCa = this.isKhamDoanTatCa;

    this.gridColumns = [
      { Field: "Action", Title: "", Width: 100, Template: this.TrangThaiTemplate, Hidden: this.isReadOnly },//, Hidden: this.isKhamDoan
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.MaTNTemplate },
      { Field: "HoTen", Title: "Tên Người Bệnh", Width: 150, Sortable: true, Template: this.hoTenTemplate },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 150, Sortable: true },
      { Field: "BacSiThucHien", Title: "Bác sĩ khám", Width: 150, Sortable: true },
      { Field: "BacSiKetLuan", Title: "Bác sĩ kết luận", Width: 150, Sortable: true, Hidden: this.isKhamDoanTatCa },
      { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 150, Sortable: true },
      // { Field: "TrangThaiYeuCauTiepNhanDisplay", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "ThoiDiemTiepNhanDisplay", Title: "Thời gian TN", Width: 120, Sortable: true },
      { Field: "ThoiDiemHoanThanhKhamDisplay", Title: "Thời gian hoàn thành khám", Width: 150, Sortable: true },
      // { Field: "TrieuChungTiepNhan", Title: "Lý do khám", Width: 150, Sortable: true },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true },
      { Field: "KhoaNhapVien", Title: "Nhập viện", Width: 100, Sortable: true },
      // { Field: "NgayGioBenhNhanVaoPhongKham", Title: "Ngày giờ vào phòng khám", Width: 150, Sortable: true },  
      { Field: "Action", Title: "", Width: 50, Template: this.acTionTemplate },
    ];
    this.listTagSearch = new Array<TagItem>();
    this.loadPageStart == false;

    //this.TimkiemNangCao();
    this.danhSachDaKhamSearch.NoiTiepNhanId = this.phongKham;
    var queryString = JSON.stringify(this.danhSachDaKhamSearch);
    let dateNow = new Date();
    this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat != null) {
      this.danhSachDaKhamSearch.FromDate = CommonService.formatDateTime(
        this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.danhSachDaKhamSearch.FromDate = null;
    }

    if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.danhSachDaKhamSearch.ToDate = CommonService.formatDateTime(
        this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.danhSachDaKhamSearch.ToDate = null;
    }

    var queryString = JSON.stringify(this.danhSachDaKhamSearch);
    this.gridChild.additionalSearchString = queryString;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['phongKham'] && changes['phongKham'].previousValue != null && changes['phongKham'].previousValue != changes['phongKham'].currentValue) {
      // this.TimkiemNangCao();
    }
  }
  clear() {
    if (this.searchString == null || this.searchString == "") {
      this.gridChild.searchString = "";
      this.TimkiemNangCao();
    }
  }
  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.phongKham != 0) {
        this.TimkiemNangCao();
      }
    }
    if (event.key == "Backspace") {
      if (this.searchString == null || this.searchString == undefined || this.searchString == "") {
        this.gridChild.searchString = null;
        if (this.phongKham != 0) {
          this.TimkiemNangCao();
        }
      }
    }
  }

  clearSearch() {
    this.searchString = "";
    this.gridChild.search();
  }
  Timkiem() {
    let QueryString = null;
    this.gridChild._additionalSearchString = null;
    if (this.searchString != null) {
      QueryString = this.searchString;
    }
    //this.gridChild.queryId = this.phongKham;
    this.gridChild.searchString = QueryString;
    this.gridChild.search();
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

  cancelSearch() { // cần kiểm tra lại
    this.danhSachDaKhamSearch = new DanhSachDaKhamSearch();
    this.danhSachDaKhamSearch.LaKhamDoan = this.isKhamDoan;
    this.listTagSearch = new Array<TagItem>();
    this.listTagShowOnHeader = new Array<TagItem>();
    var queryString = JSON.stringify(this.danhSachDaKhamSearch);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  TimkiemNangCao() {
    this.danhSachDaKhamSearch.IsKhamDoanTatCa = this.isKhamDoanTatCa;
    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));

    if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat != null) {
      this.danhSachDaKhamSearch.FromDate = CommonService.formatDateTime(this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    }
    else {
      this.danhSachDaKhamSearch.FromDate = null;
    }

    if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.danhSachDaKhamSearch.ToDate = CommonService.formatDateTime(this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
    }
    else {
      this.danhSachDaKhamSearch.ToDate = null;
    }


    this.danhSachDaKhamSearch.NoiTiepNhanId = this.phongKham; // phong khám

    var queryString = JSON.stringify(this.danhSachDaKhamSearch);
    this.gridChild.searchString = this.searchString;
    if (this.isFirst) {
      this.isFirst = false;
      this.gridChild._additionalSearchString = queryString;
    } else {
      this.gridChild._additionalSearchString = queryString;
    }
    this.gridChild.search();
  }

  searchChanges() {
    if (this.searchString == null || this.searchString == "") {
      this.gridChild.searchString = "";
      this.gridChild.search();
    }
    else if (this.searchString == null || this.searchString == "" && this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat != null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.TimkiemNangCao();
    }
    else if (this.searchString == null || this.searchString == "" && this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat == null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.TimkiemNangCao();
    }
    else if (this.searchString == null || this.searchString == "" && this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat != null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat == null) {
      this.TimkiemNangCao();
    }
    else if (this.searchString == null || this.searchString == "" && this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat != null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat == null) {
      this.TimkiemNangCao();
    }
  }
  thoiDiemTNChange() {
    if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat == null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat == null) {
      this.TimkiemNangCao();
    }
    else if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat != null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.TimkiemNangCao();
    }
    else if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat == null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.TimkiemNangCao();
    }
    else if (this.danhSachDaKhamSearch.ThoiDiemTiepNhanTuFormat != null && this.danhSachDaKhamSearch.ThoiDiemTiepNhanDenFormat == null) {
      this.TimkiemNangCao();
    }
  }
  DetailLSKBPopup(dataItem: any) {
    let dialogRef = this.dialog.open(LichSuKhamBenhPopupComponent, {
      disableClose: false,
      width: '1500px',
      height: 'auto',
      data: dataItem,
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // update khám lại 27/7/2020
  KhamLai(event: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn khám lại bênh nhân này?" }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == "Yes") {
        this.apiService.post<any>("KhamBenh/CapNhatKhamLai?yckbId=" + event + "&phongkham=" + this.phongKham).subscribe(
          resultData => {
            if (resultData == "Người bệnh này không còn khám") {
              this.notificationService.showError(' Bệnh nhân này không được khám lại vì tiếp nhận này đã hoàn tất');
            }
            this.TimkiemNangCao();
          },
          (err: any) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
    });
  }

  // [BVHD-3368]
  CapNhatKhamLaiKhamSucKhoe(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn khám lại bênh nhân này?" }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == "Yes") {
        var obj = {
          YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
          YeuCauKhamBenhId: dataItem.KhamTheoPhongYeuCauKhamBenhId
        }
        this.apiService.post<any>("KhamBenh/CapNhatKhamLaiKhamSucKhoe", obj).subscribe(
          resultData => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Khám lại"]));
            this.TimkiemNangCao();
          },
          (err: any) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
    });
  }
  InToaThuoc(dataItem: any) {
    this.apiService.post<any>("KhamBenh/GetYeuCauKhamBenh?yeuCauTiepNhanId=" + dataItem.YeuCauTiepNhanId + "&yeuCauKhamBenhId=" + dataItem.Id ).subscribe(resultData => {
      if (resultData != null) {
        this.dialog
          .open(ToaThuocKhamBenhComfirmDkComponent, {
            disableClose: false,
            width: "400px",
            data: resultData,
          });
      }
      else{
        let dialogRef = this.dialog.open(PopupMessageKhongCoDvInDkComponent, {
          width: '400px',
          data: { Model: LoaiPhieuIn.InPhieuChiDinh }
      });
      }
  },
      (err: ApiError) => {
          if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
          }
      });
 

  }
  In(dataItem :any , loaiPhieuIn :number){
    console.log(dataItem);
    switch (loaiPhieuIn) {
      case LoaiPhieuIn.InPhieuChiDinh :

       this.apiService.post<any>("KhamBenh/GetDanhSachDichVuChiDinhCuaBenhNhan?yeuCauTiepNhanId=" + dataItem.YeuCauTiepNhanId + "&yeuCauKhamBenhId=" + dataItem.Id ).subscribe(resultData => {
            if (resultData.Data.length != 0) {
              let gridChiDinh :any[] = [];
              resultData.Data.forEach(elements => {
                if(elements.NhomId == 1 || elements.NhomId == 2)
                {
                  let obj = {
                    dichVuChiDinhId : elements.Id,
                    nhomChiDinhId : elements.NhomId
                  };
                  gridChiDinh.push(obj);
                }
                });
              let dataIn = {
                YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
                YeuCauKhamBenhid: dataItem.Id,
                ListDichVuChiDinh: gridChiDinh, // grid
                InChungChiDinh: 0,
                hosting: window.location.protocol + "//" + window.location.host,
                KieuInChung: true,
                GhiChuCanLamSang: "",
                IsKhamDoanTatCa : false, // khám đoàn k có
                EnumInChiDinhKhamBenhNgoaiTru: 1 , // để tạm,
                listGridSelect: resultData.Data,
                Loai: 1,
                InDichVuBacSiChiDinh : true
            };
            let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
              width: '1000px',
              data: { Model: dataIn }
          });
            }
            else{
              let dialogRef = this.dialog.open(PopupMessageKhongCoDvInDkComponent, {
                width: '400px',
                data: { Model: LoaiPhieuIn.InPhieuChiDinh }
            });
            }
        },
            (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
          
          break;
      case  LoaiPhieuIn.InDonThuocBHYT:
     
        let data={
          YeuCauTiepNhanId :dataItem.YeuCauTiepNhanId,
          YeuCauKhamBenhId :dataItem.Id,
          ThuocBHYT:true,
          HostingName :window.location.protocol + "//" + window.location.host
        };
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
          this.apiService.post<any>("KhamBenh/InToaThuocBHYTVaKhongBHYTDanhSachKhamBenh", data).subscribe(
            result => {
              if (result != undefined && result != null && result !="") {
                this.dialog
                  .open(ToaThuocKhamBenhDkPopupComponent, {
                    disableClose: true,
                    width: "1200px",
                    data: result,
                  });
              }
              else{
                let dialogRef = this.dialog.open(PopupMessageKhongCoDvInDkComponent, {
                  width: '400px',
                  data: { Model: LoaiPhieuIn.InDonThuocBHYT }
              });
              }
            },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              };
            });
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
           break;
      case LoaiPhieuIn.InDonThuocNhaThuoc:
        // public ThuocBHYT: boolean = true,
        // public ThuocKhongBHYT: boolean = true,
        // public VatTu: boolean = true,
        let dataCanInDonThuocKhongBHYT={
          YeuCauTiepNhanId :dataItem.YeuCauTiepNhanId,
          YeuCauKhamBenhId :dataItem.Id,
          ThuocKhongBHYT:true,
          HostingName :window.location.protocol + "//" + window.location.host
        };
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
          this.apiService.post<any>("KhamBenh/InToaThuocBHYTVaKhongBHYTDanhSachKhamBenh", dataCanInDonThuocKhongBHYT).subscribe(
            result => {
              if (result != undefined && result != null && result !="") {
                this.dialog
                  .open(ToaThuocKhamBenhDkPopupComponent, {
                    disableClose: true,
                    width: "1200px",
                    data: result,
                  });
              }
              else{
                let dialogRef = this.dialog.open(PopupMessageKhongCoDvInDkComponent, {
                  width: '400px',
                  data: { Model:  LoaiPhieuIn.InDonThuocNhaThuoc}
              });
              }
            },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              };
            });
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
           break;
      case LoaiPhieuIn.InPhieuKhamBenh:
        // public long YeuCauKhamBenhId { get; set; }
        // public bool CoKhamBenh { get; set; }
        // public bool CoHeader { get; set; }
        // public bool CoKhamBenhVaoVien { get; set; }
        let dataPhieuKhamBenh={
          YeuCauKhamBenhId:dataItem.Id,
          CoKhamBenh : true
        };
        this.apiService.post<any>("KhamBenh/InPhieuKhamBenh", dataPhieuKhamBenh).subscribe(
          resultData => {
              if (resultData !=undefined && resultData != null && resultData != "") {
                  this.dialog
                      .open(PhieuKhamBenhVaoVienPopupComponent, {
                          disableClose: true,
                          width: "1000px",
                          data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                      })
                      .afterClosed()
                      .subscribe(() => {
                      });
              }
              else{
                let dialogRef = this.dialog.open(PopupMessageKhongCoDvInDkComponent, {
                  width: '400px',
                  data: { Model:  LoaiPhieuIn.InPhieuKhamBenh}
              });
              }
          },
          (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
              };
          });
           break;
      case LoaiPhieuIn.InPhieuKhamBenhVaoVien:
        let dataPhieuKhamBenhVaoVien={
          YeuCauKhamBenhId:dataItem.Id,
          CoKhamBenhVaoVien : true
        };
        if(dataItem.CoNhapVien == true)
        {
          this.apiService.post<any>("KhamBenh/InPhieuKhamBenh", dataPhieuKhamBenhVaoVien).subscribe(
            resultData => {
                if (resultData !=undefined && resultData != null && resultData != "") {
                    this.dialog
                        .open(PhieuKhamBenhVaoVienPopupComponent, {
                            disableClose: true,
                            width: "1000px",
                            data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                        })
                        .afterClosed()
                        .subscribe(() => {
                        });
                }
                else{
                  let dialogRef = this.dialog.open(PopupMessageKhongCoDvInDkComponent, {
                    width: '400px',
                    data: { Model:  LoaiPhieuIn.InPhieuKhamBenhVaoVien}
                });
                }
            },
            (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                };
            });
        }
        else{
          let dialogRef = this.dialog.open(PopupMessageKhongCoDvInDkComponent, {
            width: '400px',
            data: { Model:  LoaiPhieuIn.InPhieuKhamBenhVaoVien}
        });
        }
       
           break;
      default: 
      break;
  }
  }
}