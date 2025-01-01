import { Component, OnInit, Inject, ChangeDetectorRef, Optional, TemplateRef, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";
import icInfo from '@iconify/icons-ic/baseline-info';
@Component({
  selector: "app-mo-lai-hop-dong-kham-popup",
  templateUrl: "./mo-lai-hop-dong-kham-popup.component.html",
  styleUrls: ["./mo-lai-hop-dong-kham-popup.component.scss"],
})
export class MoLaiHopDongKhamComponent implements OnInit {
  
  icClose = icClose;
  Title: any = null;
  Message: any = null;
  ButtonYes: string = "Có";
  ButtonNo: string = "Không";
  gridColumns: any[] = [];
  icInfo = icInfo;
  lyDoMoLaiHopDong = "";

  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild("actionTooltipTemplate", { static: true }) actionTooltipTemplate: TemplateRef<any>;
  validationErrors: any[] = [];

  constructor(
    private cdRef: ChangeDetectorRef,
    private dialogRef: MatDialogRef<any>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    setInterval(() => {
      console.log(this.data)
    }, 5000)    
    this.Title = this.data.Title;
    this.Message = this.data.Message;
  }

  close(result: any) {
    if (result === "Yes") {
      this.dialogRef.close(this.lyDoMoLaiHopDong);
    } else {
      this.dialogRef.close(null);
    }
  }
}
