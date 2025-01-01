import { Component,Input,OnInit,ViewEncapsulation,Output,EventEmitter, ChangeDetectorRef, AfterContentInit } from '@angular/core';
@Component({
  selector: 'app-textboxmask',
  templateUrl: './textboxmask.component.html',
  styleUrls: ['./textboxmask.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextboxmaskComponent implements OnInit,AfterContentInit {

  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() type:string="text";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() mask:string;
  @Input() maskValidation:boolean=true;
  @Input() includeLiterals:boolean=false;
  @Input() clearIfNotValid:boolean=true;
  @Input() validationerror:string="";
  @Input() title:string="";

  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  constructor(private cdRef:ChangeDetectorRef) {
  }
  ngOnInit(){
  }
  ngAfterContentInit(){    
    this.cdRef.detectChanges();
  }
  emit(event:any){
    this.validationerror="";
    this.modelChange.emit(event);
  }
  handleBlur(){
    if(this.clearIfNotValid && this.model!=undefined && this.mask != undefined)
    {
      var maskedTrim=this.mask.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
      var modelTrim=this.model.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
      if(maskedTrim.length!=modelTrim.length)
      {
        this.model=null;
        this.emit(null);
      }
    }
  }
}
