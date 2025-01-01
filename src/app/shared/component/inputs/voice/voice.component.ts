import { Component, OnInit, ViewEncapsulation, AfterViewInit, Inject,  ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icKeyboardVoice from '@iconify/icons-ic/twotone-keyboard-voice';
@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class VoiceComponent implements OnInit, AfterViewInit {

  icClose = icClose;
  icKeyboardVoice=icKeyboardVoice;

  start_timestamp;

  //@ViewChild('inputVoice', { static: true }) inputVoice: ElementRef;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
   private cd: ChangeDetectorRef) { }

  ngOnInit() {
    //this.test();
    //auto focus
    //this.setFocusOnButtonSpeech();
 }

 ngAfterViewInit(){
   this.setFocusOnButtonSpeech();
 }

  close() {
    this.dialog.closeAll();
  }

  noiLai(){
    this.data='';
    let finalspan = document.getElementById('final_span');
    if(finalspan != undefined){
      finalspan.innerHTML = "";
    }
    this.setFocusOnButtonSpeech();
    //this.inputVoice.nativeElement.focus();
    //document.clearFinalSpan();
    // let finalspan = document.getElementById('final_span');
    // console.log("xoa = ", finalspan);
    // if(finalspan != undefined){
    //   finalspan.innerHTML = "";
    // }
  }

  setFocusOnButtonSpeech(){
    let inputVoice = document.getElementById('start_button');
    //console.log("setFocusOnButtonSpeech = ", inputVoice);
    inputVoice.click();
    this.cd.detectChanges();
  }
}
