import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icChildFriendly from '@iconify/icons-ic/sharp-child-friendly';
import medkit from '@iconify/icons-fa-solid/medkit';
import icHotel from '@iconify/icons-ic/baseline-hotel';
import wareHouse from '@iconify/icons-fa-solid/warehouse';
import { ThongKeBenhVien, ThongKeGiuongBenh,ThongKeSoSinh, ThongKeKhamBenh, ThongKeKhamBenhSearch, ThongKeNoiTru, ThongKeTiepNhan } from './thong-ke.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'vex-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {
  icPersonAdd = icPersonAdd;
  medkit = medkit;
  icHotel = icHotel;
  wareHouse = wareHouse;
  icMoreVert = icMoreVert;
  icChildFriendly = icChildFriendly;
  
  thongKeKhamBenhSearch: ThongKeKhamBenhSearch = new ThongKeKhamBenhSearch();
  thongKeBenhVien: ThongKeBenhVien = new ThongKeBenhVien();

  // CHART TÌNH TRẠNG KHÁM  
  public khoaKhams: string[] = [];
  public tinhTrangKhoaKhams: any[] = [];
  public cVKhoaKham: number[] = [0, 20];
  public valueAxesTTKhoaKham: any[] = [
    {
      title: 'Chưa khám',
      name: 'Chưa khám',
      color: '#eb1e2c'
    },
    {
      title: 'Đang khám',
      name: 'Đang khám',
      color: '#f9d23c'
    },
    {
      title: 'Hoàn thành',
      name: 'Hoàn thành',
      color: '#59a14f'
    }
  ];
  // CHART TÌNH TRẠNG KHÁM

  // CHART TÌNH GIƯỜNG BỆNH VIỆN  
  public giuongTheokhoaKhams: string[] = [];
  public giuongKhoaKhams: any[] = [];
  public cVGiuong: number[] = [0, 100];
  public valueAxes: any[] = [
    {
      name: 'G.Trống',
      title: 'G.Trống',
      color: '#eb1e2c'
    }, {
      name: 'G.Đã có NB',
      title: 'G.Đã có NB',
      color: '#59a14f'
    }
  ];
  // CHART TÌNH GIƯỜNG BỆNH VIỆN


  // CHART  ĐIỀU TRỊ NỘI TRÚ  
  public khoaNoiTru: string[] = [];
  public dataNoiTrus: any[] = [];
  public cVNoiTru: number[] = [0, 0, 10, 10];
  public valueAxesNoiTru: any[] = [
    {
      title: 'Nhập viện',
      name: 'Nhập viện',
      color: '#91dcea'
    },
    {
      title: 'Đang điều trị',
      name: 'Đang điều trị',
      color: '#f28e2b'
    },
    {
      title: 'Đã ra viện',
      name: 'Đã ra viện',
      color: '#5fbb68'
    },
    {
      title: 'Chuyển viện',
      name: 'Chuyển viện',
      color: '#f9d23c'
    },
    {
      title: 'Tử vong',
      name: 'Tử vong',
      color: '#eb1e2c'
    }
  ];
  // CHART  ĐIỀU TRỊ NỘI TRÚ 


  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.thongKeBenhVien = new ThongKeBenhVien();

    this.thongKeBenhVien.ThongKeTiepNhan = new ThongKeTiepNhan();
    this.thongKeBenhVien.ThongKeKhamBenh = new ThongKeKhamBenh();
    this.thongKeBenhVien.ThongKeNoiTru = new ThongKeNoiTru();
    this.thongKeBenhVien.ThongKeGiuongBenh = new ThongKeGiuongBenh();
    this.thongKeBenhVien.ThongKeSoSinh = new ThongKeSoSinh();

    let dateNow = new Date();
    this.thongKeKhamBenhSearch.TuNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.thongKeKhamBenhSearch.DenNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);

    if (this.thongKeKhamBenhSearch.TuNgay != null) {
      this.thongKeKhamBenhSearch.FromDate = CommonService.formatDateTime(this.thongKeKhamBenhSearch.TuNgay, "dd/mm/yyyy");
    } else {
      this.thongKeKhamBenhSearch.FromDate = null;
    }

    if (this.thongKeKhamBenhSearch.DenNgay != null) {
      this.thongKeKhamBenhSearch.ToDate = CommonService.formatDateTime(this.thongKeKhamBenhSearch.DenNgay, "dd/mm/yyyy");
    } else {
      this.thongKeKhamBenhSearch.ToDate = null;
    }
    this.lamMoi();
  }

  lamMoi() {

    var dialog = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang tải dữ liệu...' }
    });
    this.apiService.post<any>("Home/ThongKeBenhVien", this.thongKeKhamBenhSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        //THỐNG KÊ THEO NGÀY TIẾP  NHÂN , KHÁM BỆNH , GIƯỜNG , NỘI TRÚ
        this.thongKeBenhVien = resultData;

        //CHART TÌNH TRẠNG KHÁM BỆNH
        if (resultData.ChartTinhTrangKhams !== undefined && resultData.ChartTinhTrangKhams != null) {
          this.handleChartTinhTrangKham(resultData.ChartTinhTrangKhams);
        }

        //CHART GIƯỜNG BỆNH VIỆN     
        if (resultData.ChartTinhTrangSuDungGiuongs !== undefined && resultData.ChartTinhTrangSuDungGiuongs != null) {
          this.handleChartGiuongBenhVien(resultData.ChartTinhTrangSuDungGiuongs);
        }

        //CHART NỘI TRÚ
        if (resultData.ChartTinhTrangDieuTriNoiTrus !== undefined && resultData.ChartTinhTrangDieuTriNoiTrus != null) {
          this.handleChartDieuTriNoiTru(resultData.ChartTinhTrangDieuTriNoiTrus);
        }
      }
      dialog.close();
    });
  }

  handleChartTinhTrangKham(dataTinhtrangKhamBenhs: any) {
    this.khoaKhams = [];
    this.setDefaultChartTinhTrangKhoaKham();

    let danhSachChuaKhamTheoKhoas = [];
    let danhSachDangKhamTheoKhoas = [];
    let danhSachHoanThanhTheoKhoas = [];

    dataTinhtrangKhamBenhs.forEach(itemKhoaKham => {
      if (itemKhoaKham.TongSoNguoiChuaKham > 0 ||
        itemKhoaKham.TongSoNguoiDangKham > 0 ||
        itemKhoaKham.TongSoNguoiHoanThanh > 0) {
        this.khoaKhams.push(itemKhoaKham.KhoaKham);
      }

      if (itemKhoaKham.TongSoNguoiChuaKham > 0) {
        danhSachChuaKhamTheoKhoas.push(itemKhoaKham.TongSoNguoiChuaKham);
      }
      else {
        danhSachChuaKhamTheoKhoas.push(null);
      }

      if (itemKhoaKham.TongSoNguoiDangKham > 0) {
        danhSachDangKhamTheoKhoas.push(itemKhoaKham.TongSoNguoiDangKham);
      } else {
        danhSachDangKhamTheoKhoas.push(null);
      }

      if (itemKhoaKham.TongSoNguoiHoanThanh > 0) {
        danhSachHoanThanhTheoKhoas.push(itemKhoaKham.TongSoNguoiHoanThanh);
      } else {
        danhSachHoanThanhTheoKhoas.push(null);
      }

    });
    this.tinhTrangKhoaKhams=[];
    this.tinhTrangKhoaKhams.push({
      type: 'column',
      data: danhSachChuaKhamTheoKhoas,
      stack: true,
      name: 'Chưa khám',
      color: '#eb1e2c'
    },
      {
        type: 'column',
        data: danhSachDangKhamTheoKhoas,
        stack: true,
        name: 'Đang khám',
        color: '#f9d23c'
      },
      {
        type: 'column',
        data: danhSachHoanThanhTheoKhoas,
        stack: true,
        name: 'Hoàn thành',
        color: '#59a14f'
      });
  }

  setDefaultChartTinhTrangKhoaKham() {
    this.tinhTrangKhoaKhams = [];
    this.tinhTrangKhoaKhams.push({
      data: [],
      stack: true,
      color: '#eb1e2c'
    },
      {
        type: 'column',
        data: [],
        stack: true,
        color: '#f9d23c'
      },
      {
        type: 'column',
        data: [],
        stack: true,
        color: '#59a14f'
      });
  }

  handleChartGiuongBenhVien(dataGiuongBenhViens: any) {
    this.giuongTheokhoaKhams = [];
    this.setDefaultChartGiuongBenhVien();

    let dsGiuongtrongs = [];
    let dsGiuongDaSuDungs = [];

    dataGiuongBenhViens.forEach(itemKhoaKham => {
      this.giuongTheokhoaKhams.push(itemKhoaKham.KhoaKham);
      dsGiuongtrongs.push(itemKhoaKham.TongSoGiuongTrong);
      dsGiuongDaSuDungs.push(itemKhoaKham.TongSoGiuongDaSuDung);
    });

    this.giuongKhoaKhams.push(
      {
        type: 'line',
        data: dsGiuongtrongs,
        name: 'G.Trống',
        color: '#FF0000'
      }, {
      type: 'line',
      data: dsGiuongDaSuDungs,
      name: 'G.Đã có NB',
      color: '#00FF00'
    });
  }

  setDefaultChartGiuongBenhVien() {
    this.giuongKhoaKhams = [];
    this.giuongKhoaKhams.push({
      type: 'line',
      data: []
    },
      {
        type: 'line',
        data: []
      });
  }

  handleChartDieuTriNoiTru(dataDieuTriNoiTrus: any) {
    this.khoaNoiTru = [];
    this.setDefaultChartDieuTriNoiTru();

    let nhapViens = [];
    let dangDieuTris = [];
    let daRaViens = [];
    let chuyenViens = [];
    let tuVongs = [];

    dataDieuTriNoiTrus.forEach(itemKhoaKham => {
      if (itemKhoaKham.TongSoNhapVien > 0 ||
        itemKhoaKham.TongSoDangDieuTri > 0 ||
        itemKhoaKham.TongSoDaRaVien > 0 ||
        itemKhoaKham.TongSoChuyenVien > 0 ||
        itemKhoaKham.TongSoTuVong > 0) {
        this.khoaNoiTru.push(itemKhoaKham.KhoaKham);
      }

      if (itemKhoaKham.TongSoNhapVien > 0) {
        nhapViens.push(itemKhoaKham.TongSoNhapVien);
      }
      else {
        nhapViens.push(null);
      }

      if (itemKhoaKham.TongSoDangDieuTri > 0) {
        dangDieuTris.push(itemKhoaKham.TongSoDangDieuTri);
      } else {
        dangDieuTris.push(null);
      }

      if (itemKhoaKham.TongSoDaRaVien > 0) {
        daRaViens.push(itemKhoaKham.TongSoDaRaVien);
      }
      else {
        daRaViens.push(null);
      }

      if (itemKhoaKham.TongSoChuyenVien > 0) {
        chuyenViens.push(itemKhoaKham.TongSoChuyenVien);
      }
      else {
        chuyenViens.push(null);
      }

      if (itemKhoaKham.TongSoTuVong > 0) {
        tuVongs.push(itemKhoaKham.TongSoTuVong);
      } else {
        tuVongs.push(null);
      }

    });

    this.dataNoiTrus = [];
    this.dataNoiTrus.push({
      type: 'column',
      data: nhapViens,
      name: 'Nhập viện',
      color: '#91dcea'
    },
      {
        type: 'column',
        data: dangDieuTris,
        name: 'Đang Điều trị',
        color: '#f28e2b'
      },
      {
        type: 'column',
        data: daRaViens,
        name: 'Đã ra viện',
        color: '#5fbb68'
      },
      {
        type: 'column',
        data: chuyenViens,
        name: 'Chuyển viện',
        color: '#f9d23c'
      },
      {
        type: 'column',
        data: tuVongs,
        name: 'Tử vong',
        color: '#eb1e2c'
      });
  }

  setDefaultChartDieuTriNoiTru() {
    this.dataNoiTrus = [];
    this.dataNoiTrus.push({
      type: 'column',
      data: []
    },
      {
        type: 'column',
        data: []
      },
      {
        type: 'column',
        data: []
      },
      {
        type: 'column',
        data: []
      },
      {
        type: 'column',
        data: []
      });
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.lamMoi();
    }
  }
}
