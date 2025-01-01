import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ChiTietDieuTriNoiTruViewModel, DieuTriNoiTruTongKetBenhAnViewModel, GridPhauThuatThuThuatViewModel } from '../../dieu-tri-noi-tru.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

@Component({
  selector: 'app-tong-ket-benh-an-ngoai-khoa',
  templateUrl: './tong-ket-benh-an-ngoai-khoa.component.html',
  styleUrls: ['./tong-ket-benh-an-ngoai-khoa.component.scss']
})
export class TongKetBenhAnNgoaiKhoaComponent implements OnInit {

  icAddCircle = icAddCircle;
  icDelete = icDelete;

  gridColumns: any[] = [];
  gridPhauThuatColumns: any[] = [];

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  tongKetBenhAn: DieuTriNoiTruTongKetBenhAnViewModel = new DieuTriNoiTruTongKetBenhAnViewModel();

  id: number;

  gridDataTongKetBenhAn: any;
  gridDataPhauThuatThuThuat: any;


  constXquang: string = "X QUANG";
  constScanner: string = "CT SCANNER";
  constSieuAm: string = "SIÊU ÂM";
  constXetNghiem: string = "XÉT NGHIỆM";
  constKhac: string = "KHÁC";

  tongCong: number = 0;

  @ViewChild('soToTemplate', { static: true }) soToTemplate: TemplateRef<any>;

  @ViewChild('ngayGioTemplate', { static: true }) ngayGioTemplate: TemplateRef<any>;
  @ViewChild('phuongPhapTemplate', { static: true }) phuongPhapTemplate: TemplateRef<any>;
  @ViewChild('voCamTemplate', { static: true }) voCamTemplate: TemplateRef<any>;
  @ViewChild('phauThuatVienTemplate', { static: true }) phauThuatVienTemplate: TemplateRef<any>;
  @ViewChild('bacSyTemplate', { static: true }) bacSyTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('loaiFooterTemplate', { static: true }) loaiFooterTemplate: TemplateRef<any>;
  @ViewChild('soToFooterTemplate', { static: true }) soToFooterTemplate: TemplateRef<any>;

  @ViewChild('grid', { static: true }) grid: GridComponent;
  @ViewChild('gridPhauThuat', { static: true }) gridPhauThuat: GridComponent;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  constructor(private route: ActivatedRoute, private dialog: MatDialog
    , private baseService: BaseService, private cdRef: ChangeDetectorRef
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

    this.gridPhauThuatColumns = [
      { Field: "PTTTNgayGio", Title: "Ngày giờ", Width: 200, Sortable: false, Template: this.ngayGioTemplate },
      { Field: "PTTT", Title: "Phương pháp phẫu thuật ", Width: 300, Sortable: false, Template: this.phuongPhapTemplate },
      { Field: "VoCam", Title: "Phương pháp vô cảm", Width: 300, Sortable: false, Template: this.voCamTemplate },
      { Field: "PTTTPhauThuatVien", Title: "Phẫu thuật viên", Width: 150, Sortable: false, Template: this.phauThuatVienTemplate },
      { Field: "PTTTBacSyGayMe", Title: "Bác sỹ gây mê", Width: 150, Sortable: false, Template: this.bacSyTemplate },
      { Field: "Action", Title: "", Width: 80, Sortable: false, Template: this.actionTemplate },
    ];

    this.setItemForGrid();

    this.getById(this.id);

  }

  getById(id: number) {
    this.apiService.post<any>("DieuTriNoiTru/GetTongKetBenhAn?yeuCauTiepNhanId=" + id).subscribe(
      resultData => {
        this.tongKetBenhAn = resultData;
        this.tongKetBenhAn.YeuCauTiepNhanId = this.id;
        this.gridDataPhauThuatThuThuat.data = this.tongKetBenhAn.gridPhauThuatThuThuat.length > 0 ?
          this.tongKetBenhAn.gridPhauThuatThuThuat : [];
        this.setItemForGrid();
      },
      (err: ApiError) => {

      });
  }

  setItemForGrid() {
    this.gridDataTongKetBenhAn = null;
    this.gridDataPhauThuatThuThuat = null;

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

    this.gridDataPhauThuatThuThuat = {
      data: this.tongKetBenhAn.gridPhauThuatThuThuat,
      total: this.tongKetBenhAn.gridPhauThuatThuThuat.length,
    }

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.grid != undefined) {
      this.grid.setDataSource();
    }

    if (this.gridPhauThuat != undefined) {
      this.gridPhauThuat.setDataSource();
    }

    this.setTongSo();
  }

  setTongSo() {
    this.tongCong = this.tongKetBenhAn.SoToXQuang + this.tongKetBenhAn.SoToCTScanner
      + this.tongKetBenhAn.SoToSieuAm + this.tongKetBenhAn.SoToKhac + this.tongKetBenhAn.SoToXetNghiem;
  }

  soToChange($event, dataItem) {
    //console.log("soToChange = ", $event, dataItem);
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

  themPhauThuat() {
    let item = new GridPhauThuatThuThuatViewModel();
    this.tongKetBenhAn.gridPhauThuatThuThuat.push(item);
    this.setItemForGrid();
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

  xoa(dataItem) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có muốn xóa lần phẩu thuật này không?" }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == "Yes") {
        this.tongKetBenhAn.gridPhauThuatThuThuat = this.tongKetBenhAn.gridPhauThuatThuThuat.filter(o => o != dataItem);
        this.setItemForGrid();
        this.notificationService.showSuccess("Xóa thành công");
      }
      else {
      }
    });

  }

}
