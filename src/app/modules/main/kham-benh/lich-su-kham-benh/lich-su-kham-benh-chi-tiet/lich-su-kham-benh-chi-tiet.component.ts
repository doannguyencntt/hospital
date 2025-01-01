import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinBenhNhans } from '../../../tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lich-su-kham-benh-chi-tiet',
  templateUrl: './lich-su-kham-benh-chi-tiet.component.html',
  styleUrls: ['./lich-su-kham-benh-chi-tiet.component.scss']
})
export class LichSuKhamBenhChiTietComponent implements OnInit {
  thongTinBenhNhan: ThongTinBenhNhans;
  khoaPhong: string = null;
  tenKhoaPhong: string = null;
  maTiepNhanBNId: number = null;
  yeuCauKhamBenhId: number = null;
  BenhNhan: number = null;
  yeuCauTiepNhanId: number = null;
  yeuCauKhamBenhTruocId: number = null;
  expanded: boolean = null;
  validationErrors: any;
  tabActive: string = "card0";
  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";
  isShowKhamBenh:boolean = false;
  coPhauThuatThuThuat: boolean = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private apiService: ApiService,
    private location: Location,

    private notificationService: NotificationService,) { }

  ngOnInit() {
    this.thongTinBenhNhan = new ThongTinBenhNhans();
    this.yeuCauKhamBenhId = this.route.snapshot.params.id;
    this.getThongTinBenhNhan(this.yeuCauKhamBenhId);
    //this.getThongTinYeuCauBenhNhan(this.yeuCauKhamBenhId);
    this.coDichVuPhauThuatThuThuat();
  }

  getThongTinBenhNhan(id: number) {
    this.showPopupLoadingData();
    this.apiService.get<any>("KhamBenh/ThongTinBenhNhan?yeuCauKhamBenhId=" + id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.isShowKhamBenh = true;
          this.thongTinBenhNhan = resultData;
          this.maTiepNhanBNId = resultData.YeuCauTiepNhanId;
          this.yeuCauTiepNhanId = resultData.YeuCauTiepNhanId;
          this.BenhNhan = resultData.BenhNhanId;
          this.yeuCauKhamBenhTruocId = resultData.YeuCauKhamBenhTruocId;
          // console.log("this.thongTinBenhNhan", this.thongTinBenhNhan)
          // console.log("resultData", resultData)

          this.closePopupLoadingData();
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
          this.closePopupLoadingData();
        }
        this.closePopupLoadingData();
      });
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }

  coDichVuPhauThuatThuThuat() {
    this.apiService.get<any>("KhamBenh/IsExitsDVKTPTTT?idYCKB=" + this.yeuCauKhamBenhId).subscribe(resultData => {
      this.coPhauThuatThuThuat = resultData;;
    });
  }


  quayLai() {
    // this.router.navigate(['/lich-su-kham-benh']);
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
