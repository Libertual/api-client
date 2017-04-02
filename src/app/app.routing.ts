import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';

import { LoginComponent }       from './login/index';
import { HomeComponent }        from './home/index';


import { AuthGuard }            from './_guards/index';

const appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
