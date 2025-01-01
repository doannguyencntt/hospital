import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
import icDownload from '@iconify/icons-ic/get-app';

@Component({
  selector: 'app-export-pdf',
  templateUrl: './export-pdf.component.html',
  styleUrls: ['./export-pdf.component.scss']
})
export class ExportPdfComponent implements OnInit {

  icDownload = icDownload;
  
  @Input() paperSize: string = "A4";
  @Input() scale: number = 0.7;
  @Input() fileName: string = 'export';
  @Input() isDisable: boolean = false;
  @Input() textButton: string = "Export";
  @Input() showIconExport:boolean = true;
  @Input() bodyComponent: any;
  @Input() margin: string = "1cm";
  @Input() styleButton:number = 1; //1: primary, 2: menu button
  @Input() param: any;
  @Input() repeatHeaders: boolean = false;
  @Input() landscape: boolean = false;

  @ViewChild('pdfExport',{ static: true }) pdfExport: PDFExportComponent;
  @ViewChild('htmlContent', { static: true }) MyDOMElement: ElementRef;

  fileExtension: string = ".pdf";

  @Output() onExported = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  windowTimeout:any;
  exportPDF() {
    var self = this;
    if (self.windowTimeout != null) {
      clearTimeout(self.windowTimeout);
    }
    self.windowTimeout = setTimeout(function () {
      if (self.param !== undefined) {
        self.bodyComponent.getSharedExportHtmlContent(self.param).then(responseHTML => {
          // var element = document.getElementById("htmlContent");
          // element.innerHTML = responseHTML;
          if(responseHTML !== null && responseHTML !== "")
          {
            self.MyDOMElement.nativeElement.innerHTML = responseHTML;
            self.pdfExport.saveAs(self.fileName + self.fileExtension);
          }
        });
      }
      else {
        self.bodyComponent.getSharedExportHtmlContent().then(responseHTML => {
          if(responseHTML !== null && responseHTML !== "")
          {
            self.MyDOMElement.nativeElement.innerHTML = responseHTML;
            self.pdfExport.saveAs(self.fileName + self.fileExtension);
          }
        });
      }
    }, 500);
  }
}
