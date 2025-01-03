import {
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation,
    ChangeDetectionStrategy,
} from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { CommonService } from "src/app/core/utilities/common.helper";
import { LocalStorageHelper } from "src/app/core/utilities/local-storage.helper";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ApiError } from "src/app/shared/models/api-error.model";
import { Login } from "src/app/shared/models/login.model";
//import { MessagingService } from "src/app/core/services/messaging.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import icVisibility from "@iconify/icons-ic/twotone-visibility";
import icVisibilityOff from "@iconify/icons-ic/twotone-visibility-off";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { NavigationService } from "src/@vex/services/navigation.service";
import {
    LookupQueryInfo,
    HoatDongNhanVien,
} from "src/app/shared/models/common.model";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiService } from "src/app/core/services/api.service";
import { HinhThucKhamBenh } from "src/app/shared/enum/kham-doan.enum";
import { PhongLookupItemVo } from "../../main/chuyen-phong/chuyen-phong";

declare var jQuery: any;
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInUp400ms],
})
export class LoginComponent implements OnInit {
    login = {} as Login;
    LookupQueryInfo = {} as LookupQueryInfo;
    loading = false;
    menuItems: any[];
    menuPermissionItems: any;
    validationErrors: any[] = [];
    step: number = 1;
    preStep: number[] = [];
    totalExpiredSecond: number = 0;
    intervalCountDown: any = null;
    showExpired: boolean = false;
    isNhanVienTrongPhongBan: boolean = true;

    isHienDangNhap: boolean = true;

    danhSachKhoa: Khoa;
    public selectedKhoa: number = 0;
    danhSachPhong: Phong;
    selectedPhong: number;
    hoatDongNhanVien = {} as HoatDongNhanVien;

    // khi cập nhật thêm luồng xử lý ngoại viện, lưu ý tham khảo luồng xử lý nội bộ hiện tại, tránh thiếu case
    titleLoaiDangNhap: string = "Đăng nhập nội bộ";
    public selectedHopDongKham: number = 0;

    hopDongKhamSucKhoeId: number = null;
    congTyKhamSucKhoeId: number = null;
    phongId: number = null;

    isLoginKhamDoanNgoaiVien: boolean = false;
    khoa: PhongLookupItemVo = { DisplayName: null, KeyId: 0, };
    
    loaiLogIn: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
    loginNoiVien: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
    loginNgoaiVien: HinhThucKhamBenh = HinhThucKhamBenh.KhamDoanNgoaiVien;

