import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichPhanCongNgoaiTruTheoTuanComponent } from './lich-phan-cong-ngoai-tru-theo-tuan.component';

describe('LichPhanCongNgoaiTruTheoTuanComponent', () => {
    let component: LichPhanCongNgoaiTruTheoTuanComponent;
    let fixture: ComponentFixture<LichPhanCongNgoaiTruTheoTuanComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LichPhanCongNgoaiTruTheoTuanComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LichPhanCongNgoaiTruTheoTuanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
