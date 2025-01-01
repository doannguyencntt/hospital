import { Inject, ViewChild } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ChiTietVatTuTonKhoNhapXuat, QueryInfo, VatTuTonKhoNhapXuatChiTiet } from '../vat-tu-ton-kho.model';
import { aggregateBy, process, SortDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { TemplateRef } from '@angular/core';

@Component({
	selector: 'app-vat-tu-ton-kho-chi-tiet',
	templateUrl: './vat-tu-ton-kho-chi-tiet.component.html',
	styleUrls: ['./vat-tu-ton-kho-chi-tiet.component.scss']
})
export class VatTuTonKhoChiTietComponent implements OnInit {
	model: VatTuTonKhoNhapXuatChiTiet;
	chiTietModel: ChiTietVatTuTonKhoNhapXuat;
	documentType: DocumentType = DocumentType.VatTuTonKho;

	gridColumns: any[] = [];
	dataExportExcel: any;
	group: any[];
	aggregates: any[];

	sortConfig: SortDescriptor[] = [{
        field: 'Ngay',
        dir: 'asc'
    }];

	defaultAdditionalSearchString = '{"KhoId":0,"VatTuId":0,"Sort":null}';
	urlGetData = 'TonKho/GetDanhSachVatTuTonKhoNhapXuatChiTietForGridAsync';
	urlGetPages = 'TonKho/GetDanhSachVatTuTonKhoNhapXuatChiTietPagesForGridAsync';

	@ViewChild('gridPopup', { static: true }) gridPopup: GridComponent;
	@ViewChild('nhapTemplate', { static: true }) nhapTemplate: TemplateRef<any>;
    @ViewChild('xuatTemplate', { static: true }) xuatTemplate: TemplateRef<any>;
    @ViewChild('tonTemplate', { static: true }) tonTemplate: TemplateRef<any>;
    @ViewChild('ngayTemplate', { static: true }) ngayTemplate: TemplateRef<any>;
	
	constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<VatTuTonKhoChiTietComponent>, private dialog: MatDialog, private cd: ChangeDetectorRef,
				private apiService: ApiService, private authService: AuthService, private notificationService: NotificationService) {
		this.model = data.Model;
	}

	ngOnInit() {
		this.getQueryString();
		this.getChiTiet(this.model.KhoId, this.model.VatTuId);

		this.gridColumns = [
			{ Field: "Ngay", Title: "Ngày", Width: 100, Sortable: true, Template: this.ngayTemplate },
			{ Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true },
			{ Field: "Nhap", Title: "Nhập", Width: 100, Sortable: true, Template: this.nhapTemplate },
			{ Field: "Xuat", Title: "Xuất", Width: 100, Sortable: true, Template: this.xuatTemplate },
			{ Field: "Ton", Title: "Tồn", Width: 100, Sortable: true, Template: this.tonTemplate },
		];
	}

	getQueryString() {
		let KhoQueryString = this.model.KhoId;
		let VatTuQueryString = this.model.VatTuId;
		// let RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.model.RangeDate.startDate) + "\""  + ",\"DenNgay\":" + "\""  + this.ConvertDateTime(this.model.RangeDate.endDate) + "\""  + "}";
		let RangeDateQueryString = "";
            RangeDateQueryString += this.model.RangeDate.startDate ? '{"TuNgay":' + '"' + this.ConvertDateTime(this.model.RangeDate.startDate) + '"' : '{"TuNgay":' + null;
            RangeDateQueryString += this.model.RangeDate.endDate ? ',"DenNgay":' + '"' + this.ConvertDateTime(this.model.RangeDate.endDate) + '"' + '}' : ',"DenNgay":' + null + '}'
		
		let SortQueryString = null;

		if(this.gridPopup) {
            SortQueryString = JSON.stringify(this.gridPopup.sort);
        }

		let queryString = "{\"KhoId\":" + KhoQueryString + ",\"VatTuId\":" + VatTuQueryString + ",\"Sort\":" + SortQueryString + ",\"RangeDate\":" + RangeDateQueryString  + "}";
		this.defaultAdditionalSearchString = queryString;
		
		this.addData(queryString);
	}

	addData(queryString: string){
		// this.aggregates = [{
		// 	field: 'UnitPrice',
		// 	aggregate: 'sum'
		// }];

		// this.group = [{
		// 	field: 'Discontinued',
		// 	aggregates: this.aggregates
		// }];
		
		let model = new QueryInfo();
		model.AdditionalSearchString = queryString;
		model.Sort = this.gridPopup.sort ? this.gridPopup.sort : this.sortConfig;
		// model.Sort = this.gridPopup.sort;
	
		this.apiService.post<any>("TonKho/GetDanhSachVatTuTonKhoNhapXuatChiTietForGridAsync/", model).subscribe(resultData => {
		  	if (resultData) {
		  		this.dataExportExcel = resultData.Data;
				this.dataExportExcel.forEach(element => {
			  		element.ChiTiet = { kho: this.chiTietModel.KhoDisplay, vatTu: this.chiTietModel.TenVatTu};
				});
	
				// this.group = [{
				// 	field: 'ChiTiet'
				// }];
	
				this.dataExportExcel = process(this.dataExportExcel, {
					// group: this.group
				}).data;
		  	}
		});
	}

	getChiTiet(khoId: number, vatTuId: number) {
		this.chiTietModel = new ChiTietVatTuTonKhoNhapXuat();
		this.chiTietModel.VatTuId = vatTuId;
		this.chiTietModel.KhoId = khoId;
	
		this.apiService.post<any>("TonKho/GetVatTuAndKhoName/", this.chiTietModel).subscribe(resultData => {
			if (resultData != null) {
				this.chiTietModel = resultData;
				if(!this.chiTietModel.KhoDisplay || this.chiTietModel.KhoDisplay == ""){
					this.chiTietModel.KhoDisplay = "Tất cả"
				}
			}
		});
	}

	ConvertDateTime(datime): String {
		var date = new Date(datime);
		var year = date.getFullYear();
		var rawMonth = parseInt(String(date.getMonth())) + 1;
		var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
		var rawDay = parseInt(String(date.getDate()));
		var day = rawDay < 10 ? '0' + rawDay : rawDay;
		return year + '-' + month + '-' + day;
	}

	// exportExcelTonKhoNhapXuatChiTiet() {
    //     this.dialog.open(LoadingComponent, {
    //         disableClose: true,
    //         width: '200px',
    //         height: '90px',
    //         data: { Title: 'Đang xuất excel...' }
    //     });
          
    //     if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
    //         this.apiService.postExportExcel<string>("TonKho/ExportVatTuTonKhoNhapXuatChiTiet", this.gridPopup._gridQueryInfo).subscribe(res => {
    //             let dateTimeNow = new Date();
    //             CommonService.downLoadFile(res, "application/vnd.ms-excel", "VatTuTonKhoNhapXuatChiTiet" + dateTimeNow.getFullYear() + ".xlsx");
    //             this.dialog.closeAll();
    //         }, err => {
    //             this.notificationService.showError(err.Message);
    //             this.dialog.closeAll();
    //         })
    //     }
    //     else {
    //         this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    //     }
	// }
}
