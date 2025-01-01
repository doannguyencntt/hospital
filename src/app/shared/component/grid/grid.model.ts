import { SortDescriptor } from "@progress/kendo-data-query";

export class GridQueryInfo {    
  constructor(
    public skip:number,
    public take:number,
    public pageSize:number,
    public searchString:string,
    public additionalSearchString:string,
    public sort:SortDescriptor[],
    public lazyLoadPage:boolean,
      ) {
  }
}