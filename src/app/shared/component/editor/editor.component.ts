import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, AfterViewInit } from '@angular/core';
import keyboardArrowDown from '@iconify/icons-ic/twotone-keyboard-arrow-down';
import keyboardArrowUp from '@iconify/icons-ic/twotone-keyboard-arrow-up';
declare var jQuery: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit,AfterViewInit {
  keyboardArrowDown=keyboardArrowDown;
  keyboardArrowUp=keyboardArrowUp;
  @Input() id:string;
  @Input() label:string;
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
  @Input() height:number=30;
  @Input() minHeight:number=190;
  @Input() iframe:boolean=false;
  @Input() hideLinkButton:boolean = false;
  @Input() hideFileButton:boolean = false;
  @Input() hideImageButton:boolean = false;
  @Input() showToolbar:boolean=true;
  @Input() maxlength:number;

  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
   this.showHideToolbar();
    
  }

  emit(event:any){
    this.validationerror="";
    this.modelChange.emit(event);
  }
  toggleToolbar(){
    this.showToolbar=!this.showToolbar;
    this.showHideToolbar();
  }
  showHideToolbar(){    
    if(this.showToolbar)
    {
      jQuery("#"+this.id+" .k-toolbar").show();
    }
    else{
      jQuery("#"+this.id+" .k-toolbar").hide();
    }
    
  }
}
