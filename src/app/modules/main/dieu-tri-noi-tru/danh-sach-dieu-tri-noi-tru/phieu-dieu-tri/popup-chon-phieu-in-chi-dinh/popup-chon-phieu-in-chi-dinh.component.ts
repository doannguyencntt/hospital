import {Component, OnInit, ChangeDetectorRef, Inject} from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popup-chon-phieu-in-chi-dinh',
  templateUrl: './popup-chon-phieu-in-chi-dinh.component.html',
  styleUrls: ['./popup-chon-phieu-in-chi-dinh.component.scss']
})
export class PopupChonPhieuInChiDinhComponent implements OnInit {

  icClose = icClose;
  public isCheck :boolean = true;
  checkSelect : boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private router: Router, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) {}

  ngOnInit() {
  }
  Ok(){
    this.close();
  }
  close() {
    this.dialogRef.close(this.data);
	}
  checkModelChange(){
    let kiemTraCheck = this.data.Model.filter(x => x.IsCheckPhieuIn);
    if(kiemTraCheck.length != 0)
    {
      this.checkSelect = true;
    }
    else{
      this.checkSelect = false;
    }
  }
}
