import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatMenuTrigger, MatDialog } from "@angular/material";
import icSearch from "@iconify/icons-ic/twotone-search";
import { CommonService } from "src/app/core/utilities/common.helper";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { FormControl } from "@angular/forms";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";
import { ApiError } from "src/app/shared/models/api-error.model";
import { NotificationService } from "src/app/core/services/notification.service";
import icSend from "@iconify/icons-ic/send";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import icArrowDownward from '@iconify/icons-ic/arrow-downward';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { ExcelChungTuQueryInfo, LoaiChungTu, ThongTinYeuCauTiepNhans, TimKiemThongTinBenhNhanXuatExcelChungTu } from "../danh-sach-xuat-excel-chung-tu";
import { GiayChungSinhPopupComponent } from "../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-sinh-popup/giay-chung-sinh-popup.component";
import { ChungNhanNghiViecHbhxhPopupComponent } from "../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/chung-nhan-nghi-viec-huong-bhxh/chung-nhan-nghi-viec-hbhxh-popup/chung-nhan-nghi-viec-hbhxh-popup.component";
import { TomTatHoSoBenhAnPopupComponent } from "../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/tom-tat-ho-so-ba-popup/tom-tat-ho-so-ba-popup.component";
import { BienBanGayMePopupComponent } from "../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-gay-me-popup/bien-ban-gay-me-popup.component";
import { GiayNghiDuongThaiNoiTruPopupComponent } from "../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-nghi-duong-thai-noi-tru/giay-nghi-duong-thai-noi-tru-popup/giay-nghi-duong-thai-noi-tru-popup.component";

@Component({
  selector: "app-danh-sach-xuat-excel-chung-tu",
  templateUrl: "./danh-sach-xuat-excel-chung-tu.component.html",
  styleUrls: ["./danh-sach-xuat-excel-chung-tu.component.scss"],
})

export class DanhSachXuatChungTuExcelComponent implements OnInit {
  timKiemDSBaoHiemYTe: TimKiemThongTinBenhNhanXuatExcelChungTu = new TimKiemThongTinBenhNhanXuatExcelChungTu();
  thongTinXuatExcelChungTu: ExcelChungTuQueryInfo = new ExcelChungTuQueryInfo();

  gridDanhSachBHYTColumns: any;
  showCancelSearch: boolean = false;
  searchString: string;
  searchCtrl = new FormControl();
  documentType: DocumentType;
  queryStrings: any;
  public mySelection: number[] = [];
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;
  icArrowDownward = icArrowDownward;

  baseRoute: string = "/danh-sach-xuat-excel-chung-tu";
  holdQuery: any = null;
  query: string = null;
  additionalSearchString: string = null;
  confrim: any = null;
  icSend = icSend;
  icSearch = icSearch;
  validationErrors: any;

  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

  sort = [{
    field: 'NgayTaoChungTu',
    dir: 'desc'
  }];

  dataSource: any = {
    data: [],
    total: 0
  };

