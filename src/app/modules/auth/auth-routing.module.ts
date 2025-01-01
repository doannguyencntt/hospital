import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
const authChildRoutes: Routes = [
    {
        path: 'dang-nhap',
        loadChildren: () => import('./login/login.module').then(o => o.LoginModule)
    },
    {
        path: 'khoi-phuc-mat-khau',
        loadChildren: () => import('./forgot-password/forgot-password.module').then(o => o.ForgotPasswordModule)
    },
    {
        path: 'dang-ky',
        loadChildren: () => import('./register/register.module').then(o => o.RegisterModule)
    },
    {
        path: 'tao-lai-mat-khau/:email/:code',
        loadChildren: () => import('./reset-password/reset-password.module').then(o => o.ResetPasswordModule)
    },
    {
        path: 'version-incorrect',
        loadChildren: () => import('../versionincorrect/versionincorrect.module').then(o => o.VersionincorrectModule)
    },
    {path: '**', component: PageNotFoundComponent}
];

const authRoutes: Routes = [
    { path: '', component: AuthComponent, data: { title: 'auth Views' }, children: authChildRoutes }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
