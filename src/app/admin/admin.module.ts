import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { FormsModule } from '@angular/forms';
import { SessionItemComponent } from './session-item/session-item.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'add', component: SessionAddFormComponent },
      { path: 'edit/:id', component: SessionEditFormComponent },
      { path: 'list', component: SessionItemListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
