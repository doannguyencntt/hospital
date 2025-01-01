import { Icon } from '@visurel/iconify-angular';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

export type NavigationItem = NavigationLink | NavigationDropdown | NavigationSubheading;

export interface NavigationLink {
  type: 'link';
  route: string | any;
  fragment?: string;
  label: string;
  icon?: Icon;
  routerLinkActive?: { exact: boolean };
  children:null,
  badge?: {
    value: string;
    background: string;
    color: string;
  },
  canViewType:DocumentType;
  queryParams:any | any;
}

export interface NavigationDropdown {
  type: 'dropdown';
  label: string;
  icon?: Icon;
  children: Array<NavigationLink | NavigationDropdown>;
  badge?: {
    value: string;
    background: string;
    color: string;
  },
  canViewType:DocumentType;
}

export interface NavigationSubheading {
  type: 'subheading';
  label: string;
  children: Array<NavigationLink | NavigationDropdown>,
  canViewType:DocumentType;
}
