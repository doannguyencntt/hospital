import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LichSuXacNhanBhytListComponent } from './lich-su-xac-nhan-bhyt-list/lich-su-xac-nhan-bhyt-list.component';
import { LichSuXacNhanBhytDetailComponent } from './lich-su-xac-nhan-bhyt-detail/lich-su-xac-nhan-bhyt-detail.component';


const routes: Routes = [
    {
        path: '',
        component: LichSuXacNhanBhytListComponent,
        data: {
            title: "Danh sách lịch sử xác nhận bhyt"
        },
    },
    {
        path: 'thong-tin-cho-xac-nhan/:id',
        component: LichSuXacNhanBhytDetailComponent,
        data: {
            title: "Thông tin chi tiết lịch sử xác nhận bhyt"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LichSuXacNhanBhytRoutingModule { }
