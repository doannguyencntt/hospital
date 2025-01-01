import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { MenuItem } from "../interfaces/menu-item.interface";
import { trackById } from "../../../utils/track-by";
import icPerson from "@iconify/icons-ic/twotone-person";
import icSettings from "@iconify/icons-ic/twotone-settings";
import icAccountCircle from "@iconify/icons-ic/twotone-account-circle";
import icMoveToInbox from "@iconify/icons-ic/twotone-move-to-inbox";
import icRepeat from "@iconify/icons-ic/twotone-repeat";
import icArrawback from "@iconify/icons-ic/arrow-back";
import icTableChart from "@iconify/icons-ic/twotone-table-chart";
import icCheckCircle from "@iconify/icons-ic/twotone-check-circle";
import icAccessTime from "@iconify/icons-ic/twotone-access-time";
import icDoNotDisturb from "@iconify/icons-ic/twotone-do-not-disturb";
import icOfflineBolt from "@iconify/icons-ic/twotone-offline-bolt";
import icChevronRight from "@iconify/icons-ic/twotone-chevron-right";
import icArrowDropDown from "@iconify/icons-ic/twotone-arrow-drop-down";
import icBusiness from "@iconify/icons-ic/twotone-business";
import icVerifiedUser from "@iconify/icons-ic/twotone-verified-user";
import icLock from "@iconify/icons-ic/twotone-lock";
import icNotificationsOff from "@iconify/icons-ic/twotone-notifications-off";
import { Icon } from "@visurel/iconify-angular";
import { PopoverRef } from "../../popover/popover-ref";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { MatDialog } from "@angular/material";
import { ChuyenPhongComponent} from 'src/app/modules/main/chuyen-phong/chuyen-phong/chuyen-phong.component';
import { ChuyenVePhongChinhComponent } from 'src/app/modules/main/chuyen-phong/chuyen-ve-phong-chinh/chuyen-ve-phong-chinh.component';
import { HoatDongNhanVien } from 'src/app/shared/models/common.model';

export interface OnlineStatus {
  id: "online" | "away" | "dnd" | "offline";
  label: string;
  icon: Icon;
  colorClass: string;
}

@Component({
  selector: "vex-toolbar-user-dropdown",
  templateUrl: "./toolbar-user-dropdown.component.html",
  styleUrls: ["./toolbar-user-dropdown.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarUserDropdownComponent implements OnInit {
  items: MenuItem[] = [
    {
      id: "1",
      icon: icAccountCircle,
      label: "Hồ sơ của tôi",
      description: "Thông tin cá nhân",
      colorClass: "text-teal-500",
      route: "/ho-so-cua-toi",
      dialogContent: null,
    },
    {
      id: "2",
      icon: icRepeat,
      label: "Chuyển phòng",
      description: "Thay đổi phòng làm việc",
      colorClass: "text-primary-500",
      route: null,
      dialogContent: {
        component: ChuyenPhongComponent,
        disableClose: true,
        width: "350px",
        height: "auto",
        data: { Title: "Chuyển phòng" },
      },
    },
    {
      id: "2",
      icon: icArrawback,
      label: "Chuyển về phòng chính",
      description: "Thay đổi phòng làm việc",
      colorClass: "text-primary-500",
      route: null,
      dialogContent: {
        component: ChuyenVePhongChinhComponent,
        disableClose: true,
        width: "350px",
        height: "auto",
        data: { Title: "Chuyển về phòng chính" },
      },
    },
  ];

  statuses: OnlineStatus[] = [
    {
      id: "online",
      label: "Online",
      icon: icCheckCircle,
      colorClass: "text-green-500",
    },
    {
      id: "away",
      label: "Away",
      icon: icAccessTime,
      colorClass: "text-orange-500",
    },
    {
      id: "dnd",
      label: "Do not disturb",
      icon: icDoNotDisturb,
      colorClass: "text-red-500",
    },
    {
      id: "offline",
      label: "Offline",
      icon: icOfflineBolt,
      colorClass: "text-gray-500",
    },
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  trackById = trackById;
  icPerson = icPerson;
  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icArrowDropDown = icArrowDropDown;
  icBusiness = icBusiness;
  icVerifiedUser = icVerifiedUser;
  icLock = icLock;
  icNotificationsOff = icNotificationsOff;
  currentUser: any;
  hoatDongNhanVien = {} as HoatDongNhanVien;
  
  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private dialog: MatDialog,
    private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getAccessUser();
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  logout() {    
    this.popoverRef.close();
    var auth = this.authService.getAccessUser();
    if(auth != null){
      this.hoatDongNhanVien.PhongKhamBenhId = auth.PhongBenhVienId;
      this.authService.XoaHoatDongSauKhiLogOut(this.hoatDongNhanVien).toPromise();
    }
    this.authService.logout();
  }
  close(item: MenuItem) {
    if (item.dialogContent != null) {
      this.dialog.open(item.dialogContent.component, {
        disableClose: item.dialogContent.disableClose,
        width: item.dialogContent.width,
        height: item.dialogContent.height,
        data: item.dialogContent.data,
      });
    } else {
      this.router.navigate([item.route]);
    }
    this.popoverRef.close();
  }
}
