import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, NavigationEnd, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { ScrollToService } from 'ng2-scroll-to-el';
import { ExpiredSectionComponent } from './expired-section/expired-section.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icArrowUpward from '@iconify/icons-ic/twotone-arrow-upward';
import { Subscription } from 'rxjs';
declare var jQuery: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menuItems: any[];
  menuPermissionItems: any;
  icArrowUpward=icArrowUpward;
  subscription:Subscription;
  options = {
    direction: 'ltr'
  };
  @ViewChild('windowTitleBar', {static: true}) windowTitleBar : TemplateRef<any>;
  constructor(router: Router,private authService: AuthService,private scrollService: ScrollToService,
    private broadcastService:BroadcastService,private dialog: MatDialog) {
    var self=this;
    self.closedExpiredSection();
    this.subscription=this.broadcastService.on("ExpiredSection", (event) => {    
      self.showExpiredSectionPopup();    
    });
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((href: any) => {
      if (href.url == '/') {
        this.menuPermissionItems = authService.getMenuInfo()
        this.menuItems = authService.getAccessRoute()
        if (this.menuItems != null && this.menuItems.length > 0) {
          let firstMenu = 'trang-chu';
          this.menuItems.forEach(item => {
            if (item.path != null && item.path !== '') {
              firstMenu = item.path;
              return;
            } else {
              let submenu = this.getSubmenu(item);
              if (submenu != null && submenu.length > 0) {
                firstMenu = submenu[0].path;
                return;
              }
            }
          });
          router.navigate([firstMenu]);
        } else {
          router.navigate(['khong-co-quyen']);
        }
      }

    });
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if(this.subscription!=undefined)
    {
      this.subscription.unsubscribe();
    }      
}
  ngAfterViewInit() {
    jQuery(".sidenav-content").scroll(function(){
      if(jQuery(".sidenav-content").scrollTop()>100){
        jQuery(".scroll-to-top").show();
      }
      else{        
        jQuery(".scroll-to-top").hide();
      }
   });
   jQuery(".main-content").css({"min-height":jQuery(window).height()-102});
  }
  scrollToTop(element) {
    jQuery('.sidenav-content').animate({scrollTop: jQuery('#'+element).position().top})
    //this.scrollService.scrollTo(element);
}
  getSubmenu(menuItem: any){
    if (menuItem.submenu != null && menuItem.submenu.length > 0)
    {
        return  menuItem.submenu.filter(submenuItem => submenuItem.canViewType != null && this.menuPermissionItems['CanView'+DocumentType[submenuItem.canViewType]] == true);
    }
    return [];
  }
  
  showExpiredSectionPopup(){
    var expiredSectionRuning=LocalStorageHelper.getItem("ExpiredSectionRuning");
    if(expiredSectionRuning==null)
    {
      LocalStorageHelper.setItem("ExpiredSectionRuning",true);
      this.dialog.open(ExpiredSectionComponent, {
        disableClose: true,
        width: '500px'
      });   
    }  
    var self=this;
    setTimeout(function(){
      self.closedExpiredSection();
    },5000);
   }
   closedExpiredSection(){
    LocalStorageHelper.setItem("ExpiredSectionRuning",null);
   }
}
