import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuaTangSharedComponent } from '../qua-tang-shared/qua-tang-shared.component';

@Component({
    selector: 'app-qua-tang-create',
    templateUrl: './qua-tang-create.component.html',
    styleUrls: ['./qua-tang-create.component.scss']
})
export class QuaTangCreateComponent implements OnInit {
    @ViewChild(QuaTangSharedComponent, { static: true }) shared;
    
    constructor(private router : Router) { }

    ngOnInit() {
    }

    onCreated() {
        this.router.navigate(['/marketing/qua-tang']);
    }
}
