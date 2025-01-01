import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewRef, EventEmitter, Output, SimpleChange } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from 'src/@vex/services/url.service';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { from } from "rxjs";
import { delay, switchMap, map, tap } from "rxjs/operators";
import { ExportQueryInfoQueryInfo } from 'src/app/modules/main/marketing/marketing.model';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { BienBanHoiChanPhauThuatThuocCoDau, NoiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau, ThuocCoDau } from './bien-ban-hoi-chan-sd-thuoc-co-dau.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import { ShowPopupEditThuocCoDauComponent } from './show-popup-edit-thuoc-co-dau/show-popup-edit-thuoc-co-dau.component';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
// import { BienBanHoiChanSdThuocCoDauPopupComponent } from './bien-ban-hoi-chan-sd-thuoc-co-dau-popup/bien-ban-hoi-chan-sd-thuoc-co-dau-popup.component';
declare var $: any;

@Component({
  selector: 'app-bien-ban-hoi-chan-sd-thuoc-co-dau',
  templateUrl: './bien-ban-hoi-chan-sd-thuoc-co-dau.component.html',
  styleUrls: ['./bien-ban-hoi-chan-sd-thuoc-co-dau.component.scss']
})
export class BienBanHoiChanSdThuocCoDauComponent implements OnInit {
  bienBanHoiChanPhauThuatThuocCoDau = {} as BienBanHoiChanPhauThuatThuocCoDau;
  newSimpleChange = {} as SimpleChange;
  noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau: NoiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau;
  thuocCoDau = new ThuocCoDau;
  popupLoadingData: any = null;
  validationErrors: any;
  documentType: DocumentType;
  getNhanVienId: any;
  queryNoiThucHien: LookupQueryInfo = new LookupQueryInfo();
  data: any;
  icDelete = icDelete;
  icClear = icClear;
  icEdit = icEdit;
  gridDataSourceSoKet: any = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  lyDo: string = null;
  showGrid: boolean = false;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  checkDieuKienHienGrid: boolean = false;
  gridColumns: any[] = [];
  tenTaiKhoanDangNhap: string = "";
  expanded: boolean = false;
  thuocCoDauSelect: any[] = [];
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('actionToaThuocTemplate', { static: true }) actionToaThuocTemplate: TemplateRef<any>;
  @Input() yeuCauTiepNhanId: number = 0;
  @ViewChild('GridSoKet', { read: GridComponent, static: false }) gridChild: GridComponent;


  @ViewChild('lyDoTemplate', { static: true }) lyDoTemplate: TemplateRef<any>;
  @ViewChild('tenThuocTemplate', { static: true }) tenThuocTemplate: TemplateRef<any>;
  @ViewChild('noiThucHien', { static: true }) multiselect: MultiselectComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: MultiselectComponent;

