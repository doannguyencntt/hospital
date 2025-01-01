import { Component, OnInit, HostListener, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MarketingXuatKhoChiTiet } from '../../marketing.model';
@Component({
  selector: 'app-marketing-xuat-kho-chi-tiet',
  templateUrl: './marketing-xuat-kho-chi-tiet.component.html',
  styleUrls: ['./marketing-xuat-kho-chi-tiet.component.scss']
})
export class MarketingXuatKhoChiTietComponent implements OnInit {
  documentType: DocumentType;
  xuatKhoMarketing: MarketingXuatKhoChiTiet;
  validationErrors: any;
  gridColumns: any[] = [];
  additionString: any = null;
  popupLoadingData: any;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.xuatKhoMarketing = new MarketingXuatKhoChiTiet();
    this.documentType = DocumentType.XuatKhoMarketing;
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.additionString = id;
      this.getById(id);
    }
    this.gridColumns = [
      // { Field: "STT", Title: "#", Width: 20, Template: this.STTTemplate },
      { Field: "Ten", Title: "Quà tặng", Width: 150 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "SoLuongXuat", Title: "SL Xuất", Width: 80 },
    ];
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


  getById(id: number) {
    var self = this;
    self.loadingPage();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("Marketing/GetXuatKhoMarketingChiTiet?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.closePopupLoadingData();
            // console.log("data: ", resultData)
            this.xuatKhoMarketing = resultData;
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai() {
    this.location.back();
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.quayLai();
      event.preventDefault();
    }
  }
}
