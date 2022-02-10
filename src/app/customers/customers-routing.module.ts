import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from '../admin-access.guard';
import { SuperAdminGuard } from '../super-admin.guard';
import { UserFormGuardGuard } from '../user-form-guard.guard';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomersComponent } from './customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';

const routes: Routes = [
  {
     path: '',
     component: CustomersComponent,
     //canActivate: [SuperAdminGuard], //we removed canActivate because we added canLoad guard to this lazy load module
     children: [
       { 
         
         path: '',
         canActivateChild: [AdminAccessGuard],
         children: [
          { 
            path: 'add',
            canDeactivate:[UserFormGuardGuard],
            component: AddCustomerComponent 
          },
          { 
            path: 'edit', 
            component: EditCustomersComponent 
          },
          { 
            path: 'delete', 
            component: DeleteCustomerComponent 
          },
          {
            path: 'add-user',
            canDeactivate:[UserFormGuardGuard],
            component: AddUserComponent
          }

        ]
        }
     ]
    },
  
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
