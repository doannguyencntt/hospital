// import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
// import { MatDialog } from "@angular/material";
// import { ActivatedRoute, Router } from "@angular/router";
// import { AuthService } from "src/app/core/services/auth.service";
// import { NotificationService } from "src/app/core/services/notification.service";
// import { ApiService } from 'src/app/core/services/api.service';
// import { Location } from '@angular/common';
// import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
// import { ListStatusSelectTabTHDTKhoa } from "../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model";

// @Component({
//     // tslint:disable-next-line: component-selector
//     selector: 'app-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list',
//     templateUrl: './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list.component.html',
//     styleUrls: ['./tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list.component.scss']
// })

// export class TongHopDuTruMuaKSNKTaiKhoaDuocListComponent implements OnInit {
//     baseRoute: string = "/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa";
//     lstStatusSelectTabTHDTKhoa: ListStatusSelectTabTHDTKhoa = new ListStatusSelectTabTHDTKhoa();
//     indexTap:number = 0;
//     data : string;
//     holdQuery: any = null;
//       constructor( private dialog: MatDialog,
//         private router: Router,
//         private apiService: ApiService,
//         private authService: AuthService,
//         private notificationService: NotificationService,
//         private cd: ChangeDetectorRef,
//         private route: ActivatedRoute,
//         private location: Location,) { }
  
//       ngOnInit() {
//         if (this.route.snapshot.queryParams.holdQuery != null) {
//           this.holdQuery = this.route.snapshot.queryParams.holdQuery;
//       }
//         if (
//           this.holdQuery != null &&
//           LocalStorageHelper.getItem('testTapIndexStringVatTuNhomKSNK') != null
//         ) {
//           this.data = LocalStorageHelper.getItem(
//             'testTapIndexStringVatTuNhomKSNK'
//           );
//           this.lstStatusSelectTabTHDTKhoa = JSON.parse(this.data);
//         }
//         else{
//           LocalStorageHelper.setItem('testTapIndexStringVatTuNhomKSNK', null);
//         this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
//         this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
//         this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
//         }
//       }
//       chuyenDen(element: any, event: any) {
//         if(event.index == 0)
//         {
//           this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
//           this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
//           this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
//         }
//         if(event.index == 1)
//         {
//           this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
//           this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
//           this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
//         }
//         if(event.index == 2)
//         {
//           this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
//           this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
//           this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
//         }
//         LocalStorageHelper.setItem(
//           'testTapIndexStringVatTuNhomKSNK',
//           JSON.stringify(this.lstStatusSelectTabTHDTKhoa)
//       );
//       }
// }
