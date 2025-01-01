import { HinhThucKhamBenh } from '../enum/kham-doan.enum';
import { AccessToken } from './access-token.model';

export interface AccessUser {
  AccessToken: AccessToken;
  UserName: string;
  Id: number;
  PhongBenhVienId : number;
  HinhThucKhamBenh : HinhThucKhamBenh ;
  MenuInfo: {};
  Permissions: [];
}
