import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pttt-theo-doi-co-quan',
    templateUrl: './pttt-theo-doi-co-quan.component.html',
    styleUrls: ['./pttt-theo-doi-co-quan.component.scss']
})
export class PhauThuatThuThuatTheoDoiCoQuanComponent implements OnInit {
    
    @Input() thongTinKhamTheoDoiTemplateObj: any;
    @Input() thongTinBenhNhan: any;
    @Input() phongKhamId: any;
    @Input() isReadonly: boolean = false;
    @Input() isChangeData: boolean = false;
    
    @Output() outputPTTTTheoDoiCoQuanDataChanged = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onDataChange(evt) {
        if(!this.isChangeData) {
            this.isChangeData = true;
            this.outputPTTTTheoDoiCoQuanDataChanged.emit(true);
        }
    }
}
