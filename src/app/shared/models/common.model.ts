export class FeedbackViewModel {
  constructor(
    public Status: string,
    public Message: string,
    public Description: string,
    public ModelState: any[]) {
  }
}

export class GridQueryInfo {

  constructor(
    public Skip: number,
    public Take: number,
    public PageSize: number,
    public SearchString: string,
    public AdditionalSearchString: string,
    public Sort: Sort[] = []
  ) {
  }
}

export class Sort {

  constructor(
    public Field: string,
    public Dir: string) {
  }
}

export class LookupItemVo {

  constructor(
    public KeyId: number,
    public DisplayName: string,
  ) {
  }
}

export class LookupQueryInfo {
  constructor(
    public Take: number = 50,
    public Id: number = 0,
    public Query: string = null,
    public ParameterDependencies: string = null
  ) {
  }
}
export class MultiselectQueryInfo {
  constructor(
    public Take: number = 50,
    public SelectedItems: string = null,
    public Query: string = null,
    public ParameterDependencies: string = null
  ) {
  }
}
export class GridTabViewModel {

  constructor(
    public Id: number,
    public TabActive: string,
    public TabName: string,
    public TabBubble: number,
    public ShowBubble: boolean
  ) {
  }
}

export class HoatDongNhanVien {
  constructor(
    public PhongKhamBenhId: number
  ) {
  } 
}

