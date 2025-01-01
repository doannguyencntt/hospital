import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TemplateKhamBenhTheoKhoa } from '../../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-lan-kham-hien-tai-kham-benh-kham-benh',
    templateUrl: './lan-kham-hien-tai-kham-benh-kham-benh.component.html',
    styleUrls: ['./lan-kham-hien-tai-kham-benh-kham-benh.component.scss']
})
export class LanKhamHienTaiKhamBenhKhamBenhComponent implements OnInit, OnChanges {
    validationErrors: any;
    isProcessAdd: boolean = false;
    documentType: DocumentType;
    displayButton: boolean = false;
    flagChangeTrieuChung: boolean = false;
    flagChangeChuanDoan: boolean = false;
    flagChangeTemplate: boolean = false;
    flagChangeTrieuChungKhamText: boolean = false;
    flagChangeGhiChuTrieuChungKhamText: boolean = false;
    snackBarOpen: any;

    templateKhamBenhTheoKhoa = new TemplateKhamBenhTheoKhoa();
    benhNhanHienTai: any;
    templateKhoaPhong: string = null;
    tenKhoaPhong: string = null;
    thongTinKhamTheoKhoas: string = null;
    templateKhoaPhongObj: any = null;
    thongTinKhamTheoKhoaObj: any = null;
    originTemplateKhoaPhong: any = null;
    trieuChungs: number[] = [];
    chuanDoans: number[] = [];
    trieuChungsBanDau: number[] = [];
    chuanDoansBanDau: number[] = [];
    trieuChungsBanDauObj: any[] = [];
    chuanDoansBanDauObj: any[] = [];
    templateSave: string = null;
    idTrieuChungsInsert: number[] = [];
    idTrieuChungsDelete: number[] = [];
    idChuanDoansInsert: number[] = [];
    idChuanDoansDelete: number[] = [];
    ghiChuTrieuChungBanDau: string = null;
    trieuChungKhamBanDau: string = null;
    idYeuCauTiepNhan: number = 0;
    idYeuCauKhamBenh: number = 0;
    @Input() data: any = null;
    @Input() templateKp: string = null;
    @Input() tenKp: string = null;
    constructor(private apiService: ApiService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamBenh;
        this.benhNhanHienTai = this.data;
        this.trieuChungKhamBanDau = this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan;
        this.ghiChuTrieuChungBanDau = this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTrieuChungLamSang;
        this.idYeuCauTiepNhan = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.idYeuCauKhamBenh = this.benhNhanHienTai.YeuCauKhamBenhId;
        this.loadTrieuChungVaChuanDoan();
    }

    loadTrieuChungVaChuanDoan() {
        this.trieuChungsBanDauObj = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhTrieuChungs;
        this.chuanDoansBanDauObj = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChuanDoans;

        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhTrieuChungs.forEach(element => {
            this.trieuChungs.push(element.TrieuChungId);
        });
        this.trieuChungsBanDau = this.trieuChungs;

        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChuanDoans.forEach(element => {
            this.chuanDoans.push(element.ChuanDoanId);
        });
        this.chuanDoansBanDau = this.chuanDoans;
    }

    ngOnChanges() {
        if (this.templateKp !== null) {
            this.templateKhoaPhong = this.templateKp;
            this.templateKhoaPhongObj = JSON.parse(this.templateKhoaPhong);
            this.originTemplateKhoaPhong = JSON.parse(this.templateKhoaPhong);
        } else {
            this.templateKhoaPhong = null;
            this.templateKhoaPhongObj = null;
            this.originTemplateKhoaPhong = null;
        }

        if (this.tenKp !== null) {
            this.tenKhoaPhong = this.tenKp;
        } else {
            this.tenKhoaPhong = null;
        }

        this.getTemplateKhamBenhTheoKhoa();
    }

    soSanhTrieuChung(trieuChungCurrent: any, trieuChungBanDau: any) {
        function sortNumber(a, b) {
            return a - b;
        }

        trieuChungCurrent.sort(sortNumber);
        trieuChungBanDau.sort(sortNumber);

        for (var i = 0; i < trieuChungCurrent.length; i++) {
            if (trieuChungCurrent[i] !== trieuChungBanDau[i]) {
                return false; // không trùng
            }
        }

        return true; // trùng
    }

