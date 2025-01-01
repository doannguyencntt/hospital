import { Component, Input, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { trackByRoute } from '../../utils/track-by';
import { NavigationService } from '../../services/navigation.service';
import icRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import icRadioButtonUnchecked from '@iconify/icons-ic/twotone-radio-button-unchecked';
import { LayoutService } from '../../services/layout.service';
import icSearch from '@iconify/icons-ic/twotone-search';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;

@Component({
  selector: 'vex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() collapsed: boolean;
  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;

  items = this.navigationService.items;
  itemSearchs:NavigationItem[]=[];
  trackByRoute = trackByRoute;
  icRadioButtonChecked = icRadioButtonChecked;
  icRadioButtonUnchecked = icRadioButtonUnchecked;
  icSearch=icSearch;
  searchString:string=null;
  @ViewChild('searchElement',{static:true}) searchElement: ElementRef;
  constructor(private navigationService: NavigationService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.itemSearchs=this.items;
  }

  onMouseEnter() {
    this.layoutService.collapseOpenSidenav();
  }

  onMouseLeave() {
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
    if(jQuery(".form-footer-fixed").length>0)
    {
      if(!this.collapsed)
      {
        jQuery(".form-footer-fixed").css({"width":"calc(100% - 132px)"});
      }
      else{
        jQuery(".form-footer-fixed").css({"width":"calc(100% - var(--sidenav-width) - 60px)"});
      }
    }
  }
  search(){
    var self=this;
    var itemResults=[];
    self.items.forEach(itemlevel1=>{
      let itemlevel1Copy = Object.assign({}, itemlevel1);
      if(CommonService.removeVietnamese(itemlevel1.label).toLowerCase().indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase())>=0)
      {
        itemResults.push(itemlevel1Copy);
      }
      else{
        if(itemlevel1.children!=null && itemlevel1.children.length>0)
        {
          itemlevel1Copy.children=[];
          itemlevel1.children.forEach(itemlevel2=>{
            if(CommonService.removeVietnamese(itemlevel2.label).toLowerCase().indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase())>=0)
            {
              if(itemlevel1Copy.children.filter(obj=>obj.label==itemlevel2.label && obj.type==itemlevel2.type && obj.canViewType==itemlevel2.canViewType).length<=0)
              {
                itemlevel1Copy.children.push(itemlevel2);
              }
              if(itemResults.filter(obj=>obj.label==itemlevel1Copy.label && obj.type==itemlevel1Copy.type && obj.canViewType==itemlevel1Copy.canViewType).length<=0)
              {
                itemResults.push(itemlevel1Copy);
              }
            }
            else{
              if(itemlevel2.children!=null && itemlevel2.children.length>0)
              {
                let itemlevel2Copy = Object.assign({}, itemlevel2);
                itemlevel2Copy.children=[];
                itemlevel2.children.forEach(itemlevel3=>{
                  if(CommonService.removeVietnamese(itemlevel3.label).toLowerCase().indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase())>=0)
                  {
                    if(itemlevel2Copy.children.filter(obj=>obj.label==itemlevel3.label && obj.type==itemlevel3.type && obj.canViewType==itemlevel3.canViewType).length<=0)
                    {
                      itemlevel2Copy.children.push(itemlevel3);
                    }
                    if(itemlevel1Copy.children.filter(obj=>obj.label==itemlevel2Copy.label && obj.type==itemlevel2Copy.type && obj.canViewType==itemlevel2Copy.canViewType).length<=0)
                    {
                      itemlevel1Copy.children.push(itemlevel2Copy);
                    }
                    if(itemResults.filter(obj=>obj.label==itemlevel1Copy.label && obj.type==itemlevel1Copy.type && obj.canViewType==itemlevel1Copy.canViewType).length<=0)
                    {
                      itemResults.push(itemlevel1Copy);
                    }
                  }
                  else{
                    if(itemlevel3.children!=null && itemlevel3.children.length>0)
                    {
                      let itemlevel3Copy = Object.assign({}, itemlevel3);
                      itemlevel3Copy.children=[];
                      itemlevel3.children.forEach(itemlevel4=>{
                        if(CommonService.removeVietnamese(itemlevel4.label).toLowerCase().indexOf(CommonService.removeVietnamese(self.searchString).toLowerCase())>=0)
                        {
                          if(itemlevel3Copy.children.filter(obj=>obj.label==itemlevel4.label && obj.type==itemlevel4.type && obj.canViewType==itemlevel4.canViewType).length<=0)
                          {
                            itemlevel3Copy.children.push(itemlevel4);
                          }
                          if(itemlevel2Copy.children.filter(obj=>obj.label==itemlevel3Copy.label && obj.type==itemlevel3Copy.type && obj.canViewType==itemlevel3Copy.canViewType).length<=0)
                          {
                            itemlevel2Copy.children.push(itemlevel3Copy);
                          }
                          if(itemlevel1Copy.children.filter(obj=>obj.label==itemlevel2Copy.label && obj.type==itemlevel2Copy.type && obj.canViewType==itemlevel2Copy.canViewType).length<=0)
                          {
                            itemlevel1Copy.children.push(itemlevel2Copy);
                          }
                          if(itemResults.filter(obj=>obj.label==itemlevel1Copy.label && obj.type==itemlevel1Copy.type && obj.canViewType==itemlevel1Copy.canViewType).length<=0)
                          {
                            itemResults.push(itemlevel1Copy);
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
    return itemResults;
  }
  searchTimeout:any=null;
  searchChange() {
    var self=this;
    if(this.searchTimeout!=null)
    {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout=setTimeout(function(){
      if(self.searchString==null||self.searchString=="")
      {
        self.itemSearchs=self.items;
      }
      else{
        self.itemSearchs=self.search();
      }

    },500);
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
      if (event.keyCode == 70 && event.ctrlKey) {
          event.preventDefault();
          var self=this;
          setTimeout(() => {
            self.searchElement.nativeElement.focus();
            self.layoutService.expandSidenav();
          });
      }
  }
}
