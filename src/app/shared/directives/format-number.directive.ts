import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appFormatNumber]'
})
export class FormatNumberDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
  
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
 
    var match = this.el.value.replace(/\./g, '');
    this.el.value = Number(match).toLocaleString('de-DE')
    
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    
    var match = value.replace(/\./g, '');
     this.el.value = Number(match).toLocaleString('de-DE')
   
  }
  @HostListener("keyup", ["$event.target.value"])
  onKeyup(value) {
    var match = value.replace(/\./g, '');
     this.el.value = Number(match).toLocaleString('de-DE')
    
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
   
      var integer =  value.replace(/\./g, '');

      this.el.value =  Number(integer).toLocaleString('de-DE')
   
  }

 



}
