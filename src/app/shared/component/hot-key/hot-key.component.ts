import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-hot-key',
  templateUrl: './hot-key.component.html',
  styleUrls: ['./hot-key.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HotKeyComponent implements OnInit {
  
  @Input() keys: any[] = [];

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }
}
