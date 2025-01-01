export class ForgotPassword {
    UserName: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    Base64Data: string;
    Domain: string;
    ForgotPasswordStage: number;
}

export enum EnumForgetPasswordStage {
    IsForget = 1,
    IsVerify = 2,
    IsReset = 3
}