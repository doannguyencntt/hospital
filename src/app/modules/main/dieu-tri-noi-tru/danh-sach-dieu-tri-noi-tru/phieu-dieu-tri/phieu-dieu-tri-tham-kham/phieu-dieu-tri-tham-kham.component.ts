import { ChangeDetectorRef, Component, Input, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewChild, ViewRef, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ChiTietDieuTriNoiTruViewModel, DienBienViewModel, KetQuaSinhHieuViewModel, NoiTruThamKhamChanDoanKemTheoViewModel, PhieuKhamThamKhamViewModel, ThoiGianDieuTriSoSinhRaVienViewModel, ThoiGianDieuTriSoSinhViewModel } from '../../../dieu-tri-noi-tru.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-phieu-dieu-tri-tham-kham',
  templateUrl: './phieu-dieu-tri-tham-kham.component.html',
  styleUrls: ['./phieu-dieu-tri-tham-kham.component.scss']
})
export class PhieuDieuTriThamKhamComponent implements OnInit {

  popupLoadingData: any;
  icAddCircle = icAddCircle;
  icDelete = icDelete;
  gridChanDoanKemTheoColumns: any[] = [];
  gridChiSoSinhTonColumns: any[] = [];

  gridDienBienColumns: any[] = [];
  gridThoiGianDieuTriColumns: any[] = [];

  gridChanDoanKemTheoDataSource: any = {
    data: [],
    total: 0
  }

  dataSourceICDKemTheo: any = {
    data: [],
    total: 0
  }

  dataSourceKetQuaSinhHieu: any = {
    data: [],
    total: 0
  }

  dataSourceDienBien: any = {
    data: [],
    total: 0
  }

  dataSourceThoiGianDieuTri: any = {
    data: [],
    total: 0
  }


  gridChiSoSinhTonDataSource: any;
  gridDienBienDataSource: any;

  @Input() validationErrors: any;
  @Output() thongTinPhieuKham = new EventEmitter<PhieuKhamThamKhamViewModel>();;

  // @ViewChild('gridChanDoanKemTheo', { static: true }) gridChanDoanKemTheo: GridComponent;
  @ViewChild('gridChanDoanKemTheo', { read: GridComponent, static: false }) gridChanDoanKemTheo: GridComponent;
  @ViewChild('gridKetQuaSinhHieu', { read: GridComponent, static: false }) gridKetQuaSinhHieu: GridComponent;
  @ViewChild('gridDienBien', { read: GridComponent, static: false }) gridDienBien: GridComponent;
  @ViewChild('gridThoiGianDieuTri', { read: GridComponent, static: false }) gridThoiGianDieuTri: GridComponent;

  @ViewChild('icdTemplate', { static: true }) icdTemplate: TemplateRef<any>;
  @ViewChild('chanDoanTemplate', { static: true }) chanDoanTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;


  // @ViewChild('gridChiSoSinhTon', { static: false }) gridChiSoSinhTon: GridComponent;


  phieuKhamThamKham: PhieuKhamThamKhamViewModel = new PhieuKhamThamKhamViewModel();

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  format: string = 'n1';
  decimal: number = 1;



  @ViewChild('machTemplate', { static: true }) machTemplate: TemplateRef<any>;
  @ViewChild('nhietDoTemplate', { static: true }) nhietDoTemplate: TemplateRef<any>;
  @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
  @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
  @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
  @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
  @ViewChild('bmiTemplate', { static: true }) bmiTemplate: TemplateRef<any>;
  @ViewChild('glassTemplate', { static: true }) glassTemplate: TemplateRef<any>;
  @ViewChild('spoTemplate', { static: true }) spoTemplate: TemplateRef<any>;
  @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;
  @ViewChild('actionChiSoSinhTonTemplate', { static: true }) actionChiSoSinhTonTemplate: TemplateRef<any>;
  @ViewChild('dienBienTemplate', { static: true }) dienBienTemplate: TemplateRef<any>;

  @ViewChild('tuGioTemplate', { static: true }) tuGioTemplate: TemplateRef<any>;
  @ViewChild('denGioTemplate', { static: true }) denGioTemplate: TemplateRef<any>;
  @ViewChild('ghiChuTemplate', { static: true }) ghiChuTemplate: TemplateRef<any>;

