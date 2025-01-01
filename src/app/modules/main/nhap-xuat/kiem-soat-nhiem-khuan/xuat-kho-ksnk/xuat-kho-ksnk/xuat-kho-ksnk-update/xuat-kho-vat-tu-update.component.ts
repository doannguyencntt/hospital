import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import { XuatKhoDuocPham } from 'src/app/shared/enum/kho.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoaiDuocPhamVatTu, XuatKhoKSNK } from '../xuat-kho-ksnk.model';

@Component({
  selector: 'app-xuat-kho-vat-tu-update',
  templateUrl: './xuat-kho-vat-tu-update.component.html',
  styleUrls: ['./xuat-kho-vat-tu-update.component.scss']
})

export class XuatKhoKSNKUpdateComponent implements OnInit {
  id: number;
  dPVaVT: number;

  isValidateUpdate: boolean = false;
  icSearch = icSearch;
  xuatKho: XuatKhoKSNK = new XuatKhoKSNK();
  gridColumns: any[] = [];
  searchCtrl = new FormControl;
  searchString: string;
  validationErrors: any;
  xuatChoBenhNhan: number = XuatKhoDuocPham.XuatChoBenhNhan;
  sort: SortDescriptor[] =
    [
      {
        field: "VatTu",
        dir: "asc"
      }]

  urlGetData: string = "XuatKhoKSNK/GetDataForGridChildAsync";
  urlGetTotal: string = "XuatKhoKSNK/GetTotalPageForGridChildAsync";
  @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;


  groups: GroupDescriptor[] = [{ field: 'LoaiSuDung' }];

  documentType: DocumentType;


  constructor(private route: ActivatedRoute, private router: Router
    , private baseService: BaseService
    , private apiService: ApiService, private notificationService: NotificationService) { }

  ngOnInit() {
    debugger;

    this.id = this.route.snapshot.params.id;
    this.dPVaVT = Number(this.route.snapshot.params.loaiDuocPhamVatTu);

    this.documentType = DocumentType.XuatKhoVatTuThuocNhomKSNK;
    if (this.id !== undefined && this.id !== null) {
      this.getById(this.id);
    }

    this.gridVatTu.searchString = this.id + "";
    this.gridColumns = [
      { Field: "LoaiSuDung", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "VatTu", Title: "Vật tư", MinWidth: 200, Sortable: false },
      { Field: "DVT", Title: "ĐVT", Width: 100, Sortable: false },
      { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
      { Field: "SoLuongXuat", Title: "SL xuất", Width: 150, Sortable: false },
      { Field: "SoPhieu", Title: "Số phiếu nhập", Width: 150, Sortable: false },
    ];

  }

  clearSearch() {
    if (this.searchString == "" || this.searchString == null) {
      this.gridVatTu._additionalSearchString = "";
      this.gridVatTu.search();
    }
  }
  onKey(event: any) {
    if (event.keyCode == 13) {
      this.TimKiem();
    }
  }

  TimKiem() {
    this.gridVatTu._additionalSearchString = this.searchString;
    this.gridVatTu.search();
  }

  getById(id: number) {
    if (this.dPVaVT === LoaiDuocPhamVatTu.LoaiVatTu) {
      this.baseService.getById<XuatKhoKSNK>(id).subscribe(resultData => {
        if (resultData != undefined) {
          this.xuatKho = resultData;
        }
      });
    }
    else {
      this.apiService.get<any>('XuatKhoKSNK/GetDuocPhamXuatKhoKSNk/' + id)
      .subscribe(resultData => {
        if (resultData != undefined) {
          this.xuatKho = resultData;
        }
      });
    }
  }

  onUpdated() {
    this.router.navigateByUrl('nhap-xuat/ksnk/xuat-kho?holdQuery=true');
  }

  huy() {
    this.router.navigateByUrl('nhap-xuat/ksnk/xuat-kho?holdQuery=true');
  }

}
