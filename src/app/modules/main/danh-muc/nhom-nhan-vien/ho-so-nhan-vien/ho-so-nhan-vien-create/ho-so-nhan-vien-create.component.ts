import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { FormfooterComponent } from 'src/app/shared/component/formfooter/formfooter.component';
import { HoSoNhanVienShareComponent } from '../ho-so-nhan-vien-share/ho-so-nhan-vien-share.component';

@Component({
  selector: 'app-ho-so-nhan-vien-create',
  templateUrl: './ho-so-nhan-vien-create.component.html',
  styleUrls: ['./ho-so-nhan-vien-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class HoSoNhanVienCreateComponent implements OnInit {

  @ViewChild(HoSoNhanVienShareComponent, {static: true}) shared;
  @ViewChild("createNhanVien", { static: false }) createNhanVien: FormfooterComponent;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated(){ this.router.navigate(['/danh-muc/nhom-nhan-vien/ho-so-nhan-vien']);}
  
  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 83 && event.ctrlKey) {    
      this.createNhanVien.create();
      event.preventDefault();
    }
    if (event.keyCode == 27 && !event.ctrlKey) {
      this.router.navigate(['/danh-muc/nhom-nhan-vien/ho-so-nhan-vien'])
      event.preventDefault();
    }
  }
}
