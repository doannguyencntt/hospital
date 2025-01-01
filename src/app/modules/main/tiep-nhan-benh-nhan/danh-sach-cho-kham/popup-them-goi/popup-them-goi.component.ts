import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ChiDinhDichVuGridVo, AddGoiForUpdateView } from '../../tiep-nhan-benh-nhan.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-popup-them-goi',
  templateUrl: './popup-them-goi.component.html',
  styleUrls: ['./popup-them-goi.component.scss']
})
export class PopupThemGoiComponent implements OnInit {

  icClose = icClose;
  gridCoChietKhauColumns: any[] = [];
  gridCoChietKhauData: any;
  documentType: DocumentType;

  validationErrors: any[] = [];

  gridKhongCoChietKhauColumns: any[] = [];
  gridKhongCoChietKhauData: any;

  isGoiCoChietKhau: boolean = false;

  @ViewChild('goiCoChietKhau', { static: false }) gridCoChietKhau: GridComponent;
  @ViewChild('goiKhongCoChietKhau', { static: false }) gridKhongCoChietKhau: GridComponent;
  // nơi thực hiện
  @ViewChild('noiThucHienKhongChietKhauTemplate', { static: true }) noiThucHienKhongChietKhauTemplate: TemplateRef<any>;
  // checkbox được hưởng bhyt
  @ViewChild('duocHuongBHYTTemplate', { static: true }) duocHuongBHYTTemplate: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: AddGoiForUpdateView, private apiService: ApiService
    , private notificationService: NotificationService
    , private dialog: MatDialog, public dialogRef: MatDialogRef<PopupThemGoiComponent>) {
     
    //console.log("data[0].IsGoiCoChietKhau = ", data);
  }

  ngOnInit() {
    this.isGoiCoChietKhau = this.data.LstGrid[0].IsGoiCoChietKhau;

    let index = 1;
    this.data.LstGrid.forEach(obj => {
      obj.STT = index;
      index = index + 1;
      obj.DuocHuongBHYTPopup = obj.DuocHuongBHYTPopup;
    });

    this.documentType = DocumentType.YeuCauTiepNhan;
    this.gridCoChietKhauColumns = [
      { Field: "STT", Title: "STT", Width: 80, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 150, Sortable: false },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
      { Field: "LoaiGia", Title: "Loại giá", Width: 156, Sortable: false },
      { Field: "NoiThucHienId", Title: "Nơi thực hiện", Width: 156, Sortable: false,
                  Template: this.noiThucHienKhongChietKhauTemplate },
    ];

    this.gridKhongCoChietKhauColumns = [
      { Field: "STT", Title: "STT", Width: 80, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 150, Sortable: false },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
      { Field: "LoaiGia", Title: "Loại giá", Width: 156, Sortable: false },
      { Field: "DuocHuongBHYT", Title: "ĐH BHYT", Width: 156, Sortable: false, Template: this.duocHuongBHYTTemplate },
      { Field: "NoiThucHienId", Title: "Nơi thực hiện", Width: 156, Sortable: false,
                  Template: this.noiThucHienKhongChietKhauTemplate },
    ];

    if(this.isGoiCoChietKhau){
      this.setDataForCoChietKhauGrid();
    }
    else{
      this.setDataForKhongCoChietKhauGrid();
    }

  }

  setDataForCoChietKhauGrid(){
    this.gridCoChietKhauData = {
      data: this.data.LstGrid,
      total: this.data.LstGrid.length
    };

    if (this.gridCoChietKhau != undefined) {
      this.gridCoChietKhau.setDataSource();
    }
  }

  setDataForKhongCoChietKhauGrid(){
    this.gridKhongCoChietKhauData = {
      data: this.data.LstGrid,
      total: this.data.LstGrid.length
    };

    if (this.gridKhongCoChietKhau != undefined) {
      this.gridKhongCoChietKhau.setDataSource();
    }
  }

  ok(){
    //console.log("ok = ", this.data);
    
    this.validationErrors = null;

    let url = "TiepNhanBenhNhan/ThemGoiKhongChietKhauPopup";

    if(this.isGoiCoChietKhau){
      url = "TiepNhanBenhNhan/ThemGoiCoChietKhauPopup"
    }

    this.apiService.post<Array<ChiDinhDichVuGridVo>>(url, this.data).subscribe(
      resultData => {
        this.dialogRef.close(resultData);
      },
      (err: any) => {
        if (err != undefined && err.ValidationErrors != null) {
          this.validationErrors = err.ValidationErrors;
      }
      else if (err != undefined && err.Errors == null) {
          //self.validationErrors.push({ "Message": err.Message });
          this.notificationService.showError(err.Message);
      }
      });

  }

  huy(){
    this.dialogRef.close();
    //console.log("huy = ", this.data);
  }

  noiThucHienChange($event, dataItem)
  {
    //console.log("test = ", $event, dataItem);

    let model =  this.data.LstGrid.find(obj => obj == dataItem);

    if($event != null && $event != undefined && $event.length > 0)
    {
      //this.themChiDinhDichVuModel.NoiThucHienId = $event[0].KeyId;
      if(model != undefined){
        model.NoiThucHienId = $event[0].KeyId;
      }
    }
    else{
      if(model != undefined){
        model.NoiThucHienId = $event[0].KeyId;
      }
      //this.themChiDinhDichVuModel.NoiThucHienId = null;
    }
  }

}