    soSanhChuanDoan(chuanDoanCurrent: any, chuanDoanBanDau: any) {
        function sortNumber(a, b) {
            return a - b;
        }

        chuanDoanCurrent.sort(sortNumber);
        chuanDoanBanDau.sort(sortNumber);

        for (var i = 0; i < chuanDoanCurrent.length; i++) {
            if (chuanDoanCurrent[i] !== chuanDoanBanDau[i]) {
                return false; // không trùng
            }
        }

        return true; // trùng
    }

    onSaveTrieuChungKham() {
        if (this.trieuChungKhamBanDau == "" && this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan == null) {
            this.trieuChungKhamBanDau = null;
        }

        if (this.trieuChungKhamBanDau == null && this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan == "") {
            this.trieuChungKhamBanDau = "";
        }

        if (this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan != this.trieuChungKhamBanDau) {
            this.flagChangeTrieuChungKhamText = true;
        }
        else {
            this.flagChangeTrieuChungKhamText = false;
        }

        if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
            this.displayButton = true;
            return;
        } else {
            this.displayButton = false;
            return;
        }
    }

    onSaveGhiChuTrieuChung() {
        if (this.ghiChuTrieuChungBanDau == "" && this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTrieuChungLamSang == null) {
            this.ghiChuTrieuChungBanDau = null;
        }

        if (this.ghiChuTrieuChungBanDau == null && this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTrieuChungLamSang == "") {
            this.ghiChuTrieuChungBanDau = "";
        }

        if (this.ghiChuTrieuChungBanDau != this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTrieuChungLamSang) {
            this.flagChangeGhiChuTrieuChungKhamText = true;
        }
        else {
            this.flagChangeGhiChuTrieuChungKhamText = false;
        }

        if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
            this.displayButton = true;
            return;
        } else {
            this.displayButton = false;
            return;
        }
    }

    saveChuanDoan(data: any) {
        this.chuanDoans = data;
        let lenTrieuChungCurrent = this.trieuChungs.length;
        let lenTrieuChungBanDau = this.trieuChungsBanDau.length;
        let lenChuanDoanCurrent = this.chuanDoans.length;
        let lenChuanDoanBanDau = this.chuanDoansBanDau.length;

        if (lenTrieuChungCurrent >= lenTrieuChungBanDau) {
            var trungTrieuChung = this.soSanhTrieuChung(this.trieuChungs, this.trieuChungsBanDau);
        } else {
            var trungTrieuChung = this.soSanhTrieuChung(this.trieuChungsBanDau, this.trieuChungs);
        }

        if (lenChuanDoanCurrent >= lenChuanDoanBanDau) {
            var trungChuanDoan = this.soSanhChuanDoan(this.chuanDoans, this.chuanDoansBanDau);
        } else {
            var trungChuanDoan = this.soSanhChuanDoan(this.chuanDoansBanDau, this.chuanDoans);
        }

        if (this.trieuChungs !== undefined && this.trieuChungs.length === 0) {
            this.trieuChungs = [];
        }

        if (this.chuanDoans !== undefined && this.chuanDoans.length === 0) {
            this.chuanDoans = [];
        }

        if (trungTrieuChung === false || trungChuanDoan === false || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
            this.displayButton = true;
        }

        if (trungTrieuChung === true && trungChuanDoan === true && this.flagChangeTrieuChungKhamText === false && this.flagChangeGhiChuTrieuChungKhamText === false) {
            this.displayButton = false;
        }

        if (trungChuanDoan === false) {
            this.flagChangeChuanDoan = true;
        } else {
            this.flagChangeChuanDoan = false;
        }
    }

    saveTrieuChung(data: any) {
        this.trieuChungs = data;
        let lenTrieuChungCurrent = this.trieuChungs.length;
        let lenTrieuChungBanDau = this.trieuChungsBanDau.length;
        let lenChuanDoanCurrent = this.chuanDoans.length;
        let lenChuanDoanBanDau = this.chuanDoansBanDau.length;

        if (lenTrieuChungCurrent >= lenTrieuChungBanDau) {
            var trungTrieuChung = this.soSanhTrieuChung(this.trieuChungs, this.trieuChungsBanDau);
        } else {
            var trungTrieuChung = this.soSanhTrieuChung(this.trieuChungsBanDau, this.trieuChungs);
        }

        if (lenChuanDoanCurrent >= lenChuanDoanBanDau) {
            var trungChuanDoan = this.soSanhChuanDoan(this.chuanDoans, this.chuanDoansBanDau);
        } else {
            var trungChuanDoan = this.soSanhChuanDoan(this.chuanDoansBanDau, this.chuanDoans);
        }

        if (this.trieuChungs !== undefined && this.trieuChungs.length === 0) {
            this.trieuChungs = [];
        }

        if (this.chuanDoans !== undefined && this.chuanDoans.length === 0) {
            this.chuanDoans = [];
        }

        if (trungTrieuChung === false || trungChuanDoan === false || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
            this.displayButton = true;
        }

        if (trungTrieuChung === true && trungChuanDoan === true && this.flagChangeTrieuChungKhamText === false && this.flagChangeGhiChuTrieuChungKhamText === false) {
            this.displayButton = false;
        }

        if (trungTrieuChung === false) {
            this.flagChangeTrieuChung = true;
        } else {
            this.flagChangeTrieuChung = false;
        }
    }

    getTemplateKhamBenhTheoKhoa() {
        if (this.templateKhoaPhongObj !== null && this.data.YeuCauKhamBenh.ThongTinKhamTheoKhoa !== null) {
            this.thongTinKhamTheoKhoas = this.data.YeuCauKhamBenh.ThongTinKhamTheoKhoa;
            this.thongTinKhamTheoKhoaObj = JSON.parse(this.thongTinKhamTheoKhoas);
            if (this.templateKhoaPhongObj.ComponentDynamics.length > 0) {
                this.templateKhoaPhongObj.ComponentDynamics.forEach(component => {
                    this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas.forEach(item => {
                        if (component.Id == item.Id) {
                            component.Value = item.Value;
                            return;
                        }
                    });
                })
            }
        }
    }

    save() {
        let lenTrieuChungBanDau = this.trieuChungsBanDau.length;
        let lenTrieuChungHienTai = this.trieuChungs.length;
        let lenChuanDoanBanDau = this.chuanDoansBanDau.length;
        let lenChuanDoanHienTai = this.chuanDoans.length;
        var trieuChungs: number[] = [];
        var trieuChungBanDau: number[] = [];
        var chuanDoans: number[] = [];
        var chuanDoanBanDau: number[] = [];

        this.trieuChungs.forEach(element => {
            trieuChungs.push(element);
        });

        this.trieuChungsBanDau.forEach(element => {
            trieuChungBanDau.push(element);
        });

        this.chuanDoans.forEach(element => {
            chuanDoans.push(element);
        });

        this.chuanDoansBanDau.forEach(element => {
            chuanDoanBanDau.push(element);
        });

        this.idTrieuChungsDelete = [];
        this.idTrieuChungsInsert = [];
        this.idChuanDoansDelete = [];
        this.idChuanDoansInsert = [];
        if (lenTrieuChungHienTai >= lenTrieuChungBanDau) {
            this.tachLocTrieuChungs1(trieuChungs, trieuChungBanDau);
        } else {
            this.tachLocTrieuChungs2(trieuChungBanDau, trieuChungs);
        }

        if (lenChuanDoanHienTai >= lenChuanDoanBanDau) {
            this.tachLocChuanDoans1(chuanDoans, chuanDoanBanDau);
        } else {
            this.tachLocChuanDoans2(chuanDoanBanDau, chuanDoans);
        }

        var trieuChungObj: any = {
            idTrieuChungsInsert: this.idTrieuChungsInsert,
            idTrieuChungsDelete: this.idTrieuChungsDelete,
            idYeuCauKhamBenh: this.benhNhanHienTai.YeuCauKhamBenhId,
            trieuChungChange: this.flagChangeTrieuChung
        };

        var chuanDoanObj: any = {
            idChuanDoansInsert: this.idChuanDoansInsert,
            idChuanDoansDelete: this.idChuanDoansDelete,
            idYeuCauKhamBenh: this.benhNhanHienTai.YeuCauKhamBenhId,
            chuanDoanChange: this.flagChangeChuanDoan
        };

        var saveTemplate = this.processDynamicComponent();

        var templateObj: any = {
            idKhamBenh: this.benhNhanHienTai.YeuCauKhamBenhId,
            template: saveTemplate,
            templateChange: this.flagChangeTemplate
        };

        var trieuChungTxtObj: any = {
            TrieuChungKham: this.trieuChungKhamBanDau,
            FlagChangeTrieuChungKhamText: this.flagChangeTrieuChungKhamText,
            GhiChuTrieuChungKham: this.ghiChuTrieuChungBanDau,
            FlagChangeGhiChuTrieuChungKhamText: this.flagChangeGhiChuTrieuChungKhamText,
            YeuCauTiepNhanId: this.idYeuCauTiepNhan,
            YeuCauKhamBenhId: this.idYeuCauKhamBenh
        };

        this.apiService.post("KhamBenh/SaveTrieuChungKhamText", trieuChungTxtObj).subscribe(() => {
            this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan = this.trieuChungKhamBanDau;
            this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTrieuChungLamSang = this.ghiChuTrieuChungBanDau;
            this.apiService.post("KhamBenh/SaveTrieuChung", trieuChungObj).subscribe(
                (result: any) => {
                    this.trieuChungsBanDauObj = result.Value.Data;
                    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhTrieuChungs = result.Value.Data;
                    this.apiService.post("KhamBenh/SaveChuanDoan", chuanDoanObj).subscribe(
                        (result: any) => {
                            this.chuanDoansBanDauObj = result.Value.Data;
                            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChuanDoans = result.Value.Data;
                            this.apiService.post("KhamBenh/SaveTemplate", templateObj).subscribe(
                                () => {
                                    this.showError("Đã cập nhật khám bệnh thành công");
                                    this.chuanDoansBanDau = this.chuanDoans;
                                    this.trieuChungsBanDau = this.trieuChungs;
                                    this.thongTinKhamTheoKhoaObj = JSON.parse(templateObj.template);
                                    this.flagChangeTemplate = false;
                                    this.flagChangeChuanDoan = false;
                                    this.flagChangeTrieuChung = false;
                                    this.flagChangeTrieuChungKhamText = false;
                                    this.flagChangeGhiChuTrieuChungKhamText = false;
                                    this.displayButton = false;
                                    this.data.YeuCauKhamBenh.ThongTinKhamTheoKhoa = saveTemplate;
                                });
                        }
                    );
                }
            );
        });
    }

    tachLocTrieuChungs1(trieuChungCurrent: any, trieuChungBanDau: any) {
        // sắp xếp
        function sortNumber(a, b) {
            return a - b;
        }

        trieuChungCurrent.sort(sortNumber);
        trieuChungBanDau.sort(sortNumber);

        // xác định i start và j start
        let lenTrieuChungHienTai = trieuChungCurrent.length;
        let lenTrieuChungBanDau = trieuChungBanDau.length;
        var flagBreakLoop1 = false;

        for (var i = 0; i < lenTrieuChungHienTai; i++) {
            if (flagBreakLoop1 === true) {
                break;
            }
            for (var j = 0; j < lenTrieuChungBanDau; j++) {
                if (trieuChungCurrent[i] === trieuChungBanDau[j]) {
                    var startTrieuChungCurrent = i;
                    var startTrieuChungBanDau = j;
                    var jBanDau = j;
                    flagBreakLoop1 = true;
                    break;
                }
            }
            if (i === lenTrieuChungHienTai - 1 && flagBreakLoop1 === false) {
                this.idTrieuChungsDelete = trieuChungBanDau;
                this.idTrieuChungsInsert = trieuChungCurrent;
                return;
            }
        }

        let count: number = 0;

        // xác định i end và j end
        for (var i = startTrieuChungCurrent; i < lenTrieuChungHienTai; i++) {
            if (trieuChungCurrent[i] === trieuChungBanDau[jBanDau]) {
                jBanDau++;
                count++;
            } else {
                break;
            }
        }

        trieuChungCurrent.splice(startTrieuChungCurrent, count);
        trieuChungBanDau.splice(startTrieuChungBanDau, count);

        this.idTrieuChungsDelete = trieuChungBanDau;
        this.idTrieuChungsInsert = trieuChungCurrent;
    }

    tachLocTrieuChungs2(trieuChungBanDau: any, trieuChungCurrent: any) {
        function sortNumber(a, b) {
            return a - b;
        }

        trieuChungCurrent.sort(sortNumber);
        trieuChungBanDau.sort(sortNumber);

        let lenTrieuChungHienTai = trieuChungCurrent.length;
        let lenTrieuChungBanDau = trieuChungBanDau.length;
        var flagBreakLoop1 = false;

        for (var i = 0; i < lenTrieuChungBanDau; i++) {
            if (flagBreakLoop1 === true) {
                break;
            }
            for (var j = 0; j < lenTrieuChungHienTai; j++) {
                if (trieuChungBanDau[i] === trieuChungCurrent[i]) {
                    var startTrieuChungBanDau = i;
                    var startTrieuChungCurrent = j;
                    var jBanDau = j;
                    flagBreakLoop1 = true;
                    break;
                }
            }

            if (i === lenTrieuChungBanDau - 1 && flagBreakLoop1 === false) {
                this.idTrieuChungsDelete = trieuChungBanDau;
                this.idTrieuChungsInsert = trieuChungCurrent;
                return;
            }
        }

        let count: number = 0;

        for (var i = startTrieuChungBanDau; i < lenTrieuChungBanDau; i++) {
            if (trieuChungBanDau[i] === trieuChungCurrent[jBanDau]) {
                jBanDau++;
                count++;
            } else { break; }
        }

        trieuChungCurrent.splice(startTrieuChungCurrent, count);
        trieuChungBanDau.splice(startTrieuChungBanDau, count);

        this.idTrieuChungsDelete = trieuChungBanDau;
        this.idTrieuChungsInsert = trieuChungCurrent;
    }

    tachLocChuanDoans1(chuanDoanCurrent: any, chuanDoanBanDau: any) {
        function sortNumber(a, b) {
            return a - b;
        }

        chuanDoanCurrent.sort(sortNumber);
        chuanDoanBanDau.sort(sortNumber);

        let lenChuanDoanHienTai = chuanDoanCurrent.length;
        let lenChuanDoanBanDau = chuanDoanBanDau.length;
        var flagBreakLoop1 = false;

        for (var i = 0; i < lenChuanDoanHienTai; i++) {
            if (flagBreakLoop1 === true) {
                break;
            }
            for (var j = 0; j < lenChuanDoanBanDau; j++) {
                if (chuanDoanCurrent[i] === chuanDoanBanDau[j]) {
                    var startChuanDoanCurrent = i;
                    var startChuanDoanBanDau = j;
                    var jBanDau = j;
                    flagBreakLoop1 = true;
                    break;
                }
            }
            if (i === lenChuanDoanHienTai - 1 && flagBreakLoop1 === false) {
                this.idChuanDoansDelete = chuanDoanBanDau;
                this.idChuanDoansInsert = chuanDoanCurrent;
                return;
            }
        }

        let count: number = 0;

        // xác định i end và j end
        for (var i = startChuanDoanCurrent; i < lenChuanDoanHienTai; i++) {
            if (chuanDoanCurrent[i] === chuanDoanBanDau[jBanDau]) {
                jBanDau++;
                count++;
            } else {
                break;
            }
        }

        chuanDoanCurrent.splice(startChuanDoanCurrent, count);
        chuanDoanBanDau.splice(startChuanDoanBanDau, count);

        this.idChuanDoansDelete = chuanDoanBanDau;
        this.idChuanDoansInsert = chuanDoanCurrent;
    }

    tachLocChuanDoans2(chuanDoanBanDau: any, chuanDoanCurrent: any) {
        function sortNumber(a, b) {
            return a - b;
        }

        chuanDoanCurrent.sort(sortNumber);
        chuanDoanBanDau.sort(sortNumber);

        let lenChuanDoanHienTai = chuanDoanCurrent.length;
        let lenChuanDoanBanDau = chuanDoanBanDau.length;
        var flagBreakLoop1 = false;

        for (var i = 0; i < lenChuanDoanBanDau; i++) {
            if (flagBreakLoop1 === true) {
                break;
            }
            for (var j = 0; j < lenChuanDoanHienTai; j++) {
                if (chuanDoanCurrent[i] === chuanDoanBanDau[j]) {
                    var startChuanDoanCurrent = j;
                    var startChuanDoanBanDau = i;
                    var jBanDau = j;
                    flagBreakLoop1 = true;
                    break;
                }
            }
            if (i === lenChuanDoanBanDau - 1 && flagBreakLoop1 === false) {
                this.idChuanDoansDelete = chuanDoanBanDau;
                this.idChuanDoansInsert = chuanDoanCurrent;
                return;
            }
        }

        let count: number = 0;

        // xác định i end và j end
        for (var i = startChuanDoanBanDau; i < lenChuanDoanBanDau; i++) {
            if (chuanDoanBanDau[i] === chuanDoanCurrent[jBanDau]) {
                jBanDau++;
                count++;
            } else {
                break;
            }
        }

        chuanDoanCurrent.splice(startChuanDoanCurrent, count);
        chuanDoanBanDau.splice(startChuanDoanBanDau, count);

        this.idChuanDoansDelete = chuanDoanBanDau;
        this.idChuanDoansInsert = chuanDoanCurrent;
    }

    showError(message: string) {
        this.showIt(message, "error");
    }

    private showIt(message: string, toastType: string) {
        if (this.snackBarOpen != null) {
            this.snackBarOpen.dismiss();
        }
        this.snackBarOpen = this.snackBar.open(message, 'Đóng', {
            duration: 7000,
            horizontalPosition: 'right'
        });
    }

    processDynamicComponent() {
        var templateKhamTheoKhoa: any;
        var listTemplateKhamTheoKhoa: any[] = [];

        if (this.templateKhoaPhongObj !== null) {
            var lengthComponentDynamics = this.templateKhoaPhongObj.ComponentDynamics.length;

            for (var i = 0; i < lengthComponentDynamics; i++) {
                if (this.templateKhoaPhongObj.ComponentDynamics[i].Value !== null) {
                    templateKhamTheoKhoa = {
                        Id: this.templateKhoaPhongObj.ComponentDynamics[i].Id,
                        Value: this.templateKhoaPhongObj.ComponentDynamics[i].Value
                    };
                    listTemplateKhamTheoKhoa.push(templateKhamTheoKhoa);
                }
            }

            var templateKhamTheoKhoaString = JSON.stringify(listTemplateKhamTheoKhoa);

            var saveTemplate = "{\"ThongTinKhamTheoKhoas\": " + templateKhamTheoKhoaString + "}";

            return saveTemplate;
        }
        return null;
    }

    reset() {
        this.trieuChungs = this.trieuChungsBanDau;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhTrieuChungs = this.trieuChungsBanDauObj;
        this.chuanDoans = this.chuanDoansBanDau;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChuanDoans = this.chuanDoansBanDauObj;
        this.trieuChungKhamBanDau = this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan;
        this.ghiChuTrieuChungBanDau = this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTrieuChungLamSang;
        if (this.thongTinKhamTheoKhoaObj != null) {
            this.getOriginTemplate();
        } else {
            this.getOriginTemplateWhenNullThongTin();
        }
        this.flagChangeTemplate = false;
        this.flagChangeChuanDoan = false;
        this.flagChangeTrieuChung = false;
        this.flagChangeTrieuChungKhamText = false;
        this.flagChangeGhiChuTrieuChungKhamText = false;
        this.displayButton = false;
    }

    getOriginTemplateWhenNullThongTin() {
        this.templateKhoaPhongObj = this.originTemplateKhoaPhong;
        if (this.templateKhoaPhongObj !== null) {
            if (this.templateKhoaPhongObj.ComponentDynamics.length > 0) {
                this.templateKhoaPhongObj.ComponentDynamics.forEach(component => {
                    component.Value = null;
                    return;
                });
            }
        }
    }

    getOriginTemplate() {
        this.templateKhoaPhongObj = this.originTemplateKhoaPhong;
        if (this.templateKhoaPhongObj !== null) {
            if (this.templateKhoaPhongObj.ComponentDynamics.length > 0) {
                this.templateKhoaPhongObj.ComponentDynamics.forEach(component => {
                    this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas.forEach(item => {
                        if (component.Id == item.Id) {
                            component.Value = item.Value;
                            return;
                        }
                    });
                })
            }
        }
    }

    changeText() {
        // hàm này dùng để kiểm tra sự thay đổi từ đó quyết định có show nút lưu ra hay không?
        // có đến 3 trường hợp xảy ra để dẫn đến sự thay đổi
        // 1 là templateKhoaPhongObj và thongTinKhamTheoKhoaObj cùng key nhưng khác value
        // 2 là templateKhoaPhongObj và thongTinKhamTheoKhoaObj tìm mãi không cùng key nhưng value của templateKhoaPhongObj khác null
        // 3 là nếu như không có thongTinKhamTheoKhoaObj thì chỉ cần bất cứ 1 key nào của templateKhoaPhongObj có value là được
        // Ngoài ra còn phải dẫn dắt s
        this.flagChangeTemplate = false;

        var lengthTemplate = this.templateKhoaPhongObj.ComponentDynamics.length;


        if (this.thongTinKhamTheoKhoaObj !== null) {
            var lengthThongTinKhoa = this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas.length;
            for (var i = 0; i < lengthTemplate; i++) {
                var khoaAvailable = false;
                for (var j = 0; j < lengthThongTinKhoa; j++) {
                    if (this.templateKhoaPhongObj.ComponentDynamics[i].Id === this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas[j].Id) {
                        khoaAvailable = true;
                        if (this.templateKhoaPhongObj.ComponentDynamics[i].Value !== this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas[j].Value) {
                            // đây là trường hợp mà templateKhoaPhongObj tìm được key của thongTinKhamTheoKhoaObj và value của chúng khác nhau
                            // . Rõ ràng, khác giá trị nhau là có sự thay đổi => vào đây báo hiệu bằng cách đổi cờ hiệu
                            this.flagChangeTemplate = true;

                            if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true
                                || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
                                this.displayButton = true;
                            }

                            return;
                        }
                        // vì đã templateKhoaPhongObj đã tìm thấy key của thongTinKhamTheoKhoaObj rồi
                        // nên không cần duyệt để tìm key nữa => dùng break để templateKhoaPhongObj đổi key rồi tìm tiếp
                        break;
                    }
                }

                if (this.templateKhoaPhongObj.ComponentDynamics[i].Value === "") {
                    this.templateKhoaPhongObj.ComponentDynamics[i].Value = null;
                }

                if (khoaAvailable === false && this.templateKhoaPhongObj.ComponentDynamics[i].Value !== null) {
                    // đây là trường hợp mà templateKhoaPhongObj tìm key của thongTinKhamTheoKhoaObj nhưng không có thấy. Tuy nhiên
                    // value của nó có tồn tại giá trị => nghĩa là có thay đổi rồi
                    this.flagChangeTemplate = true;

                    if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true
                        || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
                        this.displayButton = true;
                    }

                    return;
                }
            }

            // đây là trường hợp mà templateKhoaPhongObj không tìm thấy key của thongTinKhamTheoKhoaObj và value cũng null
            // cũng là trường hợp mà templateKhoaPhongObj tìm thấy key của thongTinKhamTheoKhoaObj nhưng value thì y chang nhau
            // => đây là trường hợp báo hiệu rằng không hề có sự thay đổi nào
            this.flagChangeTemplate = false;
            this.displayButton = false;
        }
        else {
            for (var i = 0; i < lengthTemplate; i++) {
                if (this.templateKhoaPhongObj.ComponentDynamics[i].Value !== null && this.templateKhoaPhongObj.ComponentDynamics[i].Value !== "") {
                    // đây là trường hợp mà thongTinKhamTheoKhoaObj không có data
                    // nghĩa là đây là yêu cầu tiếp nhận mới
                    // => chỉ thay đổi khi value của templateKhoaPhongObj có value thôi
                    this.flagChangeTemplate = true;

                    if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true
                        || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
                        this.displayButton = true;
                    }

                    return;
                }
            }

            // trường hợp này value của toàn bộ templateKhoaPhongObj không có
            this.flagChangeTemplate = false;
            this.displayButton = false;
        }
    }

    changeTextArea() {
        this.flagChangeTemplate = false;

        var lengthTemplate = this.templateKhoaPhongObj.ComponentDynamics.length;
        var lengthThongTinKhoa = this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas.length;

        if (this.thongTinKhamTheoKhoaObj !== null) {
            for (var i = 0; i < lengthTemplate; i++) {
                var khoaAvailable = false;
                for (var j = 0; j < lengthThongTinKhoa; j++) {
                    if (this.templateKhoaPhongObj.ComponentDynamics[i].Id === this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas[j].Id) {
                        khoaAvailable = true;
                        if (this.templateKhoaPhongObj.ComponentDynamics[i].Value !== this.thongTinKhamTheoKhoaObj.ThongTinKhamTheoKhoas[j].Value) {
                            // đây là trường hợp mà templateKhoaPhongObj tìm được key của thongTinKhamTheoKhoaObj và value của chúng khác nhau
                            // . Rõ ràng, khác giá trị nhau là có sự thay đổi => vào đây báo hiệu bằng cách đổi cờ hiệu
                            this.flagChangeTemplate = true;

                            if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true
                                || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
                                this.displayButton = true;
                            }

                            return;
                        }
                        // vì đã templateKhoaPhongObj đã tìm thấy key của thongTinKhamTheoKhoaObj rồi
                        // nên không cần duyệt để tìm key nữa => dùng break để templateKhoaPhongObj đổi key rồi tìm tiếp
                        break;
                    }
                }

                if (this.templateKhoaPhongObj.ComponentDynamics[i].Value === "") {
                    this.templateKhoaPhongObj.ComponentDynamics[i].Value = null;
                }

                if (khoaAvailable === false && this.templateKhoaPhongObj.ComponentDynamics[i].Value !== null) {
                    // đây là trường hợp mà templateKhoaPhongObj tìm key của thongTinKhamTheoKhoaObj nhưng không có thấy. Tuy nhiên
                    // value của nó có tồn tại giá trị => nghĩa là có thay đổi rồi
                    this.flagChangeTemplate = true;

                    if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true
                        || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
                        this.displayButton = true;
                    }

                    return;
                }
            }

            // đây là trường hợp mà templateKhoaPhongObj không tìm thấy key của thongTinKhamTheoKhoaObj và value cũng null
            // cũng là trường hợp mà templateKhoaPhongObj tìm thấy key của thongTinKhamTheoKhoaObj nhưng value thì y chang nhau
            // => đây là trường hợp báo hiệu rằng không hề có sự thay đổi nào
            this.flagChangeTemplate = false;
            this.displayButton = false;
            return;
        }
        else {
            for (var i = 0; i < lengthTemplate; i++) {
                if (this.templateKhoaPhongObj.ComponentDynamics[i].Value !== null) {
                    // đây là trường hợp mà thongTinKhamTheoKhoaObj không có data
                    // nghĩa là đây là yêu cầu tiếp nhận mới
                    // => chỉ thay đổi khi value của templateKhoaPhongObj có value thôi
                    this.flagChangeTemplate = true;

                    if (this.flagChangeTemplate === true || this.flagChangeChuanDoan === true || this.flagChangeTrieuChung === true
                        || this.flagChangeTrieuChungKhamText === true || this.flagChangeGhiChuTrieuChungKhamText === true) {
                        this.displayButton = true;
                    }

                    return;
                }
            }

            // trường hợp này value của toàn bộ templateKhoaPhongObj không có
            this.flagChangeTemplate = false;
            this.displayButton = false;
            return;
        }
    }
}
