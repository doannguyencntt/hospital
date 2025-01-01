import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VatTuYTeSharedComponent } from '../vat-tu-y-te-shared/vat-tu-y-te-shared.component';

@Component({
  selector: 'app-vat-tu-y-te-update',
  templateUrl: './vat-tu-y-te-update.component.html',
  styleUrls: ['./vat-tu-y-te-update.component.scss']
})
export class VatTuYTeUpdateComponent implements OnInit {
  @ViewChild(VatTuYTeSharedComponent, { static: true }) shared;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/vat-tu-y-te']);
  }

}
