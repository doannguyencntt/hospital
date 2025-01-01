import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { TextboxComponent } from './component/inputs/textbox/textbox.component';
import { DropdownlistComponent } from './component/dropdowns/dropdownlist/dropdownlist.component';
import { TextboxmaskComponent } from './component/inputs/textboxmask/textboxmask.component';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule, WindowModule } from '@progress/kendo-angular-dialog';
import { UploadModule } from '@progress/kendo-angular-upload';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { EditorModule } from '@progress/kendo-angular-editor';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ValidationErrorPipe } from './pipe/validationerror.pipe';
import { ValidationErrorOtherPipe } from './pipe/validationerrorother.pipe';
import { ValidationerrorotherComponent } from './component/validationerrorother/validationerrorother.component';
import { UploadComponent } from './component/uploads/upload/upload.component';
import { ComboboxComponent } from './component/dropdowns/combobox/combobox.component';
import { EditorComponent } from './component/editor/editor.component';
import { DatepickerComponent } from './component/dates/datepicker/datepicker.component';
import { TimepickerComponent } from './component/dates/timepicker/timepicker.component';
import { GridComponent } from './component/grid/grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { FormfooterComponent } from './component/formfooter/formfooter.component';
import { DatetimepickerComponent } from './component/dates/datetimepicker/datetimepicker.component';
import { TextboxnumericComponent } from './component/inputs/textboxnumeric/textboxnumeric.component';
import { TextareaComponent } from './component/inputs/textarea/textarea.component';
import { SliderComponent } from './component/inputs/slider/slider.component';
import { SwitchComponent } from './component/inputs/switch/switch.component';
import { CheckboxComponent } from './component/inputs/checkbox/checkbox.component';
import { RadioComponent } from './component/inputs/radio/radio.component';
import { DigitOnlyDirective } from './directives/digit-only.directive';
import { TabContentLoadOnDemandDirective } from './directives/tab-content-load-on-demand.directive';
import { NumberAndLetterDirective } from './directives/number-and-letter.directive';
import { MultiselectComponent } from './component/dropdowns/multiselect/multiselect.component';
import { TimeFormatForHopDongPipe } from './pipe/timeFormatForHopDong.pipe';
import { PDFExportComponent, PDFExportModule } from '@progress/kendo-angular-pdf-export';


import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { ColorFadeModule } from 'src/@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';


import { ConfirmComponent } from './component/dialogs/confirm/confirm.component';
import { LoadingComponent } from './component/dialogs/loading/loading.component';
import { NotificationComponent } from './component/dialogs/notification/notification.component';
import { HeaderFormComponent } from '../modules/main/components/header-form/header-form.component';
import { PrintFormComponent } from './component/print-form/print-form.component';
import { BarcodeComponent } from './component/barcode/barcode/barcode.component';
import { BarcodePopupComponent } from './component/barcode/barcode-popup/barcode-popup.component';
import { AutocompleteComponent } from './component/dropdowns/autocomplete/autocomplete.component';
import { DaterangepickerComponent } from './component/dates/daterangepicker/daterangepicker.component';
import { VoiceComponent } from './component/inputs/voice/voice.component';
import { FormatNumberDirective } from './directives/format-number.directive';
import { ComboboxTreeComponent } from './component/dropdowns/combobox-tree/combobox-tree.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PopupModule } from '@progress/kendo-angular-popup';
import { HotKeyComponent } from './component/hot-key/hot-key.component';
import {AutosizeModule} from 'ngx-autosize';
import { ViewImagePdfComponent } from './component/dialogs/view-image-pdf/view-image-pdf.component';
import { ZoomComponent } from './component/dialogs/view-image-pdf/zoom.component';
import { SafePipe } from './pipe/safe.pipe';
import { ChuyenPhongComponent } from '../modules/main/chuyen-phong/chuyen-phong/chuyen-phong.component';
import { CurrencyHasDecimalPipe } from './pipe/currency.pipe';
import { ChuyenVePhongChinhComponent } from '../modules/main/chuyen-phong/chuyen-ve-phong-chinh/chuyen-ve-phong-chinh.component';
import { ResizableComponent } from './directives/resizable/resizable/resizable.component';
import { ResizableModule } from './directives/resizable/resizable/resizable.module';
import { ExportPdfComponent } from './component/export-pdf/export-pdf.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';

