import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output,ElementRef,Renderer2,ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import icPrint from '@iconify/icons-ic/twotone-print';

declare var $: any;

@Component({
  selector: 'app-print-form',
  templateUrl: './print-form.component.html',
  styleUrls: ['./print-form.component.scss'],

})

export class PrintFormComponent implements OnInit {
  // @Input() serialId: number = 123456789;
  // PrintSerials : any
  @Input() typeSize: string = "A4";
  // type: portrait, landscape
  @Input() typeLayout: string = "portrait";
  @Input() copies : number = 1;
  @Input() event : any = 0;
  @Input() type: string = "PDF";
  @Input() bodyComponent: any;
  @Input() documentType: DocumentType;
  @Input() baseRoute: string;
  @Input() isBarcodeId: boolean = false;
  @Input() isDisable: boolean = false;
  @Output() onPrinted = new EventEmitter<any>();
  @Input() textPrint: string = "In";
  @Input() showIconPrint:boolean = true;
  @Input() showInMenuItem: boolean = true;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('iframe',{ static: true }) iframe: ElementRef;
  element: HTMLElement;
  icPrint = icPrint;

  constructor(private ref: ChangeDetectorRef,private renderer : Renderer2) { }

  ngOnInit() {
    // this.PrintSerials = [{SerialId: this.serialId,Name: 'A'}];
  }

  ngOnDestroy(){
    this.ref.detach();
  }

  onPrintBarcode(){
    // var prtContent = document.getElementById("printMe");
    // var WinPrint = window.open('','','left=0,top=0');
    // WinPrint.document.write(prtContent.innerHTML);
    // WinPrint.document.close();
    // WinPrint.focus();
    // WinPrint.print();
    // WinPrint.close();
  }
  windowTimeout:any;
  onPrint() {
    var self = this;   
    if(this.windowTimeout!=null)
    {
      clearTimeout(this.windowTimeout);
    } 
    this.windowTimeout= setTimeout(function(){
      self.bodyComponent.getSharedPrintForm(this.event).then(responseHTML => {
        var WindowPrt = window.open('', '', 'left=0,top=0,width=2000,height=2000,toolbar=0,scrollbars=0,status=0');
        if(WindowPrt!=null && WindowPrt!=undefined)
        {
          WindowPrt.document.write(responseHTML);
          WindowPrt.document.close();
          WindowPrt.focus();
          WindowPrt.print();
          WindowPrt.close(); 
          }
      });
    },500);
  }


  onPrintPDF() {
    var self = this;
    if(this.windowTimeout!=null)
    {
      clearTimeout(this.windowTimeout);
    }
    this.windowTimeout= setTimeout(function(){
      self.bodyComponent.getSharedPrintForm(self.event).then(responseHTML => {
        var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
        if(WindowPrt!=null && WindowPrt!=undefined)
        {
          WindowPrt.focus();
          WindowPrt.close(); 
          WindowPrt.document.write(responseHTML);
          WindowPrt.document.close();
      
          var contents = WindowPrt.document.documentElement.innerHTML;
          if(self.copies>1)
          {
            for(var i=2;i<=self.copies;i++)
            {
              contents+="<p class='pagebreak'></p>"+WindowPrt.document.documentElement.innerHTML;
            }
          }
          var frame1 = self.renderer.createElement('iframe');
          frame1.name = "frame1";
          frame1.style.position = "absolute";
          frame1.style.top = "-1000000px";
          document.body.appendChild(frame1);
          var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
          frameDoc.document.open();        
          frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print { @page{size:' + self.typeSize + ' '+ self.typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');          
          frameDoc.document.write('</head><body>');
          frameDoc.document.write(contents);
          frameDoc.document.write('</body></html>');
          frameDoc.document.close();
          setTimeout(function () {
              window.frames["frame1"].focus(); 
              window.frames["frame1"].print();             
              document.body.removeChild(frame1);
          }, 500);
        }
        return false;
      });
    },500);
  }






// Clien setting direct printing using browser
//   Chrome
// 	1/ open chrome => chrome://flags 
// 	2/ Search > Enable New Print Preview UI Layout> Disable
// 	3/ Right click ShortCut chrome > properties > "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --kiosk-printing
// 	Note: Khi chuyển qua máy in thì dùng(nhớ phải tắt hết trình duyệt và mở lại để chọn máy in): Right click ShortCut chrome > properties > "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

// FireFox
// 	1/ open FireFox => about:config
// 	2/ Right click on the white space > select NEW > BOOLEAN
// 	3/ input text > print.always_print_silent > click OK and then select true
}
