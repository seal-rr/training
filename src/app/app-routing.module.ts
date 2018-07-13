import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'dashboard' } // catch all route ... ! Reihenfolge in der app.module.ts beachten
  // alte routen
  // { path: 'dashboard', component: DashboardComponent },
  //  { path: 'book/:isbn', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