  constructor(private route: ActivatedRoute, private router: Router,
    private dialog: MatDialog, private apiService: ApiService,
    private authService: AuthService, private location: Location,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

    this.documentType = DocumentType.DanhSachXuatChungTuExcel;

    let dateNow = new Date();
    this.timKiemDSBaoHiemYTe.TuNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.timKiemDSBaoHiemYTe.DenNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);

    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
      this.timKiemDSBaoHiemYTe.FromDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.FromDate = null;
    }

    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
      this.timKiemDSBaoHiemYTe.ToDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.ToDate = null;
    }

    this.backWithSearch();
    this.gridDanhSachBHYTColumns = [   
      { Field: "MaNB", Title: "Mã NB", Width: 100, Sortable: true },
      { Field: "HoTen", Title: "Tên Người Bệnh", Width: 150, Sortable: true },
      { Field: "NgayThangNam", Title: "Năm Sinh", Width: 150, Sortable: true },
      { Field: "GioiTinhDisplay", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "ChanDoan", Title: "Chẩn Đoán", MinWidth: 200, Sortable: true },
      { Field: "PhuongPhapDieuTri", Title: "Phương pháp điều trị", Width: 200 },
      { Field: "NgayTaoChungTuDisplay", Title: "Ngày chứng từ", Width: 200, Sortable: true },     
      { Field: "", Title: "", Width: 150, Sortable: true, Template: this.actionTemplate },
    ];

    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
    this.gridChild.additionalSearchString = queryString;
  }

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringXuatExcelChungTu') != null) {
      this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringXuatExcelChungTu');

      if (this.additionalSearchString != null) {
        this.timKiemDSBaoHiemYTe = JSON.parse(this.additionalSearchString);
        // this.searchString = this.timKiemDSBaoHiemYTe.SearchString;
        if (this.timKiemDSBaoHiemYTe.TuNgay != undefined && this.timKiemDSBaoHiemYTe.TuNgay != null && this.timKiemDSBaoHiemYTe.TuNgay != "") {
          this.timKiemDSBaoHiemYTe.TuNgay = new Date(this.timKiemDSBaoHiemYTe.TuNgay);
        }
        if (this.timKiemDSBaoHiemYTe.DenNgay != undefined && this.timKiemDSBaoHiemYTe.DenNgay != null && this.timKiemDSBaoHiemYTe.DenNgay != "") {
          this.timKiemDSBaoHiemYTe.DenNgay = new Date(this.timKiemDSBaoHiemYTe.DenNgay);
        }
        this.gridChild.additionalSearchString = this.additionalSearchString;
      }
    } else {
      LocalStorageHelper.setItem('additionalSearchStringXuatExcelChungTu', null);
      this.additionalSearchString = JSON.stringify(this.timKiemDSBaoHiemYTe);
    }
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

  timKiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
      this.timKiemDSBaoHiemYTe.FromDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "mm/dd/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.FromDate = null;
    }

    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
      this.timKiemDSBaoHiemYTe.ToDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "mm/dd/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.ToDate = null;
    }

    if (this.searchString != null) {
      this.timKiemDSBaoHiemYTe.TimKiem = this.searchString;
    }

    if (this.timKiemDSBaoHiemYTe.LoaiChungTu === undefined || this.timKiemDSBaoHiemYTe.LoaiChungTu === null) {
      this.notificationService.showError("Vui lòng chọn chứng từ.");
      return true;
    }

    //this.timKiemDSBaoHiemYTe.SearchString = this.searchString;
    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);

    //this.gridChild.searchString = this.searchString;
    this.gridChild._additionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringXuatExcelChungTu", queryString);
    this.gridChild.clearCheckBox();

    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiemNangCao();
    }
  }

  timKiemNguoiBenh() {

  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  extCheckboxSelection(data: any) {
    this.mySelection = [];
    this.mySelection = data;
  }

  onDataBoundGrid(event: any) {
    if (event != undefined && event != null && event.Data.length > 0) {
      this.dataSource.data = event.Data;
    }
  }

  taiChungTuNguoiBenh() {
    if (this.timKiemDSBaoHiemYTe.LoaiChungTu === undefined || this.timKiemDSBaoHiemYTe.LoaiChungTu === null) {
      this.notificationService.showError("Vui lòng chọn chứng từ.");
      return true;
    }

    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      this.thongTinXuatExcelChungTu.YeuCauTiepNhanIds = [];
      this.thongTinXuatExcelChungTu.LoaiChungTu = this.timKiemDSBaoHiemYTe.LoaiChungTu;
      this.thongTinXuatExcelChungTu.ThongTinYeuCauTiepNhans = [];
      if (this.mySelection.length === 0) {
        this.notificationService.showError("Vui lòng chọn bệnh nhân để xuất excel.");
        return true;
      }
      else {
        self.showPopupLoadingData();
        this.mySelection.forEach(yeuCauTiepNhanId => {
          this.thongTinXuatExcelChungTu.YeuCauTiepNhanIds.push(yeuCauTiepNhanId);
          this.dataSource.data.forEach(element => {
            if (element.Id === yeuCauTiepNhanId) {
              let thongTinYeuCauTiepNhans = new ThongTinYeuCauTiepNhans();

              thongTinYeuCauTiepNhans.YeuCauTiepNhanNgoaiTruId = element.YeuCauTiepNhanNgoaiTruId;
              thongTinYeuCauTiepNhans.YeuCauTiepNhanNoiTruId = element.YeuCauTiepNhanNoiTruId;
              thongTinYeuCauTiepNhans.MaYeuCauTiepNhan = element.MaYeuCauTiepNhan;

              this.thongTinXuatExcelChungTu.ThongTinYeuCauTiepNhans.push(thongTinYeuCauTiepNhans);
            }
          });
        });

        self.apiService.postExportExcel<string>("BHYT/ExportChungTu", this.thongTinXuatExcelChungTu)
          .subscribe(
            (resultData) => {
              self.closePopupLoadingData();
              const dateTimeNow = new Date();
              CommonService.downLoadFile(resultData, "application/vnd.ms-excel",
                "GoiQuaBHYT" + dateTimeNow.getFullYear() + ".xlsx"
              );
            },
            (err: any) => {
              self.notificationService.showError(err.Message);
              self.closePopupLoadingData();
            }
          );
      }

    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang xuất excel..." },
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }

  view(idNoiTru: any, idNgoaiTru: any) {
    if (this.timKiemDSBaoHiemYTe.LoaiChungTu != null) {
      switch (this.timKiemDSBaoHiemYTe.LoaiChungTu) {
        case LoaiChungTu.GiayRaVien:
          // giấy ra viện
          // id là yctn        
          var showDialog = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
          });
          this.apiService.post<any>("BHYT/GetIdPhieuNoiTruHoSoKhac?id=" + idNoiTru + "&loai=" + 28).subscribe(
            resDataId => {
              if (resDataId != undefined && resDataId != null) {

                this.apiService.post<any>("DieuTriNoiTru/InGiayRaVien?noiTruHoSoKhacId=" + resDataId).subscribe(
                  resData => {
                    if (resData != undefined && resData != null) {
                      showDialog.close();
                      this.dialog.open(BienBanGayMePopupComponent, {
                        disableClose: false,
                        width: '1200px',
                        data: { Title: 'GIẤY RA VIỆN', Data: resData },
                      }
                      ).afterClosed().subscribe(() => {
                        showDialog.close();
                      });
                    }
                  },
                  (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                    showDialog.close();
                  }
                );
              }
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              showDialog.close();

            }
          );
          break;
        case LoaiChungTu.GiayNghiHuongBHXH:

          let voBHXH = {
            YeuCauTiepNhanNoiTruId: idNoiTru,
            YeuCauTiepNhanNgoaiTruId: idNgoaiTru,
          };
          this.apiService.post<any>("DieuTriNoiTru/InGiayChungNhanNghiViecHuongBHXHNgoaTruVaNoTru", voBHXH).subscribe(
            (result) => {
              this.dialog.open(ChungNhanNghiViecHbhxhPopupComponent, {
                disableClose: true,
                width: '1200px',
                data: { Model: result }
              }).afterClosed().subscribe(() => {
              });
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });

          break;
        case LoaiChungTu.GiayNghiDuongThai:
          // giấy nghỉ dưỡng thai 
          let vo = {
            YeuCauTiepNhanNoiTruId: idNoiTru,
            YeuCauTiepNhanNgoaiTruId: idNgoaiTru
          };
          this.apiService.post<any>("DieuTriNoiTru/InTatCaGiayNghiDuongThai", vo).subscribe(
            (result) => {
              this.dialog.open(GiayNghiDuongThaiNoiTruPopupComponent, {
                disableClose: true,
                width: '750px',
                data: { Model: result }
              }).afterClosed().subscribe(() => {
              });
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
          break;
        case LoaiChungTu.TomTatBenhAn:
          //Tóm tắt bệnh án 
          const yeuCauTiepNhanId = idNoiTru;
          this.dialog.open(TomTatHoSoBenhAnPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: { yeuCauTiepNhanId }
          }).afterClosed().subscribe(() => { });
          break;
        case LoaiChungTu.GiayChungSinh:
          //giấy chứng sinh
          var showDialog = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
          });
          let hot: any;
          if (window.location.protocol == "http:") {
            hot = "http://" + window.location.host;
          } else {
            hot = "https://" + window.location.host;
          }
          this.apiService.post<any>("DieuTriNoiTru/InGiayChungSinhTatCa", { NoiTruHoSoKhacId: idNoiTru, Hosting: hot }).subscribe(
            resData => {
              if (resData != undefined && resData != null) {
                showDialog.close();
                this.dialog.open(GiayChungSinhPopupComponent, {
                  disableClose: false,
                  width: '1200px',
                  data: { Title: 'GIẤY CHỨNG SINH', Data: resData },
                }
                ).afterClosed().subscribe(() => {
                  showDialog.close();
                });
              }
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              showDialog.close();
            }
          );
          break;
      }
    }
  }

  changeLoaiChungTu(event: any) {
    this.timKiemNangCao();
  }

}