    @ViewChild("f", { static: false }) loginForm: NgForm;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private authService: AuthService,
        //private messagingService: MessagingService,
        private cdRef: ChangeDetectorRef,
        private navigationService: NavigationService,
        private notificationService: NotificationService,
        private apiService: ApiService
    ) {
        const helper = new JwtHelperService();
        let currentAccessUser = authService.getAccessUser();
        if (
            currentAccessUser != null &&
            currentAccessUser.AccessToken != null &&
            currentAccessUser.AccessToken.Token != null
        ) {
            const isExpired = helper.isTokenExpired(
                currentAccessUser.AccessToken.Token
            );
            if (!isExpired && currentAccessUser.PhongBenhVienId != 0) {
                router.navigate(["trang-chu"]);
            }
        }
    }

    ngOnInit() {
        // this.getPhongs = null;   
        let rememberMe = LocalStorageHelper.getRememberMe<Login>();
        if (rememberMe !== undefined && rememberMe != null) {
            this.login = rememberMe;
            //this.login.rememberMe = true;
            if (!this.login.rememberMe) {
                this.login.userName = "";
                this.login.password = "";
            }
        }
        this.login.region = 2;

        if (this.login != null) {
            this.loaiLogIn = this.loginNoiVien;
        }
        else {
            this.loaiLogIn = this.login.HinhThucKhamBenh;
        }
        
        //nếu lấy data mà phòng bệnh viện mà undefined        
        var phongBenhVienId = this.authService.getPhongLamViecId();
        if(phongBenhVienId === null){
            this.authService.removePhongLamViecId();
        }
    }

    eventHandler(event: any, index: number) {
        setTimeout(function () {
            jQuery("#passCode" + index).focus();
        }, 100);
    }

    toggleRememberMe(value: any) {
        if (value !== null && value !== undefined) {
            this.login.rememberMe = value;
        }
    }

    onKeyDangNhap(keyInput: any) {
        if (keyInput.keyCode === 13) {
            this.onSubmit();
        }
    }

    // On submit button click
    onSubmit() {
        //this.loginForm.reset();
        if (this.loading == true) {
            return;
        }
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.loading = true;
        this.cdRef.markForCheck();
        //this.login.fcmToken = this.messagingService.getFcmToken();
        this.login.HinhThucKhamBenh = this.loaiLogIn;

        var loginInfoCopy = { ...this.login };
        this.ProcessUsernameCharacter(loginInfoCopy);
        this.authService.login(loginInfoCopy).subscribe(
            () => {
                //this.messagingService.receiveMessage();
                LocalStorageHelper.setRememberMe(this.login);
                this.navigationService.items = this.authService.getAccessRoute();
                var auth = this.authService.getAccessUser();
                if (this.login.HinhThucKhamBenh == HinhThucKhamBenh.NoiVien) {
                    this.authService.removeCongTyKhamSucKhoeVaHopDongKhamSK();

                    if (auth.PhongBenhVienId != 0) {
                        this.authService.setPhongLamViecId(auth.PhongBenhVienId);
                        this.luuHoatDongPhongNhanVien();
                        this.router.navigate(["trang-chu"]);
                    } else {
                        this.router.navigate(["dang-nhap"]);
                        this.LookupQueryInfo.Take = 50;

                        this.isNhanVienTrongPhongBan = false;
                        this.isHienDangNhap = false;

                        this.khoa.KeyId = null;
                        this.khoa.DisplayName = null;
                        this.selectedPhong = null;

                        this.cdRef.detectChanges();

                        // this.authService.GetListKhoa(this.LookupQueryInfo)
                        //     .subscribe((data) => {
                        //         this.danhSachKhoa = data;
                        //     });
                    }
                }
                else if (this.login.HinhThucKhamBenh == HinhThucKhamBenh.KhamDoanNgoaiVien) {
                    this.isNhanVienTrongPhongBan = false;
                    this.isLoginKhamDoanNgoaiVien = true;

                    this.isHienDangNhap = false;

                    this.luuHoatDongPhongNhanVien();
                }

                this.loading = false;
                this.cdRef.markForCheck();
                this.clearCountDown();
            },
            // (err: ApiError) => {
            //     err.ValidationErrors === null || err.ValidationErrors.length == 0
            //         ? this.notificationService.showError(err.Message)
            //         : (this.validationErrors = err.ValidationErrors);
            //     this.cdRef.markForCheck();
            //     this.loading = false;
            // }
        );
    }

    ProcessUsernameCharacter(loginInfo: any) {
        if (!loginInfo.userName.includes('@') && /[a-zA-Z]/g.test(loginInfo.userName)) {
            loginInfo.userName += '@benhvienbacha.vn';
        }
    }

  
    onSelectionChange(event: any) { 
        if (event !== null && event !== undefined) {
            this.apiService
                .get<any>("PhongBenhVien/GetKhoaByPhong?phongId=" + event.KeyId)
                .subscribe((resultData) => {
                    if (resultData !== null && resultData !== undefined) {
                        this.khoa.KeyId = resultData.KeyId;
                        this.khoa.DisplayName = resultData.DisplayName;
                        this.cdRef.detectChanges();
                    }
                });
        }
    }

    changeKhoa(value: any) {      
        if (value !== null && value !== undefined) {
            this.selectedKhoa = value;
            this.LookupQueryInfo.Id = value;
            this.authService.GetListPhong(this.LookupQueryInfo).subscribe((data) => {
                this.danhSachPhong = data;
                this.cdRef.detectChanges();
            });
        }
    }


    selectionChangeHopDong(event: any) {
        if (event !== undefined && event !== null) {
            this.hopDongKhamSucKhoeId = event.KeyId;
            this.congTyKhamSucKhoeId = event.CongTyKhamSucKhoeId;
        }
    }

    changeHopDong(value: any) {
        if (value !== undefined && value !== null) {
            this.selectedHopDongKham = value;
            this.LookupQueryInfo.Id = value;
            this.authService.GetPhongNgoaiViens(this.LookupQueryInfo).subscribe((data) => {
                this.danhSachPhong = data;
                this.cdRef.detectChanges();
            });

        }
    }

    changePhong(value: any) {
        if (value !== undefined && value !== null) {
            this.hoatDongNhanVien.PhongKhamBenhId = value;
            this.selectedPhong = value;
        }
    }


    //save hoat động nhân viên
    luuHoatDongPhongNhanVien() {
        var auth = this.authService.getAccessUser();
        this.hoatDongNhanVien.PhongKhamBenhId = auth.PhongBenhVienId;
        this.authService.HoatDongNhanVien(this.hoatDongNhanVien)
            .subscribe((data) => {
                this.authService.setPhongLamViecId(
                    this.hoatDongNhanVien.PhongKhamBenhId
                );
            });
    }

    saveHoatDongNhanVien() {
        this.validationErrors = [];
        if (this.login.HinhThucKhamBenh == HinhThucKhamBenh.NoiVien) {
            if (this.selectedKhoa === null || this.selectedKhoa === undefined) {
                this.validationErrors.push({
                    Field: "Khoa",
                    Message: CommonService.format(SystemMessage.ObjectRequirement, [
                        "Khoa",
                    ]),
                });
            }

            if (this.selectedPhong === null || this.selectedPhong === undefined) {
                this.validationErrors.push({
                    Field: "Phong",
                    Message: CommonService.format(SystemMessage.ObjectRequirement, [
                        "Phòng",
                    ]),
                });
            }

            if (this.validationErrors.length > 0) {
                return;
            }

            if (
                this.hoatDongNhanVien !== null &&
                this.hoatDongNhanVien.PhongKhamBenhId !== undefined &&
                this.hoatDongNhanVien.PhongKhamBenhId !== null &&
                this.login.userName !== "" &&
                this.login.userName !== undefined &&
                this.login.password !== "" &&
                this.login.password !== undefined
            ) {
                this.authService
                    .HoatDongNhanVien(this.hoatDongNhanVien)
                    .subscribe((data) => {
                        // this.onSubmit();
                        this.authService.setPhongLamViecId(this.hoatDongNhanVien.PhongKhamBenhId);
                        this.authService.removeCongTyKhamSucKhoeVaHopDongKhamSK();
                        this.router.navigate(["trang-chu"]);
                    });
            } else {
                this.cdRef.markForCheck();
                //this.login.fcmToken = this.messagingService.getFcmToken();
                this.router.navigate(["dang-nhap"]);
                this.authService.logout();
            }
        } else {
            if (this.hopDongKhamSucKhoeId === null || this.hopDongKhamSucKhoeId === undefined) {
                this.validationErrors.push({
                    Field: "CongTyId",
                    Message: CommonService.format(SystemMessage.ObjectRequirement, [
                        "Công ty",
                    ]),
                });
            }

            if (this.phongId === null || this.phongId === undefined) {
                this.validationErrors.push({
                    Field: "Phong",
                    Message: CommonService.format(SystemMessage.ObjectRequirement, [
                        "Phòng",
                    ]),
                });
            }

            if (this.validationErrors.length > 0) {
                return;
            }

            if (
                this.hoatDongNhanVien !== null &&
                this.hoatDongNhanVien.PhongKhamBenhId !== undefined &&
                this.hoatDongNhanVien.PhongKhamBenhId !== null &&
                this.login.userName !== "" &&
                this.login.userName !== undefined &&
                this.login.password !== "" &&
                this.login.password !== undefined
            ) {
                this.authService
                    .HoatDongNhanVien(this.hoatDongNhanVien)
                    .subscribe((data) => {
                        // this.onSubmit();                  
                        this.authService.setCongTyKhamSucKhoeVaHopDongKhamSK(this.hopDongKhamSucKhoeId, this.congTyKhamSucKhoeId);
                        this.authService.setPhongLamViecId(this.hoatDongNhanVien.PhongKhamBenhId);
                        this.router.navigate(["trang-chu"]);
                    });
            } else {
                this.cdRef.markForCheck();
                //this.login.fcmToken = this.messagingService.getFcmToken();
                this.router.navigate(["dang-nhap"]);
                this.authService.logout();
            }
        }

    }

    BackToLogin() {
        this.router.navigate(["dang-nhap"]);
        this.isNhanVienTrongPhongBan = true;
        this.isLoginKhamDoanNgoaiVien = false;
        this.isHienDangNhap = true;
    }

    verifyUsername() {
        if (this.loading == true) {
            return;
        }
        this.clearPassCode();
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.userName === "" || this.login.userName === undefined) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.ObjectRequirement, [
                    "Số điện thoại",
                ]),
                Field: "UserName",
            });
            return;
        }
        // return;
        this.loading = true;
        this.authService.verifyUsername(this.login).subscribe(
            (res: any) => {
                if (res != undefined && res != null && res != "") {
                    this.setPreStep();
                    this.step = 2;
                    setTimeout(function () {
                        jQuery("#passCode1").focus();
                    }, 100);
                    this.countDown(res);
                } else {
                    this.setPreStep();
                    this.step = 4;
                    setTimeout(function () {
                        jQuery("#Password input").focus();
                    }, 100);
                    this.clearCountDown();
                }
                this.loading = false;
            },
            (err: ApiError) => {
                this.validationErrors.push({ Message: err.Message, Field: "UserName" });
                //this.notificationService.showError(err.Message);
                this.loading = false;
            }
        );
    }

    // On Forgot password link click
    forgetPassword() {
        if (this.loading == true) {
            return;
        }
        this.clearPassCode();
        //this.router.navigate(['khoi-phuc-mat-khau']);
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.userName === "" || this.login.userName === undefined) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.ObjectRequirement, [
                    "Số điện thoại",
                ]),
                Field: "Password",
            });

            return;
        }
        // return;
        this.loading = true;
        this.authService.forgetPassword(this.login).subscribe(
            (res: any) => {
                if (res != undefined && res != null && res != "") {
                    this.setPreStep();
                    this.step = 2;
                    setTimeout(function () {
                        jQuery("#passCode1").focus();
                    }, 100);
                    this.countDown(res);
                }
                this.loading = false;
            },
            (err: ApiError) => {
                this.validationErrors.push({ Message: err.Message, Field: "Password" });
                //this.notificationService.showError(err.Message);
                this.loading = false;
            }
        );
    }
    verifyPassCode() {
        if (this.loading == true) {
            return;
        }
        this.login.passCode =
            (this.login.passCode1 != null && this.login.passCode1 != undefined
                ? this.login.passCode1
                : "") +
            (this.login.passCode2 != null && this.login.passCode2 != undefined
                ? this.login.passCode2
                : "") +
            (this.login.passCode3 != null && this.login.passCode3 != undefined
                ? this.login.passCode3
                : "") +
            (this.login.passCode4 != null && this.login.passCode4 != undefined
                ? this.login.passCode4
                : "") +
            (this.login.passCode5 != null && this.login.passCode5 != undefined
                ? this.login.passCode5
                : "") +
            (this.login.passCode6 != null && this.login.passCode6 != undefined
                ? this.login.passCode6
                : "");
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.passCode === "" || this.login.passCode === undefined) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.ObjectRequirement, [
                    "Mã code",
                ]),
                Field: "PassCode",
            });
        }
        if (
            this.login.passCode != "" &&
            this.login.passCode != undefined &&
            this.login.passCode.length < 6
        ) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.InvalidPassCode, []),
                Field: "PassCode",
            });
        }
        if (this.validationErrors.length > 0) {
            return;
        }
        // return;
        this.loading = true;
        this.authService.verifyPassCode(this.login).subscribe(
            (tokenRes: any) => {
                if (tokenRes == true) {
                    this.setPreStep();
                    this.step = 3;
                    setTimeout(function () {
                        jQuery("#Password input").focus();
                    }, 100);
                }
                this.loading = false;
                this.clearCountDown();
            },
            (err: ApiError) => {
                this.validationErrors.push({ Message: err.Message, Field: "PassCode" });
                //this.notificationService.showError(err.Message);
                this.loading = false;
            }
        );
    }
    setPassword() {
        if (this.loading == true) {
            return;
        }
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.password === "" || this.login.password === undefined) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.ObjectRequirement, [
                    "Mật khảu",
                ]),
                Field: "Password",
            });
        }
        if (
            this.login.confirmPassword === "" ||
            this.login.confirmPassword === undefined
        ) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.ObjectRequirement, [
                    "Nhập lại mật khẩu",
                ]),
                Field: "ConfirmPassword",
            });
        }
        if (
            this.login.password != "" &&
            this.login.confirmPassword != "" &&
            this.login.password !== this.login.confirmPassword
        ) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.ObjectNotMacth, [
                    "Nhập lại mật khẩu",
                ]),
                Field: "ConfirmPassword",
            });
        }
        if (this.validationErrors.length > 0) {
            return;
        }
        // return;
        this.loading = true;
        //this.login.fcmToken = this.messagingService.getFcmToken();
        this.authService.setPassword(this.login).subscribe(
            () => {
                //this.messagingService.receiveMessage();
                LocalStorageHelper.setRememberMe(this.login);
                this.router.navigate(["trang-chu"]);
                this.loading = false;
                this.clearCountDown();
            },
            (err: ApiError) => {
                this.validationErrors.push({
                    Message: err.Message,
                    Field: "ConfirmPassword",
                });
                //this.notificationService.showError(err.Message);
                this.loading = false;
            }
        );
    }
    // On Forgot password link click
    resendPassCode() {
        if (this.loading == true) {
            return;
        }
        this.clearPassCode();
        //this.router.navigate(['khoi-phuc-mat-khau']);
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.login.userName === "" || this.login.userName === undefined) {
            this.validationErrors.push({
                Message: CommonService.format(SystemMessage.ObjectRequirement, [
                    "Số điện thoại",
                ]),
                Field: "PassCode",
            });

            return;
        }
        // return;
        this.loading = true;
        this.authService.sendPassCode(this.login).subscribe(
            (res: any) => {
                if (res != undefined && res != null && res != "") {
                    setTimeout(function () {
                        jQuery("#passCode1").focus();
                    }, 100);
                    this.countDown(res);
                }
                this.loading = false;
            },
            (err: ApiError) => {
                this.validationErrors.push({ Message: err.Message, Field: "PassCode" });
                //this.notificationService.showError(err.Message);
                this.loading = false;
            }
        );
    }
    setPreStep() {
        if (this.preStep.length > 0) {
            if (this.preStep[this.preStep.length - 1] != this.step) {
                this.preStep.push(this.step);
            }
        } else {
            this.preStep.push(this.step);
        }
    }

    clearValidateErrorOtherCallback(event: any) {
        CommonService.clearValidateErrorOtherCallback(this, event);
    }
    countDown(res: any) {
        this.totalExpiredSecond = CommonService.subtract(
            new Date(),
            new Date(res),
            "second"
        );
        this.showExpired = true;
        this.intervalCountDown = setInterval(() => {
            this.totalExpiredSecond = this.totalExpiredSecond - 1;
            if (this.totalExpiredSecond == 0 && this.intervalCountDown != null) {
                clearInterval(this.intervalCountDown);
                this.showExpired = false;
            }
        }, 1000);
    }
    continue() {
        switch (this.step) {
            case 1:
                this.verifyUsername();
                break;
            case 2:
                this.verifyPassCode();
                break;
            case 3:
                this.setPassword();
                break;
            case 4:
                this.onSubmit();
                break;
            case 5:
                this.onSubmit();
                break;
        }
    }
    back() {
        this.step =
            this.preStep.length > 0 ? this.preStep[this.preStep.length - 1] : 1;
        if (this.preStep.length > 0) {
            this.preStep.splice(this.preStep.length - 1, 1);
        }

        if (this.totalExpiredSecond > 0) {
            this.showExpired = false;
        }
        switch (this.step) {
            case 1:
                this.clearPassCode();
                this.login.password = "";
                this.login.confirmPassword = "";
                break;
            case 2:
                this.clearPassCode();
                this.login.password = "";
                this.login.confirmPassword = "";
                if (this.totalExpiredSecond > 0) {
                    this.showExpired = true;
                }
                break;
            case 3:
                this.login.password = "";
                this.login.confirmPassword = "";
                break;
        }
    }
    clearPassCode() {
        this.login.passCode1 = "";
        this.login.passCode2 = "";
        this.login.passCode3 = "";
        this.login.passCode4 = "";
        this.login.passCode5 = "";
        this.login.passCode6 = "";
        this.login.passCode = "";
    }
    clearCountDown() {
        if (this.intervalCountDown != null) {
            //clearInterval(this.intervalCountDown);
            this.showExpired = false;
        }
    }
    send() {
        this.router.navigate(["/"]);
    }

    changeLoaiLogin(event) {
        if (event == HinhThucKhamBenh.NoiVien) {
            this.titleLoaiDangNhap = "Đăng nhập nội bộ";
        }
        else {
            this.titleLoaiDangNhap = "Khám đoàn ngoại viện";
        }
    }
}

export class Khoa {
    constructor(public KeyId: number, public DisplayName: string = "") { }
}

export class Phong {
    constructor(public KeyId: number, public DisplayName: string = "") { }
}
