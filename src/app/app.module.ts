import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './core/guards/auth-guard.service';

import { FilterPipe } from './shared/pipe/filter.pipe';
import { HttpModule } from '@angular/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VersionincorrectModule } from './modules/versionincorrect/versionincorrect.module';
import { PermissionModule } from './modules/main/permission/permission.module';
import { EditorModule } from '@progress/kendo-angular-editor';
import { MainModule } from './modules/main/main.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';

import { GlobalErrorHandler } from './core/error/global-error-handler';
import { ServerErrorInterceptor } from './core/interceptors/server-error.interceptor';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { PermisssionGuard } from './core/guards/permission-guard.service';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { BrowserModule } from '@angular/platform-browser';
import { IntlModule } from '@progress/kendo-angular-intl';
import '@progress/kendo-angular-intl/locales/vi/all';
import '@progress/kendo-angular-intl/locales/vi/all';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi');
import { SignaturePadModule } from 'angular2-signaturepad';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
//import { AngularFireMessagingModule } from '@angular/fire/messaging';
//import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material';
import { UrlService } from 'src/@vex/services/url.service';
import { MenuModule } from '@progress/kendo-angular-menu';




@NgModule({
    declarations: [
        AppComponent,
        FilterPipe,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpModule,
        ToasterModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        EditorModule,
        MainModule,
        AuthModule,
        VersionincorrectModule,
        PermissionModule,
        ChartsModule,
        LayoutModule,
        DigitOnlyModule,
        IntlModule,
        SignaturePadModule,
        MatSnackBarModule,
        //AngularFireMessagingModule,
        //AngularFireModule.initializeApp(environment.firebase),
        MenuModule,
    ],
    providers: [
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'vi-VN' },
        AuthGuard,
        PermisssionGuard,
        ToasterService,
        UrlService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
