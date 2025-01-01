import { Injectable } from '@angular/core';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../interfaces/navigation-item.interface';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  items: NavigationItem[] = [];
  menuPermissionItems: any;

  private _openChangeSubject = new Subject<NavigationDropdown>();
  openChange$ = this._openChangeSubject.asObservable();
  constructor(private authService: AuthService) {
    this.menuPermissionItems = this.authService.getMenuInfo();
  }

  triggerOpenChange(item: NavigationDropdown) {
    this._openChangeSubject.next(item);
  }

  isLink(item: NavigationItem): item is NavigationLink {
    return item.type === 'link' && (this.menuPermissionItems==undefined|| item.canViewType==null || this.menuPermissionItems['CanView'+DocumentType[item.canViewType]]);
  }

  isDropdown(item: NavigationItem): item is NavigationDropdown {
    return item.type === 'dropdown' && this.authService.isChildrenPermission(item);
  }

  isSubheading(item: NavigationItem): item is NavigationSubheading {
    return item.type === 'subheading'  && this.authService.isChildrenPermission(item);
  }
}
