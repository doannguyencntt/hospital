import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, SimpleChanges, Input, HostListener, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";

import { FormControl } from '@angular/forms';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";

import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from "src/app/core/utilities/common.helper";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import icSearch from "@iconify/icons-ic/twotone-search";
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icAdd from '@iconify/icons-ic/twotone-add';
import icCancel from "@iconify/icons-ic/cancel";
import icClose from "@iconify/icons-ic/twotone-close";
import icPrint from "@iconify/icons-ic/twotone-print";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { TongHopDuTruMuaThuocTaiKhoaSharedComponent } from '../tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component';
import { TongHopDuTruMuaThuocTaiKhoa } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';
import { TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent } from '../tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component';
@Component({
  selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet',
  templateUrl: './tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TongHopDuTruMuaThuocTaiKhoaDuyetComponent implements OnInit {
  documentType: DocumentType;
  danhSachTongHopDuTruMuaThuocTaiKhoa: TongHopDuTruMuaThuocTaiKhoa;
  popupSavingData: any = null;
  popupLoadingData: any = null;
  validationErrors: any = null;
  //paramre kiem tra true 
  tabDaXuLy = "";
  @ViewChild(TongHopDuTruMuaThuocTaiKhoaSharedComponent, { static: true }) shared: any;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(
  ) {
    this.danhSachTongHopDuTruMuaThuocTaiKhoa = new TongHopDuTruMuaThuocTaiKhoa;
    let isSelected = this.route.snapshot.params.isSelected;
    if (isSelected === "true") {
      this.tabDaXuLy = "DaXuLy";
      const id = this.route.snapshot.params.id;
      if (id != undefined && id != null && isSelected === "true")  {        
        this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);
      }
    } else {
      this.tabDaXuLy = "ChoXuLy";
      const id = this.route.snapshot.params.id;
      if (id != undefined && id != null)  {        
        this.getThongTinTongHopDuTruMuaTaiKhoa(id);
      }
    }
  }

  getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id: any) {
    this.apiService.get<any>('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoaDaXuLy/' + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {      
          this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
        }
      });
  }

  getThongTinTongHopDuTruMuaTaiKhoa(id: any) {
    this.apiService.get<any>('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoa/' + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {          
          this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
        }
      });
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  // @HostListener("document:keydown", ["$event"])
  // keyEvent(event: KeyboardEvent) {
  //   if (event.keyCode == 27 && !event.ctrlKey) {
  //     //esc
  //     this.cancel();
  //     event.preventDefault();
  //   }
  // }

}
