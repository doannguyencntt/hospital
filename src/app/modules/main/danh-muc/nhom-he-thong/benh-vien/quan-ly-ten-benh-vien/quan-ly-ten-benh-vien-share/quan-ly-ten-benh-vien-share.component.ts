import { Component, OnInit } from '@angular/core';
import { QuanLyTenBenhVien,PrintSession } from '../quan-ly-ten-benh-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-quan-ly-ten-benh-vien-share',
  templateUrl: './quan-ly-ten-benh-vien-share.component.html',
  styleUrls: ['./quan-ly-ten-benh-vien-share.component.scss']
})
export class QuanLyTenBenhVienShareComponent implements OnInit {
  printSession ={} as PrintSession;
  benhVien={} as QuanLyTenBenhVien;
  validationErrors: any;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    this.benhVien.HieuLuc = true;
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);      
    }
  }
  getById(id: number) {
   this.baseService.getById<QuanLyTenBenhVien>(id).subscribe(resultData => {
     if(resultData !== null && resultData !== undefined)
     {
          this.benhVien = resultData;

     }
  });
  }

  getSharedData() {
    return this.benhVien;
  }

  onChangeLoaiBenhVien(event:any)
  {
    console.log(event,this.benhVien.LoaiBenhVienId);
  }
  
  getSharedPrintForm()
  {
    const responseHTML = document.getElementById("printMe");
    this.printSession.PrintContent = responseHTML
    return this.printSession;
  }
}
