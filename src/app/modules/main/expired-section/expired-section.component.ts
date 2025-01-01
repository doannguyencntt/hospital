import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { HoatDongNhanVien } from 'src/app/shared/models/common.model';

@Component({
    selector: 'app-expired-section',
    templateUrl: './expired-section.component.html',
    styleUrls: ['./expired-section.component.scss']
})
export class ExpiredSectionComponent implements OnInit {

    login = {} as Login;
    loading = false;
    menuItems: any[];
    menuPermissionItems: any;
    validationErrors: any[] = [];
    hoatDongNhanVien = {} as HoatDongNhanVien;

    constructor(private authService: AuthService, private cdRef: ChangeDetectorRef, private router: Router,
        private dialogRef: MatDialogRef<ExpiredSectionComponent>) { }

    ngOnInit() {
        let rememberMe = LocalStorageHelper.getRememberMe<Login>();
        if (rememberMe !== undefined && rememberMe != null) {
            this.login = rememberMe;
        }
    }

    onKeySignIn(input: any) {
        if (input.keyCode === 13) {
            this.signin(false);
        }
    }

    signin(isRefresh: boolean = true) {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.userName === '' || this.login.userName === undefined) {
            this.validationErrors.push({ "Message": CommonService.format(SystemMessage.ObjectRequirement, ["Số điện thoại"]), "Field": "UserName" });
        }
        if (this.login.password === '' || this.login.password === undefined) {
            this.validationErrors.push({ "Message": CommonService.format(SystemMessage.ObjectRequirement, ["Mật khảu"]), "Field": "Password" });
        }
        if (this.validationErrors.length > 0) {
            return;
        }
        this.loading = true;
        this.ProcessUsernameCharacter();
        this.authService.login(this.login)
            .subscribe(() => {
                LocalStorageHelper.setRememberMe(this.login);
                this.loading = false;

                var auth = this.authService.getAccessUser();
                if (auth.PhongBenhVienId != 0) {
                    this.authService.setPhongLamViecId(auth.PhongBenhVienId);
                    this.luuHoatDongPhongNhanVien();
                }

                this.dialogRef.close();
                if (isRefresh) {
                    var currentRoute = this.router.url;
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
                        this.router.navigate([currentRoute]));
                }
            },
                (err: ApiError) => {
                    this.validationErrors.push({ "Message": err.Message, "Field": "Password" });
                    this.loading = false;
                });
    }

    luuHoatDongPhongNhanVien(){
        var auth = this.authService.getAccessUser();
        this.hoatDongNhanVien.PhongKhamBenhId = auth.PhongBenhVienId;
        this.authService.HoatDongNhanVien(this.hoatDongNhanVien)
        .subscribe((data) => {         
            this.authService.setPhongLamViecId(
                this.hoatDongNhanVien.PhongKhamBenhId
            );           
        });
    }

    ProcessUsernameCharacter() {
        const reg = new RegExp('^\\d+$');
        if (!this.login.userName.includes('@') && !this.login.userName.match(reg)) {
            this.login.userName += '@benhvienbacha.vn';
        }
    }

    logout() {
        this.dialogRef.close();        
        var auth = this.authService.getAccessUser();
        this.hoatDongNhanVien.PhongKhamBenhId = auth.PhongBenhVienId;
        this.authService.XoaHoatDongSauKhiLogOut(this.hoatDongNhanVien).toPromise();
        this.authService.logout();
    }
}
