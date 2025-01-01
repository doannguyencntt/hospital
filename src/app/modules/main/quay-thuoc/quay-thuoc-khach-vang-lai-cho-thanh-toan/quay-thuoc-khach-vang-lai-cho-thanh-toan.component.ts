import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ThemDuocPham, ThongTinDuocPham, ThongTinDonThuoc, KhachVangLai, ServiceId } from '../quay-thuoc.model';
import icDelete from '@iconify/icons-ic/delete';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { QuayThuocXacNhanInPopUpComponent } from '../quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component';
import { InBangThuTienPopUpComponent } from '../in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import icInfo from '@iconify/icons-ic/twotone-info';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { ThongTinPhieuPdfPopupComponent } from '../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
    selector: 'app-quay-thuoc-khach-vang-lai-cho-thanh-toan',
    templateUrl: './quay-thuoc-khach-vang-lai-cho-thanh-toan.component.html',
    styleUrls: ['./quay-thuoc-khach-vang-lai-cho-thanh-toan.component.scss']
})

export class QuayThuocKhachVangLaiChoThanhToanComponent implements OnInit {
    tongTien: number = 0;
    tongTienHienThi: number = 0;
    thongtinDonThuoc: ThongTinDonThuoc;
    icDelete = icDelete;
    documentType: DocumentType;
    validationErrors: any;
    validationErrorsThongTin: any;
    validationThuocErrors: any;
    themDuocPham: ThemDuocPham;
    lstthongTinDonThuoc: Array<ThongTinDuocPham>;
    validationThuThuocErrors: any[] = [];

    flagCheckSeletedTienMat = false;
    flagCheckSeletedChuyenKhoan = false;
    flagCheckSeletedPos = false;
    flagCheckSeletedSoTienCongNo = false;

    deleteItem: Array<ThongTinDuocPham>;
    snackBarOpen: any;
    benhNhanResultData: any;
    soLuongTonTrongKho: number = 0;
    maBN: number;
    tenBN: string;
    icInfo = icInfo;
    arrayThanhToans: any[] = [];
    arrayThanhToanstmp: any[] = [];
    selectItem: number[] = [];
    checkSeletedTienMat: boolean = false;
    checkSeletedChuyenKhoan: boolean = false;
    checkSeletedPos: boolean = false;
    isSelectingItem: boolean = false;

    public selectMoneyTienBNDua: any[] = null;
    public selectMoneyTienMat: any[] = null;
    public selectMoneyTienChuyenKhoan: any[] = null;
    public selectMoneyTienPos: any[] = null;
    public selectMoneySoTienCongNo: any[] = null;

    public setDefeautTienMat: any = [1];
    public showCanhBaoSoTienNhap: boolean = false;

    tongTienGrid = 0;

    @Output() danhSachChuaThanhToan = new EventEmitter<any>();
    @Output() valueChangeThuTien: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('duocphamCombobox', { static: false }) duocPhamCombobox: ComboboxComponent;
    constructor(
        private apiService: ApiService,
        private notificationService: NotificationService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private cdRef: ChangeDetectorRef,
        private router: Router) { }

    gridColumns: any[] = [];
    lstDonThuocMoiThem = Array<ThongTinDuocPham>();

    dataSourcedanhsachThuoc: any = {
        data: [],
        total: 0
    };

