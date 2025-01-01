import {Component, OnInit, ChangeDetectorRef, Inject} from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Router} from "@angular/router";
import { KetQuaMau,KetQuaMauRmove } from '../kham-doan-ket-luan-cls-ksk.model';

@Component({
  selector: 'app-ket-qua-mau-popup',
  templateUrl: './ket-qua-mau-popup.component.html',
  styleUrls: ['./ket-qua-mau-popup.component.scss']
})
export class KetQuaMauPopupComponent implements OnInit {
  icClose = icClose;
  ketQuaMau = {} as  KetQuaMau;
  public isCheck :boolean = true;
  stringForMatHTML : string[] = ['<span>','</span>','<strong>','</strong>','<em>','</em>','<u>','</u>','<p>','</p>','<del>','</del>','<sub>','</sub>','<sup>','</sup>',
                                '<br>','<p style="text-align: left;">','<p style="text-align: right;">','<p style="text-align: center;">','<blockquote>','</blockquote>',
                                '<h1>','</h1>', '<h2>','</h2>', '<h3>','</h3>', '<h4>','</h4>', '<h5>','</h5>', '<h6>','</h6>','<span style="font-size: 8px;">','<span style="font-size: 10px;">',
                              '<span style="font-size: 14px;">','<span style="font-size: 18px;">','<span style="font-size: 24px;">','<span style="font-size: 36px;">',
                            '<span style="color: undefined">','<ul>','</ul>','<li>','</li>','<ol>','</ol>','<p style="margin-left: 30px;">','<table class="k-table">','</table>',
                          '<tbody>','</tbody>','<tr>','</tr>','<td>','</td>' ,'&nbsp;'];
 dataKhiRemove : KetQuaMauRmove[]=[];                         
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private router: Router, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) {}

  ngOnInit() {
    this.dataKhiRemove = new Array<KetQuaMauRmove>();
    this.data.Model.forEach(element => {
      let obj = new KetQuaMauRmove();
      if(element.KetQuaCLS != null)
      {
        obj.KetQuaCLS = this.removeHtml(element.KetQuaCLS);
        obj.IsCheck = element.IsCheck;
        this.dataKhiRemove.push(obj);
      }
    });
  }
  removeHtml(html:string)
{
  let stringRemove = html;
  this.stringForMatHTML.forEach(element => {
    stringRemove = this.replaceAll(stringRemove, element,'');
  });
   return stringRemove
}
replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}
  Ok(){
    this.dialogRef.close(this.dataKhiRemove);
  }
  close() {
    this.dialogRef.close();
	}
}
