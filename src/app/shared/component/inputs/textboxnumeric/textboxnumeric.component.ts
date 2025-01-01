import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-textboxnumeric',
    templateUrl: './textboxnumeric.component.html',
    styleUrls: ['./textboxnumeric.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TextboxnumericComponent implements OnInit {

    @Input() id: string;
    @Input() label: string;
    @Input() required: boolean = false;
    @Input() moreClass: string;
    @Input() model: any;
    @Input() readonly: boolean = false;
    @Input() placeHolder: string = "";
    @Input() disabled: boolean = false;
    @Input() classLabel: string = "col-sm-2";
    @Input() classField: string = "col-sm-10";
    @Input() horizontalForm: boolean = false;
    @Input() validationerror: string = "";
    @Input() title: string = "";
    @Input() min: number = 0;
    @Input() max: number = 999999999999;
    @Input() spinners: boolean = true;
    @Input() autoCorrect: boolean = true;
    @Input() format: any = "n0";//{style: 'currency', currency: 'EUR', currencyDisplay: 'name'}
    @Input() step: number = 1;
    @Input() decimals: number = 0;
    @Input() autoCompleteDataSource: any[] = null;

    @Output() blur:EventEmitter<any> = new EventEmitter<any>();

    //suggest money 

    @Input() selectMoney: any[] = null;
    @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() isFormatCurrenly: boolean = false;
    @Input() isShowInDecrease: boolean = false;

    constructor() {
    }

    ngOnInit() {
        //console.log("---- ", this.min, this.max, this.id)
    }

    public arrMoneyNumber: any[] = [];
    public checkSuggestMoney: boolean = false;

    onValueChange(value: number): void {
        this.arrMoneyNumber = [];
        if (value > 0 && value !== undefined && value !== null && value != 0) {
           if (this.selectMoney !== undefined && this.selectMoney !== null) {               
                this.checkSuggestMoney = true;
                this.suggestMoneyNumber(value, this.selectMoney[0], this.selectMoney[1]);
            }
        }
    }

    suggestMoneyNumber(num, moneyDefeaut, moneyLimit) {
        this.arrMoneyNumber = [];
        let input = moneyDefeaut;
        if (moneyDefeaut > 0) {
            const output = [];
            while (input !== 0) {
                const roundedInput = Math.floor(input / 10)
                output.push(input - roundedInput * 10)
                input = roundedInput
            }

            if (moneyDefeaut < moneyLimit) {
                for (let index = 1000 * parseInt(num); index <= moneyLimit; index *= 10) {
                    if (index >= moneyDefeaut) {
                        this.arrMoneyNumber.push(index);
                    }
                }
                let lastArray: string[] = [];
                let arrMoneyNumbertmp: any[] = [];
                if (this.arrMoneyNumber.length > 0) {
                    for (let index = 0; index < this.arrMoneyNumber.length; index++) {
                        lastArray = this.arrMoneyNumber.toString().split(',');
                    }
                    for (let u = 0; u < lastArray.length; u++) {
                        if (num != null && num.length !== 0) {
                            if (lastArray[u].indexOf(num.toString()) === 0) {
                                arrMoneyNumbertmp.push(lastArray[u]);
                            }
                            else {
                                if (num.replace(/\./g, '').length < output.length) {
                                    let soDu = output.length - num.replace(/\./g, '').length;
                                    let numberPer = "";
                                    if (soDu >= 0) {
                                        for (let index = 0; index <= soDu; index++) {
                                            if (index == 0) {
                                                numberPer = num;
                                            } else {
                                                numberPer += "0";;
                                            }
                                        }
                                    }
                                    var match = numberPer.replace(/\./g, '');
                                    var input1 = Number(match);
                                    if (input1 > moneyDefeaut) {
                                        arrMoneyNumbertmp.push(input1);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    this.arrMoneyNumber = arrMoneyNumbertmp;
                }
            }
            if (moneyDefeaut > moneyLimit) {
                for (let index = 10000 * parseInt(num); index <= moneyDefeaut; index *= 10) {
                    this.arrMoneyNumber.push(index);
                }
                let lastArray: string[] = [];
                let arrMoneyNumbertmp: any[] = [];
                if (this.arrMoneyNumber.length > 0) {
                    for (let index = 0; index < this.arrMoneyNumber.length; index++) {
                        lastArray = this.arrMoneyNumber.toString().split(',');
                    }
                    for (let u = 0; u < lastArray.length; u++) {
                        if (num != null && num.length !== 0) {
                            if (lastArray[u].indexOf(num.toString()) === 0) {
                                arrMoneyNumbertmp.push(lastArray[u]);
                            }
                            else {
                                if (num.length <= output.length) {
                                    let soDu = output.length - num.replace(/\./g, '').length;
                                    let numberPer = "";
                                    if (soDu >= 0) {
                                        for (let index = 0; index <= soDu; index++) {
                                            if (index == 0) {
                                                numberPer = num;
                                            } else {
                                                numberPer += "0";;
                                            }
                                        }
                                    }

                                    var match = numberPer.replace(/\./g, '');
                                    var input1 = Number(match);
                                    arrMoneyNumbertmp.push(input1);
                                    break;
                                }
                            }
                        }
                    }
                }
                else {
                    if (num.length <= output.length) {
                        let soDu = output.length - num.replace(/\./g, '').length;
                        let numberPer = "";
                        if (soDu >= 0) {
                            for (let index = 0; index <= soDu; index++) {
                                if (index == 0) {
                                    numberPer = num;
                                } else {
                                    numberPer += "0";;
                                }
                            }
                        }
                        var match = numberPer.replace(/\./g, '');
                        var input1 = Number(match);
                        arrMoneyNumbertmp.push(input1);
                    }
                }
                this.arrMoneyNumber = arrMoneyNumbertmp;
            }
        }
    }

    ngAfterViewInit() {
        if (this.autoCompleteDataSource != null) {
            jQuery("#" + this.id).find(".k-input").autocomplete({
                source: this.autoCompleteDataSource
            });
        }
    }

    selectedValue(val: any) {
        this.model = parseFloat(val);
        this.modelChange.emit(this.model);
        this.checkSuggestMoney = false;
    }

    emit(event: any) {
        if (this.isFormatCurrenly) {
            event = event.replace(/\./g, '');
            event = Number(event);
            if (event > this.max) {
                event = this.max;
                if(jQuery("#" + this.id).find(".k-textbox").length>0)
                {
                    jQuery("#" + this.id).find(".k-textbox").val(event);
                }    
                else
                {
                    if(jQuery("#" + this.id+".k-textbox").length>0)
                    {
                        jQuery("#" + this.id+".k-textbox").val(event);
                    }   
                }            
            }
            if (event < this.min) {
                event = this.min;
                if(jQuery("#" + this.id).find(".k-textbox").length>0)
                {
                    jQuery("#" + this.id).find(".k-textbox").val(event);
                }      
                else
                {
                    if(jQuery("#" + this.id+".k-textbox").length>0)
                    {
                        jQuery("#" + this.id+".k-textbox").val(event);
                    }   
                }  
            }
        }
        this.validationerror = "";
        this.modelChange.emit(event);
    }


    onKeyDown(e: KeyboardEvent, value) {

        var match = value.replace(/\./g, '');
        var input = Number(match);

        if ((e.key == null || e.key != "Backspace") && match.length >= this.max.toString().length) {

            this.model = this.max;
            this.modelChange.emit(input);
            e.preventDefault();
            return false;
        }
        if (e.keyCode == 38) {
            this.plus(e, value);
        }
        if (e.keyCode == 40) {
            this.minus(e, value);
        }
    }


    formatNumber(value) {
        var match = value.toString().replace(/\./g, '');
        return Number(match).toLocaleString('de-DE')
    }

    ngOnChanges() {
        this.arrMoneyNumber = [];
        if (this.isFormatCurrenly && this.model != undefined && this.model != "") {         
            this.model = this.formatNumber(this.model);
            this.onValueChange(this.model)
        }
    }

    plus(event, value) {

        if (value == undefined && this.model == undefined) {
            this.model = this.step;
            //  event.target.value = this.step;
        } else {
            var match = this.model.toString().replace(/\./g, '');
            match = Number(match) + this.step;
            if (match > this.max) {
                match = this.max;
            }
            this.modelChange.emit(match);
            this.model = Number(match).toLocaleString('de-DE')
        }


    }

    minus(event, value) {

        if (this.model != undefined) {
            var match = this.model.toString().replace(/\./g, '');
            if (Number(match) > 0) {
                match = Number(match) - this.step;
                if (match < this.min) {
                    match = this.min;
                }
                this.modelChange.emit(match);
                this.model = Number(match).toLocaleString('de-DE')
            }           
        } else {

        }
    }

    onBlur(): void {
        this.blur.emit(true);
      }

}


