import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { YeuCauDichVuKyThuat } from '../../../../tiem-chung.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { isNumeric } from 'rxjs/util/isNumeric';
// import { khamSangLocSoSinhNgoaiBenhVien, khamSangLocSoSinhTrongBenhVien, khamSangLocTrenMotThangTuoiNgoaiBenhVien, khamSangLocTrenMotThangTuoiTrongBenhVien } from './mau-sang-loc-example';

@Component({
  selector: 'app-mau-sang-loc',
  templateUrl: './mau-sang-loc.component.html',
  styleUrls: ['./mau-sang-loc.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MauSangLocComponent implements OnInit {
    // thongTinMauKhamSangLocChung: any = khamSangLocSoSinhTrongBenhVien;
    radioLuaChonBenhVien: any[] = [{ Value: 1, Text: 'Ngoài BV' }, { Value: 2, Text: 'Trong BV' }, { Value: 3, Text: 'COVID-19' }]; 
    format = "n1";
    
    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isMauSangLocReadOnly: boolean = false;
    @Input() validationErrors: any[] = [];

    @Output() outputLuaChonBenhVien = new EventEmitter<any>();
    
    typeCheckBox: number = 5;
    constructor() { }

    ngOnInit() {
    }

    evtCheckboxChange(parentItem, currentItem, val) {
        if(currentItem.requiredCheckbox) {
            this.evtChildCheckboxChange(parentItem, currentItem, val)
        } else {
            //set false cho checkbox còn lại nếu chuyển sang true
            //let anotherChildId = currentItem.Id.includes('Khong') ? `${parentItem.Id}Co` : `${parentItem.Id}Khong`;
            // let anotherChild = parentItem.groupItems.find(p => p.Id == anotherChildId);

            // if(anotherChild) {
            //     anotherChild.Value = val ? false : true;
            // }

            //BVHD-3812
            let anotherChildId = currentItem.Id.includes('Khong') ? `${parentItem.Id}Co` : `${parentItem.Id}Khong`;
            if(val)
            {
                let anotherChilds = parentItem.groupItems.filter(p => p.Id.includes(anotherChildId));
                anotherChilds.forEach(element => {
                    if (element.Type == this.typeCheckBox) {
                        element.Value = !val;
                    }
                    else {
                        if (element.requiredCheckbox == true) {
                            element.Value = null;
                        }
                    }
                });
            }
            else{
                if(currentItem.Id.includes('Co'))
                {
                    let otherChildCos = parentItem.groupItems.filter(p => p.Id != currentItem.Id && p.Id.includes(`${parentItem.Id}Co`) && p.Value == true);
                    if (otherChildCos.length == 0) {
                        let anotherChilds = parentItem.groupItems.filter(p => p.Id.includes(`${parentItem.Id}Khong`));
                        anotherChilds.forEach(element => {
                            if(element.Type == this.typeCheckBox)
                            {
                                element.Value = true;
                            }
                            else {
                                if(element.requiredCheckbox == true)
                                {
                                    element.Value = null;
                                }
                            }
                        });
                    }
                }
                else{
                    let otherChildKhongs = parentItem.groupItems.filter(p => p.Id != currentItem.Id && p.Id.includes(`${parentItem.Id}Khong`) && p.Value == true);
                    if (otherChildKhongs.length == 0) {
                        let anotherChilds = parentItem.groupItems.filter(p => p.Id.includes(`${parentItem.Id}Co`));
                        anotherChilds.forEach(element => {
                            if(element.Type == this.typeCheckBox)
                            {
                                element.Value = true;
                            }
                            else {
                                if(element.requiredCheckbox == true)
                                {
                                    element.Value = null;
                                }
                            }
                        });
                    }
                }
            }

            // xóa tất cả data của dòng checkbox hiện tại
            let currentId = anotherChildId.includes('Khong') ? `${parentItem.Id}Co` : `${parentItem.Id}Khong`;
            let typeChildId = currentItem.Id.substring(currentId.length);
            let arrCharId = typeChildId.split("");
            let arrCharIdNew = [];
            let stt ="";
    
            for (let index = 0; index < arrCharId.length; index++) {
                if(isNumeric(arrCharId[index]))
                {
                    arrCharIdNew.push(arrCharId[index]);
                }
                else{
                    break;
                }
            }
            if(arrCharIdNew.length > 0)
            {
                stt = arrCharIdNew.join("");
            }
    
            let currentChilds = parentItem.groupItems.filter(p => p.Id.includes(`${parentItem.Id}Co${stt}`) || p.Id.includes(`${parentItem.Id}Khong${stt}`));
            currentChilds.forEach(element => {
                if (element.Type != this.typeCheckBox) {
                    if (element.requiredCheckbox == true) {
                        element.Value = null;
                    }
                }
            });
            
            //

            // //remove text cho textbox khi chọn không
            // let text = parentItem.groupItems.filter(p => p.Type == 3 && p.requiredCheckbox == true);

            // if(text) {
            //     let child = parentItem.groupItems.find(p => p.Id == `${parentItem.Id}Co`);

            //     if(!child || !child.Value) {
            //         text.forEach(item => {
            //             item.Value = null;
            //         })
            //     }
            // }

            // //remove checkbox khi chọn không
            // let checkbox = parentItem.groupItems.filter(p => p.Type == 5 && p.requiredCheckbox == true);

            // if(checkbox) {
            //     let child = parentItem.groupItems.find(p => p.Id == `${parentItem.Id}Co`);

            //     if(!child || !child.Value) {
            //         checkbox.forEach(item => {
            //             item.Value = null;
            //         })
            //     }
            // }

            this.evtModelOnChange();
        }
    }

    evtChildCheckboxChange(parentItem, currentItem, val) {
        //set false cho checkbox còn lại nếu chuyển sang true
        let id = currentItem.Id.substring(0, currentItem.Id.includes('KhongChild') ? currentItem.Id.indexOf('KhongChild') : currentItem.Id.indexOf('CoChild'));
        let anotherChildId = currentItem.Id.includes('KhongChild') ? `${id}CoChild` : `${id}KhongChild`;
        let anotherChild = parentItem.groupItems.find(p => p.Id == anotherChildId);

        if(currentItem.isNullable && !currentItem.Value && !anotherChild.Value) {
            return;
        }

        if(anotherChild) {
            anotherChild.Value = val ? false : true;
        }
        //

        //remove text cho textbox khi chọn không
        let text = parentItem.groupItems.filter(p => p.Type == 3 && p.requiredCheckbox == true);

        if(text) {
            let child = parentItem.groupItems.find(p => p.Id == `${id}CoChild`);

            if(!child || !child.Value) {
                text.forEach(item => {
                    item.Value = null;
                })
            }
        }
        

        this.evtModelOnChange();
    }

    isCheckboxHasTrueValue(parentItem, childItem) {
        // let child = parentItem.groupItems.find(p => p.Id == `${parentItem.Id}Co`);
        //return child && child.Value ? true : false;
        
        //let child = parentItem.groupItems.find(p => p.Id == childItem.Id);
        let typeChildId = childItem.Id.substring((`${parentItem.Id}Co`).length);
        let arrCharId = typeChildId.split("");
        let arrCharIdNew = [];
        let stt ="";

        for (let index = 0; index < arrCharId.length; index++) {
            if(isNumeric(arrCharId[index]))
            {
                arrCharIdNew.push(arrCharId[index]);
            }
            else{
                break;
            }
        }
        if(arrCharIdNew.length > 0)
        {
            stt = arrCharIdNew.join("");
        }

        let child = parentItem.groupItems.find(p => p.Id == `${parentItem.Id}Co${stt}`);
        return child.Value;
    }

    evtModelOnChange() {
        this.thongTinBenhNhan.isDataKhamSangLocChungChange = true;
    }

    evtLuaChonBenhVienChanged(evt) {
        this.outputLuaChonBenhVien.emit(evt);
    }
}