import { Pipe, Injectable, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field : string, value : any): any[] {  
      if (!items) return [];
      if (!value || value.length == 0) return items;
      return items.filter(it => 
        it[field]!= undefined && it[field].toLowerCase().indexOf(value) !=-1);
    }
}