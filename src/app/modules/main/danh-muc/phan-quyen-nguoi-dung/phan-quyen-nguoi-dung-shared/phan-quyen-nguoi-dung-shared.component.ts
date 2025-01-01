import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from 'src/@vex/services/navigation.service';
import { BaseService } from 'src/app/core/services/base.service';
import icSearch from '@iconify/icons-ic/twotone-search';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { FormControl } from '@angular/forms';
import { PhanQuyenNguoiDung, DocumentTypeList } from '../phan-quyen-nguoi-dung.model';
import icArrowDown from '@iconify/icons-ic/twotone-keyboard-arrow-down';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';
import icArrowUp from '@iconify/icons-ic/twotone-keyboard-arrow-up';
declare var jQuery: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phan-quyen-nguoi-dung-shared',
    templateUrl: './phan-quyen-nguoi-dung-shared.component.html',
    styleUrls: ['./phan-quyen-nguoi-dung-shared.component.scss']
})
export class PhanQuyenNguoiDungSharedComponent implements OnInit {
    gridDataSource: any = {
        data: [],
        total: 0
    };
    icArrowDown = icArrowDown;
    icArrowUp = icArrowUp;
    gridColumns: any[] = [];
    phanQuyenNguoiDung = {} as PhanQuyenNguoiDung;
    items = this.navigationService.items;
    otherDocumentTypes = [];
    icSearch = icSearch;
    searchString: string;
    validationErrors: any;
    searchCtrl = new FormControl();
    isCreate = true;
    isCheckAll = false;
    documentType: DocumentType;
    searchTimeout: any = null;
    documentTypeCurrents = [];
    @ViewChild('nameTemplate', { static: true }) nameTemplate: TemplateRef<any>;
    @ViewChild('viewTemplate', { static: true }) viewTemplate: TemplateRef<any>;
    @ViewChild('insertTemplate', { static: true }) insertTemplate: TemplateRef<any>;
    @ViewChild('updateTemplate', { static: true }) updateTemplate: TemplateRef<any>;
    @ViewChild('deleteTemplate', { static: true }) deleteTemplate: TemplateRef<any>;
    @ViewChild('gridPermission', { static: false }) gridPermission: GridComponent;
    @ViewChild('processTemplate', { static: true }) processTemplate: TemplateRef<any>;

