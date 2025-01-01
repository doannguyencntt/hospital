import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { SearchVatTuSapHetHan } from '../vat-tu-sap-het-han.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { VatTuSapHetHanPopupComponent } from '../vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component';

import icBlock from '@iconify/icons-ic/twotone-delete'
import icEdit from '@iconify/icons-ic/twotone-edit'
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icSearch from '@iconify/icons-ic/twotone-search';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
    selector: 'app-vat-tu-sap-het-han-list',
    templateUrl: './vat-tu-sap-het-han-list.component.html',
    styleUrls: ['./vat-tu-sap-het-han-list.component.scss']
})
export class VatTuSapHetHanListComponent implements OnInit {
    documentType: DocumentType = DocumentType.VatTuSapHetHan;
    searchCtrl = new FormControl();
    searchInfo: SearchVatTuSapHetHan;
    isExistData: boolean=false;

    printLayout: string = 'Portrait';
    printSize: string = 'A4';

    vatTuSapHetHanDataUrl = 'TonKho/GetDanhSachVatTuSapHetHanForGridAsync';
    vatTuSapHetHanPagesUrl = 'TonKho/GetTotalVatTuSapHetHanPagesForGridAsync';

    gridColumns: any[] = [];

    icSearch = icSearch;
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icBlock=icBlock;
    icEdit=icEdit;
    icFileExcel = icFileExcel;

    @Input() searchPlaceHolder: string = "Tìm kiếm theo tên vật tư...";

    @ViewChild(GridComponent, {static: true}) gridChild: GridComponent;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    @ViewChild('soLuongTonTemplate', { static: true }) soLuongTonTemplate: TemplateRef<any>;
    @ViewChild('donGiaNhapTemplate', { static: true }) donGiaNhapTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    
    constructor(private dialog: MatDialog, private authService: AuthService, private notificationService: NotificationService, private apiService : ApiService) { }

    ngOnInit() {
        this.searchInfo = new SearchVatTuSapHetHan();

        this.gridColumns = [
            { Field: "TenKho", Title: "Kho", Width: 200, Sortable: true},
            { Field: "MaVatTu", Title: "Mã vật tư", Width: 200, Sortable: true},
            { Field: "TenVatTu", Title: "vật Tư", MinWidth: 200, Sortable: true },
            // { Field: "TenHoatChat", Title: "Hoạt Chất", Width: 200, Sortable: true },
            { Field: "DonViTinh", Title: "Đơn Vị Tính", Width: 200, Sortable: true },
            { Field: "SoLo", Title: "Số lô", Width: 200, Sortable: true },
            { Field: "ViTri", Title: "Vị Trí", Width: 200, Sortable: true },
            { Field: "DonGiaNhap", Title: "Đơn giá nhập", Width: 200, Sortable: true ,Template: this.donGiaNhapTemplate},
            { Field: "SoLuongTon", Title: "Số lượng tồn", Width: 200, Sortable: true, Template: this.soLuongTonTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 200, Sortable: true ,Template: this.thanhTienTemplate},
            { Field: "NgayHetHan", Title: "Ngày Hết Hạn", Width: 200, Sortable: true, Template: this.tinhTrangTemplate },
           // { Field: "CanhBao", Title: "Cảnh báo", MinWidth: 150, Sortable: true},
            // { Field: "Action", Title: "", Width: 110, Template: this.actionTemplate }
        ];
    }

    KhoChange(khoDuocPhamId: any) {
        this.searchInfo.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
        this.searchTonKho();
      }

    searchTonKho(){
        let KhoQueryString = 0;
        let SearchQueryString = null;

        if(this.searchInfo.KhoId != null) {
            KhoQueryString = this.searchInfo.KhoId;
        }

        if(this.searchInfo.SearchString != null) {
            SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
        }

        let queryString = "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString +"}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    searchChange(){
        if(this.searchInfo.SearchString == null || this.searchInfo.SearchString == undefined || this.searchInfo.SearchString == "") {
            this.searchInfo.SearchString = undefined;
        
            this.searchTonKho();
        }
    }

    onKey(event: any) {
        if (event.key == "Enter") {
            this.searchTonKho();
        }
    }

    xemBaoCao() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let SortQueryString = null;

        if(this.searchInfo.KhoId != null) {
            KhoQueryString = this.searchInfo.KhoId;
        }

        if(this.searchInfo.SearchString != null) {
            SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
        }

        if(this.gridChild) {
            SortQueryString = JSON.stringify(this.gridChild.sort);
        }

        let queryString = "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"Sort\":" + SortQueryString + "}";

        let dialogRef =  this.dialog.open(VatTuSapHetHanPopupComponent, {
            //disableClose: true,
            width: '1500px',
            // height: '500px',
            data: { searchString: queryString, Title: "Xác nhận" }
        });

        dialogRef.afterClosed().subscribe(res => { });
    }

    onDataBoundGrid(event: any) {
        if (event && event.Data.length > 0) {
          this.isExistData = true;
        } else {
          this.isExistData = false;
        }
    }

    getSharedPrintForm() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let SortQueryString = null;

        if(this.searchInfo.KhoId != null) {
            KhoQueryString = this.searchInfo.KhoId;
        }

        if(this.searchInfo.SearchString != null) {
            SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
        }

        if(this.gridChild) {
            SortQueryString = JSON.stringify(this.gridChild.sort);
        }

        let queryString = "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"Sort\":" + SortQueryString + "}";

        return new Promise(resolve => {
            this.apiService.get<any>(`TonKho/GetVatTuSapHetHanHTML?searchString=${queryString}`).subscribe(resultData => {
                resolve(resultData);
            });
        });
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
          
        if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("TonKho/ExportVatTuSapHetHan", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "VatTuSapHetHan" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
