import { Component, OnInit, Inject } from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ApiService } from "src/app/core/services/api.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { NotificationService } from "src/app/core/services/notification.service";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from "src/app/core/services/auth.service";
import { NguoiThucHienChuyenTTDichVu, TrangThaiThucHienYeuCauDichVuKyThuat } from "../../../kham-benh.model";
import icSearch from '@iconify/icons-ic/twotone-search';
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
	selector: "app-xac-nhan-chuyen-trang-thai-dich-vu",
	templateUrl: "./xac-nhan-chuyen-trang-thai-dich-vu.component.html",
	styleUrls: ["./xac-nhan-chuyen-trang-thai-dich-vu.component.scss"],
})
export class XacNhanChuyenTrangThaiComponent implements OnInit {		

	icClose = icClose;
	icSearch = icSearch;
  
	documentType: DocumentType;
	validationErrors: any;
	yeuCauDichVuKyThuatId: number;
	laThucHienDichVu: boolean;
	laKhamDoanTatCa: boolean = false;
	IsKhamBenhDangKham: boolean = false;
	title: string = 'Xác nhận';
  
	apiGetDataName: string = "GetYeuCauDichVuKyThuatById?yeuCauDichVuKyThuatId=";
	apiPutDataName: string = "XuLyCapNhatDichVuKhac";
	controllerName: string = "KhamBenh";
  
	yeuCauDichVuKyThuat: TrangThaiThucHienYeuCauDichVuKyThuat = new TrangThaiThucHienYeuCauDichVuKyThuat(); 
  
	constructor(
	  private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
	  public dialogRef: MatDialogRef<XacNhanChuyenTrangThaiComponent>,
	  private apiService: ApiService,
	  private authService: AuthService,
	  private notificationService: NotificationService
	) { }
  
	ngOnInit() {
	  this.documentType = this.data.DocumentType;
	  this.yeuCauDichVuKyThuatId = this.data.YeuCauDichVuKyThuatId;
	  this.laThucHienDichVu = this.data.LaThucHienDichVu;
	  this.laKhamDoanTatCa = this.data.LaKhamDoanTatCa;
	  this.IsKhamBenhDangKham = this.data.IsKhamBenhDangKham != undefined && this.data.IsKhamBenhDangKham;
	  // if(this.laThucHienDichVu)
	  // {
	  //   this.title = "Cập nhật thực hiện dịch vụ";
	  // }
	  // else
	  // {
	  //   this.title = "Hủy thực hiện dịch vụ";
	  // }
  
	  switch(this.data.DocumentType)
	  {
		case DocumentType.KhamBenh:
		  this.controllerName = "KhamBenh"; break;
		case DocumentType.DanhSachDieuTriNoiTru:
		  this.controllerName = "DieuTriNoiTru"; break;
		case DocumentType.YeuCauTiepNhan:
		  this.controllerName = "TiepNhanBenhNhan"; break;
		case DocumentType.TiemChungKhamSangLoc:
		  this.controllerName = "TiemChung"; break;
		case DocumentType.TiemChungThucHienTiem:
		  this.controllerName = "TiemChung"; break;
		
		// cập nhật theo chức năng gọi lại dùng chung
		//..............
  
		default:
		  this.controllerName = "KhamBenh"; break;
	  }
  
	  this.getThongTinYeuCauDichVuKyThuat(this.yeuCauDichVuKyThuatId);
	}
  
	getThongTinYeuCauDichVuKyThuat(yeuCauDichVuKyThuatId: number) {
	  this.apiService.get<any>(this.controllerName + "/" + this.apiGetDataName + yeuCauDichVuKyThuatId).subscribe(resultData => {
		if (resultData) {
		  this.yeuCauDichVuKyThuat = resultData;
		  this.yeuCauDichVuKyThuat.YeuCauKhamBenhId = this.data.YeuCauKhamBenhId;
		  this.yeuCauDichVuKyThuat.IsKhamBenhDangKham = this.documentType == DocumentType.KhamBenhDangKham || this.IsKhamBenhDangKham;
		  this.yeuCauDichVuKyThuat.LaThucHienDichVu = this.laThucHienDichVu;
		  this.yeuCauDichVuKyThuat.LaKhamDoanTatCa = this.laKhamDoanTatCa;
		}
	  },
		(err: ApiError) => {
		  if (err.Message != "Validation Failed") {
			this.notificationService.showError(err.Message);
		  }
		});
	}
  
	xuLyCapNhatThongTinThucHienDichVu() {
	  if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
		this.apiService.put<any>(this.controllerName + "/" + this.apiPutDataName, this.yeuCauDichVuKyThuat).subscribe(
		  resultData => {
			this.dialogRef.close(true);
		  },
		  (err: ApiError) => {
			this.validationErrors = err.ValidationErrors;
			if (err.Message != "Validation Failed") {
			  this.notificationService.showError(err.Message);
			}
		  });
	  }
	  else {
		this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
	  }
	}
}
