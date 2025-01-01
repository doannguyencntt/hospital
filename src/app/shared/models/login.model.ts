import { HinhThucKhamBenh } from "../enum/kham-doan.enum";

export interface Login {
  userName: string;
  password: string;
  confirmPassword: string;
  rememberMe: boolean;
  passCode1: string;
  passCode2: string;
  passCode3: string;
  passCode4: string;
  passCode5: string;
  passCode6: string;
  passCode: string;
  region: number;
  fcmToken: String;
  HinhThucKhamBenh : HinhThucKhamBenh ;
}
