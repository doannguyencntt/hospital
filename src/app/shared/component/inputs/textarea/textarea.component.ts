import { Component,Input,OnInit,ViewEncapsulation ,Output,EventEmitter, OnDestroy} from '@angular/core';
import { VoiceComponent } from '../voice/voice.component';
import icKeyboardVoice from '@iconify/icons-ic/twotone-keyboard-voice';
import { MatDialog } from '@angular/material';
import icClear from '@iconify/icons-ic/twotone-clear';
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextareaComponent implements OnInit, OnDestroy {

  @Input() id:string;
  @Input() label:string;
  @Input() maxlength:number;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input() autoSize:boolean=false;
  @Input() minHeight:number=20;
  @Input() useVoice:boolean=false;
  @Input() useVoicePopup:boolean=false;
  @Input() showButtonClearData:boolean=false;

  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  @Output() blurChange:EventEmitter<any> = new EventEmitter<any>();
  icKeyboardVoice=icKeyboardVoice;
  icClear = icClear;
  interval: any;

  constructor(private dialog: MatDialog) {
  }
  ngOnInit(){
    //console.log("-------- = ", this.useVoicePopup);
    let self = this;
    if(this.useVoicePopup){
     this.interval = setInterval(function () {
        
        let valueHTML = document.getElementById('final_span').innerHTML;
        if(valueHTML != undefined && valueHTML != null){
          self.model = valueHTML;
          self.modelChange.emit(valueHTML);
        }
        //console.log("test = ", valueHTML.innerText, valueHTML.innerHTML);
    }, 500);

    }
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  } 


  emit(event:any){
    this.validationerror="";

    if (this.useVoicePopup) {
      let valueHTML = document.getElementById('final_span');
      if (valueHTML != undefined && valueHTML != null) {
        valueHTML.innerHTML = event;
      }
    }

    this.modelChange.emit(event);
  }

  blur(event: any){
    this.blurChange.emit(true);
  }

  showVoice(){
    let dialogRef = this.dialog.open(VoiceComponent, {
      disableClose: false,
      width: '500px',
      data: null,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!="Cancel")
      {
        this.model=result;
      }      
    });
  }

  clearData(){
    this.model = null;
    this.emit(this.model);
  }
}
