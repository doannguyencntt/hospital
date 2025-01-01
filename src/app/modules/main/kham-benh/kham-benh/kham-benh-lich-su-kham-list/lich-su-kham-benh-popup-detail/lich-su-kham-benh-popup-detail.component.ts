import { Component, OnInit, Inject, Output,EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import icDone from '@iconify/icons-ic/done';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-lich-su-kham-benh-popup-detail',
  templateUrl: './lich-su-kham-benh-popup-detail.component.html',
  styleUrls: ['./lich-su-kham-benh-popup-detail.component.scss'],
  // host: {
  //   '(document:click)': 'onClickOutSide($event)',
  // },
})
export class LichSuKhamBenhPopupDetailComponent implements OnInit {
  selectedKeys: any[] = [];
  icClose = icClose;
  icDone = icDone;
  benhNhan: number = 0;
  yeuCauKhamBenhId: number = 0;
  yeuCauTiepNhanId: number = 0;
  isFistTime: boolean = true;
  tabActive: string = "card0";
  showPTTT : boolean = true;  // to do
  isKhamDoan : boolean;
  //constructor(private dialogRef: MatDialogRef<LichSuKhamBenhPopupDetailComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public dataItem: any)
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<any>,private apiService: ApiService,private route: ActivatedRoute) { }
  ngOnInit() {
    this.isKhamDoan =this.route.snapshot.queryParams.IsKhamDoan;
    this.benhNhan = this.data.MaBN;
    this.yeuCauKhamBenhId = this.data.Id;
    this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    this.IsExitsDVKTPTTT();

  }
  IsExitsDVKTPTTT()
  {
    this.apiService.get<any>("KhamBenh/IsExitsDVKTPTTT?idYCKB=" + this.yeuCauKhamBenhId).subscribe(resultData => {
      this.showPTTT = resultData;;
    });
  }
  close(answer: any, type: any) {
    
    if (type == 1) {
      this.dialogRef.close(answer);
    } else {
      this.dialogRef.close(answer);
    }

  }
  getIsKhamDoan(event){
    this.isKhamDoan = event;
  }

}

