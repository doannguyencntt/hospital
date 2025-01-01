import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumNhomGoiDichVu } from 'src/app/shared/enum/kham-benh.enum';
import { ChiTietDieuTriNoiTruViewModel } from '../../dieu-tri-noi-tru.model';

@Component({
  selector: 'app-dich-vu-chi-dinh-ngoai-tru',
  templateUrl: './dich-vu-chi-dinh-ngoai-tru.component.html',
  styleUrls: ['./dich-vu-chi-dinh-ngoai-tru.component.scss']
})
export class DichVuChiDinhNgoaiTruComponent implements OnInit {

  tabString: string;
  nhomDichVuKyThuat: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuKyThuat;
  nhomVatTu: EnumNhomGoiDichVu = EnumNhomGoiDichVu.VatTuTieuHao;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  
  @ViewChild("tabChildStrip", { static: true }) tabChildStrip: TabStripComponent;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { 
    this.route.queryParams.subscribe(params => {
      this.tabString = params['tabChild'];
    });
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.getActiveTab();
  }

  getActiveTab() {
    if (this.tabString != undefined && this.tabString == "dv-kham") {
      this.tabChildStrip.selectTab(0);
    }
    else if (this.tabString != undefined && this.tabString == "dv-ky-thuat") {
      this.tabChildStrip.selectTab(1);
    }
    else if (this.tabString != undefined && this.tabString == "kq-cls") {
      this.tabChildStrip.selectTab(2);
    }
    else if (this.tabString != undefined && this.tabString == "thuoc") {
      this.tabChildStrip.selectTab(3);
    }
    else if (this.tabString != undefined && this.tabString == "vat-tu") {
      this.tabChildStrip.selectTab(4);
    }
    this.cdRef.detectChanges();
  }

  onTabSelect(event: any) {
    var tab = "";
    switch (event.index) {
      case 0: tab = "dv-kham"; break;
      case 1: tab = "dv-ky-thuat"; break;
      case 2: tab = "kq-cls"; break;
      case 3: tab = "thuoc"; break;
      case 4: tab = "vat-tu"; break;
      default: tab = "dv-kham"; break;
    }
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tabChild: tab
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // trigger navigation
    });
  }
}
