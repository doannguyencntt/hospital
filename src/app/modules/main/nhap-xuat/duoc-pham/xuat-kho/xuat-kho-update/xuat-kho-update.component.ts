import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { BaseService } from 'src/app/core/services/base.service';
import { XuatKho } from '../xuat-kho.model';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import { XuatKhoDuocPham } from 'src/app/shared/enum/kho.enum';

@Component({
  selector: 'app-xuat-kho-update',
  templateUrl: './xuat-kho-update.component.html',
  styleUrls: ['./xuat-kho-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class XuatKhoUpdateComponent implements OnInit {

  id: number;
  isValidateUpdate: boolean = false;
  icSearch = icSearch;

  xuatKho: XuatKho = new XuatKho();
  gridColumns: any[] = [];
  searchCtrl = new FormControl;
  searchString: string;
  validationErrors: any;

  xuatChoBenhNhan: number = XuatKhoDuocPham.XuatChoBenhNhan;

  sort: SortDescriptor[] =
    [
    {
      field: "DuocPham",
      dir: "asc"
    }]

  urlGetData: string = "XuatKhoDuocPham/GetDataForGridChildAsync";
  urlGetTotal: string = "XuatKhoDuocPham/GetTotalPageForGridChildAsync";
  @ViewChild('gridDuocPham', { static: true }) gridDuocPham: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;


  groups: GroupDescriptor[] = [{ field: 'Nhom' }];

  documentType: DocumentType;

  constructor(private route: ActivatedRoute ,private router: Router
    , private baseService: BaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.documentType = DocumentType.XuatKhoDuocPham;
    //console.log("update = ", this.id);
    

    if (this.id !== undefined && this.id !== null) {
      //this.checkValidate(this.id);
      this.getById(this.id);
    }

    this.gridDuocPham.searchString = this.id + "";

    this.gridColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DuocPham", Title: "Dược phẩm", MinWidth: 200, Sortable: false },
      { Field: "DVT", Title: "ĐVT", Width: 100, Sortable: false },
      { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
      { Field: "SoLuongXuat", Title: "SL xuất", Width: 150, Sortable: false },
      { Field: "SoPhieu", Title: "Số phiếu nhập", Width: 150, Sortable: false },
      // { Field: "SoLuongXuat", Title: "Sl xuất", Width: 150, Sortable: true,
      //   Template: this.soLuongXuatTemplate },
      // { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },

    ];
  }

  clearSearch() {
    if(this.searchString == "" ||  this.searchString == null){
      this.gridDuocPham._additionalSearchString = "";
      this.gridDuocPham.search();
    }
  }
  onKey(event: any) {
    if (event.keyCode == 13) {
      this.TimKiem();
    }
  }

  TimKiem(){
    this.gridDuocPham._additionalSearchString = this.searchString;
    this.gridDuocPham.search();
  }

  getById(id: number){
    this.baseService.getById<XuatKho>(id).subscribe(resultData => {
      if(resultData != undefined){
        this.xuatKho = resultData;
      }

    });
  }

  onUpdated(){
    this.router.navigate(['nhap-xuat/duoc-pham/xuat-kho/']);

  }

  huy(){
    this.router.navigateByUrl('nhap-xuat/duoc-pham/xuat-kho?holdQuery=true');
  }
}
