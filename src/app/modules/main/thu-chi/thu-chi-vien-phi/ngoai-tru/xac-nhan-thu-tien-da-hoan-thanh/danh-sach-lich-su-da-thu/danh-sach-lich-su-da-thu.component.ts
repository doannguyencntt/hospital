import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import {
  process,
  State,
  GroupDescriptor,
} from "@progress/kendo-data-query";
import { ActivatedRoute } from "@angular/router";
import icCheck from "@iconify/icons-ic/twotone-check";

import { ApiService } from "src/app/core/services/api.service";
import { DanhSachChiPhiKhamChuaBenh } from '../xac-nhan-thu-tien-hoan-thanh';
import { MatDialog } from '@angular/material';
import {  MiemGiamTheoDVComponent } from '../ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component';
declare var jQuery: any;

@Component({
  selector: "app-danh-sach-lich-su-da-thu",
  templateUrl: "./danh-sach-lich-su-da-thu.component.html",
  styleUrls: ["./danh-sach-lich-su-da-thu.component.scss"],
})
export class DanhSachLichSuDaThuComponent implements OnInit {
  public danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh[] = [];
  public gridDataDaThu: any;
  public id: number = 0;
  public icCheck = icCheck;
  public loaiPhieu: string;
  validationErrors: any;
  confrim: any;

  daThuTienGridColumns: any[] = [];
  dataSource: any = {
    data: [],
    total: 0,
  };

  @Output() loadingThanhCong = new EventEmitter<any>();
  public groups: GroupDescriptor[] = [
    {
      field: "Nhom",
      aggregates: [
        { field: "ThanhTien", aggregate: "sum" },
        { field: "BHYTThanhToan", aggregate: "sum" },
        { field: "SoTienMG", aggregate: "sum" },
        { field: "DaThanhToan", aggregate: "sum" },
        { field: "BNConPhaiThanhToan", aggregate: "sum" },
        { field: "TongCongNo", aggregate: "sum" },
      ],
    },
  ];

  public state: State = {
    group: this.groups,
  };

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  //--------------------------------- Begin total colunm------------------------------------------------------------
  public total(field: any) {
    switch (field) {
      case "BNConPhaiThanhToan":
        return this.XuLyTotalForField("BNConPhaiThanhToan");
        break;
      case "DaThanhToan":
        return this.XuLyTotalForField("DaThanhToan");
        break;
      case "SoTienMG":
        return this.XuLyTotalForField("SoTieMG");
        break;
      case "ThanhTien":
        return this.XuLyTotalForField("ThanhTien");
        break;
      case "BHYTThanhToan":
        return this.XuLyTotalForField("BHYTThanhToan");
        break;
      case "TongCongNo":
        return this.XuLyTotalForField("TongCongNo");
        break;
    }
  }

  XuLyTotalForField(field: any) {
    let sum = 0;
    this.danhSachChiPhiKhamChuaBenh.forEach((element) => {
      if (element.CheckedDefault) {
        switch (field) {
          case "BNConPhaiThanhToan":
            sum = sum + element.BNConPhaiThanhToan;
            break;
          case "DaThanhToan":
            sum = sum + element.DaThanhToan;
            break;
          case "SoTienMG":
            sum = sum + element.SoTienMG;
            break;
          case "ThanhTien":
            sum = sum + element.ThanhTien;
            break;
          case "BHYTThanhToan":
            sum = sum + element.BHYTThanhToan;
            break;
          case "TongCongNo":
            sum = sum + element.TongCongNo;
            break;
        }
      }
    });
    return sum;
  }
  //--------------------------------- End total colunm-----------------------------------------------------------
  ngOnInit() {
    this.getDanhSachThuPhiDaThuPhiDichVu(this.route.snapshot.params.id)
  }

  extCheckboxSelection(event: any[]) {
    let data: any[] = [];
    this.danhSachChiPhiKhamChuaBenh.forEach((element) => {
      {
        return (element.CheckedDefault = false);
      }
    });
    if (event.length > 0) {
      for (let index = 0; index < event.length; index++) {
        this.danhSachChiPhiKhamChuaBenh.forEach((element) => {
          {
            if (element.Id == event[index]) {
              return (element.CheckedDefault = true);
            }
          }
        });
      }
    }
  }

  getDanhSachThuPhiDaThuPhiDichVu(id) {
    this.apiService
      .get<any>("ThuNgan/GetDanhSachThuPhiDaThuPhiDichVu/" + id)
      .subscribe((resultData) => {
        this.danhSachChiPhiKhamChuaBenh = resultData;
        this.gridDataDaThu = process(
          this.danhSachChiPhiKhamChuaBenh,
          this.state
        );
        this.setRemoveGroupFooterOnly();
      });
  }
  public kiemTraData: boolean = false;

  setRemoveGroupFooterOnly() {
    setTimeout(function () {
      if (jQuery("#danhSachLichSuDaThuTienGrid .k-group-footer").length == 1) {
        jQuery("#danhSachLichSuDaThuTienGrid .k-group-footer").hide();
      } else {
        jQuery("#danhSachLichSuDaThuTienGrid .k-group-footer").show();
      }
    }, 100);
  }

  tinhTiLeMiemGiamInGrid(data: DanhSachChiPhiKhamChuaBenh) {
    let sumSoTienBenhNhanTra =
      data.ThanhTien - data.BHYTThanhToan - data.TongCongNo;
    if (sumSoTienBenhNhanTra == 0 || isNaN(data.SoTienMG)) {
      return 0;
    }
    return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
  }

  ViewThongTinMG(dataItem: any) {
    let isView = false;
    if (this.confrim != null) {
      this.dialog.closeAll();
      this.confrim = null;
    }

    this.confrim = this.dialog.open(MiemGiamTheoDVComponent, {
      disableClose: true,
      width: "500px",
      data: { dataItem, isView },
    }).afterClosed().subscribe((result) => {
      if (result != null) {
      }
    });
  }
}
