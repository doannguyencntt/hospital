import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuaTangSharedComponent } from '../qua-tang-shared/qua-tang-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
    selector: 'app-qua-tang-update',
    templateUrl: './qua-tang-update.component.html',
    styleUrls: ['./qua-tang-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class QuaTangUpdateComponent implements OnInit {
    @ViewChild(QuaTangSharedComponent, {static: true}) shared;
    
    constructor(private router: Router) { }

    ngOnInit() {
    }

    onUpdated() {
        this.router.navigate(['/marketing/qua-tang']);
    }
}
