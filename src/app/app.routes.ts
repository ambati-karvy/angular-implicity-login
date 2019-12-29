
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomPreloadingStrategy } from './custom-preloading.strategy';
import {AuthGuard} from './auth.guard';
import { UserTableComponent } from './user-browser/user-table/user-table.component'

export const APP_ROUTES: Routes = [
  {
    path: '', component: UserTableComponent, canActivate: [AuthGuard]
  },
  {path:'logout',component:UserTableComponent,canActivate: [AuthGuard]}
];

// export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, {
//   //preloadingStrategy: CustomPreloadingStrategy
//   // useHash: true,
//   // initialNavigation: false
// });
