import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import { SortDescriptor } from '@progress/kendo-data-query';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DanhSachChoKham, TagItem } from '../../../tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import icicclose from '@iconify/icons-ic/twotone-close';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import icPrint from '@iconify/icons-ic/twotone-print';
import { ToaThuocKhamBenhConfirmComponent } from '../toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { LoaiPhieuIn } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PopupChonLoaiInViewComponent } from '../../../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { PopupMessageKhongCoDichVuVuInComponent } from '../popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component';
import { InDonThuocPopUpComponent } from '../../../quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component';
import { ToaThuocKhamBenhPopupComponent } from '../toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component';
import { PhieuKhamBenhVaoVienPopupComponent } from '../../kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component';

@Component({
  selector: 'app-lich-su-kham-benh-list',
  templateUrl: './lich-su-kham-benh-list.component.html',
  styleUrls: ['./lich-su-kham-benh-list.component.scss']
})
export class LichSuKhamBenhListComponent implements OnInit {
  @Input() sort: SortDescriptor[] = [{
    field: "ThoiDiemTiepNhan",
    dir: 'desc'
  }
  ];
  icSearch = icSearch;
  icicclose = icicclose;
  icFileExcel = icFileExcel;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icEdit = icEdit;
  icPrint = icPrint;
  icFilterList = icFilterList;
  danhSachChoKham: DanhSachChoKham;
  documentType: DocumentType;
  gridColumns: any[] = [];
  searchString: string;
  baseRoute: string = "/lich-su-kham-benh";
  addtionStringDefault: string = null;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('thoiDiemTiepNhanTemplate', { static: true }) thoiDiemTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('thoiDiemThucHienTemplate', { static: true }) thoiDiemThucHienTemplate: TemplateRef<any>;

  @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('acTionTemplate', { static: true }) acTionTemplate: TemplateRef<any>;

  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  searchCtrl = new FormControl;
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.danhSachChoKham = new DanhSachChoKham();
    let dateNow = new Date();
    this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
      this.danhSachChoKham.FromDate = CommonService.formatDateTime(
        this.danhSachChoKham.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.danhSachChoKham.FromDate = null;
    }

    if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
      this.danhSachChoKham.ToDate = CommonService.formatDateTime(
        this.danhSachChoKham.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.danhSachChoKham.ToDate = null;
    }
    var queryString = JSON.stringify(this.danhSachChoKham);
    this.addtionStringDefault = queryString;

