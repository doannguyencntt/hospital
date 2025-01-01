import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { EnumMessagingType } from 'src/app/shared/models/navbar.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, {static: true}) gridChild: GridComponent;
  @ViewChild('actionTemplate', {static: true}) actionTemplate: TemplateRef<any>;
  @ViewChild('dateTemplate', {static: true}) dateTemplate: TemplateRef<any>;
  constructor(private authService: AuthService, private router: Router, 
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.None;

    this.gridColumns = [
      { Field: "Title", Title: "Tiêu đề", Width: 200, Sortable: true },
      { Field: "Body", Title: "Nội dung", MinWidth: 180, Sortable: true},
      { Field: "CreatedOn", Title: "Ngày tạo", Width: 120, Sortable: true, Template: this.dateTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate}
    ];

    this.gridChild.urlGetData = "User/GetDataForGridTaskAsync";
    this.gridChild.urlGetTotalPage = "User/GetTotalPageForGridTaskAsync";
  }

  xemCongViec(id: number,link: string, isRead: boolean)
  {
    console.log(id + '-' + link + '-' + isRead);
    if(isRead == false)
    {
      // xử lý cập nhật trạng thái đã đọc
      this.apiService.put("User/CapNhatTrangThaiDaXemNotification?id="+ id + "&loaiThongBaoXuLy=" + EnumMessagingType.Task).subscribe(result => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate([link])); 
      },(err: ApiError) => { 
          console.log(err);
      });
    }
    else{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate([link])); 
    }
  }
}
