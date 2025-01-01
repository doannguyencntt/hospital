import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import { GoiLaiYeuCauXetNghiem } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-ptt-cls-chay-lai-xn-popup',
  templateUrl: './ptt-cls-chay-lai-xn-popup.component.html',
  styleUrls: ['./ptt-cls-chay-lai-xn-popup.component.scss']
})
export class PttClsChayLaiXnPopupComponent implements OnInit {
    validationErrors: any[] = [];
    Message: any;

    goiLaiYeuCauXetNghiem: GoiLaiYeuCauXetNghiem;

    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<any>, private cdRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.Message = this.data.Message;
        this.goiLaiYeuCauXetNghiem = this.data.GoiLaiYeuCauXetNghiem;
    }

    close(result: any) {
        if (result) {
            this.validationErrors = [];
            this.cdRef.detectChanges();

            if (this.goiLaiYeuCauXetNghiem.LyDo == undefined || this.goiLaiYeuCauXetNghiem.LyDo == null || this.goiLaiYeuCauXetNghiem.LyDo == "") {
                this.validationErrors.push({
                    Message: "Lý do yêu cầu nhập.",
                    Field: "LyDo",
                });

                return;
            } else {
                this.dialogRef.close(this.goiLaiYeuCauXetNghiem);
            }
        } else {
            this.dialogRef.close(false);
        }
    }
}
