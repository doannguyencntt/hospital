import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { BarcodePopupComponent } from "../barcode-popup/barcode-popup.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-barcode",
  templateUrl: "./barcode.component.html",
  styleUrls: ["./barcode.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BarcodeComponent implements OnInit {
  modelInternal: string;
  @Input() model: any;
  type: string = "text";
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit() {}

  // ngOnChanges(changes: SimpleChanges) {
  //   // You can also use model.previousValue and
  //   // model.firstChange for comparing old and new values
  //   if (changes.modelInternal != undefined) {
  //     if (this.modelInternal != undefined && this.modelInternal.endsWith("$")) {
  //       this.modelInternal = '';
  //       //this.modelChange.emit(this.model);

  //       console.log("end", this.modelInternal);
  //     }
  //   }
  // }

  // clickBarcode(){
  //   console.log("clickBarcode");
  // }

  onKey(e) {
    // this.modelInternal = '';
    // //if(e.key == 'Shift') return;
    // //console.log("clickonKey = ", e);
    // if(this.model != undefined)
    // {
    //   this.model = this.model + e.key;
    // }
    // else
    // {
    //   this.model = e.key;
    // }
    // this.modelChange.emit(this.model);
    // if(e.key == '$')
    // {
    //   this.model = '';
    // }
  }

  emit(event: string) {
    //console.log("emit = ", event);
    //this.modelChange.emit(event);
    if (event.endsWith("$")) {
      this.apiService
        .post<any>("BHYT/GetInfoFromURL/?model=" + event)
        .subscribe(
          (resultData) => {
            if (resultData != undefined) {
              this.modelChange.emit(resultData);
            }
          },
          (err: ApiError) => {}
        );

      //this.modelChange.emit(event);
    }
  }

  BarcodeActive() {
    // var self = this;
    // self.windowChild.open('Quét mã vạch'.toUpperCase(),BarcodePopupComponent,330,197, '');
    //console.log("BarcodeActive", self);
    let dialogRef = this.dialog.open(BarcodePopupComponent, {
      //disableClose: true,
      width: "254px",
      height: "90px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (typeof result == "string" && result.endsWith("$")) {
        //console.log(`Dialog result: ${result}`);
        this.apiService
          .post<any>("BHYT/GetInfoFromURL/?model=" + result)
          .subscribe(
            (resultData) => {
              if (resultData != undefined) {
                this.modelChange.emit(resultData);
              }
            },
            (err: ApiError) => {
              this.modelChange.emit(null);
            }
          );
      } else if (typeof result == "string" && result.endsWith("@")) {
        this.modelChange.emit(result);
      } else {
        this.modelChange.emit(null);
      }
    });
  }
}
