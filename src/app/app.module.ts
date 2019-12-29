import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorProvider } from './jwt.interceptor';
import { ErrorInterceptorProvider } from './error.interceptor';
import { AuthenticationService } from './authentication.service';
import { BroadcastService } from './broadcast.service';
import { AuthGuard } from './auth.guard';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import { UserTableComponent } from './user-browser/user-table/user-table.component';
import { UserServiceService } from './services/user-service.service';
import { HeaderComponent } from './header/header.component';
 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [AuthGuard,
     AuthenticationService,
    BroadcastService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
    BroadcastService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
    UserServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
