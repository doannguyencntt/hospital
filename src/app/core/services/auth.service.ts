import { Injectable, ViewChild } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { AccessToken } from 'src/app/shared/models/access-token.model';
import { AccessUser } from 'src/app/shared/models/access-user.model';
import { LocalStorageHelper } from '../utilities/local-storage.helper';
import { sidebarConfig } from 'src/app/shared/configdata/sidebar.config';
import { Router } from '@angular/router';
import { BroadcastService } from './broadcast.service';
//import { MessagingService } from './messaging.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LookupQueryInfo, HoatDongNhanVien } from 'src/app/shared/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AccessUserKey = 'AccessUserKey'
  currentAccessUser: AccessUser
  constructor(private apiService: ApiService, private router: Router, private broadcastService: BroadcastService) {
    this.currentAccessUser = this.getAccessUser()
  }

  getToken(): AccessToken {
    const accessUser = this.getAccessUser();
    if (accessUser != null) {
      return accessUser.AccessToken;
    }
    return null;
    //return this.currentAccessUser == null ? null : this.currentAccessUser.AccessToken
  }

  getAccessUser(): AccessUser {
    return LocalStorageHelper.getItem<AccessUser>(this.AccessUserKey)
  }

  getPhongLamViecId(): string {
    return LocalStorageHelper.getItem<string>("PhongBenhVienId");
  }

  setPhongLamViecId(phongLamViecId: number) {
    LocalStorageHelper.setItem("PhongBenhVienId", phongLamViecId);
  }

  removePhongLamViecId() {
    LocalStorageHelper.removeItem("PhongBenhVienId");
  }


  setCongTyKhamSucKhoeVaHopDongKhamSK(hopDongKhamSucKhoeId: number, congTyKhamSucKhoeId: number) {
    LocalStorageHelper.setItem("HopDongKhamSucKhoeId", hopDongKhamSucKhoeId);
    LocalStorageHelper.setItem("CongTyKhamSucKhoeId", congTyKhamSucKhoeId);
  }

  removeCongTyKhamSucKhoeVaHopDongKhamSK() {
    LocalStorageHelper.removeItem("HopDongKhamSucKhoeId");
    LocalStorageHelper.removeItem("CongTyKhamSucKhoeId");
  }

  getCongTyKhamSucKhoeId(): number {
    return LocalStorageHelper.getItem<number>("CongTyKhamSucKhoeId");

  }

  getHopDongKhamSucKhoeId(): number {
    return LocalStorageHelper.getItem<number>("HopDongKhamSucKhoeId");

  }


  saveAccessUser(accessUser: AccessUser) {
    LocalStorageHelper.setItem(this.AccessUserKey, accessUser);
  }

  destroyAccessUser() {
    LocalStorageHelper.removeItem(this.AccessUserKey);
  }

  login(loginObj: Login) {
    // const user = {
    //   AccessToken: {
    //   Id: 1,
    //   Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlVzZXJOYW1lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    //   ExpiresIn: 3600
    //   },
    //   UserName: 'UserName',
    //   Id: 1,
    //   HinhThucKhamBenh: 1,
    //   MenuInfo: {},
    //   Permissions: []
    // }
    // this.setAuth(user as AccessUser);
    // console.log(loginObj);
    return this.apiService.post<AccessUser>('auth/Login', loginObj)
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ));
  }

  //-----------Khoa--Phong--hoatdonglichsunhanvien-logout-----
  GetListKhoa(khoaObj: LookupQueryInfo) {
    return this.apiService.post<any>('PhongBenhVien/GetListKhoa', khoaObj)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  GetListPhong(phongObj: LookupQueryInfo) {
    return this.apiService.post<any>('PhongBenhVien/GetListPhong', phongObj)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  GetPhongNgoaiViens(phongObj: LookupQueryInfo) {
    return this.apiService.post<any>('PhongBenhVien/GetPhongNgoaiViens', phongObj)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  HoatDongNhanVien(hoatDongNhanVien: HoatDongNhanVien) {
    return this.apiService.post<HoatDongNhanVien>('HoatDongNhanVien/LuuHoatDongNhanVien', hoatDongNhanVien)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  //-----------Khoa--Phong--hoatdonglichsunhanvien-----

  verifyUsername(loginObj: Login) {
    return this.apiService.post<AccessUser>('auth/VerifyUsername', loginObj)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  verifyPassCode(loginObj: Login) {
    return this.apiService.post<AccessUser>('auth/VerifyPassCode', loginObj)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  setPassword(loginObj: Login) {
    return this.apiService.post<AccessUser>('auth/SetPassword', loginObj)
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ));
  }
  sendPassCode(loginObj: Login) {
    return this.apiService.post<AccessUser>('auth/SendPassCode', loginObj)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  forgetPassword(loginObj: Login) {
    return this.apiService.post<AccessUser>('auth/ForgetPassword', loginObj)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  expiredSection() {
    this.broadcastService.broadcast({
      name: "ExpiredSection",
      message: null
    });
  }

  //xóa phòng hoạt động nhân viên
  XoaHoatDongSauKhiLogOut(hoatDongNhanVien: HoatDongNhanVien) {
    return this.apiService.post<any>('auth/Logout', hoatDongNhanVien)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  logout() {
    this.currentAccessUser = null;
    this.destroyAccessUser();
    //this.messagingService.stopReceiveMessage();
    this.router.navigate(['dang-nhap']);
  }

  setAuth(accessUser: AccessUser) {
    this.currentAccessUser = accessUser
    this.saveAccessUser(accessUser);
  }

  isAuthenticated() {
    return this.currentAccessUser != null;
  }
  getMenuInfo() {
    return this.currentAccessUser == null ? {} : this.currentAccessUser.MenuInfo
  }
  getAccessRoute() {
    if (this.currentAccessUser == null || this.currentAccessUser.MenuInfo == null) {
      return []
    }
    return sidebarConfig.filter(menuItem => (menuItem.canViewType == null && (menuItem.children == null || menuItem.children.length == 0)) ||
      (menuItem.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[menuItem.canViewType]] === true) ||
      (menuItem.canViewType == null && menuItem.children != null && menuItem.children.length > 0
        && menuItem.children.filter(childrenItem => (childrenItem.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem.canViewType]] === true) ||
          (childrenItem.children != null && childrenItem.children.length > 0 && childrenItem.children.filter(childrenItem1 => (childrenItem1.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem1.canViewType]] === true) ||
            (childrenItem1.children != null && childrenItem1.children.length > 0 && childrenItem1.children.filter(childrenItem2 => (childrenItem2.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem2.canViewType]] === true) ||
              (childrenItem2.children != null && childrenItem2.children.length > 0 && childrenItem2.children.filter(childrenItem3 => (childrenItem3.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem3.canViewType]] === true) ||
                (childrenItem3.children != null && childrenItem3.children.length > 0 && childrenItem3.children.filter(childrenItem4 => (childrenItem4.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem4.canViewType]] === true)).length > 0)).length > 0)).length > 0)).length > 0)).length > 0));
  }
  isChildrenPermission(item: any): boolean {
    if (this.currentAccessUser == null || this.currentAccessUser.MenuInfo == null) {
      return false;
    }
    return (item != null && item.children != null && item.children.length > 0 && item.children.filter(childrenItem => (childrenItem.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem.canViewType]] == true) ||
      (childrenItem.children != null && childrenItem.children.length > 0 && childrenItem.children.filter(childrenItem1 => (childrenItem1.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem1.canViewType]] === true) ||
        (childrenItem1.children != null && childrenItem1.children.length > 0 && childrenItem1.children.filter(childrenItem2 => (childrenItem2.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem2.canViewType]] === true) ||
          (childrenItem2.children != null && childrenItem2.children.length > 0 && childrenItem2.children.filter(childrenItem3 => (childrenItem3.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem3.canViewType]] === true) ||
            (childrenItem3.children != null && childrenItem3.children.length > 0 && childrenItem3.children.filter(childrenItem4 => (childrenItem4.canViewType != null && this.currentAccessUser.MenuInfo['CanView' + DocumentType[childrenItem4.canViewType]] === true)).length > 0)).length > 0)).length > 0)).length > 0)).length > 0);
  }
  findObjectByMultiKey(array: any, keys: any[], values: any[]): any {
    for (var i = 0; i < array.length; i++) {
      var c = 0;
      for (var j = 0; j < keys.length; j++) {
        if (array[i][keys[j]] === values[j]) {
          c++;
        }
      }
      if (c == keys.length) {
        return array[i];
      }
    }
    return null;
  }
  hasPermission(documentType: any, securityOperation: any) {
    if (this.currentAccessUser == null) {
      return false
    }
    return this.findObjectByMultiKey(this.currentAccessUser.Permissions, ["SecurityOperation", "DocumentType"], [securityOperation, documentType]) != null;
  }
}
