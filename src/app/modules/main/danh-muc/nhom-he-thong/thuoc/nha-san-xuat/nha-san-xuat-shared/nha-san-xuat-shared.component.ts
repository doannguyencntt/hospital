import { Component, OnInit } from '@angular/core';
import { NhaSanXuat, NhaSanXuatTheoQuocGias } from '../nha-san-xuat.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';

@Component({
    selector: 'app-nha-san-xuat-shared',
    templateUrl: './nha-san-xuat-shared.component.html',
    styleUrls: ['./nha-san-xuat-shared.component.scss']
})

export class NhaSanXuatSharedComponent implements OnInit {
    nhaSanXuat = {} as NhaSanXuat;
    validationErrors: any;
    isCreate = true;
    isShowView: boolean = false;
    icAdd = icAdd;
    icRemove = icRemove;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.isCreate = false;
        }
        this.nhaSanXuat = new NhaSanXuat();
        let newNhaSanXuat = new NhaSanXuatTheoQuocGias();
        this.nhaSanXuat.NhaSanXuatTheoQuocGias.push(newNhaSanXuat);
    }
 
    getSharedData() {
        return this.nhaSanXuat;
        console.log(this.nhaSanXuat);
    }

    getById(id: number) {
        this.baseService.getById<NhaSanXuat>(id).subscribe(resultData => {
            this.nhaSanXuat = resultData;
        });
    }
    Them() {
        if(this.nhaSanXuat.NhaSanXuatTheoQuocGias.length > 0  && this.nhaSanXuat.NhaSanXuatTheoQuocGias[0].QuocGiaId != 0 && this.nhaSanXuat.NhaSanXuatTheoQuocGias[0].DiaChi != "")
        {
            let newNhaSanXuat = new NhaSanXuatTheoQuocGias();
            newNhaSanXuat.NhaSanXuatId = this.nhaSanXuat.Id;
            this.nhaSanXuat.NhaSanXuatTheoQuocGias.push(newNhaSanXuat);
        }
    }
    XoaVitri(vitri: any) {
        if(this.nhaSanXuat.NhaSanXuatTheoQuocGias.length == 1)
            {
                if(vitri == 0)
                {
                    this.nhaSanXuat.NhaSanXuatTheoQuocGias[vitri] = new NhaSanXuatTheoQuocGias(); // khơi tạo mảng rỗng
                
                }
            }
        else{
             this.nhaSanXuat.NhaSanXuatTheoQuocGias.splice(vitri, 1);
        }
        }
       
}
