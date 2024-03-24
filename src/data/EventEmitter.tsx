import { Subject } from 'rxjs';
import { KitchenlyEvents2 } from './KitchenlyEvents';

export const globalEvents$ = new Subject<KitchenlyEvents2>();
