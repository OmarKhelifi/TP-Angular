import { Routes } from '@angular/router';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "list", component: SessionItemListComponent },
    { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: "", redirectTo: "/list", pathMatch: 'full' },
    { path: "**", component: PageNotFoundComponent }
];
