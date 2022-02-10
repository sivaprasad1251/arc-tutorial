import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoGuard } from './account-info.guard';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { ListComponent } from './list/list.component';
import { LoadGuardGuard } from './load-guard.guard';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path:'loans',
    component:LoansComponent //not giving any outlet name means by default it is primary router outlet
  },
  {
    path:'add-loan',
    component:AddLoansComponent ,
    //outlet:'addLoan' // going to named router outlet,it will not show if you directly access it in the URL, /loans(addLoan:add)
  },                 //*avoid this technique,not used in realtime     
  {
    
    path:'loans-types', //add user remove user in this components
    component:LoansTypesComponent,
   
  },
  {//Resolve data is loaded before route is activated
    path:'leads',
    component:LeadsGridComponent,
     resolve: {
      data: AccountInfoGuard
    }

  },
  {
    path:'user-list',component:UserListComponent
  },
  {
    path:"user/:id", component:UserComponent
  },
  {
    path:'product/:red',
    component:ProductComponent
  },
  {
    path:'product/:productId/photos/:photoId',
    component:ProductComponent
  },
  {
    path:'clients',
    component:ClientsComponent,
    canActivate: [AuthGuard , AdminGuard]             //auth guard to particular route,
  },                                     //we can use any no of route guards on canActivate
  {
    path:'admin',
    canActivate: [SuperAdminGuard],
    children: [
      { path:'' , 
      component: AdminComponent,
      
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          { path: 'manage' ,component: AdminManageComponent},
          { path: 'edit', component: AdminEditComponent},
          { path: 'delete', component: AdminDeleteComponent}

        ]
      },
      {
        path:'list',
        component: ListComponent
      }
      
    
    ]
  },
  {
    path:'search',
    component:SearchComponent,
    canDeactivate: [UnsavedGuard]
  },
  //lazy loading $ ng g m payments --route payments --module app.module
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  
  { path: 'customers',
  canLoad: [LoadGuardGuard],
   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  
   { path: 'preferences',
  canLoad: [PreferencesCheckGuard],      ///auth guard for lazy load module using canLoad
  loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) }, 
  
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
