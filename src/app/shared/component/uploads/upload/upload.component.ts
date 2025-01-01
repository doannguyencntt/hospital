import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import {
  FileInfo,
  FileRestrictions,
  RemoveEvent,
  SuccessEvent,
  FileState,
} from '@progress/kendo-angular-upload';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { RequestOptions, ResponseContentType, Http } from '@angular/http';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Subscription } from 'rxjs';
declare var $: any;
export class UploadInfo {
  Id: any;
  UploadUrl: any;
  TenGuid: any;
  Ten: any;
  DuongDan: any;
  DuongDanTmp: any;
  KichThuoc: any;
  LoaiTapTin: any;
  IsExistingFile:boolean;
  Uid: any;
  MoTa: string;
}
export class URLs {
  url: any;
  name: any;
}
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadComponent implements OnInit, OnDestroy {
  uploadRestrictions: FileRestrictions;
  events: string[] = [];
  imagePreviews: FileInfo[] = [];
  isFirstLoad: boolean = true;
  allMultiFiles:UploadInfo[]=[];

  @Input() id: string;
  @Input() label: string;
  @Input() required: boolean = false;
  @Input() moreClass: string;
  @Input() model: any;
  @Input() type: string = "text";
  @Input() disabled: boolean = false;
  @Input() classLabel: string = "col-sm-2";
  @Input() classField: string = "col-sm-10";
  @Input() horizontalForm: boolean = false;
  @Input() allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  @Input() maxFileSize: number = 10;
  @Input() minFileSize: number = 0;
  @Input() multiple: boolean = false;
  @Input() singleOnRow: boolean = true;
  @Input() batch: boolean = false;
  @Input() template: any;
  @Input() autoUpload: boolean = false;
  @Input() uploadSaveUrl: string = "Common/SaveFileUpload";
  @Input() uploadRemoveUrl: string = "";
  @Input() validationerror: string = "";
  @Input() title: string = "";
  @Input() selectText: string = "Chọn tập tin";
  @Input() invalidFilesMess: string = CommonService.format(SystemMessage.InvalidFiles, []);
  @Input() invalidFileExtensionMess: string = CommonService.format(SystemMessage.InvalidFileExtension, [this.allowedExtensions.toString()]);
  @Input() invalidMaxFileSizeMess: string = CommonService.format(SystemMessage.InvalidMaxFileSize, [this.maxFileSize.toString()]);
  @Input() invalidMinFileSizeMess: string = CommonService.format(SystemMessage.InvalidMinFileSize, [this.minFileSize.toString()]);
  @Input() isUploadToThirdParty: boolean = true;
  uploadFileResponse: Array<UploadInfo> = [];
  @Output() uploadEventProcessing: EventEmitter<any> = new EventEmitter<any>();
  @Output() uploadFileDone: EventEmitter<any> = new EventEmitter<any>();
  @Output() uploadMultiFileDone: EventEmitter<any> = new EventEmitter<any>();
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("myUpload",{static:true}) myUpload:any;

  constructor(private apiService: ApiService, private cd: ChangeDetectorRef, private http: Http, private notificationService: NotificationService) {
  }
  ngOnInit() {      
    this.uploadRestrictions = {
      allowedExtensions: this.allowedExtensions,
      maxFileSize: this.maxFileSize * 1024 * 1024,
      minFileSize: this.minFileSize * 1024 * 1024
    };
    if(this.multiple && this.model!=null && this.model.length>0)
    {
      this.allMultiFiles=this.model;
    }
  }
  ngOnDestroy() {
    this.cd.detach();
    //this.cd.detectChanges();

  }
  c(f: any) {
    //console.log(f);
  }
  ngOnChanges(changes: SimpleChanges) {     
    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    if (changes.model != undefined && changes.model.currentValue != null && this.model != undefined && this.model != null) {
      if (this.multiple == false) {
        if (this.model.Id > 0) {
          let modelClone = JSON.parse(JSON.stringify(this.model));
          //console.log(modelClone)
          this.model = [{
            name: modelClone.Ten,
            state: 3,
            TenGuid: modelClone.TenGuid,
            DuongDan: modelClone.DuongDan,
            IsExistingFile: true,
            MoTa:modelClone.MoTa
          }];
        }
      }
      else {
        if (this.model!=null && this.model.length > 0) {
          changes.model.previousValue = changes.model.currentValue;
          this.model.forEach((item: any) => {
            if (item.Id > 0) {
              item.name = item.Ten;
              item.state = 3;
              item.TenGuid = item.TenGuid,
              item.DuongDan = item.DuongDan,
              item.IsExistingFile = true,
              item.MoTa=item.MoTa
            }
          });
        }
      }
      this.isFirstLoad = false;
    }
    
    // if (this.multiple && this.model != null && this.model.length > 0) {
    //   this.allMultiFiles = this.model;
    // }
   
    if (this.model != undefined && this.model.length == 0) {
      this.uploadFileDone.emit(null);
      this.clearFiles();
    }
    else if (this.model == undefined) {
      this.model = [];
      this.isFirstLoad = true;
      this.uploadFileDone.emit(null);
     this.clearFiles();
    }

  }

  ngAfterContentChecked() {
    // console.log("ngAfterContentChecked = ", this.model);
    // if(this.model == null)
    // {
    //   this.model = [];
    //   this.cd.detectChanges();
    // }

  }
  clearFiles() {
    var self=this;
    setTimeout(function(){      
      if ((self.model != undefined && self.model.length == 0) ||self.model == undefined) {

        if($("#"+self.id+" .k-file")!=undefined && $("#"+self.id+" .k-file").length>0)
        {
          $("#"+self.id+" .k-file").each(function(){
            var current = $(this);
            if(current.attr("data-uid")!=null && current.attr("data-uid")!="")
            {
              self.remove(current.attr("data-uid"));
            }
          });
        }
      }
    },1000);
  }

  remove(uid: string) {
    let fileRemoved = this.myUpload.fileList.get(uid);
    if(fileRemoved != undefined && fileRemoved.length > 0){
      this.myUpload.removeFilesByUid(uid);
      this.uploadFileDone.emit(undefined);
    }
  }

  showButton(state: FileState): boolean {
    return (state === FileState.Uploaded) ? true : false;
  }

  public clearEventHandler(e: any): void {
    this.imagePreviews = [];
  }
  public removeEventHandler(e: RemoveEvent): void {   
    if(!this.isFirstLoad){
      if (e != null && e.files != undefined && e.files.length > 0) {
        this.uploadFileDone.emit(null);
        this.removeEvent.emit(e);
        e.files.forEach((item: any) => {
          item.name = item.FileNameOnServer;
        });
        const index1 = this.allMultiFiles.findIndex(item => item.Uid === e.files[0].uid);
        if (index1 >= 0) {
          this.allMultiFiles.splice(index1, 1);
        }
      }
      const index = this.imagePreviews.findIndex(item => item.uid === e.files[0].uid);
      if (index >= 0) {
        this.imagePreviews.splice(index, 1);
      }
    }
   
  }
  public async selectEventHandler(e: any) {  
    const that = this;
    this.uploadEventProcessing.emit(true);
    this.uploadFileResponse = [];
    let urls: Array<URLs> = []
    if(e.files!=undefined)
    {
      for (let i = 0; i < e.files.length; i++) {
        if (!e.files[i].validationErrors) {
  
          if (this.isUploadToThirdParty != true) {
            const reader = new FileReader();
            reader.onload = function (ev: any) {
              const image: any = {
                src: ev.target.result,
                uid: e.files[i].uid
              };
  
              that.imagePreviews.unshift(image);
            };
            reader.readAsDataURL(e.files[i].rawFile);
          }
          else {
            let extention = (e.files[i].name.match(/[^\\\/]\.([^.\\\/]+)$/) || [null]).pop()
            let filePath = window.URL.createObjectURL(e.files[i].rawFile);
            const params = new HttpParams(
              {
                fromObject: {
                  ten: e.files[i].name,
                  kichThuoc: e.files[i].size.toString(),
                  duongDan: filePath,
                  phanMoRong: extention
                }
              });
            //get presigned upload file url
            let response = await this.apiService.get<UploadInfo>('TaiLieuDinhKem/GetPreSignedUploadFileUrl', params).toPromise();
            if (response) {
              urls.push({ name: e.files[i].name, url: response.UploadUrl })
              delete response.UploadUrl;
              //response.Id = e.files[i].uid;
              response.Uid= e.files[i].uid;
              response.IsExistingFile=false;
              e.files[i].UploadUrl = response.UploadUrl;
              e.files[i].TenGuid = response.TenGuid;
              e.files[i].DuongDanTmp = response.DuongDanTmp;
              e.files[i].DuongDan = response.DuongDan;
              e.files[i].LoaiTapTin = response.LoaiTapTin;
              e.files[i].Ten = response.Ten;
              e.files[i].MoTa = response.MoTa;
              this.uploadFileResponse.push(response) //used for emitting data file to parent component
              this.allMultiFiles.push(response);
            }
          }
  
          this.uploadSaveUrl = JSON.stringify(urls);
          //console.log(JSON.stringify(urls));
          //console.log(urls);
          if (!this.cd['destroyed']) {
            this.cd.detectChanges();
          }
          //console.log($('.k-upload-selected'))
          //return false;
        }
        else {
  
          switch (e.files[i].validationErrors[0]) {
            case "invalidFileExtension":
              e.files[i].error = this.invalidFileExtensionMess;
              break;
            case "invalidMaxFileSize":
              e.files[i].error = this.invalidMaxFileSizeMess;
              break;
            case "invalidMinFileSize":
              e.files[i].error = this.invalidMinFileSizeMess;
              break;
          }
        }
      }
    }
    $('.k-upload-selected').trigger('click');

  }

  uploadEventHandler(e: any) {

  }
  successEventHandler(e: SuccessEvent) {
    //configuration "batch" = false -> separate request, so "e.files.length = 1" always equal true
    if (e && e.response && e.response.status == 200 && e.files != undefined && e.files.length > 0 && this.multiple!=true) {      
      let currentFileSuccesss = this.uploadFileResponse.filter(o => o.Uid == e.files[0].uid);
      if(currentFileSuccesss!=null && currentFileSuccesss.length>0)
      {
        delete currentFileSuccesss[0].Id;
        this.uploadFileDone.emit(currentFileSuccesss[0]);
      }
    }
  }
  completeEventHandler(e:any){
    if(this.multiple)
    {
      this.emit(this.allMultiFiles);
      this.uploadMultiFileDone.emit(this.allMultiFiles);
    }
    
    // this.uploadFileResponse=[];
  }

  errorEventHandler(e: ErrorEvent) {
    //console.log(e);
  }
  emit(event: any) {    
    this.modelChange.emit(event);
  }

  viewFile(file: any) {
    //console.log(file);
    let duongDan = file.DuongDan;
    if (file.IsExistingFile !== true) { //save tmp
      duongDan = file.DuongDanTmp
    }
    const params = new HttpParams(
      {
        fromObject: {
          tenGuid: file.TenGuid,
          duongDan: duongDan,
        }
      });
    // let response = await this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).toPromise();
    this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((resp) => {
      if (resp) {
        if (file.validationErrors == null || file.validationErrors.length <= 0) {
          if (file.LoaiTapTin == 2) {
            var html = "<div class=\"showFile\">";
            html += "<div class=\"overlay\"></div>";
            html += "<div class=\"middle\">";
            html += "<div class=\"inner\">";
            html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
            html += "<iframe src='" + resp + "' style=\"width:770px; height:570px;\" frameborder=\"0\"></iframe>";
            html += "</div>";
            html += "</div>";
            html += "</div>"
            $(html).appendTo('app-main');
          }
          else {
            if (file.LoaiTapTin==1) {
              var html = "<div class=\"showFile\">";
              html += "<div class=\"overlay\"></div>";
              html += "<div class=\"middle\">";
              html += "<div class=\"inner\">";
              html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
              html += "<img src='" + resp + "' alt='' style=\"max-width: 770px;max-height: 570px;\"/>";
              html += "</div>";
              html += "</div>";
              html += "</div>"
              $(html).appendTo('app-main');
            }
            else {
              this.downloadFile(resp, file.name);
              // var a = document.createElement("a");
              // a.href = resp;
              // a.target = "_blank";
              // //console.log(a)
              // a.click();
            }
          }
        }
        else {
          this.notificationService.showError("Tải file bị lỗi: " + file.error);
        }
      }
    })

  }

  downloadFile(url: string, fileName: string) {
    const options = new RequestOptions({ responseType: ResponseContentType.Blob });
    // Process the file downloaded
    this.http.get(url, options).subscribe(res => {
      //const fileName = getFileNameFromResponseContentDisposition(res);
      saveFile(res.blob(), fileName);
    });
  }
}
