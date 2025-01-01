import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel } from '../../dieu-tri-noi-tru.model';
import { BsDieuTriComponent } from './bs-dieu-tri/bs-dieu-tri.component';
import { CapGiuongComponent } from './cap-giuong/cap-giuong.component';
import { ChuyenKhoaComponent } from './chuyen-khoa/chuyen-khoa.component';
import { ListTabPhongGiuongBacSiDieuTri } from './phong-giuong-bs-dieu-tri.model';

declare var $: any;

@Component({
    selector: 'app-phong-giuong-bs-dieu-tri',
    templateUrl: './phong-giuong-bs-dieu-tri.component.html',
    styleUrls: ['./phong-giuong-bs-dieu-tri.component.scss']
})

export class PhongGiuongBsDieuTriComponent implements OnInit {
    baseRoute: string = "";
    validationErrors: any[] = [];
    yeuCauTiepNhanId: number = 0;
    // isDaChiDinhBacSiVaGiuong: boolean = false;
    listTabPhongGiuongBacSiDieuTri: ListTabPhongGiuongBacSiDieuTri = new ListTabPhongGiuongBacSiDieuTri();

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Input() IsBenhAnSoSinh: boolean = false;

    // @Output() outputIsDaChiDinhBacSiVaGiuongChanged = new EventEmitter();
    @Output() outputIsDaChiDinhBacSiChanged = new EventEmitter();
    @Output() outputIsDaChiDinhGiuongChanged = new EventEmitter();
    @Output() outputKhoaDieuTriChanged = new EventEmitter();

    @ViewChild(BsDieuTriComponent, { static: false }) bsDieuTriComponentShared: BsDieuTriComponent;
    @ViewChild(CapGiuongComponent, { static: false }) capGiuongComponentShared: CapGiuongComponent;
    @ViewChild(ChuyenKhoaComponent, { static: false }) chuyenKhoaComponentShared: ChuyenKhoaComponent;

    constructor(private route: ActivatedRoute, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        // this.getIsDaChiDinhBacSiVaGiuong();
    }

    // getIsDaChiDinhBacSiVaGiuong() {
    //     this.apiService.get<any>(`DieuTriNoiTru/IsDaChiDinhBacSiVaGiuong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
    //         this.isDaChiDinhBacSiVaGiuong = res;
    //         this.outputIsDaChiDinhBacSiVaGiuongChanged.emit(res);
    //     }, (err: ApiError) => {
    //         err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
    //     });
    // }

    // outputBacSiVaGiuongChanged(evt) {
    //     if(evt) {
    //         this.getIsDaChiDinhBacSiVaGiuong();
    //     }
    // }

    outputEkipDieuTriChanged(evt) {
        if(evt) {
            this.apiService.get<any>(`DieuTriNoiTru/IsDaChiDinhBacSi?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                this.outputIsDaChiDinhBacSiChanged.emit(res);
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    outputGiuongChanged(evt) {
        if(evt) {
            this.apiService.get<any>(`DieuTriNoiTru/IsDaChiDinhGiuong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                this.outputIsDaChiDinhGiuongChanged.emit(res);
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    outputKhoaChanged(evt) {
        if(evt) {
            this.apiService.get<any>(`DieuTriNoiTru/GetCurrentNoiTruKhoaPhongDieuTri?noiTruBenhAnId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                this.outputKhoaDieuTriChanged.emit(res);
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    changeTab(evt) {
        if (evt.index === 0) {
            this.deselectTab();
            this.listTabPhongGiuongBacSiDieuTri.tabBsDieuTriSelected = true;
        }
        if (evt.index === 1) {
            this.deselectTab();
            this.listTabPhongGiuongBacSiDieuTri.tabCapGiuongSelected = true;
        }
        if (evt.index === 2) {
            this.deselectTab();
            this.listTabPhongGiuongBacSiDieuTri.tabChuyenKhoaSelected = true;
        }
    }

    deselectTab() {
        this.listTabPhongGiuongBacSiDieuTri.tabBsDieuTriSelected = false;
        this.listTabPhongGiuongBacSiDieuTri.tabCapGiuongSelected = false;
        this.listTabPhongGiuongBacSiDieuTri.tabChuyenKhoaSelected = false;
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.key === 'Enter' && !this.dieuTriNoiTruModel.KetThucBenhAn) {
            if (this.listTabPhongGiuongBacSiDieuTri.tabBsDieuTriSelected) {
                event.preventDefault();
                this.bsDieuTriComponentShared.evtThemEkipDieuTri();
            } else if (this.listTabPhongGiuongBacSiDieuTri.tabCapGiuongSelected) {
                event.preventDefault();
                this.capGiuongComponentShared.evtThemCapGiuong();
            } else if (this.listTabPhongGiuongBacSiDieuTri.tabChuyenKhoaSelected) {
                event.preventDefault();
                this.chuyenKhoaComponentShared.evtThemChuyenKhoa();
            }
        }

        // ctr + s
        if (event.ctrlKey && event.keyCode == 83) {
            if (this.listTabPhongGiuongBacSiDieuTri.tabBsDieuTriSelected) {
                event.preventDefault();
                this.bsDieuTriComponentShared.evtSuaEkipDieuTri();
            } else if (this.listTabPhongGiuongBacSiDieuTri.tabCapGiuongSelected) {
                event.preventDefault();
                this.capGiuongComponentShared.evtSuaCapGiuong();
            } else if (this.listTabPhongGiuongBacSiDieuTri.tabChuyenKhoaSelected) {
                event.preventDefault();
                this.chuyenKhoaComponentShared.evtSuaChuyenKhoa();
            }
        }
    }
}
