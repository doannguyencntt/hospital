import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import icBookmarks from '@iconify/icons-ic/twotone-bookmarks';
import emojioneUS from '@iconify/icons-emojione/flag-for-flag-united-states';
import emojioneVN from '@iconify/icons-emojione/flag-for-flag-vietnam';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { ConfigService } from '../../services/config.service';
import { map } from 'rxjs/operators';
import icQRCodeAdd from '@iconify/icons-ic/twotone-perm-camera-mic';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icAssignmentTurnedIn from '@iconify/icons-ic/twotone-assignment-turned-in';
import icBallot from '@iconify/icons-ic/twotone-ballot';
import icDescription from '@iconify/icons-ic/twotone-description';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import { NavigationService } from '../../services/navigation.service';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import { PopoverService } from '../../components/popover/popover.service';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import { BarcodeComponent } from 'src/app/shared/component/barcode/barcode/barcode.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { Router } from '@angular/router';
import medkit from '@iconify/icons-fa-solid/medkit';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';

import icCheckCircle from '@iconify/icons-ic/check-circle';
import icStore from '@iconify/icons-ic/store';
import icAccessible from '@iconify/icons-ic/accessible';
import icPayment from '@iconify/icons-ic/payment';
import icSend from '@iconify/icons-ic/send';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
@Component({
    selector: 'vex-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    subscription: Subscription;
    @Input() mobileQuery: boolean;

    @Input()
    @HostBinding('class.shadow-b')
    hasShadow: boolean;

    navigationItems = this.navigationService.items;

    isHorizontalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'horizontal'));
    isVerticalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
    isNavbarInToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
    isNavbarBelowToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));

    icAccessible = icAccessible;
    icCheckCircle = icCheckCircle;
    icStore = icStore;
    icPayment = icPayment;
    icSearch = icSearch;
    icBookmarks = icBookmarks;
    emojioneUS = emojioneUS;
    emojioneVN = emojioneVN;
    icMenu = icMenu;
    icPersonAdd = icPersonAdd;
    icQRCodeAdd = icQRCodeAdd;
    icAssignmentTurnedIn = icAssignmentTurnedIn;
    icBallot = icBallot;
    icDescription = icDescription;
    icAssignment = icAssignment;
    icReceipt = icReceipt;
    icDoneAll = icDoneAll;
    icArrowDropDown = icArrowDropDown;
    medkit = medkit;
    icSend = icSend;
    currentUser: any;
    idPhong: any;
    currentDepartment: any;
    currentUserInfo: string;

    constructor(private layoutService: LayoutService,
        private configService: ConfigService,
        private navigationService: NavigationService,
        private popoverService: PopoverService,
        private router: Router,
        private broadcastService: BroadcastService,
        private authService: AuthService,
        private dialog: MatDialog,
        private apiService: ApiService) { }

    ngOnInit() {
        this.currentUser = this.authService.getAccessUser();
        //check coi nó hoạt động phòng nào.
        this.idPhong = this.authService.getPhongLamViecId();
        if (this.currentUser != null) {
            this.apiService.post("User/HoatDongHienTaiNhanVien?idNhanVien=" + this.currentUser.Id).subscribe(
                (resultData: any) => {
                    if (resultData != 0 && this.idPhong != resultData) {
                        this.idPhong = resultData;
                        this.authService.setPhongLamViecId(resultData);
                    }
                    this.getThongTinPhongNhanVien();
                });
        }
        else {
            this.router.navigate(["/"]);
        }
    }

    getThongTinPhongNhanVien() {
        this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + this.currentUser.Id +
            "&idPhongBenhVien=" + this.idPhong).subscribe(
                (resultData: any) => {
                    let userInfo = resultData.User + " - " + `${resultData.Ten.toUpperCase().bold()}`;
                    if (resultData.IsChucDanhEmpty == false) {
                        userInfo += " - " + resultData.ChucDanh;
                    }
                    if (resultData.IsKhoaPhongEmpty == false) {
                        userInfo += " - " + resultData.TenKhoaPhong + " - " + resultData.MaKhoaPhong;
                    }
                    if (resultData.IsPhongEmpty == false) {
                        userInfo += " - " + `${( resultData.TenPhong + " - " + resultData.MaPhong).toUpperCase().bold()}`;
                    }
                    this.currentUserInfo = userInfo;
                    this.authService.setPhongLamViecId(resultData.PhongBenhVienId);
                }, err => {
                    this.authService.destroyAccessUser();
                    this.router.navigate(["/"]);
                });
    }

    openQuickpanel() {
        this.layoutService.openQuickpanel();
    }

    openSidenav() {
        this.layoutService.openSidenav();
    }

    openMegaMenu(origin: ElementRef | HTMLElement) {
        this.popoverService.open({
            content: MegaMenuComponent,
            origin,
            position: [
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },
            ]
        });
    }
    ngAfterContentInit() {
        this.subscription = this.broadcastService.on("ChuyenPhongThanhCong", (event) => {
            this.currentUser = this.authService.getAccessUser();
            this.idPhong = this.authService.getPhongLamViecId();
            this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + this.currentUser.Id +
                "&idPhongBenhVien=" + this.idPhong).subscribe(
                    (resultData: any) => {
                        let userInfo = resultData.User + " - " + resultData.Ten;
                        if (resultData.IsChucDanhEmpty == false) {
                            userInfo += " - " + resultData.ChucDanh;
                        }
                        if (resultData.IsKhoaPhongEmpty == false) {
                            userInfo += " - " + resultData.TenKhoaPhong + " - " + resultData.MaKhoaPhong;
                        }
                        if (resultData.IsPhongEmpty == false) {
                            userInfo += " - " + resultData.TenPhong + " - " + resultData.MaPhong;
                        }

                        this.currentUserInfo = userInfo;
                        this.authService.setPhongLamViecId(resultData.PhongBenhVienId);
                        this.dialog.closeAll();
                    });
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }
    openSearch() {
        this.layoutService.openSearch();
    }
    QuetMaQRCodeClick() {
        //console.log("QuetMaQRCodeClick");
        //this.shared.BarcodeActive();
        let elementBarcode: HTMLElement = document.getElementById('barcodeActive') as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    thaoTacNhanh(url: string) {
        this.router.navigate([url]);
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        //console.log(event);
        if (event.keyCode == 113 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('them-yeu-cau-tiep-nhan');
        }
        if (event.keyCode == 114 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('kham-benh');
        }
        if (event.keyCode == 115 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('phau-thuat-thu-thuat');
        }
        if (event.keyCode == 117 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('xac-nhan-bhyt/ngoai-tru');
        }
        if (event.keyCode == 118 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('danh-sach-thu-dich-vu');
        }
        if (event.keyCode == 119 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('nha-thuoc');
        }
        if (event.keyCode == 120 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('ket-qua-cdha-tdcn');
        }
        if (event.keyCode == 121 && !event.ctrlKey) {
            event.preventDefault();
            this.thaoTacNhanh('danh-sach-goi');
        }
    }

}
