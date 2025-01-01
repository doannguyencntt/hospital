import { Component, OnInit,Input, ViewChild,Renderer2,ChangeDetectorRef, ElementRef} from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { NhanVienLichPhanCong,Phong,ThoiGianTrucNhanVien,ShowDateTime,LookupBacSisYta} from '../lich-phan-cong-ngoai-tru.model';
import { addDays, weekInYear, firstDayInWeek, Day } from '@progress/kendo-date-math';
import { IntlService } from '@progress/kendo-angular-intl';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component'
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { GroupDescriptor,process } from '@progress/kendo-data-query';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/twotone-remove';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icClose from '@iconify/icons-ic/twotone-close';
declare var jQuery: any;
@Component({
    selector: 'app-lich-phan-cong-ngoai-tru-theo-tuan',
    templateUrl: './lich-phan-cong-ngoai-tru-theo-tuan.component.html',
    styleUrls: ['./lich-phan-cong-ngoai-tru-theo-tuan.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})

export class LichPhanCongNgoaiTruTheoTuanComponent implements OnInit {
    icAdd = icAdd;
    icRemove = icRemove;
    icClose=icClose;
    getCurrentID: number;
    icChevronLeft=icChevronLeft;
    icChevronRight=icChevronRight;
    dateLinkValue: Date = new Date();
    dateLinkText:string="";
    tenkhoaphongparams:string="";
    validationErrors: any;
    copyWeek : number=4;
    copyDataLastWeek:boolean = false;
    isCopyForWeek:boolean = true;
    IsShowGirpView: boolean = false;
    KhoaPhongId : number;



    phong: Phong ;
    phongs: Phong[]=[];
    nhanVienLichPhanCong: NhanVienLichPhanCong;
    thoiGianTrucNhanVien : ThoiGianTrucNhanVien;
    showDateTime: ShowDateTime
    LookupBacSis = {} as LookupBacSisYta;
    LookupYtas = {} as LookupBacSisYta;
    height: number;
    heightToolbar: number = 250;
    inPopup: boolean = false;
    strPhongNotExists:string="";
    constructor(private renderer : Renderer2,private route: ActivatedRoute, 
                private elem: ElementRef,
                private authService: AuthService,
                private apiService: ApiService,
                public intl: IntlService, private dialog: MatDialog, 
                private notificationService: NotificationService,
                private cdRef: ChangeDetectorRef,
                
    ) { }

    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    documentType: DocumentType;
    gridColumns: any[] = [];
    public groups: GroupDescriptor[]=[{ field: 'TenPhong' }];
    public thu2="Thứ 2 ";
    public thu3="Thứ 3 ";
    public thu4="Thứ 4 ";
    public thu5="Thứ 5 ";
    public thu6="Thứ 6 ";
    public thu7="Thứ 7 ";
    public cn="Chủ nhật ";
    public gridData:any;
    
    ngOnInit() {
        this.phong = new Phong();
        this.documentType = DocumentType.DanhMucLichPhanCongNgoaiTru;
        this.nhanVienLichPhanCong = new NhanVienLichPhanCong();
        this.nhanVienLichPhanCong.ListIdValidator = new Array<number>()
        this.thoiGianTrucNhanVien = new ThoiGianTrucNhanVien();
        this.phong.ThoiGianTrucNhanVienBuoiSangs = new ThoiGianTrucNhanVien();
        this.phong.ThoiGianTrucNhanVienBuoiChieus = new ThoiGianTrucNhanVien();
        this.phong.ThoiGianTrucNhanVienBuoiSangs = this.thoiGianTrucNhanVien;
        this.phong.ThoiGianTrucNhanVienBuoiChieus = this.thoiGianTrucNhanVien;
        this.phong.NhanVienTrucDelete.push(this.nhanVienLichPhanCong);
        this.showDateTime = new ShowDateTime();
        this.GetListLookupNhanVien();
        this.phongs.push(this.phong)


       this.getCurrentID = this.route.snapshot.params.id;
       this.dateLinkText = this.route.snapshot.params.ngay;
       this.KhoaPhongId = this.getCurrentID;

       this.dateLinkValue = new Date(this.dateLinkText);
       if (this.getCurrentID !== undefined && this.getCurrentID !== null) {
        this.getById(this.getCurrentID);
       }

       this.dateLinkText=this.formatDateLink(this.dateLinkValue);
    }

    ngAfterContentInit() {
      var self = this;
      if (this.height == null) {
        self.height = jQuery(window).height() - self.heightToolbar;
          if (self.height < 400)
              self.height = 400;

        jQuery(window).resize(function () {
          self.height = jQuery(window).height() - self.heightToolbar;
          if (self.height < 400)
              self.height = 400;
        });
    }
    this.gridData = process(this.phongs,{group: this.groups});
    this.cdRef.detectChanges();
    }

    getById(id: number)
    {
      
        this.validationErrors = null;
        this.copyWeek = 4;
        var fromDate = this.intl.formatDate(addDays(firstDayInWeek( this.dateLinkValue, Day.Monday),6),"yyyy-MM-dd");
        var toDate = this.intl.formatDate(addDays(firstDayInWeek( this.dateLinkValue, Day.Monday),0),"yyyy-MM-dd")
        this.apiService.post<any>("LichPhanCongNgoaiTru/GetPhongByKhoaId?KhoaPhongId=" + id + "&&fromDate="+ fromDate+ "&&toDate="+ toDate).subscribe(
            resultData => {
                if (resultData !== undefined && resultData != null) {
                    this.tenkhoaphongparams = "Xếp Lịch "+ resultData[0].TenKhoa;
                    this.phongs = resultData;
                    this.setDateTimeDayInWeek(this.showDateTime,this.dateLinkValue);
                    this.setdataView(this.phongs);
                    this.ngAfterContentInit();
                    this.IsShowGirpView = true;
                }
                else
                {
                  this.strPhongNotExists ="không tìm thấy phòng để xếp lịch phân công";
                }
            },() => {}
        );

      
    }

    resizeKendoGird()
    {
      let elements = this.elem.nativeElement.querySelector('tbody > tr');
      elements.style="";
    }

    RemovePosition(modelNVTruc : any, itemIndex : number, phongTruc : any)
    {
       this.validationErrors =[];
        var last = modelNVTruc.slice(itemIndex)[0]
        let index = 0;
        const lastIndexOf = modelNVTruc.forEach(element => {
          if(element.IsBacSi == last.IsBacSi && element.Thu == last.Thu)
                return index+=1;
        });
        if(index>1){
          phongTruc.NhanVienTrucDelete.push(last);
          modelNVTruc.splice(itemIndex,1);
        }
        this.setdataView(this.phongs);
        this.resizeKendoGird();
    }

    AddPosition(modelNVTruc : any, item : number,isBS: boolean)
    {
        this.validationErrors =[];
        let viTriNewNhanVienLichPhanCong = new NhanVienLichPhanCong();
        viTriNewNhanVienLichPhanCong.Thu = item;
        viTriNewNhanVienLichPhanCong.IsBacSi=isBS;
        modelNVTruc.push(viTriNewNhanVienLichPhanCong);
        this.setdataView(this.phongs);
    }

    setDateTimeDayInWeek(modelshowDateTime : any, dateDay:Date){
        if(modelshowDateTime != null){
            modelshowDateTime.DateTimeT2 = this.intl.formatDate(addDays(firstDayInWeek(dateDay, Day.Monday),0),"dd/MM/yyyy")
            modelshowDateTime.DateTimeT3 = this.intl.formatDate(addDays(firstDayInWeek(dateDay, Day.Monday),1),"dd/MM/yyyy")
            modelshowDateTime.DateTimeT4 = this.intl.formatDate(addDays(firstDayInWeek(dateDay, Day.Monday),2),"dd/MM/yyyy")
            modelshowDateTime.DateTimeT5 = this.intl.formatDate(addDays(firstDayInWeek(dateDay, Day.Monday),3),"dd/MM/yyyy")
            modelshowDateTime.DateTimeT6 = this.intl.formatDate(addDays(firstDayInWeek(dateDay, Day.Monday),4),"dd/MM/yyyy")
            modelshowDateTime.DateTimeT7 = this.intl.formatDate(addDays(firstDayInWeek(dateDay, Day.Monday),5),"dd/MM/yyyy")
            modelshowDateTime.DateTimeT8 = this.intl.formatDate(addDays(firstDayInWeek(dateDay, Day.Monday),6),"dd/MM/yyyy")
        }
    }

    changeDateLink(event:any){
      this.dateLinkValue=event;
      this.dateLinkText=this.formatDateLink(event);
      this.getById(this.getCurrentID);
    }

    prevDateLink(){
      this.dateLinkValue=addDays(this.dateLinkValue,-7);
      this.dateLinkText=this.formatDateLink(this.dateLinkValue);
      this.getById(this.getCurrentID);
    }

    nextDateLink(){
      this.dateLinkValue=addDays(this.dateLinkValue,7);
      this.dateLinkText=this.formatDateLink(this.dateLinkValue);
      this.getById(this.getCurrentID);
    }

    formatDateLink(date:Date){
     this.setDateTimeDayInWeek(this.showDateTime,date);
     return "Tháng <strong>"+(date.getMonth()+1)+"/"+date.getFullYear()
     +"</strong> - Tuần <strong>"+weekInYear(date)+"</strong> (<strong>"
     +this.intl.formatDate(firstDayInWeek(date, Day.Monday),"dd/MM/yyyy")
     +"</strong> - <strong>"+this.intl.formatDate(addDays(firstDayInWeek(date, Day.Monday),6),"dd/MM/yyyy")+"</strong>)";
    }
    
    onSelectionChangeNV(modelNV : any,modelThu: number, modelNVTruc :any, event:any)
    {
      this.validationErrors =[];
      if(modelNV.NhanVienId == undefined)
          modelNV.IsDelete = true
      else
          modelNV.IsDelete=false
      modelNV.TenNhanVien = event != undefined ? event.DisplayName :"";
      modelNV.NgayPhanCong = this.intl.formatDate(addDays(firstDayInWeek(this.dateLinkValue, Day.Monday),modelThu-2),"yyyy-MM-dd");
      //check validat List ID
      if(event != undefined )
      {
        modelNVTruc.forEach( element=> {
              if(element.NhanVienId === event.KeyId  && element.Thu === modelNV.Thu){
                  modelNV.ListIdValidator.push(event != undefined ? event.KeyId: 0);
              }
        });
      }
      if(modelThu == 2)
      {
          for(var i=0 ;i< this.phongs.length;i++){
                      if(this.phongs[i].PhongNgoaiTruId === modelNV.PhongNgoaiTruId){
                              this.phongs[i].BacSis.forEach(value => {
                                      if(modelNV.IsBacSi == value.IsBacSi  && event != undefined 
                                        && (value.NhanVienId == 0 || value.TenNhanVien==null || value.TenNhanVien=="")){
                                          value.NhanVienId = event.KeyId
                                          value.TenNhanVien = event.DisplayName
                                          value.NgayPhanCong = addDays(firstDayInWeek(this.dateLinkValue, Day.Monday),value.Thu-2);
                                      }
                              });
                            this.phongs[i].YTas.forEach(value => {
                                    if(modelNV.IsBacSi == value.IsBacSi  && event != undefined 
                                      && (value.NhanVienId == 0 || value.TenNhanVien==null || value.TenNhanVien=="")){
                                        value.NhanVienId = event.KeyId
                                        value.TenNhanVien = event.DisplayName
                                        value.NgayPhanCong = addDays(firstDayInWeek(this.dateLinkValue, Day.Monday),value.Thu-2);
                                    }
                            });
                        }
          }
                  
      }
    }
    
    Save(){
        this.validationErrors =[];
        var self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
          this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, ["xếp lịch","phân công"]) }
          }).afterClosed().subscribe(result => {
            if (result == "Yes") {
              self.phongs.forEach(element => {
                element.IsCopy = this.copyDataLastWeek; 
                element.ToDate = this.dateLinkValue,
                element.FromDate = addDays(this.dateLinkValue,7)
              })
              self.apiService.post<Phong>("LichPhanCongNgoaiTru/XepLichPhanCong", { Phong: self.phongs }).subscribe(
                  () => {
                         self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [" Đã xếp lịch "]));
                         this.getById(this.getCurrentID);
                         this.isCopyForWeek = false;
                         this.copyDataLastWeek = false;
                  },
                  (err: ApiError) => { 
                    this.validationErrors = err.ValidationErrors;   
                    if(err.Message!="Validation Failed")
                    {
                      this.notificationService.showError(err.Message);
                    } 
                  });
            }
          });
        }
        else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    SavePrint(){
        this.validationErrors =[];
        var self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
          this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, ["in và xếp lịch","phân công"]) }
          }).afterClosed().subscribe(result => {
            if (result == "Yes") {
              self.phongs.forEach(element => { 
                      element.IsCopy = this.copyDataLastWeek;
                      element.IsPrint = true,
                      element.HostingPrint= window.location.host,
                      element.ToDate = addDays(firstDayInWeek( this.dateLinkValue, Day.Monday),0);
                      element.FromDate = addDays(firstDayInWeek( this.dateLinkValue, Day.Monday),6);
                      element.TenKhoa = this.tenkhoaphongparams;
              })
              self.apiService.post<any>("LichPhanCongNgoaiTru/XepLichPhanCong", { Phong: self.phongs }).subscribe(resultData =>
              {
                      this.printForm(resultData);
                      self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Đã xếp lịch"]));
                      this.getById(this.getCurrentID);
                      this.isCopyForWeek = false;
                      this.copyDataLastWeek = false;
              },
              (err: ApiError) => { 
                this.validationErrors = err.ValidationErrors;   
                if(err.Message!="Validation Failed")
                {
                  this.notificationService.showError(err.Message);
                } 
              });
            }
          });
        }
        else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
  
    CopyCalendar(){
        this.validationErrors =[];
        var self = this;
        var toDate = addDays(firstDayInWeek( this.dateLinkValue, Day.Monday),0)
        if(this.copyWeek>0 && this.copyWeek !== null){
                if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
                  this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockCalendar, ["copy lịch này cho "+this.copyWeek," tuần tới "]) }
                  }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                      self.phongs.forEach(element => {
                                element.IsCopy = true, 
                                element.CopyForWeek = this.copyWeek == null ? 0: this.copyWeek,
                                element.ToDate=toDate
                      })
                      self.apiService.post<any>("LichPhanCongNgoaiTru/LichPhanCongCopy", { Phong: self.phongs }).subscribe(() => {
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Đã copy lịch cho "+this.copyWeek+" tuần tới "]));
                                this.getById(this.getCurrentID);
                                this.isCopyForWeek = false;
                                this.copyDataLastWeek = false;
                          },
                          (err: ApiError) => { 
                            this.validationErrors = err.ValidationErrors;   
                            if(err.Message!="Validation Failed")
                            {
                              this.notificationService.showError(err.Message);
                            } 
                          });

                    }
                  });
                }
                else {
                  this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                }
        }
        else
          self.notificationService.showSuccess("Chưa nhập số tuần để copy lịch");
    }

    CopyCalendarLastWeek(){
        this.copyDataLastWeek =true
        this.validationErrors = [];
        this.copyWeek = 4;
        var fromDate = this.intl.formatDate(addDays(firstDayInWeek( this.dateLinkValue, Day.Monday),6),"yyyy-MM-dd");
        var toDate = this.intl.formatDate(addDays(firstDayInWeek( this.dateLinkValue, Day.Monday),0),"yyyy-MM-dd")
        this.apiService.post<any>("LichPhanCongNgoaiTru/GetDataLastWeek?KhoaPhongId=" + this.getCurrentID + "&&fromDate="+ fromDate+ "&&toDate="+ toDate).subscribe(
            resultData => {
                if (resultData !== undefined && resultData != null) {
                  this.phongs = resultData;
                  this.setDateTimeDayInWeek(this.showDateTime,this.dateLinkValue);
                  this.setdataView(this.phongs);
                  this.gridData = process(this.phongs,{group: this.groups});
                  this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Đã copy lịch"]));
                }
                else
                    this.notificationService.showError("Không tìm thấy lịch phân công gần đây");
            }, 
            (err: ApiError) => { 
                this.notificationService.showError("Không tìm thấy lịch phân công gần đây");
            });
        
    }

    printForm(responseHTML: any) {
        const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
        WindowPrt.focus();
        WindowPrt.close(); 
        WindowPrt.document.write(responseHTML);
        WindowPrt.document.close();

        var contents = WindowPrt.document.documentElement.innerHTML;
        var frame1 = this.renderer.createElement('iframe');
        frame1.name = "frame1";
        frame1.style.position = "absolute";
        frame1.style.top = "-1000000px";
        document.body.appendChild(frame1);
        var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
        frameDoc.document.open();
        frameDoc.document.write('<html><head><title>DIV Contents</title>');
        frameDoc.document.write('</head><body>');
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            document.body.removeChild(frame1);
        }, 500);
        return false;
    }
  
    Cancel(){
      if (this.getCurrentID !== undefined && this.getCurrentID !== null) {
        this.getById(this.getCurrentID);
       }
        // this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru"]);
    }
  
    onChangecopyWeek(event:number){
        this.copyWeek = event;
    }

    setdataView(phonglist : any)
    {
      this.isCopyForWeek = this.phongs[0].IsShowCopyForWeek;
      this.phongs.forEach((value, index) => {
        value.Id = index;
      });
      this.setHidenDeleteButton();
    }

    setHidenDeleteButton()
    {
      for(let i = 0; i<this.phongs.length;i++ )
      {
          this.phongs[i].BacSis.forEach((value, index) => {
            value.ListIdValidator = new Array<number>();
            if(index < 7)
              value.IsDeleteHiden = true
          });
          this.phongs[i].YTas.forEach((value, index) => {
            value.ListIdValidator = new Array<number>();
            if(index < 7)
              value.IsDeleteHiden = true
          });
      }
    }

    GetListLookupNhanVien() {
      // this.apiService.get<any>("NhanVien/GetListLookupNhanVienIsYtaData").subscribe(resultData => {
      //     if (resultData !== undefined && resultData != null) {
      //       this.LookupYtas = resultData;
      //         console.log(resultData, this.LookupBacSis);
      //     }
      //   });
      // this.apiService.get<any>("NhanVien/GetListLookupNhanVienIsBacsiData").subscribe(resultData => {
      //     if (resultData !== undefined && resultData != null) {
      //       this.LookupBacSis =  resultData;
      //         console.log(resultData, this.LookupYtas);
      //     }
      //   });
      //   this.phongs.forEach((value, index) => {
      //     value.Id = index;
      //     value.LookupDataBacsi = this.LookupBacSis;
      //     value.LookupDataYta = this.LookupYtas;
      //   });

      
    //const lastIndexOf = (array,bacsi) => {
    //             for(var i = array.length-1;i >= 0; i--){
    //                 if(array[i].IsBacSi === bacsi)
    //                     return i;
    //             }
    //}

    }


    
    
}
