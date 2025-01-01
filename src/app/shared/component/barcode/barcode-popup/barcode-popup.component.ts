import { Component, OnInit,  ViewChild, ElementRef,  Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-barcode-popup',
  templateUrl: './barcode-popup.component.html',
  styleUrls: ['./barcode-popup.component.scss']
})
export class BarcodePopupComponent implements OnInit {

  modelInternal: string;
  @Input() parameters: string;
  @ViewChild("inputbarcode", { static: true }) inputBarcode: ElementRef;
  constructor(private dialogRef:MatDialogRef<BarcodePopupComponent>) { }
  loading = true;

  ngOnInit() {
    //console.log(this.inputBarcode);
    setInterval(() => {
      this.inputBarcode.nativeElement.focus();
    }, 500);

  }

  onKey(e) {
    // if(this.modelInternal.endsWith("$"))
    // {
    //   this.window.close(this.modelInternal);
    //   this.modelInternal = '';
    // }
  }

  emit(event: string) {
    if (event.endsWith("$")) {
      this.dialogRef.close(event);
      // this.apiService.post<any>("BHYT/GetInfoFromURL/?model="+event).subscribe(
      //   resultData => {
      //     if (resultData != undefined) {
      //       this.modelChange.emit(resultData);
      //     }
      //   },
      //   (err: ApiError) => {

      //   });



      //this.modelChange.emit(event);


    }
    if (event.endsWith("@")) {
      this.dialogRef.close(event);
    }
  }
}
