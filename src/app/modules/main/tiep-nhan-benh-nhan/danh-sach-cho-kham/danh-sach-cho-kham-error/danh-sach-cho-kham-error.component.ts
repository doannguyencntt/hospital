import { Component, OnInit } from '@angular/core';
import { TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';

@Component({
  selector: 'app-danh-sach-cho-kham-error',
  templateUrl: './danh-sach-cho-kham-error.component.html',
  styleUrls: ['./danh-sach-cho-kham-error.component.scss']
})
export class DanhSachChoKhamErrorComponent implements OnInit {
  
  errorMessage: string;
  constructor() { }

  ngOnInit() {
    this.errorMessage = TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan;

  }

}
