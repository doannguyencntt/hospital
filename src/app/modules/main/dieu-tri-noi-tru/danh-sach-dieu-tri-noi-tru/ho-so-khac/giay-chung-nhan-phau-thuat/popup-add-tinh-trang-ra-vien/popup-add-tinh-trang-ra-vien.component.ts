import { Component, OnInit, Inject ,ViewChild, TemplateRef} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ThemTinhTrangRaVien } from '../giay-chung-nhan-phau-thuat.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
  selector: 'app-popup-add-tinh-trang-ra-vien',
  templateUrl: './popup-add-tinh-trang-ra-vien.component.html',
  styleUrls: ['./popup-add-tinh-trang-ra-vien.component.scss']
})
export class PopupAddTinhTrangRaVienComponent implements OnInit {

  hostingName: string;
  icClose = icClose;
  isFullscreen:boolean=false;
  themTinhTrangRaVien =new ThemTinhTrangRaVien();
  gridColumns: any[];
  gridDataSource: any = {
    data:[],
    total: 0
  };
  constructor(public sanitizer: DomSanitizer, private dialogRef: MatDialogRef<any>, 
    private apiService: ApiService,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  close() {
      this.dialogRef.close();
  }
  Ok(){
    if(this.themTinhTrangRaVien.Text == "" && this.themTinhTrangRaVien == null)
    {
     
      this.notificationService.showError("Yêu cầu nhập tình trạng ra viện");
    }else{
      
      this.apiService.post<any>("DieuTriNoiTru/AddTinhTrangRaVien",{Id:0,TenTinhTrangRaVien:this.themTinhTrangRaVien.Text}).subscribe((resultData) => {
        if (resultData != undefined && resultData != null && resultData != "") {
          if(resultData.Id != undefined && resultData.Id != null && resultData.Id != "" )
          {
            this.themTinhTrangRaVien.Id = resultData.Id;
            this.themTinhTrangRaVien.Text = resultData.TenTinhTrangRaVien;
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
            this.dialogRef.close(this.themTinhTrangRaVien);
          }
          else{
            this.themTinhTrangRaVien =  new ThemTinhTrangRaVien();
            this.notificationService.showWarning("Tình trạng đã tồn tại.");
            this.dialogRef.close(this.themTinhTrangRaVien);
          }
        }
        else{
          this.themTinhTrangRaVien =  new ThemTinhTrangRaVien();
          this.notificationService.showWarning("Tình trạng đã tồn tại.");
          this.dialogRef.close(this.themTinhTrangRaVien);
        }
      });
    }
    
  }
}
