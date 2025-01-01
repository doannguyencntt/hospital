import { Component, OnInit, Optional, Inject, OnDestroy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import icClose from "@iconify/icons-ic/twotone-close";
import { LookupQueryInfo, PhongLookupItemVo } from "../chuyen-phong";
 import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiService } from 'src/app/core/services/api.service';
import { HoatDongNhanVien } from 'src/app/shared/models/common.model';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: "app-chuyen-ve-phong-chinh",
  templateUrl: "./chuyen-ve-phong-chinh.component.html",
  styleUrls: ["./chuyen-ve-phong-chinh.component.scss"],
})
export class ChuyenVePhongChinhComponent implements OnInit {
  form: FormGroup;
  LookupQueryInfo = {} as LookupQueryInfo;
  icClose = icClose;
  loading = false;
  menuItems: any[];
  menuPermissionItems: any;
  validationErrors: any[] = [];
  step: number = 1;
  preStep: number[] = [];
  totalExpiredSecond: number = 0;
  intervalCountDown: any = null;
  showExpired: boolean = false;
  currentUser: any;
  idPhong: any;
  currentDepartment: any;
  currentUserInfo: string;
  currentUserInfoPhongKham: string;
  getKhoas: any[] = [{ Id: Number, Ten: String }];
  getPhongs: any[] = [{ KeyId: Number, DisplayName: String }];
  messages: any[] = [];
  subscription: Subscription;
  phongHienTai: PhongLookupItemVo = { DisplayName: null, KeyId: null };
  khoa: PhongLookupItemVo = { DisplayName: null, KeyId: 0, };
  phongKham: PhongLookupItemVo = { DisplayName: null, KeyId: 0, };
  public khoaId: number = 0;
  hoatDongNhanVien = {} as HoatDongNhanVien;
  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private apiService: ApiService,
    private router: Router,
    private broadcastService: BroadcastService,
    private dialogRef: MatDialogRef<ChuyenVePhongChinhComponent>
  ) {

  } 
  close() {
    this.dialog.closeAll();
  }

  ngOnInit() {
    this.form = this.fb.group({
      khoa: [null, Validators.required],
      phong: [null, Validators.required],
    });
    this.getPhongChinhLamViec();
  }


  getPhongChinhLamViec() {
    this.apiService
      .get<any>("HoatDongNhanVien/GetPhongChinhLamViec")
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.currentUserInfoPhongKham = resultData.DisplayName;
          this.hoatDongNhanVien.PhongKhamBenhId = resultData.KeyId;
        }
      });
  }

  ChuyenVePhongChinh() {   
    if (
      this.hoatDongNhanVien != null &&
      this.hoatDongNhanVien.PhongKhamBenhId != undefined &&
      this.hoatDongNhanVien.PhongKhamBenhId != null
    ) {
      let url = this.router.url;
      if (url === "/kham-benh") {
        this.phongHienTai.KeyId = this.hoatDongNhanVien.PhongKhamBenhId;
        this.broadcastService.broadcast({
          name: "ChuyenPhong",
          message: this.phongHienTai
        });      
      } else if (url === "/phau-thuat-thu-thuat") {
        this.phongHienTai.KeyId = this.hoatDongNhanVien.PhongKhamBenhId;

        this.broadcastService.broadcast({
          name: "ChuyenPhong",
          message: this.phongHienTai
        });
      } else if (url.includes("/tiem-chung")) {
        this.phongHienTai.KeyId = this.hoatDongNhanVien.PhongKhamBenhId;

        this.broadcastService.broadcast({
          name: "ChuyenPhong",
          message: this.phongHienTai
        });
      } else {
        this.authService
          .HoatDongNhanVien(this.hoatDongNhanVien)
          .subscribe((data) => {
            this.authService.setPhongLamViecId(
              this.hoatDongNhanVien.PhongKhamBenhId
            );
            this.refreshPage();
          });
      }
    }
  }
  refreshPage() {
    window.location.reload();
  }
}