    public hinhThucThanhToan: any = [
        { KeyId: 1, DisplayName: "Tiền mặt", Selected: false, Change: false },
        { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
        { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
        { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
    ];

    @Input() thongTinKhachVangLai: KhachVangLai;
    @ViewChild('tabVangLai', { static: true }) tabVangLai: TabStripComponent;
    @Output() changeTab = new EventEmitter<any>();
    @Output() MaTiepNhanBenhNhanDaThuTien = new EventEmitter<any>();

    @ViewChild('footerTemplateTongTienDonThuoc', { static: true }) footerTemplateTongTienDonThuoc: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('footerTemplateDonGia', { static: true }) footerTemplateDonGia: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('gridDanhSachMuaThuoc', { static: true }) gridDanhSachMuaThuoc: GridComponent;
    @ViewChild('soLuonTemplate', { static: true }) soLuonTemplate: TemplateRef<any>;
    @Input() donThuocId: ServiceId;
    @Input() ttCheck: number;
    donThuocIds: string[] = [];

    ngOnInit() {
        this.documentType = DocumentType.QuayThuoc;
        this.thongtinDonThuoc = new ThongTinDonThuoc();

        this.lstDonThuocMoiThem = new Array<ThongTinDuocPham>();
        this.themDuocPham = new ThemDuocPham();
        this.deleteItem = new Array<ThongTinDuocPham>();
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 40, Sortable: false },
            { Field: "TenDuocPham", Title: "Tên Thuốc-Vật Tư", Width: 120, Sortable: false },
            // { Field: "MaHoatChat", Title: "Hoạt Chất", Width: 120, Sortable: false },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60, Sortable: false },
            { Field: "ViTri", Title: "Vị trí", Width: 120, Sortable: false },
            { Field: "SoLuongMua", Title: "SL Mua", Width: 90, Sortable: false, Template: this.soLuonTemplate },
            { Field: "DonGia", Title: "Đơn giá", Width: 100, Sortable: false, Template: this.donGiaTemplate, TemplateFooter: this.footerTemplateDonGia },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.footerTemplateTongTienDonThuoc },
            { Field: "Solo", Title: "Số lô", Width: 120, Sortable: false },
            { Field: "HanSuDungHientThi", Title: "Hạn sử dụng", Width: 100, Sortable: false },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
        ];

        this.flagCheckSeletedTienMat = true;
        this.thongtinDonThuoc.NgayThu = new Date();
        this.thongtinDonThuoc.NoiDungThu = "Thu tiền thuốc";
        this.thongtinDonThuoc.HinhThucThanhToan = [1];
        this.hinhThucThanhToan = [
            { KeyId: 1, DisplayName: "Tiền mặt", Selected: true, Change: false },
            { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
            { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
            { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
        ];;

        if (this.donThuocId.ToaThuoc != null) {
            this.getDonThuocChiTietCu();
        }

    }

    onSelectDuocPham(event) {
        if (event !== undefined) {
            this.apiService.post<Array<any>>('QuayThuoc/GetThongTinDuocPham?duocPhamId=' + event.KeyId + "&LoaiDuocPhamHoacVatTu=" + event.LoaiDuocPhamHoacVatTu).subscribe(
                resultData => {
                    debugger;
                    let soLuongTon = 0;
                    this.lstthongTinDonThuoc = resultData;
                    if (this.lstDonThuocMoiThem.length > 0) {
                        this.lstDonThuocMoiThem.forEach(x => {
                            if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                                soLuongTon = soLuongTon + x.SoLuongMua;
                            }
                        });
                    }

                    debugger;
                    this.themDuocPham.SoLuongTon = resultData.reduce((sum, item) => sum + item.SoLuongTon, 0) - soLuongTon;
                });

        } else {
            this.themDuocPham.SoLuongTon = null;
        }
    }

    delete(event: any) {
        if (event != undefined && event != null) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa thuốc/vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {


                    let i = 0;
                    let stt = event.STT;

                    for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                        if (this.dataSourcedanhsachThuoc.data[index].STT == event.STT) {
                            i = index;
                            this.soLuongTonTrongKho = this.dataSourcedanhsachThuoc.data[index].SoLuongTon;
                        }
                    }

                    this.dataSourcedanhsachThuoc.data[i].SoLuongDung = null;
                    this.dataSourcedanhsachThuoc.data[i].HighLightClass = null;
                    this.deleteItem.push(this.dataSourcedanhsachThuoc.data[i])
                    this.lstthongTinDonThuoc = new Array<ThongTinDuocPham>();
                    this.lstthongTinDonThuoc.push(this.dataSourcedanhsachThuoc.data[i])
                    this.dataSourcedanhsachThuoc.data.splice(i, 1);
                    let soLuongTon = 0;
                    let tenDuocPhamText = "";
                    let duocPhamId = 0;
                    if (this.deleteItem.length > 0) {
                        this.deleteItem.forEach(x => {
                            soLuongTon = soLuongTon + x.SoLuongMua;
                            tenDuocPhamText = x.TenDuocPham;
                            duocPhamId = x.DuocPhamId;
                        });
                    }

                    this.thongtinDonThuoc.BenhNhanDua = 0;
                    this.thongtinDonThuoc.TienTraLai = null;

                    this.lstDonThuocMoiThem = new Array<ThongTinDuocPham>();

                    for (let index0 = 0; index0 < i; index0++) {
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index0]);
                    }

                    for (let index1 = i; index1 < this.dataSourcedanhsachThuoc.data.length; index1++) {
                        this.dataSourcedanhsachThuoc.data[index1].STT = stt;
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index1]);
                        stt++;
                    }
                    this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                    this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);

                    // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                    //     this.thongtinDonThuoc.TienMat = this.tongTien;
                    // }

                    let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
                    if (items != null && items.length > 0) {
                        this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
                    }

                    if (this.themDuocPham.DuocPhamId == duocPhamId) {
                        this.apiService.post<Array<any>>("QuayThuoc/GetThongTinDuocPham?duocPhamId=" + event.DuocPhamId).subscribe(
                            resultData => {
                                let soLuongTon = 0;
                                if (this.dataSourcedanhsachThuoc.data.length != 0) {
                                    this.dataSourcedanhsachThuoc.data.forEach(x => {
                                        if (x.DuocPhamId == event.DuocPhamId) {
                                            soLuongTon = soLuongTon + x.SoLuongMua;
                                        }
                                    });
                                }
                                this.themDuocPham.SoLuongTon = resultData.reduce((sum, item) => sum + item.SoLuongTon, 0) - soLuongTon;
                            });
                    }
                    this.notificationService.showSuccess(
                        "Xóa thành công"
                    );
                    this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
                }
            })
        };
    }

    onChangeTienThoi() {
        if (this.thongtinDonThuoc.BenhNhanDua < this.tongTien) {
            this.thongtinDonThuoc.TienTraLai = null;
            return;
        }

        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.tongTien;
    }

    setLastItemDelete() {
        if (this.arrayThanhToanstmp.length > 1 && this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 2].length > this.arrayThanhToans.length) {
            var truoc = this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 2];
            var sau = this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 1];
            var valRemove = truoc.filter(arr1Item => !sau.includes(arr1Item));
            let val: number = 0;

            if (valRemove == 3) {
                val = this.thongtinDonThuoc.POS;
                this.thongtinDonThuoc.POS = 0;
            }
            if (valRemove == 2) {
                val = this.thongtinDonThuoc.ChuyenKhoan;
                this.thongtinDonThuoc.ChuyenKhoan = 0;
            }
            if (valRemove == 1) {
                val = this.thongtinDonThuoc.TienMat;
                this.thongtinDonThuoc.TienMat = 0;
            }
            let lastKeCuoi = this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 1];
            var kiemTraCuoiCongNoKhong = lastKeCuoi[lastKeCuoi.length - 1];

            if (kiemTraCuoiCongNoKhong === 4) {
                let kpCongNo = lastKeCuoi[lastKeCuoi.length - 2];
                if (kpCongNo == 2) {
                    this.thongtinDonThuoc.ChuyenKhoan += val;
                }
                if (kpCongNo == 3) {
                    this.thongtinDonThuoc.POS += val;
                }
                if (kpCongNo == 1) {
                    this.thongtinDonThuoc.TienMat += val;
                }
            }
            else {
                let kpCongNo = lastKeCuoi[lastKeCuoi.length - 1];
                if (kpCongNo == 2) {
                    this.thongtinDonThuoc.ChuyenKhoan += val;
                }
                if (kpCongNo == 3) {
                    this.thongtinDonThuoc.POS += val;
                }
                if (kpCongNo == 1) {
                    this.thongtinDonThuoc.TienMat += val;
                }
            }
        }
    }

    clearHinhThucThanhToan() {
        this.flagCheckSeletedTienMat = false;
        this.flagCheckSeletedChuyenKhoan = false;
        this.flagCheckSeletedPos = false;
        this.checkSeletedTienMat = false;
        this.checkSeletedChuyenKhoan = false;
        this.flagCheckSeletedSoTienCongNo = false;
        this.checkSeletedPos = false;
    }

    setLastItem() {
        this.arrayThanhToans.sort();
        let lastItem = this.arrayThanhToans[this.arrayThanhToans.length - 1];
        if (lastItem == 1) {
            this.checkSeletedTienMat = true;
            this.checkSeletedChuyenKhoan = true;
            this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.TienMat < 0) {
                this.thongtinDonThuoc.TienMat = 0;
            }
        }
        if (lastItem == 2) {
            this.checkSeletedChuyenKhoan = true;

            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                this.thongtinDonThuoc.ChuyenKhoan = 0;
            }
        }

        if (lastItem == 3) {
            this.checkSeletedPos = true;

            this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan;
            if (this.thongtinDonThuoc.POS < 0) {
                this.thongtinDonThuoc.POS = 0;
            }
        }

        if (lastItem == undefined) {
            this.thongtinDonThuoc.TienMat = 0;
            this.thongtinDonThuoc.POS = 0;
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }
    }

    setLastItemBangTien(input: any) {
        this.arrayThanhToans.sort();
        let lastItem = this.arrayThanhToans[this.arrayThanhToans.length - 1];
        if (lastItem == 1) {
            this.checkSeletedTienMat = true;
            this.checkSeletedChuyenKhoan = true;
            this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.TienMat < 0) {
                this.thongtinDonThuoc.TienMat = 0;
            }
        }
        if (lastItem == 2) {
            this.checkSeletedChuyenKhoan = true;

            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                this.thongtinDonThuoc.ChuyenKhoan = 0;
            }
        }

        if (lastItem == 3) {
            this.checkSeletedPos = true;

            this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - input;
            if (this.thongtinDonThuoc.POS < 0) {
                this.thongtinDonThuoc.POS = 0;
            }
        }

        if (lastItem == undefined) {
            this.thongtinDonThuoc.TienMat = 0;
            this.thongtinDonThuoc.POS = 0;
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }
    }

    changeSoTien(items: any) {
        switch (items) {
            case 1:
                this.thongtinDonThuoc.TienMat = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 3:
                this.thongtinDonThuoc.POS = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
                break;
        }
    }

    onValueChange(event: any, type: number) {
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.hinhThucThanhToan.forEach(item => {
            if (item.KeyId == type) {
                item.Change = true;
            }
        });
        var itemNotChanges = this.hinhThucThanhToan.filter(o => o.Selected == true && o.Change == false);
        if (itemNotChanges.length == 1) {
            this.changeSoTien(itemNotChanges[0].KeyId);
        }
        else {
            if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter(o => o.Selected == true).length == 2) {
                var items = this.hinhThucThanhToan.filter(o => o.Selected == true && o.KeyId != type);
                this.changeSoTien(items[0].KeyId);
            }
        }
        if (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo != this.tongTien) {
            this.showCanhBaoSoTienNhap = true;
        }
        else {

            this.showCanhBaoSoTienNhap = false;
        }
        this.changeTienTraLaiBenhNhan();
    }

    changeTienTraLaiBenhNhan() {
        if (this.thongtinDonThuoc.BenhNhanDua > this.thongtinDonThuoc.TienMat) {
            this.thongtinDonThuoc.TienTraLai =
                this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        } else {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }

    modelChangePos(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienPos = [total, 0];

        this.thongtinDonThuoc.POS = ev;
        this.onValueChange(ev, type);
    }

    modelChangeChuyenKhoan(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) !== 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienChuyenKhoan = [total, 0];
        this.thongtinDonThuoc.ChuyenKhoan = ev;
        this.onValueChange(ev, type);
    }

    modelChangeTienMat(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienMat = [total, 0];

        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.thongtinDonThuoc.TienMat = ev;
        this.onValueChange(ev, type);
    }

    modelChangeSoTienCongNo(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat);
        this.selectMoneySoTienCongNo = [total, 0];

        this.thongtinDonThuoc.SoTienCongNo = ev;
        this.onValueChange(ev, type);
    }

    modelChangeTienBNDua(input: any) {
        this.selectMoneyTienBNDua = [this.tongTien, 100000000];
        this.thongtinDonThuoc.TienTraLai = input - this.thongtinDonThuoc.TienMat;

        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }

    onChangeBenhNhanDua() {
        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }

    XacNhanIn(data: any) {
        this.showPopupLoadingIn();
        data.Hosting = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportExcel<any>('QuayThuoc/XacNhanIn', data).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    if (data.InBangKe == false && data.InPhieuThu == false) {
                        this.notificationService.showError('Không có phiếu in được chọn.');
                        this.closePopupLoadingData();
                    }
                    else {
                        this.dialog.open(ThongTinPhieuPdfPopupComponent, {
                            disableClose: true,
                            width: '1000px',
                            data: { Model: resultData }
                        }).afterClosed().subscribe(() => {
                            this.closePopupLoadingData();
                        });

                    }
                }
            },
            (err: ApiError) => {
                this.closePopupLoadingData();
                this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
    }

    shareData() {
        this.thongtinDonThuoc.DanhSachDonThuocs = [...this.dataSourcedanhsachThuoc.data];
        for (let index = 0; index < this.thongtinDonThuoc.DanhSachDonThuocs.length; index++) {
            this.thongtinDonThuoc.DanhSachDonThuocs[index].HighLightClass = null;
            if (this.thongtinDonThuoc.DanhSachDonThuocs[index].CheckedDefault == false) {
                this.thongtinDonThuoc.DanhSachDonThuocs.splice(index, 1)
                index = -1;
            }
        }
        return this.thongtinDonThuoc;
    }


    ThuTienVaXuatThuoc() {
        this.validationErrors = [];
        this.cdRef.detectChanges();

        if (this.dataSourcedanhsachThuoc.data === [] || this.dataSourcedanhsachThuoc.data.length == 0) {
            this.notificationService.showError("Người bệnh này không có thuốc nào để thanh toán.");
            return;
        }
        let index = this.dataSourcedanhsachThuoc.data.findIndex(x => x.LoaiDonThuoc == 1)
        if (index != -1) {
            this.notificationService.showError("Đang có thuốc bảo hiểm trong đơn thuốc.");
            return;
        }
        let indexHetThuoc = this.dataSourcedanhsachThuoc.data.findIndex(x => x.ThuocTrongKhoExit == true)
        if (indexHetThuoc != -1) {
            this.notificationService.showError("Thuốc trong kho không còn.");
            return;
        }
        if (this.thongtinDonThuoc.TienMat === null || this.thongtinDonThuoc.TienMat === undefined) {
            this.thongtinDonThuoc.TienMat = 0;
        }

        if (this.thongtinDonThuoc.ChuyenKhoan === null || this.thongtinDonThuoc.ChuyenKhoan === undefined) {
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }

        if (this.thongtinDonThuoc.POS === null || this.thongtinDonThuoc.POS === undefined) {
            this.thongtinDonThuoc.POS = 0;
        }

        if (this.thongtinDonThuoc.BenhNhanDua === null || this.thongtinDonThuoc.BenhNhanDua === undefined) {
            this.thongtinDonThuoc.BenhNhanDua = 0;
        }

        if (this.thongTinKhachVangLai === undefined) {
            this.thongTinKhachVangLai = new KhachVangLai();
        }

        if (this.setDefeautTienMat.length === 0) {
            this.validationErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán",
                Field: "HinhThucThanhToan",
            });
            return true;
        }

        var validationCheck = {
            HoTen: this.thongTinKhachVangLai.HoTen,
            NamSinh: this.thongTinKhachVangLai.NamSinh,
            HinhThucThanhToan: this.thongtinDonThuoc.HinhThucThanhToan,
            TienMat: this.thongtinDonThuoc.TienMat,
            ChuyenKhoan: this.thongtinDonThuoc.ChuyenKhoan,
            POS: this.thongtinDonThuoc.POS,
            SoTienCongNo: this.thongtinDonThuoc.SoTienCongNo,
            BenhNhanDua: this.thongtinDonThuoc.BenhNhanDua,
            NgayThu: this.thongtinDonThuoc.NgayThu,
            NoiDungThu: this.thongtinDonThuoc.NoiDungThu,
            TongTien: this.tongTien
        };
        this.validationErrors = [];
        this.validationErrorsThongTin = [];

        if (this.donThuocId.maBN != null) {
            this.maBN = this.donThuocId.maBN;
            this.apiService.post<any>("QuayThuoc/GetThongTinBenhNhan1?maBN=" + this.maBN).subscribe(  // to do maBn => benhNhanId
                (resultData) => {
                    this.thongTinKhachVangLai.Id = resultData.Id;
                    this.thongTinKhachVangLai.HoTen = resultData.HoTen;
                    this.thongTinKhachVangLai.GioiTinh = resultData.GioiTinh;
                    this.thongTinKhachVangLai.DiaChi = resultData.DiaChi;
                    this.thongTinKhachVangLai.DiaChiDayDu = resultData.DiaChiDayDu;
                    this.thongTinKhachVangLai.NamSinh = resultData.NamSinh;
                    this.thongTinKhachVangLai.PhuongXaId = resultData.PhuongXaId;
                    this.thongTinKhachVangLai.QuanHuyenId = resultData.QuanHuyenId;
                    this.thongTinKhachVangLai.SoDienThoai = resultData.SoDienThoai;
                    this.thongTinKhachVangLai.TinhThanhId = resultData.TinhThanhId;
                    this.thongTinKhachVangLai.Email = resultData.Email;
                });
            this.apiService.post<any>("QuayThuoc/GetTenBenhNhan?benhNhanId=" + this.maBN).subscribe( // to do maBn => benhNhanId
                resultData => {
                    this.tenBN = resultData;
                    validationCheck.HoTen = this.tenBN;
                    validationCheck.NamSinh = this.thongTinKhachVangLai.NamSinh;
                    this.thongtinDonThuoc.HoTenBenhNhan = this.tenBN;
                    this.thongTinKhachVangLai.HoTen = this.tenBN;
                    this.apiService.post<any>("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(
                        () => {
                            var khachVangLaiChoThanhToan = {
                                ThongTinKhach: this.thongTinKhachVangLai,
                                ThongTinThuChi: this.thongtinDonThuoc,
                                DanhSachDonThuoc: this.lstDonThuocMoiThem
                            };
                            let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();
                            this.dialog.open(ConfirmComponent, {
                                //disableClose: true,
                                width: '1000px',
                                data: {
                                    Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                                        chuInHoa.bold() + ' với số tiền là ' +
                                        this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                                }
                            }).afterClosed().subscribe(result => {
                                if (result == 'Yes') {
                                    this.apiService.post<any>("QuayThuoc/ThuTienKhachVangLaiVaXuatThuoc", khachVangLaiChoThanhToan).subscribe(
                                        resultData => {
                                            khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                                            this.lstDonThuocMoiThem = [];
                                            if (resultData.ThanhCong == false) {
                                                this.notificationService.showError(resultData.Error);
                                                for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                                    for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                                        if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                                            this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                                            this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                                        }
                                                    }
                                                }
                                            } else if (resultData.ThanhCong == true) {
                                                this.dataSourcedanhsachThuoc.data = [];

                                                if (this.gridDanhSachMuaThuoc !== undefined) {
                                                    this.gridDanhSachMuaThuoc.setDataSource();
                                                }

                                                this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                                this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                                                if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                                    this.thongtinDonThuoc.TienMat = this.tongTien;
                                                }
                                                this.benhNhanResultData = resultData;
                                                this.apiService.post<any>("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(
                                                    result1 => {
                                                        let dialogRef = this.dialog.open(QuayThuocXacNhanInPopUpComponent, {
                                                            disableClose: true,
                                                            width: '500px',
                                                            data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                                        }).afterClosed().subscribe(result => {
                                                            if (result.Response != "No answer") {
                                                                this.changeTab.emit(2);
                                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);

                                                                this.XacNhanIn(result);
                                                            }
                                                            else {
                                                                this.changeTab.emit(2);
                                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                            }
                                                        });
                                                    });
                                            }
                                        });
                                }
                            });
                        },
                        (err: ApiError) => {
                            this.validationErrors = err.ValidationErrors;
                            if (this.validationErrors.length !== 0) {
                                for (var i = 0; i < this.validationErrors.length; i++) {
                                    if (this.validationErrors[i].Field === "HoTen") {
                                        this.validationErrorsThongTin.push(this.validationErrors[i]);
                                    }

                                    if (this.validationErrors[i].Field === "NamSinh") {
                                        this.validationErrorsThongTin.push(this.validationErrors[i]);
                                    }
                                }
                            }
                            this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                            return;
                        });
                },
                () => { });

        } else {

            this.apiService.post<any>("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(
                () => {
                    var khachVangLaiChoThanhToan = {
                        ThongTinKhach: this.thongTinKhachVangLai,
                        ThongTinThuChi: this.thongtinDonThuoc,
                        DanhSachDonThuoc: this.lstDonThuocMoiThem
                    };
                    let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();

                    this.dialog.open(ConfirmComponent, {
                        width: '1000px',
                        data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn thu của người bệnh " + chuInHoa.bold() + " với số tiền là " + this.tongTien.toLocaleString("vi-VI").bold() + " đồng hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == 'Yes') {
                            this.apiService.post<any>("QuayThuoc/ThuTienKhachVangLaiVaXuatThuoc", khachVangLaiChoThanhToan).subscribe(
                                resultData => {
                                    khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                                    this.lstDonThuocMoiThem = [];
                                    if (resultData.ThanhCong == false) {
                                        this.notificationService.showError(resultData.Error);
                                        for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                            for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                                if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                                    this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                                    this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                                }
                                            }
                                        }
                                    } else if (resultData.ThanhCong == true) {
                                        this.reset();
                                        this.dataSourcedanhsachThuoc.data = [];

                                        if (this.gridDanhSachMuaThuoc !== undefined) {
                                            this.gridDanhSachMuaThuoc.setDataSource();
                                        }

                                        this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                        this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);

                                        if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                            this.thongtinDonThuoc.TienMat = this.tongTien;
                                        }

                                        this.benhNhanResultData = resultData;

                                        this.apiService.post<any>("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(
                                            result1 => {
                                                let dialogRef = this.dialog.open(QuayThuocXacNhanInPopUpComponent, {
                                                    disableClose: true,
                                                    width: '500px',
                                                    data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                                }).afterClosed().subscribe(result => {
                                                    if (result.Response != "No answer") {
                                                        this.changeTab.emit(2);
                                                        this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                        this.XacNhanIn(result);
                                                    }
                                                    else {
                                                        this.changeTab.emit(2);
                                                        this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                    }

                                                });

                                            });
                                    }
                                });
                        }
                    });
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;

                    if (this.validationErrors.length !== 0) {
                        for (var i = 0; i < this.validationErrors.length; i++) {
                            if (this.validationErrors[i].Field === "HoTen") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }

                            if (this.validationErrors[i].Field === "NamSinh") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }
                        }
                    }
                    this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                    return;
                });
        }
    }

    ThuTien() {
        this.validationErrors = [];
        this.cdRef.detectChanges();

        if (this.dataSourcedanhsachThuoc.data === [] || this.dataSourcedanhsachThuoc.data.length == 0) {
            this.notificationService.showError("Người bệnh này không có thuốc nào để thanh toán.");
            return;
        }
        let index = this.dataSourcedanhsachThuoc.data.findIndex(x => x.LoaiDonThuoc == 1)
        if (index != -1) {
            this.notificationService.showError("Đang có thuốc bảo hiểm trong đơn thuốc.");
            return;
        }
        let indexHetThuoc = this.dataSourcedanhsachThuoc.data.findIndex(x => x.ThuocTrongKhoExit == true)
        if (indexHetThuoc != -1) {
            this.notificationService.showError("Thuốc trong kho không còn.");
            return;
        }
        if (this.thongtinDonThuoc.TienMat === null || this.thongtinDonThuoc.TienMat === undefined) {
            this.thongtinDonThuoc.TienMat = 0;
        }

        if (this.thongtinDonThuoc.ChuyenKhoan === null || this.thongtinDonThuoc.ChuyenKhoan === undefined) {
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }

        if (this.thongtinDonThuoc.POS === null || this.thongtinDonThuoc.POS === undefined) {
            this.thongtinDonThuoc.POS = 0;
        }

        if (this.thongtinDonThuoc.BenhNhanDua === null || this.thongtinDonThuoc.BenhNhanDua === undefined) {
            this.thongtinDonThuoc.BenhNhanDua = 0;
        }

        if (this.thongTinKhachVangLai === undefined) {
            this.thongTinKhachVangLai = new KhachVangLai();
        }

        if (this.setDefeautTienMat.length === 0) {
            this.validationErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán",
                Field: "HinhThucThanhToan",
            });
            return true;
        }

        var validationCheck = {
            HoTen: this.thongTinKhachVangLai.HoTen,
            NamSinh: this.thongTinKhachVangLai.NamSinh,
            HinhThucThanhToan: this.thongtinDonThuoc.HinhThucThanhToan,
            TienMat: this.thongtinDonThuoc.TienMat,
            ChuyenKhoan: this.thongtinDonThuoc.ChuyenKhoan,
            POS: this.thongtinDonThuoc.POS,
            SoTienCongNo: this.thongtinDonThuoc.SoTienCongNo,
            BenhNhanDua: this.thongtinDonThuoc.BenhNhanDua,
            NgayThu: this.thongtinDonThuoc.NgayThu,
            NoiDungThu: this.thongtinDonThuoc.NoiDungThu,
            TongTien: this.tongTien
        };
        this.validationErrors = [];
        this.validationErrorsThongTin = [];

        if (this.donThuocId.maBN != null) {
            this.maBN = this.donThuocId.maBN;
            this.apiService.post<any>("QuayThuoc/GetThongTinBenhNhan1?maBN=" + this.maBN).subscribe(  // to do maBn => benhNhanId
                (resultData) => {
                    this.thongTinKhachVangLai.Id = resultData.Id;
                    this.thongTinKhachVangLai.HoTen = resultData.HoTen;
                    this.thongTinKhachVangLai.GioiTinh = resultData.GioiTinh;
                    this.thongTinKhachVangLai.DiaChi = resultData.DiaChi;
                    this.thongTinKhachVangLai.DiaChiDayDu = resultData.DiaChiDayDu;
                    this.thongTinKhachVangLai.NamSinh = resultData.NamSinh;
                    this.thongTinKhachVangLai.PhuongXaId = resultData.PhuongXaId;
                    this.thongTinKhachVangLai.QuanHuyenId = resultData.QuanHuyenId;
                    this.thongTinKhachVangLai.SoDienThoai = resultData.SoDienThoai;
                    this.thongTinKhachVangLai.TinhThanhId = resultData.TinhThanhId;
                    this.thongTinKhachVangLai.Email = resultData.Email;
                });
            this.apiService.post<any>("QuayThuoc/GetTenBenhNhan?benhNhanId=" + this.maBN).subscribe( // to do maBn => benhNhanId
                resultData => {
                    this.tenBN = resultData;
                    validationCheck.HoTen = this.tenBN;
                    validationCheck.NamSinh = this.thongTinKhachVangLai.NamSinh;
                    this.thongtinDonThuoc.HoTenBenhNhan = this.tenBN;
                    this.thongTinKhachVangLai.HoTen = this.tenBN;
                    this.apiService.post<any>("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(
                        () => {
                            var khachVangLaiChoThanhToan = {
                                ThongTinKhach: this.thongTinKhachVangLai,
                                ThongTinThuChi: this.thongtinDonThuoc,
                                DanhSachDonThuoc: this.lstDonThuocMoiThem
                            };
                            let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();
                            this.dialog.open(ConfirmComponent, {
                                //disableClose: true,
                                width: '1000px',
                                data: {
                                    Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                                        chuInHoa.bold() + ' với số tiền là ' +
                                        this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                                }
                            }).afterClosed().subscribe(result => {
                                if (result == 'Yes') {
                                    this.apiService.post<any>("QuayThuoc/ThuTienKhachVangLai", khachVangLaiChoThanhToan).subscribe(
                                        resultData => {
                                            khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                                            this.lstDonThuocMoiThem = [];
                                            if (resultData.ThanhCong == false) {
                                                this.notificationService.showError(resultData.Error);
                                                for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                                    for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                                        if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                                            this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                                            this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                                        }
                                                    }
                                                }
                                            } else if (resultData.ThanhCong == true) {
                                                this.dataSourcedanhsachThuoc.data = [];

                                                if (this.gridDanhSachMuaThuoc !== undefined) {
                                                    this.gridDanhSachMuaThuoc.setDataSource();
                                                }

                                                this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                                this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                                                if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                                    this.thongtinDonThuoc.TienMat = this.tongTien;
                                                }
                                                this.benhNhanResultData = resultData;
                                                this.apiService.post<any>("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(
                                                    result1 => {
                                                        let dialogRef = this.dialog.open(QuayThuocXacNhanInPopUpComponent, {
                                                            disableClose: true,
                                                            width: '500px',
                                                            data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                                        }).afterClosed().subscribe(result => {
                                                            if (result.Response != "No answer") {
                                                                this.changeTab.emit(2);
                                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                                this.XacNhanIn(result);
                                                            }
                                                            else {
                                                                this.changeTab.emit(2);
                                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                            }
                                                        });
                                                    });
                                            }
                                        });
                                }
                            });
                        },
                        (err: ApiError) => {
                            this.validationErrors = err.ValidationErrors;
                            if (this.validationErrors.length !== 0) {
                                for (var i = 0; i < this.validationErrors.length; i++) {
                                    if (this.validationErrors[i].Field === "HoTen") {
                                        this.validationErrorsThongTin.push(this.validationErrors[i]);
                                    }

                                    if (this.validationErrors[i].Field === "NamSinh") {
                                        this.validationErrorsThongTin.push(this.validationErrors[i]);
                                    }
                                }
                            }
                            this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                            return;
                        });
                },
                () => { });

        } else {

            this.apiService.post<any>("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(
                () => {
                    var khachVangLaiChoThanhToan = {
                        ThongTinKhach: this.thongTinKhachVangLai,
                        ThongTinThuChi: this.thongtinDonThuoc,
                        DanhSachDonThuoc: this.lstDonThuocMoiThem
                    };
                    let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();

                    this.dialog.open(ConfirmComponent, {
                        width: '1000px',
                        data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn thu của người bệnh " + chuInHoa.bold() + " với số tiền là " + this.tongTien.toLocaleString("vi-VI").bold() + " đồng hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == 'Yes') {
                            this.apiService.post<any>("QuayThuoc/ThuTienKhachVangLai", khachVangLaiChoThanhToan).subscribe(
                                resultData => {
                                    khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                                    this.lstDonThuocMoiThem = [];
                                    if (resultData.ThanhCong == false) {
                                        this.notificationService.showError(resultData.Error);
                                        for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                            for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                                if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                                    this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                                    this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                                }
                                            }
                                        }
                                    } else if (resultData.ThanhCong == true) {
                                        this.reset();
                                        this.dataSourcedanhsachThuoc.data = [];

                                        if (this.gridDanhSachMuaThuoc !== undefined) {
                                            this.gridDanhSachMuaThuoc.setDataSource();
                                        }

                                        this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                        this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);

                                        if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                            this.thongtinDonThuoc.TienMat = this.tongTien;
                                        }

                                        this.benhNhanResultData = resultData;

                                        this.apiService.post<any>("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(
                                            result1 => {
                                                let dialogRef = this.dialog.open(QuayThuocXacNhanInPopUpComponent, {
                                                    disableClose: true,
                                                    width: '500px',
                                                    data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                                }).afterClosed().subscribe(result => {
                                                    if (result.Response != "No answer") {
                                                        this.changeTab.emit(2);
                                                        this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                        this.XacNhanIn(result);
                                                    }
                                                    else {
                                                        this.changeTab.emit(2);
                                                        this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                    }

                                                });

                                            });
                                    }
                                });
                        }
                    });
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;

                    if (this.validationErrors.length !== 0) {
                        for (var i = 0; i < this.validationErrors.length; i++) {
                            if (this.validationErrors[i].Field === "HoTen") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }

                            if (this.validationErrors[i].Field === "NamSinh") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }
                        }
                    }
                    this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                    return;
                });
        }
    }

    showError(message: string) {
        this.showIt(message);
    }

    private showIt(message: string) {
        if (this.snackBarOpen != null) {
            this.snackBarOpen.dismiss();
        }
        this.snackBarOpen = this.snackBar.open(message, 'Đóng', {
            duration: 7000,
            horizontalPosition: 'right'
        });
    }

    them1() {
        this.validationThuocErrors = [];
        if (this.themDuocPham.DuocPhamId == null) {
            this.validationThuocErrors.push({ "Message": "Dược phẩm yêu cầu nhập", "Field": "DuocPhamId" });
        }
        if (this.themDuocPham.SoLuong == null) {
            this.validationThuocErrors.push({ "Message": "Số lượng yêu cầu nhập", "Field": "SoLuong" });
        }
        if (this.themDuocPham.SoLuong == 0) {
            this.validationThuocErrors.push({ "Message": "Số lượng phải lớn hơn 0", "Field": "SoLuong" });
        }
        if (this.themDuocPham.SoLuongTon < this.themDuocPham.SoLuong) {
            this.validationThuocErrors.push({ "Message": "Số lượng phải nhỏ hơn tồn kho", "Field": "SoLuong" });
        }
        if (this.validationThuocErrors.length > 0) {
            return;
        }
        let soLuongDaMua = 0;
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = null;
        if (this.lstDonThuocMoiThem.length > 0) {
            this.lstDonThuocMoiThem.forEach(x => {
                if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                    soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                }
            });
        }
        if (this.themDuocPham.SoLuongTon >= this.themDuocPham.SoLuong) {
            let stt = 1;
            let idNew = 1;
            if (this.dataSourcedanhsachThuoc.data.length > 0) {
                stt = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].STT + 1;
                idNew = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].Id + 1;
            }

            let count = this.themDuocPham.SoLuong;
            let tamp = this.lstthongTinDonThuoc;
            if (this.lstDonThuocMoiThem != undefined || this.lstDonThuocMoiThem != null) {

                for (let jisoo = 0; jisoo < this.lstDonThuocMoiThem.length; jisoo++) {
                    for (let jihoo = 0; jihoo < this.lstthongTinDonThuoc.length; jihoo++) {
                        if (this.lstDonThuocMoiThem[jisoo].Solo == this.lstthongTinDonThuoc[jihoo].Solo) {
                            this.lstthongTinDonThuoc[jihoo].SoLuongTon = this.lstthongTinDonThuoc[jihoo].SoLuongTon - this.lstDonThuocMoiThem[jisoo].SoLuongMua;
                            tamp = this.lstthongTinDonThuoc;
                        }
                    }
                }
            }
            console.log("lusc them :", this.lstthongTinDonThuoc)
            for (let index = 0; index < tamp.length; index++) {
                if (tamp[index].SoLuongTon > 0) {
                    if (count != 0) {
                        let item = new ThongTinDuocPham();
                        if (count <= this.lstthongTinDonThuoc[index].SoLuongTon) {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = count;
                            item.STT = stt;
                            item.Id = idNew;
                            item.CheckedDefault = true;
                            item.isNew = true;
                            item.BacSiKeToa = "Nhà Thuốc";
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.LoaiDuocPhamHoacVatTu1 = item.LoaiDuocPhamHoacVatTu;
                            this.lstDonThuocMoiThem.push(item);
                            this.lstthongTinDonThuoc[index].SoLuongTon = this.lstthongTinDonThuoc[index].SoLuongTon - count;
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            count = 0;
                        } else {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = this.lstthongTinDonThuoc[index].SoLuongTon;
                            item.ThanhTien = item.SoLuongMua * item.DonGia
                            item.STT = stt;
                            item.Id = idNew;
                            item.isNew = true;
                            item.CheckedDefault = true;
                            item.BacSiKeToa = "Nhà Thuốc";
                            item.LoaiDuocPhamHoacVatTu1 = item.LoaiDuocPhamHoacVatTu;
                            count = count - this.lstthongTinDonThuoc[index].SoLuongTon;
                            this.lstDonThuocMoiThem.push(item);
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            this.lstthongTinDonThuoc.splice(index, 1)
                            index = -1;
                        }
                        this.gridDanhSachMuaThuoc.setSelectCheckbox(idNew);
                        idNew++;
                        stt++;
                    } else {
                        break;
                    }
                }

            }

            if (this.lstDonThuocMoiThem.length > 0) {
                this.lstDonThuocMoiThem.forEach(x => {
                    if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                        soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                    }
                });
            }

            this.themDuocPham.SoLuongTon = this.themDuocPham.SoLuongTon - this.themDuocPham.SoLuong;
            this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
            this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            // if (this.thongtinDonThuoc.HinhThucThanhToan.length == 1 && this.thongtinDonThuoc.HinhThucThanhToan[0] == 1) {
            //     this.thongtinDonThuoc.TienMat = this.tongTien;
            // }

            let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
            if (items != null && items.length > 0) {
                this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
            }

            this.themDuocPham = new ThemDuocPham();
        } else {
            this.notificationService.showError("Số lượng bạn nhập lớn hơn số lượng tồn");
        }

       
        this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
    }

    danhSachXemTruocBangKeThuocVaVatTu(danhSachChuaThanhToans: any) {
        // lý do trả về danhSachChuaThanhToan cho quay-thuoc-mua-thuoc.component
        // để xem trước bảng kê
        this.danhSachChuaThanhToan.emit(danhSachChuaThanhToans);
    }

    getDonThuocChiTietCu() {
        let toaThuocCuId: string[] = [];
        if (typeof (this.donThuocId.ToaThuoc) == 'string') {
            toaThuocCuId.push(this.donThuocId.ToaThuoc);
        } else {
            this.donThuocId.ToaThuoc.forEach(element => {
                toaThuocCuId.push(element)
            });
        }
        this.apiService.post<any>("QuayThuoc/GetDonthuocChiTietCu", { ToaThuoc: toaThuocCuId }).subscribe(
            resultData => {

                this.validationThuocErrors = [];
                let soLuongDaMua = 0;
                if (this.lstDonThuocMoiThem.length > 0) {
                    this.lstDonThuocMoiThem.forEach(x => {
                        if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                            soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                        }
                    });
                }
                if (this.themDuocPham.SoLuongTon >= this.themDuocPham.SoLuong) {
                    let stt = 1;
                    let idNew = 1;
                    if (this.dataSourcedanhsachThuoc.data.length > 0) {
                        stt = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].STT + 1;
                        idNew = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].Id + 1;
                    }


                    for (let index = 0; index < resultData.length; index++) {
                        let count = this.themDuocPham.SoLuong;
                        if (count != 0) {
                            let item = new ThongTinDuocPham();
                            if (count <= resultData[index].SoLuongTon) {
                                item = Object.assign({}, resultData[index]);
                                count = item.SoLuongMua;
                                item.STT = stt;
                                item.Id = idNew;
                                item.CheckedDefault = true;
                                item.isNew = true;
                                item.BacSiKeToa = "Nhà Thuốc";
                                item.ThanhTien = item.SoLuongMua * item.DonGia
                                this.lstDonThuocMoiThem.push(item);
                                resultData[index].SoLuongTon = resultData[index].SoLuongTon - count;
                                this.dataSourcedanhsachThuoc.data.push(item);
                                count = 0;
                            } else {
                                item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                                item.SoLuongMua = resultData[index].SoLuongTon;
                                item.ThanhTien = item.SoLuongMua * item.DonGia
                                item.STT = stt;
                                item.Id = idNew;
                                item.isNew = true;
                                item.CheckedDefault = true;
                                item.BacSiKeToa = "Nhà Thuốc";
                                count = count - resultData[index].SoLuongTon;
                                this.lstDonThuocMoiThem.push(item);
                                this.dataSourcedanhsachThuoc.data.push(item);
                                resultData.splice(index, 1)
                                index = -1;
                            }
                            this.gridDanhSachMuaThuoc.setSelectCheckbox(idNew);
                            idNew++;
                            stt++;
                        } else {
                            break;
                        }
                    }

                    if (this.lstDonThuocMoiThem.length > 0) {
                        this.lstDonThuocMoiThem.forEach(x => {
                            if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                                soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                            }
                        });
                    }

                    this.themDuocPham.SoLuongTon = this.themDuocPham.SoLuongTon - this.themDuocPham.SoLuong;
                    this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                    this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                    if (this.thongtinDonThuoc.HinhThucThanhToan.length == 1 && this.thongtinDonThuoc.HinhThucThanhToan[0] == 1) {
                        this.thongtinDonThuoc.TienMat = this.tongTien;
                    }
                    this.themDuocPham = new ThemDuocPham();
                } else {
                    this.notificationService.showError("Số lượng bạn nhập lớn hơn số lượng tồn");
                }
                // });
            },
            () => { });
    }

    reset() {
        this.thongtinDonThuoc.HinhThucThanhToan = [1];
        this.thongtinDonThuoc.TienMat = null;
        this.thongtinDonThuoc.BenhNhanDua = null;
        this.thongtinDonThuoc.TienTraLai = null;
        this.thongtinDonThuoc.NgayThu = new Date();
        this.thongtinDonThuoc.NoiDungThu = "Thu tiền thuốc";
    }

    onKeyEnterAddItem(event: any) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {

                this.them1();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }

    openCombobox(event: any) {
        if (event) {
            this.isSelectingItem = true;
        }
        else {
            this.isSelectingItem = false;
        }
    }

    onKey(event: any) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.them1();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }

    modelChangeSoLuongMua(ev: any, dsQuayThuocs: any) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === dsQuayThuocs.Id) {
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = 0;
                    this.dataSourcedanhsachThuoc.data[index].ThanhTien = ev * this.dataSourcedanhsachThuoc.data[index].DonGia;
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan = this.dataSourcedanhsachThuoc.data[index].ThanhTien;
                    if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus != null) {
                        if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length > 0) {
                            // tslint:disable-next-line: prefer-for-of
                            for (let i = 0; i < this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length; i++) {
                                this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[i].SoTienCongNoChoThu = 0;
                                this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                            }
                        }
                    }
                }
            }
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);

        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }

        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }

        this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
    }

    bindHinhThucThanhToanChangeGrid(item: any) {
        this.validationErrors = [];
        this.cdRef.detectChanges();

        this.clearHinhThucThanhToan();
        this.defeautSoTien();

        switch (item) {
            case 1:
                this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                this.flagCheckSeletedTienMat = true;
                if (this.thongtinDonThuoc.TienMat < 0) {
                    this.thongtinDonThuoc.TienMat = 0;
                }
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                this.flagCheckSeletedChuyenKhoan = true;
                if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                    this.thongtinDonThuoc.ChuyenKhoan = 0;
                }
                break;
            case 3:
                this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.SoTienCongNo;
                this.flagCheckSeletedPos = true;
                if (this.thongtinDonThuoc.POS < 0) {
                    this.thongtinDonThuoc.POS = 0;
                }
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
                this.flagCheckSeletedSoTienCongNo = true;
                if (this.thongtinDonThuoc.SoTienCongNo < 0) {
                    this.thongtinDonThuoc.SoTienCongNo = 0;
                }
                break;
        }
    }

    defeautSoTien() {
        this.thongtinDonThuoc.TienMat = 0;
        this.thongtinDonThuoc.POS = 0;
        this.thongtinDonThuoc.SoTienCongNo = 0;
        this.thongtinDonThuoc.ChuyenKhoan = 0;
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = 0;
    }

    tinhTienChoPhuongThucThanhToan(item: any) {
        switch (item) {
            case 1:
                this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.TienMat < 0) {
                    this.thongtinDonThuoc.TienMat = 0;
                }
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                    this.thongtinDonThuoc.ChuyenKhoan = 0;
                }
                break;
            case 3:
                this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.POS < 0) {
                    this.thongtinDonThuoc.POS = 0;
                }
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
                if (this.thongtinDonThuoc.SoTienCongNo < 0) {
                    this.thongtinDonThuoc.SoTienCongNo = 0;
                }
                break;
        }
    }

    ChangeHinhThucThanhToan(event: any) {
        this.validationErrors = [];
        this.cdRef.detectChanges();

        this.clearHinhThucThanhToan();
        this.defeautSoTien();
        this.showCanhBaoSoTienNhap = false;

        var items = this.hinhThucThanhToan.filter((item) => item.Selected == true);

        if (items != null && items.length === 1) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }

        event.forEach((element) => {
            switch (element) {
                case 1:
                    this.flagCheckSeletedTienMat = true;
                    break;
                case 2:
                    this.flagCheckSeletedChuyenKhoan = true;
                    break;
                case 3:
                    this.flagCheckSeletedPos = true;
                    break;
                case 4:
                    this.flagCheckSeletedSoTienCongNo = true;
                    break;
            }
        });

        this.hinhThucThanhToan.forEach(item => { item.Change = false; });
        this.hinhThucThanhToan.forEach(item => {
            if (event.filter(o => o == item.KeyId).length > 0) {
                item.Selected = true;
                if (event.length == 1) {
                    switch (item.KeyId) {
                        case 1:
                            this.thongtinDonThuoc.TienMat = this.tongTien;
                            break;
                        case 2:
                            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien;
                            break;
                        case 3:
                            this.thongtinDonThuoc.POS = this.tongTien;
                            break;
                        case 4:
                            this.thongtinDonThuoc.SoTienCongNo = this.tongTien;
                            break;
                    }
                }
            }
            else {
                item.Selected = false;
            }
        });

        this.cdRef.detectChanges();
    }
    showPopupLoadingIn() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }
}
