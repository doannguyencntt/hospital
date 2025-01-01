import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef, TemplateRef, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage, TaiKhoanNguoiDungMessage } from 'src/app/shared/configdata/system-message';
import { KetQuaKhamSucKhoe, KetQuaSinhHieu } from '../kham-doan-ket-luan.model';
import { KetQuaKhamSucKhoePopupComponent } from '../../kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component';
import { PopupKetQuaKskKetLuanComponent } from '../popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component';
import { PopupKetQuaKskSharedComponent } from '../popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPrint from "@iconify/icons-ic/twotone-print";
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFullscreen from "@iconify/icons-ic/twotone-fullscreen";
import icFullscreenExit from "@iconify/icons-ic/twotone-fullscreen-exit";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
declare var jQuery: any;
@Component({
  selector: 'app-popup-ket-qua-ksk-edit',
  templateUrl: './popup-ket-qua-ksk-edit.component.html',
  styleUrls: ['./popup-ket-qua-ksk-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopupKetQuaKskEditComponent implements OnInit, AfterContentInit {
  documentType: DocumentType;
  icClose = icClose;
  icAddCircle = icAddCircle;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;
  icDelete = icDelete;
  icFullscreen = icFullscreen;
  icFullscreenExit = icFullscreenExit;
  isFullscreen: boolean = false;
  gridColumns: any[] = [];
  gridPhanLoaiCacBenhTatVaDeNghiColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  gridDataSourcePhanLoaiCacBenhTatVaDeNghi: any = {
    data: [],
    total: 0
  };
  gridSinhHieuColumns: any[] = [];
  dataSourceSinhHieuDisplay: any = {
    data: [],
    total: 0
  };
  current: Date = new Date();
  dataSourceSinhHieu: any = {
    data: [],
    total: 0
  };
  format = 'n1';
  yeuCauTiepNhanId: number = 0;
  showGrid: boolean = true;
  validationErrors: any;
  showInLuuChuyenDanhSach:boolean = false;
  @ViewChild('gridChinhSua', { read: GridComponent, static: false }) gridChinhSua: GridComponent;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', { static: true }) editTemplate: TemplateRef<any>;
  @ViewChild('editDefaultTemplate', { static: true }) editDefaultTemplate: TemplateRef<any>;
  // sinh hieu
  @ViewChild('actionSinhHieuTemplate', { static: true }) actionSinhHieuTemplate: TemplateRef<any>;
  @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
  @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
  @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
  @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
  @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
  @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
  @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
  @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
  @ViewChild('spO2Template', { static: true }) spO2Template: TemplateRef<any>;
  @ViewChild('gridSinhHieu', { static: false }) gridChild: GridComponent;
  @ViewChild('gridChinhSuaPhanLoaiCacBenhTatVaDeNghi', { read: GridComponent, static: false }) gridChinhSuaPhanLoaiCacBenhTatVaDeNghi: GridComponent;
  @ViewChild('editTenTemplate', { static: true }) editTenTemplate: TemplateRef<any>;
  @ViewChild('editCapNhatTemplate', { static: true }) editCapNhatTemplate: TemplateRef<any>;
  @ViewChild('KetQuaDefaultTemplate', { static: true }) KetQuaDefaultTemplate: TemplateRef<any>;

  @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PopupKetQuaKskEditComponent>,
    private route: ActivatedRoute, private router: Router,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private location: Location) { }
  groups: GroupDescriptor[] = [{ field: 'TenNhom' }];
  ngOnInit() {
    this.documentType = DocumentType.KhamDoanKetLuanKhamSucKhoeDoan;
    if (this.data.YeuCauTiepNhanId != undefined) {
      this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    }
    else {
      this.route.queryParams.subscribe(param => {
        this.yeuCauTiepNhanId = param['YeuCauTiepNhanId'];
      });
    }
   
    this.gridDataSource.data = this.data.Model;
    this.getGridSinhHieu();
    this.gridColumns = [
      { Field: "TenNhom", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 100, Template: this.tenDichVuTemplate },
      { Field: "KetQuaDichVuDefault", Title: "Kết quả dịch vụ", Width: 100, ShowTooltip: true, Template: this.editDefaultTemplate },
      { Field: "KetQuaDichVu", Title: "Cập nhật Kết quả dịch vụ ", MinWidth: 100, Template: this.editTemplate },
      // { Field: "Action", Title: "", Width: 30 ,Template:this.actionTemplate}
    ];
    this.gridSinhHieuColumns = [
      { Field: 'NhipTim', Title: 'Mạch (nhịp/phút)', Width: 137, Template: this.nhipTimTemplate },
      { Field: 'ThanNhiet', Title: 'Nhiệt độ (°C)', Width: 100, Template: this.thanNhietTemplate },
      { Field: 'HuyetAp', Title: 'Huyết áp (mmHg)', Width: 135, Template: this.huyetApTemplate },
      { Field: 'NhipTho', Title: 'Nhịp thở (lần/phút)', Width: 150, Template: this.nhipThoTemplate },
      { Field: 'CanNang', Title: 'Cân nặng (kg)', Width: 113, Template: this.canNangTemplate },
      { Field: 'ChieuCao', Title: 'Chiều cao (cm)', Width: 117, Template: this.chieuCaoTemplate },
      { Field: 'BMI', Title: 'BMI (kg/m²)', Width: 91, Template: this.BMITemplate },
      { Field: 'Glassgow', Title: 'Glassgow', Width: 120, Template: this.glassgowTemplate },
      { Field: 'SpO2', Title: 'SpO2 (%)', Width: 120, Template: this.spO2Template },
      { Field: 'NgayThucHien', Title: 'Ngày thực hiện', Width: 145 },
      { Field: 'Action', Title: '', Width: 70, Template: this.actionSinhHieuTemplate }
    ];
    this.gridPhanLoaiCacBenhTatVaDeNghiColumns = [
      { Field: "", Title: "", Width: 200, Sortable: true, Hidden: true },
      { Field: "Ten", Title: "Tên", Width: 120, Template: this.editTenTemplate },
      { Field: "KetQuaDefault", Title: "Kết quả ", Width: 100, ShowTooltip: true, Template: this.KetQuaDefaultTemplate },
      { Field: "KetQua", Title: "Cập nhật", MinWidth: 100, Template: this.editCapNhatTemplate },
      // { Field: "Action", Title: "", Width: 30 ,Template:this.actionTemplate}
    ];
    if (this.data != null) {
      if (this.data.hopDongKhamSucKhoeId != null) {
        this.gridPhanLoaiCacBenhTatVaDeNghi(this.data.hopDongKhamSucKhoeId);
        //this.runTest(this.data.hopDongKhamSucKhoeId);
      }
    }
    if(this.data.ShowIn != null){
       this.showInLuuChuyenDanhSach = this.data.ShowIn;
    }
  }
  ngAfterContentInit() {
    this.gridPhanLoaiCacBenhTatVaDeNghi(this.data.hopDongKhamSucKhoeId);
    this.fullscreen();
  }
  close(result: any) {
    this.dialogRef.close(result);
  }
  getGridSinhHieu() {
    this.apiService.get<any>("KhamDoan/GetDataListForChiSoSinhTon?id=" + this.yeuCauTiepNhanId).subscribe((resultData) => {
      if (resultData != undefined && resultData != null && resultData != "") {
        this.dataSourceSinhHieu = {
          data: [...resultData.Data],
          total: resultData.Data.length
        };
        this.dataSourceSinhHieuDisplay = {
          data: [...resultData.Data],
          total: resultData.Data.length
        };
      }
    });
  }
  // BindValue(dataItem){
  //   if (dataItem != undefined && dataItem != null) {
  //     let dialogRef = this.dialog.open(PopupKetQuaKskSharedComponent, {
  //       disableClose: false,
  //       width: '800px',
  //       height: 'auto',
  //       data: dataItem,
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       if(result != undefined && result != null && result !="")
  //       {
  //         if(result =='No')
  //         {

  //         }else{
  //           this.gridDataSource.data.forEach(element => {
  //             if(element.Id == result.Id && element.Type == result.Type)
  //             {
  //               element.KetQuaDichVu = result.value;
  //               element.JsonStringKetQua = result.JsonValueEdit;
  //               this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["cập nhật"]));
  //             }
  //           });
  //         }

  //       }
  //     });
  //   }
  // }
  Luu(isSave: number) {
    let ketQuaKhamSucKhoe = new KetQuaKhamSucKhoe();
    ketQuaKhamSucKhoe.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    ketQuaKhamSucKhoe.HopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
    ketQuaKhamSucKhoe.JsonKetQuaKSK = JSON.stringify(this.gridDataSource.data);
    ketQuaKhamSucKhoe.JsonKetLuan = JSON.stringify(this.gridDataSourcePhanLoaiCacBenhTatVaDeNghi.data);
    var loading = this.showLoading("Đang lưu...");
    this.apiService.post<any>("KhamDoan/SaveBanInKhamDoanTiepNhan", ketQuaKhamSucKhoe).subscribe((resultData) => {
      if (resultData != undefined && resultData != null && resultData != "") {
        this.closeLoading(loading);
        const sendingParam = {
          data: [...this.dataSourceSinhHieu.data],
          Id: this.yeuCauTiepNhanId
        };
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
          this.apiService.post('KhamDoan/UpdateChiSoSinhTonAsync',
            sendingParam)
            // tslint:disable-next-line: deprecation
            .subscribe(
              _ => {
                // this.notificationService.
                //   showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ['Cập nhật chỉ số sinh tồn']));

                //this.quayLai();
                this.dataSourceSinhHieu = {
                  data: [],
                  total: 0
                };

                this.dataSourceSinhHieuDisplay = {
                  data: [],
                  total: 0
                };
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                if (isSave == 2) {
                  // this.dialog.open(PopupKetQuaKskKetLuanComponent, {
                  //   disableClose: false,
                  //   width: '1000px',
                  //   data: {Id:this.data.hopDongKhamSucKhoeId,ShowIn:true}
                  // });
                  loading = this.showLoading("Đang in...");

                  var obj = {

                    "Id": this.data.hopDongKhamSucKhoeId,

                    "HostingName": window.location.protocol + "//" + window.location.host

                  };

                  this.apiService.postExportPdf<any>("KhamDoan/XuLyInKetQuaKhamSucKhoeKetLuanAsync", obj).subscribe(res => {
                    if(res != undefined && res != null)
                    {
                      let newBlob = new Blob([res], { type: "application/pdf" });

                      const blobUrl = URL.createObjectURL(newBlob);
  
                      const iframe = document.createElement('iframe');
  
                      iframe.style.display = 'none';
  
                      iframe.src = blobUrl;
  
                      document.body.appendChild(iframe);
  
                      iframe.contentWindow.print();
  
                      this.closeLoading(loading);
  
                    }
                   
                  }, err => {

                    if (err.Message != "Validation Failed") {

                      this.notificationService.showError(err.Message);

                    }

                    this.closeLoading(loading);

                  });
                }
                if(isSave != 3) // hoặc kiểm tra yctn ! = undefine
                {
                  this.apiService.get<any>
                  (`KhamDoan/GetDataListForChiSoSinhTon?id=` + this.yeuCauTiepNhanId).subscribe((resultData) => {
                    if (resultData !== null && resultData !== undefined) {
                      this.dataSourceSinhHieu = {
                        data: [...resultData.Data],
                        total: resultData.Data.length
                      };

                      this.dataSourceSinhHieuDisplay = {
                        data: [...resultData.Data],
                        total: resultData.Data.length
                      };
                    }
                  });
                }
                
              },
              (err: any) => {
                this.notificationService.showError(err.Message);
              });
        }
        if(isSave == 3){
          this.location.back();
        }
        //

      }
    });







  }
  themChiSoSinhTon() {
    if (this.dataSourceSinhHieuDisplay.data.findIndex(x => x.Id === 0) === -1) {

      const newItem = new KetQuaSinhHieu();
      newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
      this.dataSourceSinhHieuDisplay.data.push(newItem);
      this.dataSourceSinhHieu.data.push(newItem);
    }
  }
  onChangeNhipTim(data: any, input: any) {
    if (input % 1 !== 0) {
      data.NhipTim = input.toFixed();

      if (typeof data.NhipTim === 'string') {
        data.NhipTim = Number(data.NhipTim);
      }
    }
  }

  onChangeNhipTho(input: any, dataItem) {
    if (input % 1 !== 0) {
      dataItem.NhipTho = input.toFixed();

      if (typeof dataItem.NhipTho === 'string') {
        dataItem.NhipTho = Number(dataItem.NhipTho);
      }
    }
  }

  onChangeHuyetApTamThu(input: any, dataItem) {
    if (input % 1 !== 0) {
      dataItem.HuyetApTamThu = input.toFixed();

      if (typeof dataItem.HuyetApTamThu === 'string') {
        dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
      }
    }

    if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
      dataItem.HuyetAp = null;
    } else {
      dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
    }
  }

  onChangeHuyetApTamTruong(input: any, dataItem) {
    if (input % 1 !== 0) {
      dataItem.HuyetApTamTruong = input.toFixed();

      if (typeof dataItem.HuyetApTamTruong === 'string') {
        dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
      }
    }

    if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
      dataItem.HuyetAp = null;
    } else {
      dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
    }
  }

  onChangeCanNang(data: any) {
    const chieuCao = data.ChieuCao / 100;

    if (chieuCao === 0) {
      data.BMI = null;
      return;
    }

    data.BMI = data.CanNang / (chieuCao * chieuCao);
  }

  onChangeChieuCao(data: any) {
    const chieuCao = data.ChieuCao / 100;

    if (chieuCao === 0) {
      data.BMI = null;
      return;
    }

    data.BMI = data.CanNang / (chieuCao * chieuCao);
  }

  suaChiSoSinhHieu(dataItem: any) {
    if (dataItem) {
      dataItem.IsUpdate = true;
      this.dataSourceSinhHieu.data.filter(x => x === dataItem)[0].IsUpdate = true;
      dataItem.NgayThucHien = CommonService.formatDateTimeSACH(new Date(), 'dd/mm/yyyy').toString();
    }
  }

  xoaChiSoSinhHieu(item: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
    }).afterClosed()
      // tslint:disable-next-line: deprecation
      .subscribe(result => {
        if (result === 'Yes' && this.dataSourceSinhHieuDisplay.data.some(x => x === item)) {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
          this.dataSourceSinhHieu.data.filter(x => x === item)[0].IsDelete = true;
          this.dataSourceSinhHieuDisplay.data.splice(this.dataSourceSinhHieuDisplay.data.findIndex(x => x === item), 1);
        }
      });
  }
  gridPhanLoaiCacBenhTatVaDeNghi(hopDongKhamSucKhoeId: number) {
    this.apiService.post<any>("KhamDoan/GetGridPhanLoaiVaCacBenhtatDenghi?hopDongKhamSucKhoeId=" + hopDongKhamSucKhoeId).subscribe(
      (resData) => {
        if (resData != undefined && resData != null) {
          if (resData.length == 0) {
            this.showGrid = false;
          }
          this.gridDataSourcePhanLoaiCacBenhTatVaDeNghi = {
            data: [...resData],
            total: [...resData].length
          };
        }
      },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  changePhanLoai(dataItem: any, value) {
    dataItem.PhanLoaiId = value;
    dataItem.PhanLoaiIdCapNhatId = dataItem.PhanLoaiId;
    if (dataItem.DaCoketLuan != true && value != undefined && value != null) {
      this.apiService.post<any>("KhamDoan/GetPhanLoaiSucKhoeKetLuan?id=" + dataItem.PhanLoaiIdCapNhatId).subscribe(
        (resData) => {
          if (resData != undefined && resData != null) {
            dataItem.KetQua = resData[0].DisplayName;
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }

  }
  changePhanLoaiCapNhat(dataItem: any, value) {
    dataItem.PhanLoaiIdCapNhat = value;
    if (dataItem.DaCoketLuan != true && value != undefined && value != null) {
      this.apiService.post<any>("KhamDoan/GetPhanLoaiSucKhoeKetLuan?id=" + value).subscribe(
        (resData) => {
          if (resData != undefined && resData != null) {
            dataItem.KetQua = resData[0].DisplayName;
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }

  }
  changeCacBenhTatVaDeNghi(dataItem: any, value) {
    if (dataItem.DaCoketLuan != true && value != undefined && value != null && value != "") {
      dataItem.KetQuaDefault = value;
      dataItem.KetQua = value;
    }
  }
  showLoading(title:string) {

    return this.dialog.open(LoadingComponent, {

      disableClose: true,

      width: '200px',

      height: '90px',

      data: { Title: title}

    });
  }
  closeLoading(loading: any) {
    loading.close();
  }
  fullscreen() {
    if (this.isFullscreen) {
      jQuery(".content-edit").css({ "height": jQuery(window).height() - 727 });
    }
    else {
      jQuery(".content-edit").css({ "height": jQuery(window).height() - 440 });
    }

    CommonService.fullScreenDialog(this.isFullscreen, 650, 1000, 137);
    this.isFullscreen = !this.isFullscreen;
  }
  CopyKetQuaHienThi(){
    var loading = this.showLoading("Đang copy...");
   
    if(this.gridDataSource.data != null){
      this.gridDataSource.data.forEach(element => {
         if(element.KetQuaDichVu == null || element.KetQuaDichVu == "")
         {
          element.KetQuaDichVu = element.KetQuaDichVuDefault;
         }
      });
    }
    this.closeLoading(loading);
  }
  setDataGridView() {
    this.gridChinhSua.gridDataSource = this.gridDataSource.data;

    if (this.gridChinhSua !== undefined)
      this.gridChinhSua.setDataSource();
  }
  // runTest(hopDongKhamSucKhoeId:any){
  //   let self = this;
  //   if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
  //     var loading = this.showLoading("Đang lưu...");
  //     self.apiService.get<number>("KhamDoan/UpdateAllKetQuaKSKDoanCuaHopDongNhanVienBatDauKham?id=" + hopDongKhamSucKhoeId).subscribe(
  //       resultData => {
  //         if (resultData != undefined && resultData != null) {
            
  //         }
  //         this.closeLoading(loading);

  //       },
  //       (err: ApiError) => {
  //         self.validationErrors = err.ValidationErrors;
  //         if (err.Message != "Validation Failed") {
  //           self.notificationService.showError(err.Message);
  //         }
  //         this.closeLoading(loading);;
  //       });
  //   }
  //   else {
  //     self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
  //   }
  // }
}
