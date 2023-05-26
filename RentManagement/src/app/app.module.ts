import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofUseComponent } from './termsof-use/termsof-use.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import {  HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CareerComponent,
    PrivacypolicyComponent,
    TermsofUseComponent,
    HelpComponent,
    ContactComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
