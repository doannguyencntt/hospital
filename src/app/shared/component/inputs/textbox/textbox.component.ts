import { Component,Input,OnInit,ViewEncapsulation ,Output,EventEmitter, SimpleChanges,  AfterViewInit, ChangeDetectorRef} from '@angular/core';
import icKeyboardVoice from '@iconify/icons-ic/twotone-keyboard-voice';
import icClear from '@iconify/icons-ic/twotone-clear';
import { MatDialog } from '@angular/material';
import { VoiceComponent } from '../voice/voice.component';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';

declare var jQuery: any;
@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextboxComponent implements OnInit, AfterViewInit {
 
  inputElement: HTMLElement;
  eyeMode:string="ft-eye-off";
  @Input() moreClassForInput:string;
  @Input() id:string;
  @Input() label:string;
  @Input() maxlength:number;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() type:string="text";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input() onlynumber:boolean=false;
  @Input() onlyNumberAndCharacter:boolean=false;
  @Input() showIconEyeRight:boolean=false;
  @Input() isAutoFocus:boolean=false;
  @Input() useVoice:boolean=false;
  @Input() upperCase:boolean=false;
  @Input() isWhiteBackground:boolean=false;
  @Input() tabindex: number = 0;
  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  @Output() blurChange:EventEmitter<any> = new EventEmitter<any>();
  

  icClear = icClear;
  icKeyboardVoice=icKeyboardVoice;

  @Input() eyesDisplay:boolean = false;

  visible = false;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private cd: ChangeDetectorRef,private dialog: MatDialog) {
    //this.inputElement = el.nativeElement;
  }
  ngOnInit(){
    //console.log("placeHolder = ", this.placeHolder);
  }
  ngAfterViewInit(){
    //console.log("isAutoFocus = ", this.isAutoFocus, " --- ", this.id);
    if(this.isAutoFocus)
    {
      //console.log(document.getElementById(this.id), document.getElementById(this.id + "isAutoFocus"));
      if(document.getElementById(this.id + "isAutoFocus") != undefined){
        document.getElementById(this.id + "isAutoFocus").focus();
        this.cd.detectChanges();
      }
      // setInterval(() => {
      //   console.log("abc");

      //   //this.inputBarcode.nativeElement.focus();
      //   this.inputElement.el.focus();

      // }, 500);
      //this.focusAutoInput.nativeElement.focus();

    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    if(changes.model!=undefined && changes.model.currentValue==null)
    {
      var self=this;
      setTimeout(function(){
        if(jQuery("#"+self.id).find(".k-textbox-container")!=undefined && jQuery("#"+self.id).find(".k-textbox-container").length>0)
        {
          jQuery("#"+self.id).find(".k-textbox-container").addClass("k-state-empty");
        }
        
      },1);
    }
}

focus(){
  if(document.getElementById(this.id + "isAutoFocus") != undefined){
    //console.log("focusManual = ", this.id, document.getElementById(this.id + "isAutoFocus"));
    document.getElementById(this.id + "isAutoFocus").focus();
    this.cd.detectChanges();
  }
}


  emit(event:any){
    this.validationerror="";
    if(this.upperCase==true && event!=null)
    {
      event=event.toString().toUpperCase();
    }
    this.modelChange.emit(event);
  }
  blur(event: any){
    this.blurChange.emit(true);
  }
  toggleEye(){
    if(this.eyeMode=="ft-eye-off")
    {
      this.eyeMode="ft-eye";
      this.type="text";
    }
    else{
      this.eyeMode="ft-eye-off";
      this.type="password";
    }
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

  toggleVisibility() {
    if (this.visible) {
      this.type = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.type = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

}
