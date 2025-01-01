import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter, SimpleChanges } from '@angular/core';
declare var jQuery: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

    @Input() id: string;
    @Input() label: string;
    @Input() labelTop = false;
    @Input() required = false;
    @Input() moreClass: string;
    @Input() model: any;
    @Input() items: string;
    @Input() readonly = false;
    @Input() placeHolder = '';
    @Input() disabled = false;
    @Input() classLabel = 'col-sm-2';
    @Input() classField = 'col-sm-10';
    @Input() horizontalForm = false;
    @Input() validationerror = '';
    @Input() title = '';
    @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
    }
    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        const self = this;
        setTimeout(() => {
            // You can also use model.previousValue and
            // model.firstChange for comparing old and new values
            // tslint:disable-next-line: triple-equals
            if (changes.model != undefined && changes.model.currentValue == true &&
                !jQuery('#' + self.id).hasClass('mat-checkbox-checked')) {
                jQuery('#' + self.id).addClass('mat-checkbox-checked');
            }

            if (changes.model != undefined && changes.model.currentValue == false &&
              jQuery('#' + self.id).hasClass('mat-checkbox-checked')) {
              jQuery('#' + self.id).removeClass('mat-checkbox-checked');
          }
        });
    }
    emit(event: any) {
        this.validationerror = '';
        this.modelChange.emit(event);
    }

}
