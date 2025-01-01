import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichPhanCongNgoaiTruPdfComponent } from './lich-phan-cong-ngoai-tru-pdf.component';

describe('LichPhanCongNgoaiTruPdfComponent', () => {
    let component: LichPhanCongNgoaiTruPdfComponent;
    let fixture: ComponentFixture<LichPhanCongNgoaiTruPdfComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LichPhanCongNgoaiTruPdfComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LichPhanCongNgoaiTruPdfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