  thuocDaDieuTri: string[] = [];
  showEdit: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }
  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau = new NoiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau();
    this.bienBanHoiChanPhauThuatThuocCoDau = new BienBanHoiChanPhauThuatThuocCoDau();
    this.getNhanVienId = this.authService.getAccessUser();
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.gridColumns = [
      { Field: "Action", Title: "", Width: 50, Template: this.actionToaThuocTemplate },
      { Field: "STT", Title: "STT", Width: 50, Template: this.sttTemplate },
      { Field: "LyDo", Title: "Lý do", Width: 100, Template: this.lyDoTemplate },
      { Field: "TenThuoc", Title: "Tên thuốc", Width: 100, Template: this.tenThuocTemplate },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 100 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
    ];
    this.getById(id);
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  change(event: any) {
    let lengthArr = event.length;
    if (event == undefined || event == null || event.length == 0) {
      this.bienBanHoiChanPhauThuatThuocCoDau.ThuocDaDieuTris = [];
    }
    else {
      let kiemTraNhungSoTrungLonHon1 = 0;
      this.bienBanHoiChanPhauThuatThuocCoDau.ThuocDaDieuTris.forEach(element => {
        if (element == (event[lengthArr - 1])) {
          kiemTraNhungSoTrungLonHon1++;
        }
      });
      if (kiemTraNhungSoTrungLonHon1 > 1) {
        let thuocs: string[] = [];
        event.forEach(element => {
          if (!thuocs.some(item => item == (element))) {
            thuocs.push(element);
          }
        });
        let thuocss: string[] = [];
        thuocs.forEach(element => {
          if (element != (event[lengthArr - 1])) {
            thuocss.push(element)
          }
        });
        this.bienBanHoiChanPhauThuatThuocCoDau.ThuocDaDieuTris = thuocss;
      }
      else {
        // this.bienBanHoiChanPhauThuatThuocCoDau.ThuocDaDieuTris.push((event[lengthArr-1]+""));
      }

    }
  }
  isItemSelected(dataItem: any, number: any): boolean {
    if (number == 1) {
      return this.bienBanHoiChanPhauThuatThuocCoDau.ThuocDaDieuTris.some(item => item == dataItem.KeyId);
    }
    if (number == 2) {
      return this.bienBanHoiChanPhauThuatThuocCoDau.ThuocCoDaus.some(item => item == dataItem.KeyId);
    }
  }
  clear() {
    this.thuocCoDau = new ThuocCoDau();
  }
  validator(item: string[]) {
    this.validationErrors = [];
    const array = [];
    if (item.length == 0) {
      array.push({ Field: 'ThuocCoDaus', Message: 'Yêu cầu chọn Tên thuốc' });
    }
    return array;
  }
  changeLyDo(event){
      this.lyDo =event;
  }
  add() {
    this.ref.detectChanges();
    if (this.bienBanHoiChanPhauThuatThuocCoDau.ThuocCoDaus.length > 0) {
      this.bienBanHoiChanPhauThuatThuocCoDau.ThuocCoDaus.forEach(element => {
        this.apiService.post<any>("DieuTriNoiTru/GetDuocPhamCoDauVo?duocPhamId=" + element).subscribe(
          (result) => {
            this.thuocCoDau = new ThuocCoDau();
            this.thuocCoDau.LyDo = this.lyDo;
            this.thuocCoDau.TenThuoc = result.Ten;
            this.thuocCoDau.HamLuong = result.HamLuong;
            this.thuocCoDau.DuongDung = result.DuongDung;
            this.thuocCoDau.Id = element;
            this.bienBanHoiChanPhauThuatThuocCoDau.ListThemThuocCoDau.push(this.thuocCoDau);
          });
      });
    }
    else {
      let errorMess = this.validator(this.bienBanHoiChanPhauThuatThuocCoDau.ThuocCoDaus);
      if (errorMess.length > 0) {
        this.validationErrors = [...errorMess];
      }
    }
    this.gridDataSource = {
      data: this.bienBanHoiChanPhauThuatThuocCoDau.ListThemThuocCoDau,
      total: this.bienBanHoiChanPhauThuatThuocCoDau.ListThemThuocCoDau.length
    };
    this.bienBanHoiChanPhauThuatThuocCoDau.ThuocCoDaus = [];
    this.bienBanHoiChanPhauThuatThuocCoDau.LyDo = null;
  }
  suaKeToa(item) {
    this.dialog
      .open(ShowPopupEditThuocCoDauComponent, {
        disableClose: false,
        width: "1000px",
        data: item,
      }).afterClosed().subscribe(datas => {
        if (datas != undefined && datas != null && datas.length > 0) {
          item = datas;
        }
      });
  }
  xoaKeToa(item) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.gridDataSource.data.splice(this.bienBanHoiChanPhauThuatThuocCoDau.ListThemThuocCoDau.findIndex(x => x == item), 1);
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
      }
    });
  }
  getById(id: any) {
    this.apiService.get<any>("DieuTriNoiTru/GetBienBanHcBenhNhanSuDungThuocCoDau?yeuCauTiepNhanId=" + id).subscribe(
      (result) => {
        if (result != null) {
          this.bienBanHoiChanPhauThuatThuocCoDau = result;

          // gán list number mutil select => model ngOnchange 
          this.bienBanHoiChanPhauThuatThuocCoDau.ThuocDaDieuTris = [...result.ThuocDaDieuTris];



          this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id = result.Id;

          this.bienBanHoiChanPhauThuatThuocCoDau.ListThemThuocCoDau = result.ListThemThuocCoDau;


          this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id);
          this.gridDataSource = {
            data: this.bienBanHoiChanPhauThuatThuocCoDau.ListThemThuocCoDau,
            total: this.bienBanHoiChanPhauThuatThuocCoDau.ListThemThuocCoDau.length
          }
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  Huy() {
    this.getById(this.yeuCauTiepNhanId);
  }
  In() {
  
    let dataIn = {
      HostingName: window.location.protocol + "//" + window.location.host,
      IdNoiTruHoSo: this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 40,
      Header: null
    }
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có in biên bản hội chẩn phẩu thuật có dấu này không?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        this.loadingPage();
        
        this.validationErrors = [];
        const thongTinHoSo = JSON.stringify(this.bienBanHoiChanPhauThuatThuocCoDau);
        this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.LoaiHoSoDieuTriNoiTru = 40;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.HoiChanLuc = this.bienBanHoiChanPhauThuatThuocCoDau.HoiChanLuc;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.LanhDao = this.bienBanHoiChanPhauThuatThuocCoDau.LanhDao;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.BsDieuTri = this.bienBanHoiChanPhauThuatThuocCoDau.BsDieuTri;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.ThongTinHoSo = thongTinHoSo;

   this.apiService.post<any>("DieuTriNoiTru/LuuBienBanHoiChanSuDungThuocCoDau", this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau).subscribe(
              (result) => {
                if (result.Id != undefined) {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id = result.Id;
                  this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id);
                }
                else {
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                  this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id = result;
                  this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id);
                }
                this.Huy();
                let dataIns = {
                  HostingName: window.location.protocol + "//" + window.location.host,
                  IdNoiTruHoSo:   this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id,
                  YeuCauTiepNhanId: this.yeuCauTiepNhanId,
                  LoaiHoSoDieuTriNoiTru: 40,
                  Header:null
                }
              this.apiService.post<any>("DieuTriNoiTru/PhieuInBienBanHoiChanPhauThuatCoDau", dataIns).subscribe(
                  (result) => {
                    this.dialog.open(null, {
                      disableClose: true,
                      width: '1000px',
                      data: { Model: result }
                    }).afterClosed().subscribe(() => {
                    });
                  },
                  (err: ApiError) => {
                    this.closePopupLoadingData();
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                  });
              this.closePopupLoadingData();
              },
              (err: ApiError) => {
                this.closePopupLoadingData();
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
              });
      }
    },
      (err: ApiError) => {
        this.closePopupLoadingData();
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  Luu() {
    this.validationErrors = [];
    const thongTinHoSo = JSON.stringify(this.bienBanHoiChanPhauThuatThuocCoDau);
    this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.LoaiHoSoDieuTriNoiTru = 40;
    this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.HoiChanLuc = this.bienBanHoiChanPhauThuatThuocCoDau.HoiChanLuc;
    this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.LanhDao = this.bienBanHoiChanPhauThuatThuocCoDau.LanhDao;
    this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.BsDieuTri = this.bienBanHoiChanPhauThuatThuocCoDau.BsDieuTri;
    this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.ThongTinHoSo = thongTinHoSo;

    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu lại biên bản hội chẩn sử dụng thuốc có dấu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        this.loadingPage();
        this.apiService.post<any>("DieuTriNoiTru/LuuBienBanHoiChanSuDungThuocCoDau", this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau).subscribe(
          (result) => {
            if (result.Id != undefined) {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id = result.Id;
              this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id);
            }
            else {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
              this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id = result;
              this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau.Id);
            }

            this.Huy();
            this.closePopupLoadingData();
          },
          (err: ApiError) => {
            this.closePopupLoadingData();
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
    },
      (err: ApiError) => {
        this.closePopupLoadingData();
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
}
