import { CommonService } from 'src/app/core/utilities/common.helper';
import { filter } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import { ChiTietDieuTriNoiTruViewModel } from '../../dieu-tri-noi-tru.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HoSoKhacViewModel, LoaiHoSoDieuTriNoiTru } from './ho-so-khac.model';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
    selector: 'app-ho-so-khac',
    templateUrl: './ho-so-khac.component.html',
    styleUrls: ['./ho-so-khac.component.scss']
})

export class HoSoKhacComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    hoSoKhacModel:any;
    hoSoKhacViewModel:HoSoKhacViewModel[]=[];
    hoSoKhacDaChonViewModel:HoSoKhacViewModel[]=[];
    loaiHoSoDieuTriNoiTru:LoaiHoSoDieuTriNoiTru;
    hoSoKhacDisabled: boolean = false;
    icAdd = icAdd;
    
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    constructor(private notificationService: NotificationService, private apiService: ApiService,private dialog: MatDialog,private route: ActivatedRoute) { }

    ngOnInit() {
        this.loaiHoSoDieuTriNoiTru=new LoaiHoSoDieuTriNoiTru();
        this.getDanhSachHoSoKhac();
    }

    inTatCa() {

    }
    dataHoSoKhacChange(event:any){
        this.hoSoKhacViewModel=event;
    }
    getDanhSachHoSoKhac() {
        this.apiService.get("DieutriNoitru/GetListHoSoKhac/"+this.dieuTriNoiTruModel.Id).subscribe((resultData:any) => {
            // phiếu chăm sóc mặc định hiện -> có thể cập nhật thêm điều kiện
            this.hoSoKhacDaChonViewModel.push({
                Id: null,
                KeyId: this.loaiHoSoDieuTriNoiTru.PhieuChamSoc,
                DisplayName: "Phiếu chăm sóc" // đang hardcode vì người làm trước ko tạo enum mà lại tạo class LoaiHoSoDieuTriNoiTru
            });
          if (resultData !== null && resultData !== undefined) {
            for(var i = 0; i <= resultData.length - 1; i++){
                this.hoSoKhacDaChonViewModel.push({
                    Id:resultData[i].Id,
                    KeyId:resultData[i].LoaiHoSoDieuTriNoiTruId,
                    DisplayName:resultData[i].LoaiHoSoDieuTriNoiTruTen
                });
              }
          }
        });
      }
    onKeyMaDichVu($event) {
        if ($event.keyCode == 13) {
            if (this.hoSoKhacDisabled != true) {
                this.themHoSo();
            }
            else {
                this.hoSoKhacDisabled = false;
            }
        }
    }
    openCombobox($event) {
        if ($event) {
            this.hoSoKhacDisabled = true;
        }
        else {
            this.hoSoKhacDisabled = false;
        }
    }
    themHoSo() {
        if(this.hoSoKhacModel!=null && this.hoSoKhacModel>0)
        {            
            if(this.checkHoSoKhacDaChon(this.hoSoKhacModel))
            {                
                this.notificationService.showError("Hồ sơ này đã được chọn");
            }
            else
            {
                var item=CommonService.findObjectByKey(this.hoSoKhacViewModel,"KeyId",this.hoSoKhacModel);
                if(item!=null)
                {
                    this.hoSoKhacDaChonViewModel.push(item);
                    this.hoSoKhacModel=null;
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Chọn hồ sơ']));
                    console.log(item);
                }
                else
                {
                    this.notificationService.showError("Chưa chọn hồ sơ");
                }
            }
        }
        else
        {
            this.notificationService.showError("Chưa chọn Hồ sơ");
        }
    }
    checkHoSoKhacDaChon(id:number){
        return this.hoSoKhacDaChonViewModel.findIndex(x=>x.KeyId==id)>=0;
    }
    remove(item:HoSoKhacViewModel){
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {
                if(item.Id==null ||item.Id<=0)
                {
                    const index: number = this.hoSoKhacDaChonViewModel.indexOf(item);
                    if (index !== -1) {
                        this.hoSoKhacDaChonViewModel.splice(index, 1);
                    }   
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));  
                }
                else
                {
                    this.apiService.delete("Dieutrinoitru/DeleteHoSoKhac/"+item.Id ).subscribe(() => {
                        const index: number = this.hoSoKhacDaChonViewModel.indexOf(item);
                        if (index !== -1) {
                            this.hoSoKhacDaChonViewModel.splice(index, 1);
                        }   
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));             
                      }); 
                }     
            }
        });
    }
    returnId(event:any,item:HoSoKhacViewModel)
    {
        if(event!=null && event>0)
        {
            item.Id=event;
        }
        else{
            item.Id = event;
        }
    }
}
