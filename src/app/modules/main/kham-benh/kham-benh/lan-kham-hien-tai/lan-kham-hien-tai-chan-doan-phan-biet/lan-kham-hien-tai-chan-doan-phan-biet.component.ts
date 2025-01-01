import { ChangeDetectorRef,Component, OnInit, ViewChild, TemplateRef,Input, SimpleChanges } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { ChanDoanPhanBiet,BenhVienHangDoi, YeuCauKhamBenhChanDoanPhanBiet } from '../../../kham-benh.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';


@Component({
  selector: 'app-lan-kham-hien-tai-chan-doan-phan-biet',
  templateUrl: './lan-kham-hien-tai-chan-doan-phan-biet.component.html',
  styleUrls: ['./lan-kham-hien-tai-chan-doan-phan-biet.component.scss']
})
export class LanKhamHienTaiChanDoanPhanBietComponent implements OnInit {
  documentType: DocumentType;
  icAddCircle = icAddCircle;
  icDelete = icDelete;
  icEdit = icEdit;
  icSave = icSave;

  validationErrors: any;
  gridChanDoanPhanBietColumns: any[] = [];

  dataSourceChanDoanPhamBiet: any = {
    data: [],
    total: 0
  }
  isShowView: boolean = false;
  @ViewChild('icdTemplate', { static: true }) icdTemplate: TemplateRef<any>;
  @ViewChild('ghiChuTemplate', { static: true }) ghiChuTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  constructor(private cdRef: ChangeDetectorRef,private notificationService: NotificationService, private apiService: ApiService,private dialog: MatDialog) { }
  benhNhanHienTai = new BenhVienHangDoi();
  @Input() data: any = null;
  @Input() dataChanDoanPhanBiet: any = null;
  @Input() laChuyenKhoaKhamNhieu: boolean = false;

  ngOnInit() {
    this.documentType = DocumentType.KhamBenh;
    this.benhNhanHienTai = this.data;
    this.gridChanDoanPhanBietColumns = [
      { Field: "ICD", Title: "ICD", Width: 150, Sortable: false ,Template: this.icdTemplate },
      { Field: "GhiChu", Title: "Chẩn đoán", Sortable: false,Width: 150, Template: this.ghiChuTemplate },
      { Field: "Action", Title: "", Width: 20, Sortable: false, Template: this.actionTemplate }
    ]

    this.dataSourceChanDoanPhamBiet.data = this.dataChanDoanPhanBiet;
    //this.getTableBenhNhanDiUngThuoc(this.benhNhanHienTai.YeuCauKhamBenhId); // yeu cau kham benh
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataChanDoanPhanBiet'] && changes['dataChanDoanPhanBiet'].previousValue != null && changes['dataChanDoanPhanBiet'].previousValue != changes['dataChanDoanPhanBiet'].currentValue) {
      this.dataSourceChanDoanPhamBiet.data = changes['dataChanDoanPhanBiet'].currentValue;
    }
  }

  getTableBenhNhanDiUngThuoc(idYCKB: number) {
    var queryObject: any = {
      skip: 0,
      take: 50,
      pageSize: 50,
      searchString: "PEFkdmFuY2VkUXVlcnlQYXJhbWV0ZXJzPjxTZWFyY2hUZXJtcz4yPC9TZWFyY2hUZXJtcz48L0FkdmFuY2VkUXVlcnlQYXJhbWV0ZXJzPg==",
      additionalSearchString: idYCKB.toString(),
      searchTerms: null,
      sort: [{ field: "TenThuoc", dir: "asc" }],
      lazyLoadPage: true,
    };

    this.apiService.post<any>("KhamBenh/GetDataGridChanDoanPhanBiet?idYCKB=" + idYCKB).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSourceChanDoanPhamBiet.data = resultData.Value.Data;
      }
    });
  }
  themChanDoanPhanBiet() {
      let chanDoanPhanBiet = new YeuCauKhamBenhChanDoanPhanBiet();
      chanDoanPhanBiet.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
      this.dataSourceChanDoanPhamBiet.data.push(chanDoanPhanBiet);
      this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;

  }
  onSelectLoaiDiUng(event: any, dataItem: any) {
    this.validationErrors = [];
    // this.idLoaiDiUng = event.KeyId;
    // if (this.idLoaiDiUng === 1) {
    //     dataItem.ThuocId = 0;
    // } else {
    //     dataItem.TenDiUng = null;
    // }
  }

  // luu(dataItem) {
  //   this.validationErrors = [];
  //   this.cdRef.detectChanges();
  // dataItem.BenhNhanId = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhanId;
  // dataItem.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
  // this.apiService.post("KhamBenh/LuuKhamChanDoanPhanBiet", dataItem).subscribe(
  //     (resultData: any) => {
  //       this.getTableBenhNhanDiUngThuoc(this.benhNhanHienTai.YeuCauKhamBenhId); // yeu cau kham benh
  //       this.isShowView = false;
  //     }, (err: ApiError) => {
  //         this.validationErrors = err.ValidationErrors;
  //     });
      
  // }

  xoa(dataItem) {
    this.isShowView = false;
    this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
            this.dataSourceChanDoanPhamBiet.data.splice(this.dataSourceChanDoanPhamBiet.data.findIndex(x => x == dataItem), 1);
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;
            // if (dataItem.Id !== 0) {
            //     this.apiService.post("KhamBenh/XoaChanDoanPhanBiet?id=" + dataItem.Id).subscribe(
            //         () => { });
            // }
            
        }
    });
  }
//   resetDiUng() {
  
//  }

  chonICD(event, dataItem){
    if(event != undefined && event != null)
    {
      dataItem.GhiChu = event.Ten;
      dataItem.TenICD = event.DisplayName;
    }
    else
    {
      dataItem.GhiChu = null;
    }
  }
}
