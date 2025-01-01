import { Component, OnInit, Inject, ChangeDetectorRef, Optional, TemplateRef, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";
import { GoiLaiYeuCauXetNghiem, ThongTinXetNghiemChiTiet } from '../../../kham-benh.model';
import icInfo from '@iconify/icons-ic/baseline-info';
@Component({
  selector: "ap-yeu-cau-xet-nghiem-lai-popup",
  templateUrl: "./yeu-cau-xet-nghiem-lai-popup.component.html",
  styleUrls: ["./yeu-cau-xet-nghiem-lai-popup.component.scss"],
})
export class YeuCauXetNghiemLaiComponent implements OnInit {
  icClose = icClose;
  Title: any = null;
  Message: any = null;
  ButtonYes: string = "Có";
  ButtonNo: string = "Không";
  public dataThongTin: ThongTinXetNghiemChiTiet[] = [];
  gridColumns: any[] = [];
  icInfo = icInfo;
  kiemTraNhomXetNghiem: boolean = false;

  goiLaiYeuCauXetNghiem: GoiLaiYeuCauXetNghiem;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild("actionTooltipTemplate", { static: true }) actionTooltipTemplate: TemplateRef<any>;
  validationErrors: any[] = [];

  constructor(
    private cdRef: ChangeDetectorRef,
    private dialogRef: MatDialogRef<any>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    setInterval(() => {
      console.log(this.data)
    }, 5000)
    this.goiLaiYeuCauXetNghiem = new GoiLaiYeuCauXetNghiem();
    this.data.danhSachGoiXetNghiemLai.DanhSachGoiXetNghiemLais.forEach(element => {
      element.GoiLai = false;
    });
    this.data.danhSachGoiXetNghiemLai.LyDo = null;
    this.goiLaiYeuCauXetNghiem = this.data.danhSachGoiXetNghiemLai;
    this.Title = this.data.Title;
    this.Message = this.data.Message;

    this.gridColumns = [
      { Field: "NhomDichVu", Title: "Xét Nghiệm", Width: 150, Sortable: false, Template: this.actionTooltipTemplate },
      { Field: "", Title: "", Width: 50, Sortable: true, ShowTooltip: true, Template: this.actionTemplate }
    ];
  }

  TooltipCustom(duTruGiamDocDetail: any) {
    this.dataThongTin = [];
    this.data.danhSachGoiXetNghiemLai.ThongTinXetNghiemChiTiets.forEach(element => {
      if (element.PhienXetNghiemId == duTruGiamDocDetail.PhienXetNghiemId
        && element.NhomDichVuBenhVienId == duTruGiamDocDetail.NhomDichVuBenhVienId) {
        this.dataThongTin.push(element);
      }
    });
  }

  trangThaiCheckBox(ev: any) {
    let goiLai = this.data.danhSachGoiXetNghiemLai.DanhSachGoiXetNghiemLais.filter(c => c.GoiLai);
    if (goiLai.length > 0) {
      this.kiemTraNhomXetNghiem = true;
    } else {
      this.kiemTraNhomXetNghiem = false;
    }
  }

  close(result: any) {
    if (result === "Yes") {
      this.validationErrors = [];
      this.cdRef.detectChanges();   
      if (this.goiLaiYeuCauXetNghiem.LyDo == undefined || this.goiLaiYeuCauXetNghiem.LyDo == null || this.goiLaiYeuCauXetNghiem.LyDo == "") {
        this.validationErrors.push({
          Message: "Lý do yêu cầu nhập.",
          Field: "LyDo",
        });
        return true;
      } else {
        this.dialogRef.close(this.goiLaiYeuCauXetNghiem);
      }
    } else {
      this.dialogRef.close(null);
    }
  }
}
