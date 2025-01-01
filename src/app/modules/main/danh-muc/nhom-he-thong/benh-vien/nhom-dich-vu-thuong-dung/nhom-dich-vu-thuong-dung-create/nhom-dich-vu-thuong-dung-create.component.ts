import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormfooterComponent } from 'src/app/shared/component/formfooter/formfooter.component';
import { NhomDichVuThuongDungSharedComponent } from '../nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component';

@Component({
  selector: 'app-nhom-dich-vu-thuong-dung-create',
  templateUrl: './nhom-dich-vu-thuong-dung-create.component.html',
  styleUrls: ['./nhom-dich-vu-thuong-dung-create.component.scss']
})
export class NhomDichVuThuongDungCreateComponent implements OnInit {

  @ViewChild('footer', { static: false }) footer: FormfooterComponent;
  @ViewChild(NhomDichVuThuongDungSharedComponent, { static: true }) shared;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung']);
  }

  onValidateClient(isValidate: boolean) {
    if (isValidate) {
      this.shared.OnValidate();
    }
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
      if (event.keyCode === 83 && event.ctrlKey) {
          // ctrl + s
          this.footer.create();
          event.preventDefault();
      }

      if (event.keyCode === 27 && !event.ctrlKey) {
          // esc
          this.footer.cancel();
          event.preventDefault();
      }
  }
}