  @ViewChild('yLenhTemplate', { static: true }) yLenhTemplate: TemplateRef<any>;
  @ViewChild('thoiGianTemplate', { static: true }) thoiGianTemplate: TemplateRef<any>;
  @ViewChild('cheDoChamSocTemplate', { static: true }) cheDoChamSocTemplate: TemplateRef<any>;
  @ViewChild('cheDoAnTemplate', { static: true }) cheDoAnTemplate: TemplateRef<any>;

  @ViewChild('actionDienBienTemplate', { static: true }) actionDienBienTemplate: TemplateRef<any>;
  @ViewChild('actionThoiGianDieuTriTemplate', { static: true }) actionThoiGianDieuTriTemplate: TemplateRef<any>;

  @Input() phieuDieuTriId: number;
  @Input() id: number;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  constructor(private route: ActivatedRoute, private dialog: MatDialog
    , private baseService: BaseService, private cdRef: ChangeDetectorRef
    , private authService: AuthService, private renderer: Renderer2
    , private apiService: ApiService, private notificationService: NotificationService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("ngOnChanges = ", changes);
    if (changes.phieuDieuTriId != undefined && changes.phieuDieuTriId.currentValue != undefined) {
      this.phieuDieuTriId = changes.phieuDieuTriId.currentValue;
      this.getInformation(this.id, changes.phieuDieuTriId.currentValue);
    }
  }

