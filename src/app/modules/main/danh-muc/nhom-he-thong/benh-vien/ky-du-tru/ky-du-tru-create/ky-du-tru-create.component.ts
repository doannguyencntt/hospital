import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KyDuTruSharedComponent } from '../ky-du-tru-shared/ky-du-tru-shared.component';

@Component({
    selector: 'app-ky-du-tru-create',
    templateUrl: './ky-du-tru-create.component.html',
    styleUrls: ['./ky-du-tru-create.component.scss']
})
export class KyDuTruCreateComponent implements OnInit {
    @ViewChild(KyDuTruSharedComponent, { static: true }) shared: KyDuTruSharedComponent;

    constructor(private router : Router) { }

    ngOnInit() {
    }

    // onCreated() {
    //     this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ky-du-tru']);
    // }

    huy() {
        this.router.navigateByUrl("/danh-muc/nhom-he-thong/benh-vien/ky-du-tru?holdQuery=true");
    }

    them() {
        this.shared.them();
    }
}
