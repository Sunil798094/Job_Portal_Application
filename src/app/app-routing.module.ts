import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

const routes: Routes = [
 {path:'home', component : HomeComponent},
 {path:'login', component : LoginComponent},
 {path:'registration',component: RegistrationComponent},
 {path:'jobs', component: JobsComponent},
 {path: 'job-details', component:JobDetailsComponent},
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