@NgModule({
    exports: [
        CommonModule,
        TextboxComponent,
        DropdownlistComponent,
        FormfooterComponent,
        TextboxmaskComponent,
        ValidationerrorotherComponent,
        UploadComponent,
        DigitOnlyDirective,
        ValidationErrorPipe,
        ValidationErrorOtherPipe,
        ComboboxComponent,
        EditorComponent,
        DatepickerComponent,
        TimepickerComponent,
        DatetimepickerComponent,
        TextboxnumericComponent,
        TextareaComponent,
        SliderComponent,
        SwitchComponent,
        CheckboxComponent,
        RadioComponent,
        GridComponent,
        MultiselectComponent,
        TabContentLoadOnDemandDirective,
        NumberAndLetterDirective,
        TimeFormatForHopDongPipe,
        PDFExportComponent,
        ConfirmComponent,
        NotificationComponent,
        HeaderFormComponent,
        PrintFormComponent,
        HeaderFormComponent,
        BarcodeComponent,
        BarcodePopupComponent,
        AutocompleteComponent,
        DaterangepickerComponent,
        VoiceComponent,
        HotKeyComponent,
        FormatNumberDirective,
        ComboboxTreeComponent,
        ViewImagePdfComponent,
        ZoomComponent,
        LoadingComponent,
        ChuyenPhongComponent, 
        ChuyenVePhongChinhComponent,       
        SafePipe,CurrencyHasDecimalPipe,
        ExportPdfComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        IconModule,
        FormsModule,
        MatTooltipModule,
        ReactiveFormsModule,
        ContainerModule,
        MatSelectModule,
        ColorFadeModule,
        MatButtonToggleModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatSliderModule,
        MatRadioModule,
        MatSlideToggleModule,
        SecondaryToolbarModule,

        DropDownsModule,
        InputsModule,
        DropDownsModule,
        DateInputsModule,
        UploadModule,
        DialogsModule,
        TooltipModule,
        WindowModule,
        EditorModule,
        GridModule,
        LayoutModule,
        ChartsModule,
        PDFExportModule,
        TreeViewModule,
        PopupModule,
        AutosizeModule,
        // ResizableModule
    ],
    declarations: [
        TextboxComponent,
        DropdownlistComponent,
        FormfooterComponent,
        TextboxmaskComponent,
        ValidationerrorotherComponent,
        UploadComponent,
        DigitOnlyDirective,
        ValidationErrorPipe,
        ValidationErrorOtherPipe,
        ComboboxComponent,
        EditorComponent,
        DatepickerComponent,
        TimepickerComponent,
        DatetimepickerComponent,
        TextboxnumericComponent,
        TextareaComponent,
        SliderComponent,
        SwitchComponent,
        CheckboxComponent,
        RadioComponent,
        GridComponent,
        MultiselectComponent,
        TabContentLoadOnDemandDirective,
        NumberAndLetterDirective,
        TimeFormatForHopDongPipe,
        ConfirmComponent,
        NotificationComponent,
        HeaderFormComponent,
        PrintFormComponent,
        HeaderFormComponent,
        BarcodeComponent,
        BarcodePopupComponent,
        AutocompleteComponent,
        DaterangepickerComponent,
        VoiceComponent,
        FormatNumberDirective,
        ComboboxTreeComponent,
        HotKeyComponent,
        ViewImagePdfComponent,
        ZoomComponent,
        SafePipe,
        LoadingComponent,
        ChuyenPhongComponent ,
        ChuyenVePhongChinhComponent,
        CurrencyHasDecimalPipe,
        ExportPdfComponent  ,
        ChonLoaiKetQuaXetNghiemPopupComponent
    ],
    entryComponents: [
        ConfirmComponent,
        NotificationComponent,
        BarcodePopupComponent,
        VoiceComponent,
        ViewImagePdfComponent,
        LoadingComponent,
        ChuyenPhongComponent,
        ChuyenVePhongChinhComponent,
        ChonLoaiKetQuaXetNghiemPopupComponent
    ],
   
})
export class SharedModule { }
