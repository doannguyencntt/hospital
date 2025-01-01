import { Component, OnInit, Optional, Inject, OnDestroy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";
import icClose from "@iconify/icons-ic/twotone-close";
import { PhongLookupItemVo } from "../chuyen-phong";
import { HoatDongNhanVien, LookupQueryInfo } from "src/app/shared/models/common.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";
import { BroadcastService } from "src/app/core/services/broadcast.service";
import { Subscription } from "rxjs";
import { HinhThucKhamBenh } from "src/app/shared/enum/kham-doan.enum";
declare var $: any;
@Component({
  selector: "app-chuyen-phong",
  templateUrl: "./chuyen-phong.component.html",
  styleUrls: ["./chuyen-phong.component.scss"],
})
export class ChuyenPhongComponent implements OnInit {
  form: FormGroup;
  LookupQueryInfo = {} as LookupQueryInfo;
  hoatDongNhanVien = {} as HoatDongNhanVien;
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

  hinhThucKhamBenhNgoaiVien: HinhThucKhamBenh = HinhThucKhamBenh.KhamDoanNgoaiVien;
  typeHinhThucKB: number;
  public khoaId: number = 0;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private broadcastService: BroadcastService,
    private dialogRef: MatDialogRef<ChuyenPhongComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.Title != null) {
    }
  }

  close() {
    this.dialog.closeAll();
  }


  ngOnInit() {
    this.form = this.fb.group({
      khoa: [null, Validators.required],
      phong: [null, Validators.required],
    });

    this.currentUser = this.authService.getAccessUser();
    this.idPhong = this.authService.getPhongLamViecId();
    this.typeHinhThucKB = this.currentUser.HinhThucKhamBenh;
    if (this.currentUser.HinhThucKhamBenh == HinhThucKhamBenh.NoiVien) {
      if (this.currentUser != null) {
        this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + this.currentUser.Id + "&idPhongBenhVien=" + this.idPhong)
          .subscribe((resultData: any) => {
            if (resultData.IsChucDanhEmpty == false) {
              if (resultData.IsKhoaPhongEmpty == false) {
                this.currentUserInfo =
                  resultData.TenKhoaPhong + " - " + resultData.MaKhoaPhong;
                this.khoa.KeyId = 0;
                this.khoaId = 0;
              } else {
              }
            }

            if (resultData.IsChucDanhEmpty) {
              if (resultData.IsKhoaPhongEmpty == false) {
                this.currentUserInfo =
                  resultData.TenKhoaPhong + " - " + resultData.MaKhoaPhong;
                this.khoa.KeyId = 0;
                this.khoaId = 0;
              } else {
              }
            }
          });
      }
    }
    else {
      //get khoa ngoại viện 
      this.apiService
        .get<any>("PhongBenhVien/GetKhoaPhongNgoaiVien").subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.khoa.KeyId = resultData.KeyId;
            this.khoa.DisplayName = resultData.DisplayName;
            this.khoaId = resultData.KeyId;
          }
        });
    }

    this.getPhongBenhVienByCurrentUser();
    setTimeout(() => {
      $('app-combobox#chonPhong').find('input').trigger('focus');
    }, 500);
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.ChuyenPhongNoiBo();
    }
  }

  getPhongBenhVienByCurrentUser() {
    this.apiService
      .get<any>("HoatDongNhanVien/GetPhongBenhVienByCurrentUser")
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.currentUserInfoPhongKham = resultData.DisplayName;
        }
      });
  }

  onSelectionChange(event: any) {
    if (event !== null && event !== undefined) {
      this.khoa.KeyId = event.KeyId;
      this.khoaId = event.KeyId;
    } else {
      this.khoa.KeyId = 0;
      this.khoa.DisplayName = "";
      this.khoaId = 0;
    }
    this.phongKham.KeyId = 0;
    this.phongKham.DisplayName = "";
  }

  onSelectionPhongChange(event: any) {
    if (event !== null && event !== undefined) {
      this.phongKham.KeyId = event.KeyId;
      this.apiService
        .get<any>("PhongBenhVien/GetKhoaByPhong?phongId=" + event.KeyId)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.khoa.KeyId = resultData.KeyId;
            this.khoaId = resultData.KeyId;;
          }
        });
    } else {
      this.phongKham.KeyId = 0;
      this.phongKham.DisplayName = "";
    }
  }

  ChuyenPhongNoiBo() {
    this.validationErrors = [];
    this.hoatDongNhanVien.PhongKhamBenhId = this.phongKham.KeyId;
    if (this.phongKham.KeyId === 0 || this.phongKham.KeyId === undefined) {
      this.validationErrors.push({
        Message: "Phòng yêu cầu chọn.",
        Field: "Phong",
      });
      return;
    }

    if (
      this.hoatDongNhanVien != null &&
      this.hoatDongNhanVien.PhongKhamBenhId != undefined &&
      this.hoatDongNhanVien.PhongKhamBenhId != null
    ) {
      let url = this.router.url;

      // trường hợp url có truyền thêm param
      let urlTree = this.router.parseUrl(url);
      urlTree.queryParams = {}; 
      var urlWithoutParam = urlTree.toString();
      if (urlWithoutParam === "/kham-benh" || urlWithoutParam === "/kham-doan/kham-doan-tat-ca-phong" || urlWithoutParam === "/kham-doan/tiep-nhan/kham-benh") {
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
      } else if (url === '/tiem-chung') {
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

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }
  refreshPage() {
    this.close();
     var currentUrl=this.router.url.lastIndexOf("?")>=0? this.router.url.substr(0, this.router.url.lastIndexOf("?")):this.router.url;
    var queryParams=null;
    this.route.queryParams
      .subscribe(params => {
        queryParams=params;
      }
    );
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([currentUrl],{queryParams:queryParams})
    );
  }
}
