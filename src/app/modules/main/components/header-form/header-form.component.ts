import { Component, OnInit, Input } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent implements OnInit {

  icMoreVert = icMoreVert;
  @Input() current:string=null;
  @Input() crumbs:string=null;
  @Input() isicMoreVert:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
