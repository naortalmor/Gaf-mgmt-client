import { RouteOption } from '../models/interfaces/route-option';

const ACTIVE_BUTTON_STYLE:string = 'active-route-button';
const MIFGAFS_BUTTON:string = 'ניהול מפגפים';
const EVENINGS_BUTTON:string = 'ניהול ערבי צוות';
const LUNCHES_BUTTON:string = 'ארוחת צהריים';

export const RouteOptions:RouteOption[] = [{
  buttonText: MIFGAFS_BUTTON,
  activeButtonStyle: ACTIVE_BUTTON_STYLE,
  routerLink: 'mifgafs'
}, {
  buttonText: EVENINGS_BUTTON,
  activeButtonStyle: ACTIVE_BUTTON_STYLE,
  routerLink: 'evenings'
}, {
  buttonText: LUNCHES_BUTTON,
  activeButtonStyle: ACTIVE_BUTTON_STYLE,
  routerLink: 'lunches'
}];