    this.documentType = DocumentType.LichSuKhamBenh;
    this.backWithSearch();
    this.gridColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.chiTietTemplate },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, ShowTooltip: true, Sortable: true },
      { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, ShowTooltip: true, Sortable: true },
      { Field: "NamSinh", Title: "Năm Sinh", Width: 90, Sortable: true },
      { Field: "DiaChi", Title: "Địa Chỉ", Width: 110, ShowTooltip: true, Sortable: true },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 120, ShowTooltip: true, Sortable: true },
      { Field: "ThoiDiemThucHien", Title: "Thời điểm thực hiện", Width: 150, Sortable: true, Template: this.thoiDiemThucHienTemplate },
      { Field: "ThoiDiemTiepNhan", Title: "Tiếp Nhận Lúc", Width: 140, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
      { Field: "TrieuChungTiepNhan", Title: "Lý Do Khám Bệnh", Width: 145, Sortable: true },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 140, ShowTooltip: true, Sortable: true },
      { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 100, Sortable: true },
      { Field: "BSKham", Title: "Bác sĩ khám", Width: 100, ShowTooltip: true, Sortable: true },
      { Field: "DoiTuong", Title: "Đối Tượng", Width: 100, Sortable: true },
      { Field: "TrangThaiYeuCauKhamBenh", Title: "Trạng Thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.acTionTemplate },

    ];

  }

  backWithSearch() {
    let hasLocalSearchString = false;

    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringLichSuKhamBenh");
        if (additionalSearchString != null) {

          this.danhSachChoKham = JSON.parse(additionalSearchString);
          if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != "") {
            this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat);
          }
          else {
            this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = null;
          }
          if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != "") {
            this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat);
          }
          else {
            this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = null;
          }
          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringLichSuKhamBenh");
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }

  clearSearch() {
    this.searchString = "";
    this.danhSachChoKham.SearchString = null;
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      // self.gridChild._additionalSearchString = null;
      self.TimkiemNangCao();
    }
  }

  Timkiem() {
    let QueryString = null;
    this.gridChild._additionalSearchString = null;
    if (this.searchString != null) {
      QueryString = this.searchString;
    }
    this.gridChild.searchString = QueryString;
    this.gridChild.search();
  }

  TimkiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
      this.danhSachChoKham.FromDate = CommonService.formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    }
    else {
      this.danhSachChoKham.FromDate = null;
    }
    if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
      this.danhSachChoKham.ToDate = CommonService.formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
    }
    else {
      this.danhSachChoKham.ToDate = null;
    }

    var queryString = JSON.stringify(this.danhSachChoKham);
    //this.gridChild.searchString = null;
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringLichSuKhamBenh", queryString);
    this.gridChild.search();
    //this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0
  }


  thoiDiemTNChange() {
    this.TimkiemNangCao();
  }

  // getDropdownItem(obj: any, keyValue: any, titleValue: any) {
  //   let index = this.listTagSearch.findIndex(x => x.Key == keyValue && x.Title == titleValue);
  //   if (obj == undefined && this.listTagSearch.findIndex(x => x.Title == titleValue) != -1) {
  //     let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
  //     this.listTagSearch.splice(indexTitle, 1);
  //   }
  //   if (obj != undefined && obj.KeyId != null) {
  //     if (obj.KeyId == null) {
  //       if (index != -1) {
  //         this.listTagSearch.splice(index, 1);
  //       }
  //     }
  //     else {
  //       if (index < 0) {
  //         let item = new TagItem();
  //         item.Key = keyValue;
  //         item.Value = obj.DisplayName;
  //         item.Title = titleValue;
  //         let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
  //         if (indexTitle >= 0) {
  //           this.listTagSearch.splice(indexTitle, 1);
  //         }
  //         this.listTagSearch.push(item);
  //       }
  //       else {
  //         this.listTagSearch.pop();
  //         this.listTagSearch[index].Value = obj.DisplayName;
  //       }
  //     }
  //   }
  //   else {
  //     if (index != -1) {
  //       this.listTagSearch.splice(index, 1);
  //     }
  //   }
  // }

  closeMenu() {
    this.trigger.closeMenu();
  }

  view(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/lich-su-kham-benh/chi-tiet/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  XuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("KhamBenh/ExportLichSuKhamBenh", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuKhamBenh" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  InToaThuoc(dataItem: any) {
    console.log("dataItem: ", dataItem)
    var self = this;
    self.dialog
      .open(ToaThuocKhamBenhConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: dataItem,
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
              let dialogRef = this.dialog.open(PopupMessageKhongCoDichVuVuInComponent, {
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
                  .open(ToaThuocKhamBenhPopupComponent, {
                    disableClose: true,
                    width: "1200px",
                    data: result,
                  });
              }
              else{
                let dialogRef = this.dialog.open(PopupMessageKhongCoDichVuVuInComponent, {
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
                  .open(ToaThuocKhamBenhPopupComponent, {
                    disableClose: true,
                    width: "1200px",
                    data: result,
                  });
              }
              else{
                let dialogRef = this.dialog.open(PopupMessageKhongCoDichVuVuInComponent, {
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
                let dialogRef = this.dialog.open(PopupMessageKhongCoDichVuVuInComponent, {
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
          CoKhamBenhVaoVien : dataItem.CoNhapVien != null  ? true :false
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
                  let dialogRef = this.dialog.open(PopupMessageKhongCoDichVuVuInComponent, {
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
            let dialogRef = this.dialog.open(PopupMessageKhongCoDichVuVuInComponent, {
              width: '400px',
              data: { Model: LoaiPhieuIn.InPhieuKhamBenhVaoVien }
          });
          }
        
           break;
      default: 
      break;
  }
  }

}
