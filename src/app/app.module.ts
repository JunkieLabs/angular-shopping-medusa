import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewProductDashboardComponent } from './components/new-product-dashboard/new-product-dashboard.component';
import { ButtonModule } from 'primeng/button';
import { NewProductCardListComponent } from './components/new-product-dashboard/new-product-card-list/new-product-card-list.component';
import { SideNavBarComponent } from './components/shared-components/side-nav-bar/side-nav-bar.component';
import { HeaderComponent } from './components/shared-components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    HeaderComponent,
    NewProductDashboardComponent,
    NewProductCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // Instrumentation must be imported after importing StoreModule (config is optional)
     StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      // logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      // traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
