import { DocumentType, UserType } from 'src/app/shared/enum/document-type.enum';


export class PhanQuyenNguoiDung {
    constructor(
        public Id: number = null,
        public Name: string = null,
        // tslint:disable-next-line: no-shadowed-variable
        public UserType: UserType = null,
        public UserTypeDisplay: string = null,
        public IsDefault: boolean = null,
        public DocumentTypes: DocumentTypeList[] = [],
        public DocumentTypesSearchFilter: DocumentTypeList[] = []
    ) { }
}

export class DocumentTypeList {
    constructor(
        public Id: number = null,
        public Name: string = null,
        public IsView: boolean = null,
        public IsInsert: boolean = null,
        public IsUpdate: boolean = null,
        public IsDelete: boolean = null,
        public IsProcess: boolean = null,
        public IsSearch: boolean = false,
        public IsChange: boolean = false,
        public HighLightClass: string = null,
        public IsCollapse: boolean = false,
        // tslint:disable-next-line: no-shadowed-variable
        public DocumentType: DocumentType = null,
        public Level: number = null,
        public IdParent: number = null
    ) { }
}
