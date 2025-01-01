import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ListStatusSelectTabKhamDoanKetLuan } from "../../kham-doan-ket-luan/kham-doan-ket-luan.model";
@Component({
  selector: 'app-kham-doan-ket-luan-cls-ksk-list',
  templateUrl: './kham-doan-ket-luan-cls-ksk-list.component.html',
  styleUrls: ['./kham-doan-ket-luan-cls-ksk-list.component.scss']
})
export class KhamDoanKetLuanClsKskListComponent implements OnInit {
  documentType: DocumentType;
  baseRoute: string = "/kham-doan/ket-luan-kham-suc-khoe-doan";
  indexTap: number = 0;
  data: string;
  holdQuery: any = null;
  listStatusSelectTabKhamDoanKetLuan: ListStatusSelectTabKhamDoanKetLuan = new ListStatusSelectTabKhamDoanKetLuan();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanKetLuanKhamSucKhoeDoan;
    if (this.route.snapshot.queryParams.holdQuery != null) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringKetLuanKhamDoanCLS') != null) {
      this.data = LocalStorageHelper.getItem('additionalSearchStringKetLuanKhamDoanCLS');
      this.listStatusSelectTabKhamDoanKetLuan = JSON.parse(this.data);
    }
    else {
      LocalStorageHelper.setItem('additionalSearchStringKetLuanKhamDoanCLS', null);
      this.listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan = true;
      this.listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan = false;
    }
  }

  chuyenDen(event: any) {
    if (event.index == 0) {
      this.listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan = true;
      this.listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan = false;
    }
    if (event.index == 1) {
      this.listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan = false;
      this.listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan = true;
    }
    LocalStorageHelper.setItem('additionalSearchStringKetLuanKhamDoanCLS', JSON.stringify(this.listStatusSelectTabKhamDoanKetLuan));
  }

}
