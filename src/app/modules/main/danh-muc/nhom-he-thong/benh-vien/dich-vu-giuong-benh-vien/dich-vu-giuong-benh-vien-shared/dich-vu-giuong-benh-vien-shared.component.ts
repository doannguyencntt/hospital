import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DichVuGiuongBenhVien, DichVuGiuongBenhVienGiaBaoHiems, DichVuGiuongBenhVienGiaBenhViens } from '../dich-vu-giuong-benh-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';
import { DichVuGiuong } from '../../../bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.model';
import { ApiService } from 'src/app/core/services/api.service';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dich-vu-giuong-benh-vien-shared',
    templateUrl: './dich-vu-giuong-benh-vien-shared.component.html',
    styleUrls: ['./dich-vu-giuong-benh-vien-shared.component.scss']
})
export class DichVuGiuongBenhVienSharedComponent implements OnInit {
    dichvuGiuongId = 0;
    dichVuGiuongBenhVien: DichVuGiuongBenhVien;
    giaBenhVien: DichVuGiuongBenhVienGiaBenhViens;
    validationErrors: any;
    isCreate = true;
    isDisplay = true;
    id: number;

    @ViewChild('noiThucHien', { static: true }) noiThucHien: MultiselectComponent;
    constructor(private route: ActivatedRoute, private baseService: BaseService,
        private apiService: ApiService, private cdr: ChangeDetectorRef) { }
    icAdd = icAdd;
    icRemove = icRemove;

