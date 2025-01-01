import { Component, OnInit } from '@angular/core';
import { ThuocHoacHoatChat } from '../thuoc-hoac-hoat-chat.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-thuoc-hoac-hoat-chat-shared',
    templateUrl: './thuoc-hoac-hoat-chat-shared.component.html',
    styleUrls: ['./thuoc-hoac-hoat-chat-shared.component.scss']
})
export class ThuocHoacHoatChatSharedComponent implements OnInit {
    thuocHoacHoatChat = {} as ThuocHoacHoatChat;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }

        this.thuocHoacHoatChat.HoiChan = true;
        this.thuocHoacHoatChat.CoDieuKienThanhToan = true;
        this.thuocHoacHoatChat.BenhVienHang1 = true;
        this.thuocHoacHoatChat.BenhVienHang2 = true;
        this.thuocHoacHoatChat.BenhVienHang3 = true;
        this.thuocHoacHoatChat.BenhVienHang4 = true;
    }

    getSharedData() {
        if (this.thuocHoacHoatChat.TyLeBaoHiemThanhToan === null) {
            this.thuocHoacHoatChat.TyLeBaoHiemThanhToan = 0;
        }

        return this.thuocHoacHoatChat;
    }

    getById(id: number) {
        this.baseService.getById<ThuocHoacHoatChat>(id).subscribe(resultData => {
            this.thuocHoacHoatChat = resultData;
        });
    }
}
