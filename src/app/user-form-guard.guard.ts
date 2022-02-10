import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable ,of} from 'rxjs';
import { AddUserComponent } from './customers/add-user/add-user.component';
import { componentDeactivateInterface } from './customers/can-deactivate.interface';
import { ConfirmDialogComponent } from './customers/confirm-dialog/confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class UserFormGuardGuard implements CanDeactivate<componentDeactivateInterface> { //we implemented componentDeactivateInterface interface instead of single component
  constructor(private dialog: MatDialog){}
  canDeactivate(
    component: componentDeactivateInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log('it was triggered');
      if(!component.isDataSaved()){ //if(component.form.dirty)
        /*if(confirm('Are you sure you want to leave this component?')){ //normal confirm window
          return true;
        }else{
          return false;
        }*/
        const dialogRef = this.dialog.open(ConfirmDialogComponent);
        return dialogRef.afterClosed();
      }
       return true; //by default
      //return !component.form.dirty; // without any confirm message
  }
  
}