    queryNoiThucHien: LookupQueryInfo = new LookupQueryInfo();
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.dichVuGiuongBenhVien = new DichVuGiuongBenhVien();
        this.dichVuGiuongBenhVien.DichVuGiuong = new DichVuGiuong();
        this.giaBenhVien = new DichVuGiuongBenhVienGiaBenhViens();
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.push(this.giaBenhVien);
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
            this.isCreate = false;
        }
    }

    // onChange(): void {
    //   this.cdr.detectChanges();
    // }

    getSharedData() {
        return this.dichVuGiuongBenhVien;
    }
    XoaBaoHiem(position: any) {
        // if(this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.length>1){
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.splice(position, 1);
        // }
    }
    ThemBaoHiem() {

        const viTriNew = new DichVuGiuongBenhVienGiaBaoHiems();
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.push(viTriNew);
    }
    XoaBenhVien(position: any) {
        if (this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.length > 1) {
            this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.splice(position, 1);
        }


    }



    ThemBenhVien() {
        const viTriNew = new DichVuGiuongBenhVienGiaBenhViens();
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.push(viTriNew);
    }
    getById(id: number) {
        this.baseService.getById<DichVuGiuongBenhVien>(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.dichVuGiuongBenhVien = resultData;
                this.dichvuGiuongId = resultData.DichVuGiuongId;

                if (this.dichVuGiuongBenhVien.DichVuGiuong == null) {
                    this.dichVuGiuongBenhVien.DichVuGiuong = new DichVuGiuong();
                }

                this.getObjKhoaId(this.dichVuGiuongBenhVien.KhoaPhongIds);
                if (this.queryNoiThucHien.ParameterDependencies != '') {
                    this.noiThucHien.getDataForLookup();
                }
            }
        });
    }

    XuLyAnhXa(event) {
        if (!event) {
            this.dichVuGiuongBenhVien.DichVuGiuongId = null;
            this.dichVuGiuongBenhVien.DichVuGiuong = new DichVuGiuong();
            this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems = [];
        } else {
            this.dichVuGiuongBenhVien.HieuLuc = true;
            // if(this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems == undefined ||
            // this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems == null
            //   || this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.length == 0)
            //   {
            //     this.ThemBaoHiem();
            //   }
        }
    }

    ChonDichVu(event) {
        if (event != undefined && event != null) {
            if (this.id == undefined) {
                this.dichVuGiuongBenhVien.Ten = event.Ten;
                this.dichVuGiuongBenhVien.Ma = event.Ma;
            }

            this.apiService.get<DichVuGiuong>('DichVuGiuongBenhVien/GetThongTinDichVuGiuong?dichVuGiuongId=' + event.KeyId).subscribe(
                resultData => {
                    if (resultData !== null && resultData !== undefined) {
                        this.dichVuGiuongBenhVien.DichVuGiuong = resultData;
                    }
                },
                () => {
                });

        } else {
            this.dichVuGiuongBenhVien.DichVuGiuong = new DichVuGiuong();
        }
    }


    changeKhoa(event) {
        if (event == undefined || event == null || event.length == 0) {
            this.dichVuGiuongBenhVien.NoiThucHienIds = [];
        } else {
            const arrNoiThucHienHienTai = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
            const arrNoiThucHienNew = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
            arrNoiThucHienHienTai.forEach((element, index) => {
                const elementObj = JSON.parse(element);
                const indexKhoa = event.findIndex(x => x === elementObj.KhoaId);
                if (indexKhoa === -1) {
                    const indexNoiThucHien = arrNoiThucHienNew.findIndex(x => x === element);
                    arrNoiThucHienNew.splice(indexNoiThucHien, 1);
                }
            });
            this.dichVuGiuongBenhVien.NoiThucHienIds = arrNoiThucHienNew.slice();
        }
        this.getObjKhoaId(event);
    }

    getObjKhoaId(arr: any) {
        if (arr != undefined && arr != null && arr.length != 0) {
            let objParam = '[';
            arr.forEach(element => {
                objParam += '{\'KhoaId\':' + element + '},'
            });

            objParam += ']';
            this.queryNoiThucHien.ParameterDependencies = objParam;
        } else {
            this.queryNoiThucHien.ParameterDependencies = '';
        }
    }

    isItemSelected(dataItem: any): boolean {
        //this.cdr.detectChanges();
        if (this.dichVuGiuongBenhVien.NoiThucHienIds != undefined && this.dichVuGiuongBenhVien.NoiThucHienIds.length > 0) {

            const currentItemValue = JSON.parse(dataItem.KeyId);
            // if parent
            if (dataItem.KhoaId === null || dataItem.KhoaId === '') {
                const index = this.dichVuGiuongBenhVien.NoiThucHienIds.findIndex(x => x == dataItem.KeyId);
                if (index !== -1) // đang chọn khoa
                {
                    if (index == this.dichVuGiuongBenhVien.NoiThucHienIds.length - 1) { // nếu vừa chọn khoa
                        // this.dichVuGiuongBenhVien.NoiThucHienIds.forEach((element, index) => {
                        //   let elementObj = JSON.parse(element);
                        //   if (elementObj.PhongId != null && elementObj.PhongId != "" && elementObj.KhoaId === currentItemValue.KhoaId) {
                        //   console.log('============================> parent exists element', elementObj);
                        //     this.dichVuGiuongBenhVien.NoiThucHienIds.splice(index, 1);
                        //   }
                        // });

                        if (this.dichVuGiuongBenhVien.NoiThucHienIds.length > 1) {
                            var arrNoiThucHienTemp = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();

                            arrNoiThucHienTemp.forEach(element => {
                                let elementObj = JSON.parse(element);
                                if (elementObj.KhoaId === currentItemValue.KhoaId && elementObj.PhongId != null && elementObj.PhongId != "") {
                                    const indexNoiThucHienXoa = this.dichVuGiuongBenhVien.NoiThucHienIds.findIndex(x => x == element);
                                    if (indexNoiThucHienXoa != -1) {
                                        this.dichVuGiuongBenhVien.NoiThucHienIds.splice(indexNoiThucHienXoa, 1);
                                        this.cdr.detectChanges();
                                    }
                                }
                            });
                        }
                        return true;
                    } else // nếu vừa chọn phòng
                    {
                        let itemCuoiCung = this.dichVuGiuongBenhVien.NoiThucHienIds[this.dichVuGiuongBenhVien.NoiThucHienIds.length - 1];
                        let itemCuoiCungObj = JSON.parse(itemCuoiCung);
                        if (itemCuoiCungObj.PhongId != null && itemCuoiCungObj.PhongId != '' && itemCuoiCungObj.KhoaId == currentItemValue.KhoaId) {
                            let indexParentItemCuoiCung = -1;
                            this.dichVuGiuongBenhVien.NoiThucHienIds.forEach((element, index) => {
                                let itemObj = JSON.parse(element);
                                if ((itemObj.PhongId == null || itemObj.PhongId == '') && itemObj.KhoaId == itemCuoiCungObj.KhoaId && indexParentItemCuoiCung == -1) {
                                    indexParentItemCuoiCung = index;
                                }
                            });
                            if (indexParentItemCuoiCung != -1) // nếu đã chọn khoa trước đó
                            {
                                // gán lại arr
                                var arrItems = dataItem.Items.slice();
                                var arrNoiThucHienDangChon = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
                                arrItems.forEach(element => {
                                    let indexElement = arrNoiThucHienDangChon.findIndex(x => x == element.KeyId);
                                    if (element.KeyId == itemCuoiCung) {
                                        arrNoiThucHienDangChon.splice(indexElement, 1);
                                    }
                                    if (indexElement == -1) {
                                        arrNoiThucHienDangChon.push(element.KeyId);
                                    }
                                });
                                arrNoiThucHienDangChon.splice(indexParentItemCuoiCung, 1);

                                this.dichVuGiuongBenhVien.NoiThucHienIds = arrNoiThucHienDangChon.slice();
                                this.cdr.detectChanges();
                                return false;
                            }
                            else // nếu chưa chọn khoa trước đó
                            {
                                return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                            }

                        } else {
                            return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                        }
                    }
                } else {
                    return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                }
            } else { // if child

                let indexParent = this.dichVuGiuongBenhVien.NoiThucHienIds.findIndex(item => item == dataItem.KhoaKeyId)
                if (indexParent != -1) {
                    return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => this.checkedValue(item, dataItem.KeyId));
                } else {
                    // kiểm tra số lượng phòng thuộc khoa đang chọn, nếu bằng tổng số
                    // phòng thì thêm khoa vào model, xóa tất cả phòng thuộc khoa trong model
                    let count = 0;

                    const arrNoiThucHien = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
                    arrNoiThucHien.forEach(element => {
                        const elementObj = JSON.parse(element);
                        if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === dataItem.KhoaId) {
                            count++;
                        }
                    });

                    // nếu số lượng phòng select = tổng phòng trong khoa -> xóa tất cả phòng, thêm khoa vào model
                    if (count == dataItem.CountItems) {
                        let arr = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
                        let isPush: boolean = false;
                        arr.forEach((element, indexPhong) => {
                            const elementObj = JSON.parse(element);
                            if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === currentItemValue.KhoaId) {
                                arr.splice(indexPhong, 1);
                                if (!isPush) {
                                    isPush = true;
                                    arr.push(dataItem.KhoaKeyId);
                                }
                            }
                        });
                        this.dichVuGiuongBenhVien.NoiThucHienIds = arr.slice();
                        this.cdr.detectChanges();

                        // this.dichVuGiuongBenhVien.NoiThucHienIds.push(dataItem.KhoaKeyId);
                        return true;
                    }
                    else {
                        return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                    }
                }
            }
        }
    }

    checkedValue(itemInList, currentItem) {
        let itemInListValue = JSON.parse(itemInList);
        let currentItemValue = JSON.parse(currentItem);
        return itemInListValue.KhoaId === currentItemValue.KhoaId;
    }
}
