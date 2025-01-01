import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { DanhSachPhongTaiCongTy } from '../kham-doan-hop-dong-kham.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'danh-sach-phong-kham-cong-ty-popup',
  templateUrl: './danh-sach-phong-kham-cong-ty-popup.component.html',
  styleUrls: ['./danh-sach-phong-kham-cong-ty-popup.component.scss']
})
export class DanhSachPhongKhamCongTyComponent implements OnInit {
  danhSachPhongTaiCongTy = new DanhSachPhongTaiCongTy();
  Title: string = "Thêm phòng";
  icClose = icClose;
  icClear = icClear;

  hopDongKhamSucKhoeId: number;
  id: number;
  dataDSCongTy: any;

  validationErrors: any = [];
  popupLoadingData: any;
  documentType: DocumentType;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,
    private cdRef: ChangeDetectorRef,
    private authService: AuthService, private cd: ChangeDetectorRef,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanHopDongKham; 
    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
    this.id = this.data.dataDSCongTy.Id;
    
    if(this.id != 0){
        this.danhSachPhongTaiCongTy.Ma = this.data.dataDSCongTy.MaPhong;
        this.danhSachPhongTaiCongTy.Ten = this.data.dataDSCongTy.TenPhong;
        this.danhSachPhongTaiCongTy.Tang = this.data.dataDSCongTy.GhiChu;
        this.danhSachPhongTaiCongTy.DanhSachNhanSu = this.data.dataDSCongTy.DanhSachNhanSu;
    }
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }  

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  createOrUpdate() {
    let mess = "Bạn có chắc chắn muốn tạo phòng khám công ty này không?";
    if (this.id != 0) {
      mess = "Bạn có chắc chắn muốn sửa phòng khám công ty này không?";
      this.danhSachPhongTaiCongTy.Id = this.id;
    }

    let securityOperation = SecurityOperation.Add;
    this.danhSachPhongTaiCongTy.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;

    if (this.authService.hasPermission(this.documentType, securityOperation)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: mess }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.showPopupLoadingData();
          this.apiService.post<any>("KhamDoan/ThemHoacSuaDanhSachPhongKhamTaiCongTy", this.danhSachPhongTaiCongTy).subscribe(res => {
            if (res != 0) {
              this.dialogRef.close("Yes");
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              this.closePopupLoadingData();              
            }
          }, err => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  changeMultiDanhSachNhanSu (ev: any){

  }

  closeChangeDanhSachNhanSu (ev: any){

  }

  close(result = null) {
  }
}
