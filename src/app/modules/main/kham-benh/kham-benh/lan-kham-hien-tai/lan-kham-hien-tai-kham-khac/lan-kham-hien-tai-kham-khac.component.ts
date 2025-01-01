import { ChangeDetectorRef,Component, OnInit, ViewChild, TemplateRef,Input, SimpleChanges } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KhamKhac,BenhVienHangDoi } from '../../../kham-benh.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
  selector: 'app-lan-kham-hien-tai-kham-khac',
  templateUrl: './lan-kham-hien-tai-kham-khac.component.html',
  styleUrls: ['./lan-kham-hien-tai-kham-khac.component.scss']
})
export class LanKhamHienTaiKhamKhacComponent implements OnInit {

  icAddCircle= icAddCircle;
  icDelete = icDelete;
  icEdit = icEdit;
  icSave = icSave;

  validationErrors: any;
  gridKhamKhacColumns: any[] = [];
    documentType: DocumentType;
    dataSourceKhamKhac: any = {
        data: [],
        total: 0
    }
    isShowView: boolean = false;
    @ViewChild('boPhanTemplate', { static: true }) boPhanTemplate: TemplateRef<any>;
    @ViewChild('moTaTemplate', { static: true }) moTaTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  constructor(private notificationService: NotificationService, private apiService: ApiService,private dialog: MatDialog,private cdRef: ChangeDetectorRef) { }
  benhNhanHienTai = new BenhVienHangDoi();
  @Input() data: any = null;
  @Input() dataKhamBoPhanKhac: any = null;
  
  ngOnInit() {
    this.documentType = DocumentType.KhamBenh;
    this.benhNhanHienTai = this.data;
    this.gridKhamKhacColumns = [
      { Field: "BoPhan", Title: "Bộ phận", Width: 100,Sortable: false, Template: this.boPhanTemplate },
      { Field: "MoTa", Title: "Mô tả", Width: 220, Sortable: false,Template: this.moTaTemplate },
      { Field: "Action", Title: "", Width: 40, Sortable: false,Template: this.actionTemplate }
  ];
  //this.getTableKhamKhac(this.benhNhanHienTai.YeuCauKhamBenhId); // yeu cau kham benh

  this.dataSourceKhamKhac.data = this.dataKhamBoPhanKhac;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['dataKhamBoPhanKhac'] && changes['dataKhamBoPhanKhac'].previousValue != null && changes['dataKhamBoPhanKhac'].previousValue != changes['dataKhamBoPhanKhac'].currentValue)
    {
        this.dataSourceKhamKhac.data = changes['dataKhamBoPhanKhac'].currentValue;
    }
}

  getTableKhamKhac(idYCKB: number) {
    this.apiService.post<any>("KhamBenh/GetDataGridBoPhanKhac?idYCKB=" + idYCKB).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSourceKhamKhac.data = resultData.Value.Data;
      }
    });
  }
  themKhamKhac(){
      let diUngThuoc = new KhamKhac();
      this.dataSourceKhamKhac.data.push(diUngThuoc);
      // this.isShowView = true;
      this.changeData();
  }

  // luu(dataItem){
  //   this.validationErrors = [];
  //   this.cdRef.detectChanges();
  //     dataItem.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
  //     this.apiService.post("KhamBenh/LuuKhamKhamKhac", dataItem).subscribe(
  //         (resultData: any) => {
  //           this.getTableKhamKhac(this.benhNhanHienTai.YeuCauKhamBenhId); // yeu cau kham benh
  //           this.isShowView = false;
  //         }, (err: ApiError) => {
  //             this.validationErrors = err.ValidationErrors;
  //         });
  // }

  changeData()
  {
    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;
  }

  xoa(dataItem) {
    // this.isShowView = false;
    this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.changeData();
          this.dataSourceKhamKhac.data.splice(this.dataSourceKhamKhac.data.findIndex(x => x == dataItem), 1);
        }
    });
  }

  //BVHD-3856
  suaKhamKhac(item) {
    item.IsUpdate = true;
    this.changeData();
  }
}