  ngOnInit() {

    this.gridChanDoanKemTheoColumns = [
      { Field: "ICDId", Title: "ICD", Width: 150, Sortable: false, Template: this.icdTemplate },
      { Field: "GhiChu", Title: "Chẩn Đoán", MinWidth: 300, Sortable: false, Template: this.chanDoanTemplate },
      { Field: "Action", Title: "", Width: 50, Sortable: false, Template: this.actionTemplate },
    ];

    this.gridChiSoSinhTonColumns = [
      { Field: "Mach", Title: "Mạch(Nhịp/Phút)", Width: 100, Sortable: false, Template: this.machTemplate },
      { Field: "NhietDo", Title: "Nhiệt Độ", Width: 80, Sortable: false, Template: this.nhietDoTemplate },
      { Field: "HuyetAp", Title: "Huyết Áp", Width: 80, Sortable: false, Template: this.huyetApTemplate },
      { Field: "NhipTho", Title: "Nhịp Thở", Width: 100, Sortable: false, Template: this.nhipThoTemplate },
      { Field: "CanNang", Title: "Cân Nặng", Width: 60, Sortable: false, Template: this.canNangTemplate },
      { Field: "ChieuCao", Title: "Chiều Cao", Width: 80, Sortable: false, Template: this.chieuCaoTemplate },
      { Field: "BMI", Title: "BMI", Width: 80, Sortable: false, Template: this.bmiTemplate },
      { Field: "Glass", Title: "GLASS", Width: 80, Sortable: false, Template: this.glassTemplate },
      { Field: "SpO2", Title: "SPO2", Width: 80, Sortable: false, Template: this.spoTemplate },
      { Field: "NgayThucHien", Title: "Ngày Thực Hiện", Width: 100, Sortable: false, Template: this.ngayThucHienTemplate },
      { Field: "Action", Title: "", Width: 50, Sortable: false, Template: this.actionChiSoSinhTonTemplate },
    ];

    this.gridDienBienColumns = [
      { Field: "DienBien", Title: "Diễn biến (*)", Width: 300, Sortable: false, Template: this.dienBienTemplate },
      { Field: "YLenh", Title: "Y lệnh", Width: 300, Sortable: false, Template: this.yLenhTemplate },
      { Field: "ThoiGian", Title: "Thời gian (*)", Width: 150, Sortable: false, Template: this.thoiGianTemplate },
      { Field: "CheDoChamSoc", Title: "Chế độ chăm sóc", Width: 150, Sortable: false, Template: this.cheDoChamSocTemplate },
      { Field: "CheDoAn", Title: "Chế độ ăn", Width: 150, Sortable: false, Template: this.cheDoAnTemplate },
      { Field: "ActionDienBien", Title: "", Width: 50, Sortable: false, Template: this.actionDienBienTemplate }
    ];

    this.gridThoiGianDieuTriColumns = [
      { Field: "GioBatDau", Title: "Từ(*)", Width: 80, Sortable: false, Template: this.tuGioTemplate },
      { Field: "GioKetThuc", Title: "Đến(*)", Width: 80, Sortable: false, Template: this.denGioTemplate },
      { Field: "GhiChuDieuTri", Title: "Ghi chú", Width: 150, Sortable: false, Template: this.ghiChuTemplate },
      { Field: "ActionTGDT", Title: "", Width: 50, Sortable: false, Template: this.actionThoiGianDieuTriTemplate }
    ];

    // this.setDataDefaultGrid();
    if (this.phieuDieuTriId != undefined) {
      this.getInformation(this.id, this.phieuDieuTriId);
    }
  }


  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  getInformation(yctnId: number, phieuDieuTri: number) {
    //let dateModel = new Date(ngayDieuTri);
    let params = {
      yeuCauTiepNhanId: yctnId,
      phieuDieuTriId: phieuDieuTri
    };
    let dialog = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
    this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuKham", params).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          dialog.close();
          this.phieuKhamThamKham = resultData;
          this.thongTinPhieuKham.emit(resultData);
          //console.log("data: ", resultData);
          // if (resultData.DienBien != null && resultData.DienBien != "") {
          //   this.phieuKhamThamKham.DienBiens = JSON.parse(resultData.DienBien);
          // }
          // else {
          //   this.phieuKhamThamKham.DienBiens = [];
          // }
          this.setChanDoanKemTheoGrid();
          this.setChiSoSinhTonGrid();
          this.setDienBienGrid();
          this.setThoiGianDieuTriGrid();
        }
      },
      (err: ApiError) => {
        dialog.close();
      });
  }

  setDataDefaultGrid() {
    // this.gridChanDoanKemTheoDataSource = null;
    // this.gridChanDoanKemTheoDataSource = {
    //   data: this.phieuKhamThamKham.NoiTruThamKhamChanDoanKemTheos,
    //   total: this.phieuKhamThamKham.NoiTruThamKhamChanDoanKemTheos.length
    // };

    this.gridChiSoSinhTonDataSource = null;
    this.gridChiSoSinhTonDataSource = {
      data: this.phieuKhamThamKham.KetQuaSinhHieus,
      total: this.phieuKhamThamKham.KetQuaSinhHieus.length
    };

    this.gridDienBienDataSource = null;
    this.gridDienBienDataSource = {
      data: this.phieuKhamThamKham.DienBiens,
      total: this.phieuKhamThamKham.DienBiens.length
    };

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridChanDoanKemTheo != undefined) {
      this.gridChanDoanKemTheo.setDataSource();
    }
    if (this.gridKetQuaSinhHieu != undefined) {
      this.gridKetQuaSinhHieu.setDataSource();
    }
    if (this.gridDienBien != undefined) {
      this.gridDienBien.setDataSource();
    }
  }

  setChanDoanKemTheoGrid() {
    this.dataSourceICDKemTheo = [];
    this.dataSourceICDKemTheo = {
      data: this.phieuKhamThamKham.NoiTruThamKhamChanDoanKemTheos,
      total: this.phieuKhamThamKham.NoiTruThamKhamChanDoanKemTheos.length
    };

    //console.log("setDataDefaultGrid = ", this.gridChanDoanKemTheo, this.gridChiSoSinhTon);
    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridChanDoanKemTheo != undefined) {
      this.gridChanDoanKemTheo.setDataSource();
    }
    this.closePopupLoadingData();
  }

  setChiSoSinhTonGrid() {
    this.dataSourceKetQuaSinhHieu = [];
    this.dataSourceKetQuaSinhHieu = {
      data: this.phieuKhamThamKham.KetQuaSinhHieus,
      total: this.phieuKhamThamKham.KetQuaSinhHieus.length
    };

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridKetQuaSinhHieu != undefined) {
      this.gridKetQuaSinhHieu.setDataSource();
    }
  }

  setDienBienGrid() {
    // this.phieuKhamThamKham.DienBiens.forEach(item => {
    //   item.ThoiGian = new Date(item.ThoiGian);
    // });
    this.dataSourceDienBien = [];
    this.dataSourceDienBien = {
      data: this.phieuKhamThamKham.DienBiens,
      total: this.phieuKhamThamKham.DienBiens.length
    };

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridDienBien != undefined) {
      this.gridDienBien.setDataSource();
    }
  }
  themChanDoanKemTheo() {
    this.validationErrors = [];
    let noiTruChanDoanKemTheo = new NoiTruThamKhamChanDoanKemTheoViewModel()
    noiTruChanDoanKemTheo.NoiTruPhieuDieuId = this.phieuDieuTriId;
    this.dataSourceICDKemTheo.data.push(noiTruChanDoanKemTheo);
    this.phieuKhamThamKham.NoiTruThamKhamChanDoanKemTheos = this.dataSourceICDKemTheo.data;
  }

  themChiSoSinhTon() {
    let data = new KetQuaSinhHieuViewModel();
    data.ThoiDiemNhapVien = this.phieuKhamThamKham.ThoiDiemNhapVien;
    this.phieuKhamThamKham.KetQuaSinhHieus.push(data);
    this.setChiSoSinhTonGrid();
  }
  checkValidDienBien() {
    this.validationErrors = [];
    this.phieuKhamThamKham.DienBiens.forEach((item, index) => {
      if (item.DienBien == null || item.DienBien == "") {
        this.validationErrors.push({ Field: "DienBiens[" + index + "].DienBien", Message: "Diễn biến yêu cầu nhập" });
      }
      if (item.ThoiGian == null) {
        this.validationErrors.push({ Field: "DienBiens[" + index + "].ThoiGian", Message: "Thời gian yêu cầu nhập" });
      }
    });
    return this.validationErrors.length <= 0;
  }

  themDienBien() {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    
    let data = new DienBienViewModel();
    // this.phieuKhamThamKham.DienBiens.push(data);
    this.dataSourceDienBien.data.push(data);
    this.phieuKhamThamKham.DienBiens = this.dataSourceDienBien.data;
    this.setDienBienGrid();
  }

  xoaDienBien(dataItem: any) {
    var self = this;
    self.validationErrors = [];
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == 'Yes') {
        self.dataSourceDienBien.data.splice(self.dataSourceDienBien.data.findIndex((x: any) => x == dataItem), 1);
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        self.setDienBienGrid();
      }
    });
  }

  DeleteDienBienRowGripView(IdView) {
    var self = this;
    self.validationErrors = [];
    self.cdRef.detectChanges();
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == 'Yes') {
        self.phieuKhamThamKham.DienBiens = self.phieuKhamThamKham.DienBiens.filter(o => o.IdView != IdView)
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        self.setDienBienGrid();
      }
    });
  }

  setThoiGianDieuTriGrid() {
    this.dataSourceThoiGianDieuTri = [];
    this.dataSourceThoiGianDieuTri = {
      data: this.phieuKhamThamKham.ThoiGianDieuTriSoSinhViewModels,
      total: this.phieuKhamThamKham.ThoiGianDieuTriSoSinhViewModels.length
    };

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridThoiGianDieuTri != undefined) {
      this.gridThoiGianDieuTri.setDataSource();
    }
  }

  themThoiGianDieuTri() {  
    this.validationErrors = [];
    this.cdRef.detectChanges();

    let data = new ThoiGianDieuTriSoSinhViewModel();
    this.dataSourceThoiGianDieuTri.data.push(data);
    this.phieuKhamThamKham.ThoiGianDieuTriSoSinhViewModels = this.dataSourceThoiGianDieuTri.data;
    this.setThoiGianDieuTriGrid();
  }

  xoaThoiGianDieuTri(dataItem: any) {
    var self = this;    
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == 'Yes') {
        self.dataSourceThoiGianDieuTri.data.splice(self.dataSourceThoiGianDieuTri.data.findIndex((x: any) => x == dataItem), 1);
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        self.setDienBienGrid();
      }
    });
  }

  xoaChanDoanKemTheo(dataItem: any) {
    this.validationErrors = [];
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceICDKemTheo.data.splice(this.dataSourceICDKemTheo.data.findIndex((x: any) => x == dataItem), 1);
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        this.setChanDoanKemTheoGrid();
      }
    });
  }

  xoaChiSoSinhTon(dataItem: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceKetQuaSinhHieu.data.splice(this.dataSourceKetQuaSinhHieu.data.findIndex((x: any) => x == dataItem), 1);
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        this.setChiSoSinhTonGrid();
      }
    });
  }

  getSharedData() {
    this.phieuKhamThamKham.PhieuDieuTriId = this.phieuDieuTriId;
    if (this.phieuKhamThamKham.DienBiens != null && this.phieuKhamThamKham.DienBiens.length > 0) {
      this.phieuKhamThamKham.DienBiens.forEach((item, index) => {
        // item.IdView = index + 1;
        CommonService.replaceDateToStringBeforeStringify(item);
      });
      this.phieuKhamThamKham.DienBien = JSON.stringify(this.phieuKhamThamKham.DienBiens);
    }
    else {
      this.phieuKhamThamKham.DienBien = null;
    }
    return this.phieuKhamThamKham;
  }

  reloadGrid(data: PhieuKhamThamKhamViewModel) {
    const noiTruThamKhamChanDoanKemTheos = [];
    data.NoiTruThamKhamChanDoanKemTheos.forEach(val => noiTruThamKhamChanDoanKemTheos.push(Object.assign({}, val)));
    this.phieuKhamThamKham.NoiTruThamKhamChanDoanKemTheos = noiTruThamKhamChanDoanKemTheos;

    const ketQuaSinhHieus = [];
    data.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));
    this.phieuKhamThamKham.KetQuaSinhHieus = ketQuaSinhHieus;

    const dienBiens = [];
    data.DienBiens.forEach(val => dienBiens.push(Object.assign({}, val)));
    this.phieuKhamThamKham.DienBiens = dienBiens;

    this.setChiSoSinhTonGrid();
    this.setChanDoanKemTheoGrid();
    this.setDienBienGrid();
  }

  reloadPage() {
    this.ngOnInit();
  }

  onChangeChieuCao(data: any) {
    var chieuCao = data.ChieuCao / 100;

    //console.log("onChangeChieuCao = ", data, chieuCao);
    if (chieuCao == 0) {
      data.Bmi = null;
      return;
    }

    data.Bmi = data.CanNang / (chieuCao * chieuCao);
  }

  onChangeCanNang(data: any) {
    var chieuCao = data.ChieuCao / 100;

    if (chieuCao == 0) {
      data.Bmi = null;
      return;
    }

    data.Bmi = data.CanNang / (chieuCao * chieuCao);
  }

  onChangeNhipTho(input: any, dataItem) {
    if (input % 1 != 0) {
      dataItem.NhipTho = input.toFixed();

      if (typeof dataItem.NhipTho === "string") {
        dataItem.NhipTho = Number(dataItem.NhipTho);
      }
    }
  }

  onChangeNhipTim(data: any, input: any) {
    if (input % 1 != 0) {
      data.NhipTim = input.toFixed();

      if (typeof data.NhipTim === "string") {
        data.NhipTim = Number(data.NhipTim);
      }
    }
  }

  onChangeHuyetApTamThu(input: any, dataItem) {
    if (input % 1 != 0) {
      dataItem.HuyetApTamThu = input.toFixed();

      if (typeof dataItem.HuyetApTamThu === "string") {
        dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
      }
    }

    if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
      dataItem.HuyetAp = null;
    } else {
      dataItem.HuyetAp = dataItem.HuyetApTamThu + "/" + dataItem.HuyetApTamTruong;
    }
  }

  onChangeHuyetApTamTruong(input: any, dataItem) {
    if (input % 1 != 0) {
      dataItem.HuyetApTamTruong = input.toFixed();

      if (typeof dataItem.HuyetApTamTruong === "string") {
        dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
      }
    }

    if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
      dataItem.HuyetAp = null;
    } else {
      dataItem.HuyetAp = dataItem.HuyetApTamThu + "/" + dataItem.HuyetApTamTruong;
    }
  }

  InToDieuTriTheoNgay() {
    this.loadingPage();
    this.apiService.post<any>("DieuTriNoiTru/InPhieuThamKhamTheoNgay?yeuCauTiepNhanId=" + this.id + "&phieuDieuTriId=" + this.phieuDieuTriId).subscribe(resultData => {
      //var self = this;
      //console.log("onPrintPDF = ", resultData);
      
      resultData = resultData;
      const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
      WindowPrt.focus();
      WindowPrt.close();
      WindowPrt.document.write(resultData);
      WindowPrt.document.close();

      var typeSize = "A4";
      var typeLayout = "portrait";

      var contents = WindowPrt.document.documentElement.innerHTML;
      var frame1 = this.renderer.createElement('iframe');
      frame1.name = "frame1";
      frame1.style.position = "absolute";
      frame1.style.top = "-1000000px";
      document.body.appendChild(frame1);
      var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
      frameDoc.document.open();
      frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
      frameDoc.document.write('</head><body>');
      frameDoc.document.write(contents);
      frameDoc.document.write('</body></html>');
      frameDoc.document.close();
      setTimeout(function () {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
        document.body.removeChild(frame1);
      }, 500);
      this.closePopupLoadingData();
    });

  }

  InTatCaToDieuTri() {
    this.loadingPage();
    this.apiService.post<any>("DieuTriNoiTru/InPhieuThamKhamTatCaNgay?yeuCauTiepNhanId=" + this.id).subscribe(resultData => {
      //var self = this;
      //console.log("onPrintPDF = ", resultData);

      resultData = resultData;
      const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
      WindowPrt.focus();
      WindowPrt.close();
      WindowPrt.document.write(resultData);
      WindowPrt.document.close();

      var typeSize = "A4";
      var typeLayout = "portrait";

      var contents = WindowPrt.document.documentElement.innerHTML;
      var frame1 = this.renderer.createElement('iframe');
      frame1.name = "frame1";
      frame1.style.position = "absolute";
      frame1.style.top = "-1000000px";
      document.body.appendChild(frame1);
      var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
      frameDoc.document.open();
      frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
      frameDoc.document.write('</head><body>');
      frameDoc.document.write(contents);
      frameDoc.document.write('</body></html>');
      frameDoc.document.close();
      setTimeout(function () {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
        document.body.removeChild(frame1);
      }, 500);
      this.closePopupLoadingData();
    });
  }

  ICDChinhChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.phieuKhamThamKham.ChanDoanChinhGhiChu = dataItem.Ten;
    }
    else {
      this.phieuKhamThamKham.ChanDoanChinhGhiChu = null;
    }
  }

  onChangeSetTenICDPhu(dataItem: any, rowIndex: number) {
    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
      this.dataSourceICDKemTheo.data[rowIndex].TenICD = dataItem.DisplayName;
      this.dataSourceICDKemTheo.data[rowIndex].GhiChu = dataItem.Ten;
    }
    else {
      this.dataSourceICDKemTheo.data[rowIndex].TenICD = null;
      this.dataSourceICDKemTheo.data[rowIndex].GhiChu = null;
    }
  }

  congThucThoiGianDieuTriSoSinh(dataItem: any) {
    var thoiGianDieuTriSoSinh = new ThoiGianDieuTriSoSinhRaVienViewModel();
    thoiGianDieuTriSoSinh.ThoiGianDieuTriSoSinhViewModels = this.phieuKhamThamKham.ThoiGianDieuTriSoSinhViewModels.filter(c => c.GioBatDau != null && c.GioKetThuc != null);
    this.apiService.post<any>("DieuTriNoiTru/ChangeThoiGianDieuTriSoSinh", thoiGianDieuTriSoSinh)
      .subscribe((soNgayDieuTriBenhAnSoSinh) => {
        this.phieuKhamThamKham.SoNgayDieuTriBenhAnSoSinh = soNgayDieuTriBenhAnSoSinh > 0 ? soNgayDieuTriBenhAnSoSinh : 0;
      });
  }
}
