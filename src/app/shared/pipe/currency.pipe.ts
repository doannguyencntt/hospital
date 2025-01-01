
import { CurrencyPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currency"
})
export class CurrencyHasDecimalPipe extends CurrencyPipe implements PipeTransform {
  constructor() {
    super("vi");
  }

  transform(
    value: any,
    code = "VND",
    display = "symbol",
    digitsInfo = "1.2-2",
    locale = "vi"
  ) {
    return super.transform(value, code, display, digitsInfo, locale);
  }
}