import { Component, Optional, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icFullscreen from "@iconify/icons-ic/twotone-fullscreen";
import icFullscreenExit from "@iconify/icons-ic/twotone-fullscreen-exit";
import { CommonService } from 'src/app/core/utilities/common.helper';
@Component({
  selector: 'app-view-image-pdf',
  templateUrl: './view-image-pdf.component.html',
  styleUrls: ['./view-image-pdf.component.scss']
})
export class ViewImagePdfComponent { 
  icClose = icClose;
  Title:string=null;
  Description:string=null;
  Src:string=null;
  Type:string="Image";//PDF,Image
  HideClose:boolean=false;
  HideFullScreen:boolean=false;
  icFullscreen=icFullscreen;
  icFullscreenExit=icFullscreenExit;
  isFullscreen:boolean=false;
  Width:number=800;
  Height:number=600;
  constructor(private dialogRef: MatDialogRef<ViewImagePdfComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.Title=data.Title;
      this.Description=data.Description;
      this.Src=data.Src;
      this.Type=data.Type;
      if(data.HideClose!=null)
      {
        this.HideClose=data.HideClose;
      }
      if(data.HideFullScreen!=null)
      {
        this.HideFullScreen=data.HideFullScreen;
      }
      if(data.Width!=null)
      {
        this.Width=typeof(data.Width)=="string"?parseInt(data.Width.replace("px","")):data.Width;
      }
      if(data.Height!=null)
      {
        this.Height=typeof(data.Height)=="string"?parseInt(data.Height.replace("px","")):data.Height;
      }
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
  fullscreen(){
    CommonService.fullScreenDialog(this.isFullscreen,this.Height,this.Width,137);
    this.isFullscreen=!this.isFullscreen;
  }
}
