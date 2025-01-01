import { Component, OnInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ListTabStatusKhamTiemChung } from '../../tiem-chung.model';
import { LaiHangDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';

@Component({
    selector: 'app-kham-sang-loc',
    templateUrl: './kham-sang-loc.component.html',
    styleUrls: ['./kham-sang-loc.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
})

export class KhamSangLocComponent implements OnInit {
    documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    loaiHangDoi: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.KhamSangLoc;
    
    constructor() { }

    ngOnInit() {
        
    }
}