    constructor(
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private baseService: BaseService,
        private navigationService: NavigationService,
        private authService: AuthService,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.Role;
        const id: number = this.route.snapshot.params.id;
        this.phanQuyenNguoiDung = new PhanQuyenNguoiDung();
        this.gridColumns = [
            { Field: 'Name', Title: 'Chức năng', Width: 200, Template: this.nameTemplate },
            { Field: 'IsView', Title: 'Xem', Width: 100, Template: this.viewTemplate },
            { Field: 'IsInsert', Title: 'Thêm', Width: 100, Template: this.insertTemplate },
            { Field: 'IsUpdate', Title: 'Sửa', Width: 100, Template: this.updateTemplate },
            { Field: 'IsDelete', Title: 'Xóa', Width: 100, Template: this.deleteTemplate },
            { Field: 'IsProcess', Title: 'Xử lý khác', Width: 100, Template: this.processTemplate }
        ];
        this.showPopupLoadingData();
        this.GetDocumentTypeEnum(id);
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    GetClassChildName(name: string, prevClass: string) {
        const nameRemoveVn = CommonService.removeVietnamese(name).replace(/ /gi, '_');

        if (prevClass === '') {
            return 'group_' + nameRemoveVn;
        } else {
            return prevClass + '_' + nameRemoveVn;
        }
    }

    GetDocumentTypeEnum(id: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            const responseDocumentType = self.apiService
                .get<any>('PhanQuyenNguoiDung/GetListDocumentType').toPromise();

            responseDocumentType.then(resultDocument => {
                self.GetData(id, resultDocument);
            }).catch(err => {
                self.notificationService.showError(err.Message);
                self.closePopupLoadingData();
                self.phanQuyenNguoiDung.IsDefault = true;
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    getDataSource(resultData: any) {
        const self = this;
        const dataSource = [];
        let index = 1;
        for (const item0 of self.items.filter(x => x.type !== 'link')) {
            let documentType = new DocumentTypeList();
            documentType = {
                Id: index,
                IsDelete: resultData != null ? self.getStatusSecurityOperation
                    (item0.canViewType, resultData, SecurityOperation.Delete) : false,
                IsInsert: resultData != null ? self.getStatusSecurityOperation
                    (item0.canViewType, resultData, SecurityOperation.Add) : false,
                IsProcess: resultData != null ? self.getStatusSecurityOperation
                    (item0.canViewType, resultData, SecurityOperation.Process) : false,
                IsUpdate: resultData != null ? self.getStatusSecurityOperation
                    (item0.canViewType, resultData, SecurityOperation.Update) : false,
                IsView: resultData != null ? self.getStatusSecurityOperation(item0.canViewType, resultData, SecurityOperation.View) : false,
                DocumentType: item0.canViewType,
                IdParent: null,
                IsCollapse: false,
                Name: item0.label,
                HighLightClass: null,
                Level: 0,
                IsSearch: false,
                IsChange: false
            };

            if (item0.canViewType !== undefined) {
                self.documentTypeCurrents.push(item0.canViewType);
            }

            dataSource.push(documentType);
            const classChildName = self.GetClassChildName(item0.label, '');
            index++;

            if (item0.children != null && item0.children.length > 0) {
                index = self.addDataSource(item0, dataSource, 0, index, classChildName, documentType, resultData);
            }

        }
        self.phanQuyenNguoiDung.DocumentTypes = dataSource;
        self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes; // ngay tu dau se tro chung vung nho
        return dataSource.length;
    }

    addDataSource(item: any, dataSource: any, currentLevel: number, nextIndex: number,
        classChildName: string, documentTypeListParent: DocumentTypeList, resultData: any) {
        const self = this;
        if (item.children != null && item.children.length > 0) {
            for (const item1 of item.children) {
                let documentType = new DocumentTypeList();

                documentType = {
                    Id: nextIndex,
                    IsDelete: resultData != null ? self.getStatusSecurityOperation
                        (item1.canViewType, resultData, SecurityOperation.Delete) : false,
                    IsInsert: resultData != null ? self.getStatusSecurityOperation
                        (item1.canViewType, resultData, SecurityOperation.Add) : false,
                    IsProcess: resultData != null ? self.getStatusSecurityOperation
                        (item1.canViewType, resultData, SecurityOperation.Process) : false,
                    IsUpdate: resultData != null ? self.getStatusSecurityOperation
                        (item1.canViewType, resultData, SecurityOperation.Update) : false,
                    IsView: resultData != null ? self.getStatusSecurityOperation
                        (item1.canViewType, resultData, SecurityOperation.View) : false,
                    DocumentType: item1.canViewType,
                    IdParent: documentTypeListParent.Id,
                    IsCollapse: false,
                    Name: item1.label,
                    HighLightClass: classChildName,
                    Level: currentLevel + 1,
                    IsSearch: false,
                    IsChange: false
                };
                if (item1.canViewType !== undefined) {
                    this.documentTypeCurrents.push(item1.canViewType);
                }

                dataSource.push(documentType);
                nextIndex++;
                if (item1.children != null && item1.children.length > 0) {
                    const classSubChildName = this.GetClassChildName(item1.label, classChildName);
                    nextIndex = this.addDataSource(item1, dataSource, currentLevel + 1,
                        nextIndex, classSubChildName, documentType, resultData);
                }
            }
            const objIndex = dataSource.findIndex((obj => obj.Id === documentTypeListParent.Id));

            dataSource[objIndex].IsDelete = this.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Delete, documentTypeListParent.Id);

            dataSource[objIndex].IsInsert = this.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Add, documentTypeListParent.Id);

            dataSource[objIndex].IsProcess = this.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Process, documentTypeListParent.Id);

            dataSource[objIndex].IsUpdate = this.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Update, documentTypeListParent.Id);

            dataSource[objIndex].IsView = this.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.View, documentTypeListParent.Id);
        }
        return nextIndex;
    }

    getStatusSecurityOperationForParent(documentTypeList: any, securityOperation: SecurityOperation, parentId: number) {
        if (parentId > 0) {
            const result = documentTypeList.filter(item => item.IdParent === parentId);
            if (result != null && result.length > 0) {
                switch (securityOperation) {
                    case SecurityOperation.Add:
                        return result.filter(item => item.IsInsert === true).length === result.length;
                    case SecurityOperation.Update:
                        return result.filter(item => item.IsUpdate === true).length === result.length;
                    case SecurityOperation.Delete:
                        return result.filter(item => item.IsDelete === true).length === result.length;
                    case SecurityOperation.View:
                        return result.filter(item => item.IsView === true).length === result.length;
                    case SecurityOperation.Process:
                        return result.filter(item => item.IsProcess === true).length === result.length;
                    default:
                        return false;
                }
            }

        }
        return false;

    }

    getStatusSecurityOperation(documentType: number, dataSourceFromServer: any, securityOperation: SecurityOperation) {
        const result = dataSourceFromServer.DocumentTypes.filter(item => item.DocumentType === documentType);
        if (result != null && result.length > 0) {
            switch (securityOperation) {
                case SecurityOperation.Add:
                    return result[0].IsInsert;
                case SecurityOperation.Update:
                    return result[0].IsUpdate;
                case SecurityOperation.Delete:
                    return result[0].IsDelete;
                case SecurityOperation.View:
                    return result[0].IsView;
                case SecurityOperation.Process:
                    return result[0].IsProcess;
                default:
                    return false;
            }
        }
        return false;
    }

    GetData(id: any, resultDocument: any) {
        const self = this;

        if (id !== undefined && id !== null) {
            self.getById(id, resultDocument);
            self.isCreate = false;
        } else {
            const countQuyen = self.getDataSource(null);
            self.otherDocumentTypes = self.GetOthers(resultDocument);
            self.SetOthers(countQuyen, null);
            self.SetGrid();
            self.WillCheckAll();
        }
    }

    SetOthers(countQuyen: number, resultData: any) {
        const self = this;
        countQuyen++;
        const quyenChaId = countQuyen;
        let documentTypeForOtherTitle = new DocumentTypeList();
        documentTypeForOtherTitle = {
            Id: quyenChaId,
            IsDelete: false,
            IsInsert: false,
            IsProcess: false,
            IsUpdate: false,
            IsView: false,
            IsCollapse: false,
            DocumentType: undefined,
            IdParent: null,
            HighLightClass: null,
            Level: 0,
            Name: 'Khác',
            IsSearch: false,
            IsChange: false
        };
        const classParent = self.GetClassChildName('Khác', '');
        self.phanQuyenNguoiDung.DocumentTypes.push(documentTypeForOtherTitle);
        for (const khacItem of self.otherDocumentTypes) {
            countQuyen++;
            let documentTypeForOthers = new DocumentTypeList();
            documentTypeForOthers = {
                Id: countQuyen,
                IsDelete: resultData != null ? self.getStatusSecurityOperation
                    (khacItem.KeyId, resultData, SecurityOperation.Delete) : false,
                IsInsert: resultData != null ? self.getStatusSecurityOperation
                    (khacItem.KeyId, resultData, SecurityOperation.Add) : false,
                IsProcess: resultData != null ? self.getStatusSecurityOperation
                    (khacItem.KeyId, resultData, SecurityOperation.Process) : false,
                IsUpdate: resultData != null ? self.getStatusSecurityOperation
                    (khacItem.KeyId, resultData, SecurityOperation.Update) : false,
                IsView: resultData != null ? self.getStatusSecurityOperation
                    (khacItem.KeyId, resultData, SecurityOperation.View) : false,
                HighLightClass: classParent,
                IsCollapse: false,
                Level: 1,
                DocumentType: khacItem.KeyId,
                IdParent: quyenChaId,
                Name: khacItem.DisplayName,
                IsSearch: false,
                IsChange: false
            };
            self.phanQuyenNguoiDung.DocumentTypes.push(documentTypeForOthers);
        }
        const objIndex = self.phanQuyenNguoiDung.DocumentTypes.findIndex((obj => obj.Id === quyenChaId));

        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsDelete = this.getStatusSecurityOperationForParent
            (self.phanQuyenNguoiDung.DocumentTypes, SecurityOperation.Delete, quyenChaId);

        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsInsert = this.getStatusSecurityOperationForParent
            (self.phanQuyenNguoiDung.DocumentTypes, SecurityOperation.Add, quyenChaId);

        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsProcess = this.getStatusSecurityOperationForParent
            (self.phanQuyenNguoiDung.DocumentTypes, SecurityOperation.Process, quyenChaId);

        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsUpdate = this.getStatusSecurityOperationForParent
            (self.phanQuyenNguoiDung.DocumentTypes, SecurityOperation.Update, quyenChaId);

        self.phanQuyenNguoiDung.DocumentTypes[objIndex].IsView = this.getStatusSecurityOperationForParent
            (self.phanQuyenNguoiDung.DocumentTypes, SecurityOperation.View, quyenChaId);
    }

    GetOthers(listDocumentTypeEnum: any) {
        let isReceiveForOthers = true;
        const otherDocumentTypes = [];
        for (const documentTypeEnumItem of listDocumentTypeEnum) {
            for (const documentTypeCurrentItem of this.documentTypeCurrents) {
                if (documentTypeEnumItem.KeyId === documentTypeCurrentItem) {
                    isReceiveForOthers = false;
                    break;
                }
            }

            if (isReceiveForOthers) {
                otherDocumentTypes.push(documentTypeEnumItem);
            }
            isReceiveForOthers = true;
        }

        return otherDocumentTypes;
    }

    SetGrid() {
        this.gridDataSource = {
            data: this.phanQuyenNguoiDung.DocumentTypesSearchFilter,
            total: this.phanQuyenNguoiDung.DocumentTypesSearchFilter.length
        };

        if (this.gridPermission !== undefined) {
            this.gridPermission.gridDataSource = this.gridDataSource;
            this.gridPermission.setDataSource();
            if (this.gridDataSource.data.length !== 0 || this.phanQuyenNguoiDung.DocumentTypes.length !== 0) {
                this.closePopupLoadingData();
            }
        }
    }

    getSharedData() {
        if (this.isCreate) {
            this.phanQuyenNguoiDung.Id = 0;
            this.phanQuyenNguoiDung.IsDefault = false;
        } else {
            if (this.phanQuyenNguoiDung.Id === null) {
                this.phanQuyenNguoiDung.Id = this.route.snapshot.params.id;
            }
        }
        return this.phanQuyenNguoiDung;
    }

    getById(id: number, resultDocument: any) {
        const self = this;
        self.baseService.getById<PhanQuyenNguoiDung>(id).subscribe(resultData => {
            self.phanQuyenNguoiDung.Name = resultData.Name;
            self.phanQuyenNguoiDung.UserType = resultData.UserType;
            self.phanQuyenNguoiDung.UserTypeDisplay = resultData.UserTypeDisplay;
            self.phanQuyenNguoiDung.IsDefault = resultData.IsDefault;
            const countQuyen = self.getDataSource(resultData);
            self.otherDocumentTypes = self.GetOthers(resultDocument);
            self.SetOthers(countQuyen, resultData);
            self.SetGrid();
            self.WillCheckAll();
        });
    }

    ProcessCheckParent() {
        const self = this;
        self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === undefined).forEach(itemParent => {
            itemParent.IsView = false;
            itemParent.IsProcess = false;
            itemParent.IsInsert = false;
            itemParent.IsDelete = false;
            itemParent.IsUpdate = false;

            const countChildForThisParent = self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id).length;
            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsView).length ===
                countChildForThisParent) {
                itemParent.IsView = true;
            }

            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsProcess).length ===
                countChildForThisParent) {
                itemParent.IsProcess = true;
            }

            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsInsert).length ===
                countChildForThisParent) {
                itemParent.IsInsert = true;
            }

            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsDelete).length ===
                countChildForThisParent) {
                itemParent.IsDelete = true;
            }

            if (this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === itemParent.Id && x.IsUpdate).length ===
                countChildForThisParent) {
                itemParent.IsUpdate = true;
            }
        });
    }

    WillCheckAll() {
        const self = this;
        self.isCheckAll = false;
        const numberParents = self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === null).length;
        if (numberParents === self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === null &&
            x.IsView && x.IsProcess && x.IsInsert && x.IsDelete && x.IsUpdate).length) {
            self.isCheckAll = true;
        }
    }

    onKeySearchChanges(key: any) {
        const self = this;
        if (key.which === 13) {
            self.showPopupLoadingData();
            if (self.searchTimeout != null) {
                clearTimeout(self.searchTimeout);
            }

            // tslint:disable-next-line: only-arrow-functions
            self.searchTimeout = setTimeout(function () {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IsSearch).forEach(element => {
                    element.IsSearch = false;
                });
                if (self.searchString == null || self.searchString === '') {
                    self.ProcessCheckParent();
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes;
                    self.SetGrid();
                } else {
                    self.searchString = self.searchString.trim();
                    const itemNavSearch = self.search();
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.ChangeModelFromSearch(itemNavSearch);
                    const others = self.GetOthersFromAvailableDocumentType(self.phanQuyenNguoiDung.DocumentTypes);
                    self.FilterOtherFromSearch(others);
                    self.SetGrid();
                }

            }, 500);
        }
    }

    GetOthersFromAvailableDocumentType(availableDocumentTypes: DocumentTypeList[]) {
        const self = this;
        const result = availableDocumentTypes.filter(x => x.DocumentType === undefined &&
            x.HighLightClass === null && x.IdParent === null).reverse();
        let dataSource: DocumentTypeList[] = [];

        if (result != null && result.length > 0) {
            dataSource = self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === result[0].Id || x.IdParent === result[0].Id);
        }

        return dataSource;
    }

    FilterOtherFromSearch(others: DocumentTypeList[]) {
        const self = this;
        let pushParent = false;
        // self.searchString
        for (const level1 of others) {
            if (CommonService.removeVietnamese(level1.Name).toLowerCase()
                .indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                others.forEach(item => {
                    self.phanQuyenNguoiDung.DocumentTypesSearchFilter.push(item);
                });
                return;
            } else {
                if (self.IsDataItemHasChildren(level1, 2)) {
                    for (const itemlevel2 of others.filter(x => x.IdParent === level1.Id)) {
                        if (CommonService.removeVietnamese(itemlevel2.Name).toLowerCase()
                            .indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                            if (pushParent === false) {
                                self.phanQuyenNguoiDung.DocumentTypesSearchFilter.push(level1);
                                pushParent = true;
                            }
                            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.push(itemlevel2);
                        }
                    }
                }
                return;
            }
        }
    }

    searchChanges(dataEvent: any) {
        const self = this;

        if (dataEvent === '') {
            self.showPopupLoadingData();
            if (self.searchTimeout != null) {
                clearTimeout(self.searchTimeout);
            }

            // tslint:disable-next-line: only-arrow-functions
            self.searchTimeout = setTimeout(function () {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IsSearch).forEach(element => {
                    element.IsSearch = false;
                });
                self.ProcessCheckParent();
                self.phanQuyenNguoiDung.DocumentTypesSearchFilter = self.phanQuyenNguoiDung.DocumentTypes;
                self.SetGrid();
            }, 500);
        }
    }

    search() {
        const self = this;
        const itemResults = [];
        self.items.forEach(itemlevel1 => {
            const itemlevel1Copy = Object.assign({}, itemlevel1);
            if (CommonService.removeVietnamese(itemlevel1.label).toLowerCase()
                .indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                itemResults.push(itemlevel1Copy);
            } else {
                if (itemlevel1.children != null && itemlevel1.children.length > 0) {
                    itemlevel1Copy.children = [];
                    itemlevel1.children.forEach(itemlevel2 => {
                        if (CommonService.removeVietnamese(itemlevel2.label).toLowerCase()
                            .indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                            if (itemlevel1Copy.children.filter(obj => obj.label === itemlevel2.label
                                && obj.type === itemlevel2.type && obj.canViewType === itemlevel2.canViewType).length <= 0) {
                                itemlevel1Copy.children.push(itemlevel2);
                            }
                            if (itemResults.filter(obj => obj.label === itemlevel1Copy.label &&
                                obj.type === itemlevel1Copy.type && obj.canViewType === itemlevel1Copy.canViewType).length <= 0) {
                                itemResults.push(itemlevel1Copy);
                            }
                        } else {
                            if (itemlevel2.children != null && itemlevel2.children.length > 0) {
                                const itemlevel2Copy = Object.assign({}, itemlevel2);
                                itemlevel2Copy.children = [];
                                itemlevel2.children.forEach(itemlevel3 => {
                                    if (CommonService.removeVietnamese(itemlevel3.label).toLowerCase()
                                        .indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase()) >= 0) {
                                        if (itemlevel2Copy.children.filter(obj => obj.label === itemlevel3.label
                                            && obj.type === itemlevel3.type && obj.canViewType === itemlevel3.canViewType).length <= 0) {
                                            itemlevel2Copy.children.push(itemlevel3);
                                        }
                                        if (itemlevel1Copy.children.filter(obj => obj.label === itemlevel2Copy.label
                                            && obj.type === itemlevel2Copy.type &&
                                            obj.canViewType === itemlevel2Copy.canViewType).length <= 0) {
                                            itemlevel1Copy.children.push(itemlevel2Copy);
                                        }
                                        if (itemResults.filter(obj => obj.label === itemlevel1Copy.label &&
                                            obj.type === itemlevel1Copy.type &&
                                            obj.canViewType === itemlevel1Copy.canViewType).length <= 0) {
                                            itemResults.push(itemlevel1Copy);
                                        }
                                    } else {
                                        if (itemlevel3.children != null && itemlevel3.children.length > 0) {
                                            const itemlevel3Copy = Object.assign({}, itemlevel3);
                                            itemlevel3Copy.children = [];
                                            itemlevel3.children.forEach(itemlevel4 => {
                                                if (CommonService.removeVietnamese(itemlevel4.label)
                                                    .toLowerCase().indexOf(CommonService.removeVietnamese
                                                        (self.searchString).toLowerCase()) >= 0) {
                                                    if (itemlevel3Copy.children.filter(obj => obj.label === itemlevel4.label &&
                                                        obj.type === itemlevel4.type &&
                                                        obj.canViewType === itemlevel4.canViewType).length <= 0) {
                                                        itemlevel3Copy.children.push(itemlevel4);
                                                    }
                                                    if (itemlevel2Copy.children.filter(obj => obj.label === itemlevel3Copy.label &&
                                                        obj.type === itemlevel3Copy.type &&
                                                        obj.canViewType === itemlevel3Copy.canViewType).length <= 0) {
                                                        itemlevel2Copy.children.push(itemlevel3Copy);
                                                    }
                                                    if (itemlevel1Copy.children.filter(obj => obj.label === itemlevel2Copy.label &&
                                                        obj.type === itemlevel2Copy.type &&
                                                        obj.canViewType === itemlevel2Copy.canViewType).length <= 0) {
                                                        itemlevel1Copy.children.push(itemlevel2Copy);
                                                    }
                                                    if (itemResults.filter(obj => obj.label === itemlevel1Copy.label &&
                                                        obj.type === itemlevel1Copy.type &&
                                                        obj.canViewType === itemlevel1Copy.canViewType).length <= 0) {
                                                        itemResults.push(itemlevel1Copy);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
        return itemResults;
    }

    ChangeModelFromSearch(itemNavSearch: NavigationItem[]) {
        const self = this;
        const dataSource = [];
        for (const item0 of itemNavSearch.filter(x => x.type !== 'link')) {
            let documentType = new DocumentTypeList();
            documentType = {
                Id: self.phanQuyenNguoiDung.DocumentTypes.filter
                    (x => x.Name === item0.label && x.Level === 0)[0].Id,
                IsDelete: self.getStatusSecurityOperation
                    (item0.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Delete),
                IsInsert: self.getStatusSecurityOperation
                    (item0.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Add),
                IsProcess: self.getStatusSecurityOperation
                    (item0.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Process),
                IsUpdate: self.getStatusSecurityOperation
                    (item0.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Update),
                IsView: self.getStatusSecurityOperation
                    (item0.canViewType, self.phanQuyenNguoiDung, SecurityOperation.View),
                DocumentType: item0.canViewType,
                IdParent: self.phanQuyenNguoiDung.DocumentTypes.filter
                    (x => x.Name === item0.label && x.Level === 0)[0].IdParent,
                IsCollapse: false,
                Name: item0.label,
                HighLightClass: null,
                Level: 0,
                IsSearch: false,
                IsChange: false
            };

            dataSource.push(documentType);
            const classChildName = self.GetClassChildName(item0.label, '');

            if (item0.children != null && item0.children.length > 0) {
                self.AddChildrenFromSearch(item0, dataSource, 0, classChildName, documentType);
            }

        }
        return dataSource;
    }

    AddChildrenFromSearch(item: any, dataSource: any, currentLevel: number, classChildName: string,
        documentTypeListParent: DocumentTypeList) {
        const self = this;
        if (item.children != null && item.children.length > 0) {
            for (const item1 of item.children) {
                let documentType = new DocumentTypeList();
                documentType = {
                    Id: self.phanQuyenNguoiDung.DocumentTypes.
                        filter(x => x.Name === item1.label && x.HighLightClass === classChildName)[0].Id,
                    IsDelete: self.getStatusSecurityOperation
                        (item1.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Delete),
                    IsInsert: self.getStatusSecurityOperation
                        (item1.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Add),
                    IsProcess: self.getStatusSecurityOperation
                        (item1.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Process),
                    IsUpdate: self.getStatusSecurityOperation
                        (item1.canViewType, self.phanQuyenNguoiDung, SecurityOperation.Update),
                    IsView: self.getStatusSecurityOperation
                        (item1.canViewType, self.phanQuyenNguoiDung, SecurityOperation.View),
                    DocumentType: item1.canViewType,
                    IdParent: self.phanQuyenNguoiDung.DocumentTypes.
                        filter(x => x.Name === item1.label && x.HighLightClass === classChildName)[0].IdParent,
                    IsCollapse: false,
                    Name: item1.label,
                    HighLightClass: classChildName,
                    Level: currentLevel + 1,
                    IsSearch: false,
                    IsChange: false
                };

                dataSource.push(documentType);

                if (item1.children != null && item1.children.length > 0) {
                    const classSubChildName = self.GetClassChildName(item1.label, classChildName);
                    self.AddChildrenFromSearch(item1, dataSource, currentLevel + 1,
                        classSubChildName, documentType);
                }
            }
            const objIndex = dataSource.findIndex((obj => obj.Id === documentTypeListParent.Id));

            dataSource[objIndex].IsDelete = self.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Delete, documentTypeListParent.Id);

            dataSource[objIndex].IsInsert = self.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Add, documentTypeListParent.Id);

            dataSource[objIndex].IsProcess = self.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Process, documentTypeListParent.Id);

            dataSource[objIndex].IsUpdate = self.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.Update, documentTypeListParent.Id);

            dataSource[objIndex].IsView = self.getStatusSecurityOperationForParent
                (dataSource, SecurityOperation.View, documentTypeListParent.Id);
        }
    }

    CheckAll(dataCheck: any) {
        if (dataCheck) {
            this.phanQuyenNguoiDung.DocumentTypes.forEach(element => {
                element.IsDelete = true;
                element.IsInsert = true;
                element.IsProcess = true;
                element.IsUpdate = true;
                element.IsView = true;
                element.IsChange = true;
            });
            this.phanQuyenNguoiDung.DocumentTypesSearchFilter.forEach(element => {
                element.IsDelete = true;
                element.IsInsert = true;
                element.IsProcess = true;
                element.IsUpdate = true;
                element.IsView = true;
                element.IsChange = true;
            });
        } else {
            this.phanQuyenNguoiDung.DocumentTypes.forEach(element => {
                element.IsDelete = false;
                element.IsInsert = false;
                element.IsProcess = false;
                element.IsUpdate = false;
                element.IsView = false;
                element.IsChange = true;
            });
            this.phanQuyenNguoiDung.DocumentTypesSearchFilter.forEach(element => {
                element.IsDelete = false;
                element.IsInsert = false;
                element.IsProcess = false;
                element.IsUpdate = false;
                element.IsView = false;
                element.IsChange = true;
            });
        }
    }

    OnChangeParentOnView(dataCheck: any, id: any, item: DocumentTypeList) {
        const self = this;
        item.IsView = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsView).length === 0) {
                willCheckParent = true;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsView = willCheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.View);
                    }
                }
            }

            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsView = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsView = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnView(true, element.Id, element);
                }
            });
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsView).length !== numChild) {
                willUncheckParent = false;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsView = willUncheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsView = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsView = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnView(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }

    OnCheckGrandParent(dataCheck: any, item: DocumentTypeList, securityOperation: SecurityOperation) {
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;

        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsView).length === 0) {
                willCheckParent = true;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    switch (securityOperation) {
                        case SecurityOperation.View: {
                            documentTypeItem.IsView = willCheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.View);
                            }
                            break;
                        }
                        case SecurityOperation.Update: {
                            documentTypeItem.IsUpdate = willCheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.Update);
                            }
                            break;
                        }
                        case SecurityOperation.Delete: {
                            documentTypeItem.IsDelete = willCheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.Delete);
                            }
                            break;
                        }
                        case SecurityOperation.Add: {
                            documentTypeItem.IsInsert = willCheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.Add);
                            }
                            break;
                        }
                        default: {
                            documentTypeItem.IsProcess = willCheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.Process);
                            }
                            break;
                        }
                    }
                }
            }
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent ===
                item.IdParent && x.IsView).length !== numChild) {
                willUncheckParent = false;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    switch (securityOperation) {
                        case SecurityOperation.View: {
                            documentTypeItem.IsView = willUncheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.View);
                            }
                            break;
                        }
                        case SecurityOperation.Delete: {
                            documentTypeItem.IsDelete = willUncheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.Delete);
                            }
                            break;
                        }
                        case SecurityOperation.Update: {
                            documentTypeItem.IsUpdate = willUncheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.Update);
                            }
                            break;
                        }
                        case SecurityOperation.Add: {
                            documentTypeItem.IsInsert = willUncheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.Add);
                            }
                            break;
                        }
                        default: {
                            documentTypeItem.IsProcess = willUncheckParent;

                            if (documentTypeItem.IdParent !== null) {
                                self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.Process);
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    OnChangeParentOnInsert(dataCheck: any, id: any, item: DocumentTypeList) {
        const self = this;
        item.IsInsert = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;

        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsInsert).length === 0) {
                willCheckParent = true;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsInsert = willCheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.Add);
                    }
                }
            }

            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsInsert = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsInsert = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnInsert(true, element.Id, element);
                }
            });
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsInsert).length !== numChild) {
                willUncheckParent = false;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsInsert = willUncheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.Add);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsInsert = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsInsert = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnInsert(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }

    OnChangeParentOnUpdate(dataCheck: any, id: any, item: DocumentTypeList) {
        const self = this;
        item.IsUpdate = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsUpdate).length === 0) {
                willCheckParent = true;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsUpdate = willCheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.Update);
                    }
                }
            }

            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsUpdate = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsUpdate = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnUpdate(true, element.Id, element);
                }
            });
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsUpdate).length !== numChild) {
                willUncheckParent = false;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsUpdate = willUncheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.Update);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsUpdate = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsUpdate = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnUpdate(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }

    OnChangeParentOnDelete(dataCheck: any, id: any, item: DocumentTypeList) {
        const self = this;
        item.IsDelete = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsDelete).length === 0) {
                willCheckParent = true;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsDelete = willCheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.View);
                    }
                }
            }

            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsDelete = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsDelete = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnDelete(true, element.Id, element);
                }
            });
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsDelete).length !== numChild) {
                willUncheckParent = false;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsDelete = willUncheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsDelete = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsDelete = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnDelete(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }

    OnChangeParentOnProcess(dataCheck: any, id: any, item: DocumentTypeList) {
        const self = this;
        item.IsProcess = dataCheck;
        item.IsChange = true;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent).length;
        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.IdParent && !x.IsProcess).length === 0) {
                willCheckParent = true;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsProcess = willCheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willCheckParent, documentTypeItem, SecurityOperation.View);
                    }
                }
            }

            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsProcess = true;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsProcess = true;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnProcess(true, element.Id, element);
                }
            });
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.
                filter(x => x.IdParent === item.IdParent && x.IsProcess).length !== numChild) {
                willUncheckParent = false;

                for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === item.IdParent)) {
                    documentTypeItem.IsProcess = willUncheckParent;

                    if (documentTypeItem.IdParent !== null) {
                        self.OnCheckGrandParent(willUncheckParent, documentTypeItem, SecurityOperation.View);
                    }
                }
            }
            self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === id).forEach(element => {
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsProcess = false;
                self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === element.Id)[0].IsChange = true;

                element.IsProcess = false;
                element.IsChange = true;
                if (self.IsDataItemHasChildren(element, 1)) {
                    self.OnChangeParentOnProcess(false, element.Id, element);
                }
            });
        }
        self.WillCheckAll();
    }

    OnChangeChildrenOnView(dataCheck: any, idParent: any, item: DocumentTypeList) {
        item.IsView = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsView = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsView).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willCheckParent;

                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsView).length === 0) {
                            self.OnChangeChildrenOnView(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsView).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsView).length === 0) {
                            self.OnChangeChildrenOnView(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsView = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x =>
                    x.IdParent === idParent && x.IsView).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsView).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnView(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsView).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsView = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsView).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnView(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }

    OnChangeChildrenOnInsert(dataCheck: any, idParent: any, item: DocumentTypeList) {
        item.IsInsert = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsInsert = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsInsert).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willCheckParent;

                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsInsert).length === 0) {
                            self.OnChangeChildrenOnInsert(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsInsert).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willCheckParent;

                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsInsert).length === 0) {
                            self.OnChangeChildrenOnInsert(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        } else {
            let willUncheckParent = true;

            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsInsert = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x =>
                    x.IdParent === idParent && x.IsInsert).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsInsert).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnInsert(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {

                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsInsert).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsInsert = willUncheckParent;

                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                                x.IsInsert).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnInsert(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }

    OnChangeChildrenOnUpdate(dataCheck: any, idParent: any, item: DocumentTypeList) {
        item.IsUpdate = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;

            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsUpdate = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsUpdate).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willCheckParent;

                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsUpdate).length === 0) {
                            self.OnChangeChildrenOnUpdate(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsUpdate).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willCheckParent;

                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsUpdate).length === 0) {
                            self.OnChangeChildrenOnUpdate(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        } else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsUpdate = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x =>
                    x.IdParent === idParent && x.IsUpdate).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsUpdate).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnUpdate(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsUpdate).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsUpdate = willUncheckParent;

                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                                x.IsUpdate).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnUpdate(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }

    OnChangeChildrenOnDelete(dataCheck: any, idParent: any, item: DocumentTypeList) {
        item.IsDelete = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsDelete = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsDelete).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willCheckParent;

                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsDelete).length === 0) {
                            self.OnChangeChildrenOnDelete(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsDelete).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsDelete).length === 0) {
                            self.OnChangeChildrenOnDelete(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        } else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsDelete = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x =>
                    x.IdParent === idParent && x.IsDelete).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsDelete).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnDelete(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {

                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsDelete).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsDelete = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                                x.IsDelete).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnDelete(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }

    OnChangeChildrenOnProcess(dataCheck: any, idParent: any, item: DocumentTypeList) {
        item.IsProcess = dataCheck;
        item.IsChange = true;
        const self = this;
        const numChild = self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent).length;
        if (dataCheck) {
            let willCheckParent = false;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsProcess = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === idParent && !x.IsProcess).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willCheckParent;

                        if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsProcess).length === 0) {
                            self.OnChangeChildrenOnProcess(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {
                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && !x.IsProcess).length === 0) {
                    willCheckParent = true;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willCheckParent;
                        if (self.phanQuyenNguoiDung.DocumentTypes
                            .filter(x => x.IdParent === documentTypeItem.IdParent && !x.IsProcess).length === 0) {
                            self.OnChangeChildrenOnProcess(willCheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        } else {
            let willUncheckParent = true;
            if (self.phanQuyenNguoiDung.DocumentTypes.length !== self.phanQuyenNguoiDung.DocumentTypesSearchFilter.length) {
                // in search mode
                if (item.DocumentType !== undefined) {
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsProcess = dataCheck;
                    self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.DocumentType === item.DocumentType)[0].IsChange = true;
                }

                if (self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x =>
                    x.IdParent === idParent && x.IsProcess).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willUncheckParent;
                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypesSearchFilter.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent && x.IsProcess).length
                            !== numChildForThisParent && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnProcess(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            } else {

                if (self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === idParent && x.IsProcess).length !== numChild) {
                    willUncheckParent = false;

                    for (const documentTypeItem of self.phanQuyenNguoiDung.DocumentTypes.filter(x => x.Id === idParent)) {
                        documentTypeItem.IsProcess = willUncheckParent;

                        const numChildForThisParent = self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent).length;

                        if (self.phanQuyenNguoiDung
                            .DocumentTypes.filter(x => x.IdParent === documentTypeItem.IdParent &&
                                x.IsProcess).length !== numChildForThisParent
                            && documentTypeItem.IdParent !== null) {
                            self.OnChangeChildrenOnProcess(willUncheckParent, documentTypeItem.IdParent, documentTypeItem);
                        }
                    }
                }
            }
        }
        self.WillCheckAll();
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/phan-quyen-nguoi-dung']);
    }

    collapseData(itemData: any) {
        const self = this;
        const allLabelParents = [];
        let idParent = itemData.IdParent;
        if (itemData.Level !== 0) {
            for (let i = 0; i < itemData.Level; i++) {
                for (const parentItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                    allLabelParents.push(parentItem.Name);
                    idParent = parentItem.IdParent;
                    break;
                }
            }
        }

        let childName = '';
        if (allLabelParents.length !== 0) {
            let parentItem = '';
            allLabelParents.reverse().forEach(parentLabel => {
                if (parentItem === '') {
                    childName = this.GetClassChildName(parentLabel, '');
                } else {
                    childName = this.GetClassChildName(parentLabel, childName);
                }
                parentItem = parentLabel;
            });
        }

        const childClassName = this.GetClassChildName(itemData.Name, childName);
        jQuery('.' + childClassName).hide();

        self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.HighLightClass === childClassName).forEach(parentItem => {
            for (const subParentItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === parentItem.Id)) {
                jQuery('.' + subParentItem.HighLightClass).hide();
                if (self.IsDataItemHasChildren(subParentItem, 1)) {
                    for (const subSubParentItem of self.phanQuyenNguoiDung
                        .DocumentTypesSearchFilter.filter(x => x.IdParent === subParentItem.Id)) {
                        jQuery('.' + subSubParentItem.HighLightClass).hide();
                        break;
                    }
                }
            }
        });
        itemData.IsCollapse = !itemData.IsCollapse;
    }

    expandData(itemData: any) {
        const self = this;
        const allLabelParents = [];
        let idParent = itemData.IdParent;
        if (itemData.Level !== 0) {
            for (let i = 0; i < itemData.Level; i++) {
                for (const parentItem of self.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.Id === idParent)) {
                    allLabelParents.push(parentItem.Name);
                    idParent = parentItem.IdParent;
                    break;
                }
            }
        }

        let childName = '';
        if (allLabelParents.length !== 0) {
            let parentItem = '';
            allLabelParents.reverse().forEach(parentLabel => {
                if (parentItem === '') {
                    childName = this.GetClassChildName(parentLabel, '');
                } else {
                    childName = this.GetClassChildName(parentLabel, childName);
                }
                parentItem = parentLabel;
            });
        }

        const childClassName = this.GetClassChildName(itemData.Name, childName);
        jQuery('.' + childClassName).show();
        self.CollapseChildrenShow(childClassName);
        itemData.IsCollapse = !itemData.IsCollapse;
    }

    IsDataItemHasChildren(item: any, kind: number) {
        // 1: filter
        // others: full
        switch (kind) {
            case 1: {
                return this.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.IdParent === item.Id).length !== 0;
            }
            default: {
                return this.phanQuyenNguoiDung.DocumentTypes.filter(x => x.IdParent === item.Id).length !== 0;
            }
        }
    }

    CollapseChildrenShow(childClassName: string) {
        this.phanQuyenNguoiDung.DocumentTypesSearchFilter.filter(x => x.HighLightClass === childClassName).forEach(childrenDocument => {
            childrenDocument.IsCollapse = true;
        });
    }
}
