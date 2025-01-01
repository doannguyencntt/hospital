import { Component, OnInit,Input } from '@angular/core';
import { danhSachThuoc } from '../quay-thuoc.model';
import { ApiService } from 'src/app/core/services/api.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-quay-thuoc-khach-vang-lai-cho-xuat-thuoc',
    templateUrl: './quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.html',
    styleUrls: ['./quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.scss']
})
export class QuayThuocKhachVangLaiChoXuatThuocComponent implements OnInit {
    gridColumns: any[] = [];
    danhSachThuoc: danhSachThuoc;
    dataSourcedanhsachThuoc: any = {
        data: [],
        total: 0
    }  
    @Input() ttCheck: number;
    @Input() ThongTinBenhNhanDaThuTienData : any;
    constructor(private route: ActivatedRoute, private dialog: MatDialog, private apiService: ApiService, private router: Router, private notificationService: NotificationService) { }

    ngOnInit() {
        
     
        this.danhSachThuoc = new danhSachThuoc();
        this.gridColumns = [
            { Field: "TenDuocPham", Title: "Tên thuốc", MinWidth: 120, Sortable: false },
            { Field: "MaHoatChat", Title: "Hoạt chất", Width: 120, Sortable: false },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60, Sortable: false },
            { Field: "ViTri", Title: "Vị trí", Width: 120, Sortable: false },
            { Field: "SoLuongMua", Title: "Số lượng", Width: 120, Sortable: false },
            { Field: "HanSuDungHientThi", Title: "Hạn sử dụng", Width: 120, Sortable: false }
        ];
        if(this.ThongTinBenhNhanDaThuTienData != undefined)
        {
            this.apiService.post<Array<any>>("QuayThuoc/GetDanhSachXuatThuocKhongBHYT?tiepNhanId=" + this.ThongTinBenhNhanDaThuTienData.YeuCauTiepNhanId).subscribe(
                resultData => {
                    this.dataSourcedanhsachThuoc.data = resultData;
                });
        }
        else{
            this.dataSourcedanhsachThuoc.data = [];
        }
        
    }
    ngOnChanges(event: any){
        this.ngOnInit();
    }
    GuiData() {
         this.danhSachThuoc.Id = this.ThongTinBenhNhanDaThuTienData.YeuCauTiepNhanId;
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn xuất đơn thuốc này?" }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.post<any>("QuayThuoc/XuatDonThuocBHYT", this.danhSachThuoc).subscribe(
                    resultData => {
                        if (resultData != null && resultData != undefined && resultData != "") {
                            this.notificationService.showError(resultData);
                        } else {
                            if (this.ttCheck == 1) {
                                this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
                            }
                            if (this.ttCheck == 2) {
                                this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
                            }
                            if (this.ttCheck == 3) {
                                this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
                            }
                        }


                    },
                    (err: any) => {

                    });
            }
        });
    }
}
