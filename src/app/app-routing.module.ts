import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('././modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'submissions',
    loadChildren: () => import('././modules/submissions/submissions.module').then(m => m.SubmissionsModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'consultants',
    loadChildren: () => import('././modules/consultants/consultants.module').then(m => m.ConsultantsModule),
     canActivate: [AuthGuard]
  },
  {
    path: 'recruiters',
    loadChildren: () => import('././modules/recruiters/recruiters.module').then(m => m.RecruitersModule),
     canActivate: [AuthGuard]
  },
  {
    path: 'vendors',
    loadChildren: () => import('././modules/vendors/vendors.module').then(m => m.VendorsModule),
     canActivate: [AuthGuard]
  },
  {
    path: 'email',
    loadChildren: () => import('././modules/email/email.module').then(m => m.EmailModule),
     canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
