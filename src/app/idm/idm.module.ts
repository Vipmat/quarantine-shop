import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdmRoutingModule } from './idm-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IdmRoutingModule
  ]
})
export class IdmModule { }
