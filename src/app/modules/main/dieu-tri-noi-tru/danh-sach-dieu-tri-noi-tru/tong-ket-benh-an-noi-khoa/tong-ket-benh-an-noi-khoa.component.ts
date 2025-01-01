import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, DieuTriNoiTruTongKetBenhAnViewModel } from '../../dieu-tri-noi-tru.model';

@Component({
  selector: 'app-tong-ket-benh-an-noi-khoa',
  templateUrl: './tong-ket-benh-an-noi-khoa.component.html',
  styleUrls: ['./tong-ket-benh-an-noi-khoa.component.scss']
})
export class TongKetBenhAnNoiKhoaComponent implements OnInit {

  gridColumns: any[] = [];

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  tongKetBenhAn: DieuTriNoiTruTongKetBenhAnViewModel = new DieuTriNoiTruTongKetBenhAnViewModel();

  id: number;

  gridDataTongKetBenhAn: any;

  constXquang: string = "X QUANG";
  constScanner: string = "CT SCANNER";
  constSieuAm: string = "SIÊU ÂM";
  constXetNghiem: string = "XÉT NGHIỆM";
  constKhac: string = "KHÁC";

  tongCong: number = 0;

  @ViewChild('soToTemplate', { static: true }) soToTemplate: TemplateRef<any>;
  @ViewChild('loaiFooterTemplate', { static: true }) loaiFooterTemplate: TemplateRef<any>;
  @ViewChild('soToFooterTemplate', { static: true }) soToFooterTemplate: TemplateRef<any>;

  @ViewChild('grid', { static: false }) grid: GridComponent;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  constructor(private dialog: MatDialog
    , private cdRef: ChangeDetectorRef
    , private authService: AuthService
    , private apiService: ApiService, private notificationService: NotificationService) {
  }

  ngOnInit() {

    this.id = this.dieuTriNoiTruModel.Id;
    this.gridColumns = [
      {
        Field: "Loai", Title: "Loại", Width: 300, Sortable: false
        , TemplateFooter: this.loaiFooterTemplate
      },
      {
        Field: "SoTo", Title: "Số Tờ", Width: 100, Sortable: false, Template: this.soToTemplate
        , TemplateFooter: this.soToFooterTemplate
      },
    ];
    this.setItemForGrid();
    this.getById(this.id);
  }

  getById(id: number) {
    this.apiService.post<any>("DieuTriNoiTru/GetTongKetBenhAn?yeuCauTiepNhanId=" + id).subscribe(
      resultData => {
        this.tongKetBenhAn = resultData;
        this.tongKetBenhAn.YeuCauTiepNhanId = this.id;
        this.setItemForGrid();
      },
      () => {

      });
  }


  setItemForGrid() {
    this.gridDataTongKetBenhAn = null;

    let item = [{
      "Loai": this.constXquang,
      "SoTo": this.tongKetBenhAn.SoToXQuang
    }, {
      "Loai": this.constScanner,
      "SoTo": this.tongKetBenhAn.SoToCTScanner
    }, {
      "Loai": this.constSieuAm,
      "SoTo": this.tongKetBenhAn.SoToSieuAm
    }, {
      "Loai": this.constXetNghiem,
      "SoTo": this.tongKetBenhAn.SoToXetNghiem
    }, {
      "Loai": this.constKhac,
      "SoTo": this.tongKetBenhAn.SoToKhac
    }];

    this.gridDataTongKetBenhAn = {
      data: item,
      total: item.length,
    }

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }
   
    if (this.grid != undefined) {
      this.grid.setDataSource();
    }
    this.setTongSo();
  }

  luuBenhAn() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.apiService.post<any>("DieuTriNoiTru/LuuTongKetBenhAn", this.tongKetBenhAn).subscribe(
            resultData => {
              this.tongKetBenhAn = resultData;
              this.tongKetBenhAn.YeuCauTiepNhanId = this.id;
              this.setItemForGrid();
              this.notificationService.showSuccess(CommonService.format
                (SystemMessage.ActionSuccessfully, ['chỉnh sửa']));
            },
            (err: ApiError) => {
              this.notificationService.showError(err.Message);
            });
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  huyBenhAn() {
    this.getById(this.id);
  }

  setTongSo() {
    this.tongCong = this.tongKetBenhAn.SoToXQuang + this.tongKetBenhAn.SoToCTScanner
      + this.tongKetBenhAn.SoToSieuAm + this.tongKetBenhAn.SoToKhac + this.tongKetBenhAn.SoToXetNghiem;
  }

  soToChange($event, dataItem) {    
    switch (dataItem.Loai) {
      case this.constXquang: {
        this.tongKetBenhAn.SoToXQuang = $event
        break;
      }
      case this.constScanner: {
        this.tongKetBenhAn.SoToCTScanner = $event
        break;
      }
      case this.constSieuAm: {
        this.tongKetBenhAn.SoToSieuAm = $event
        break;
      }
      case this.constXetNghiem: {
        this.tongKetBenhAn.SoToXetNghiem = $event
        break;
      }
      case this.constKhac: {
        this.tongKetBenhAn.SoToKhac = $event
        break;
      }
    }
    this.setTongSo();
  }
}
