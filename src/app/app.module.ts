import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeApi } from './api/employee.api';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
