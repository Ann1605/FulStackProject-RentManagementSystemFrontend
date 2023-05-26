import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofUseComponent } from './termsof-use/termsof-use.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,data: { navbar: 'default' }},
  {path:'About',component:AboutComponent,data: { navbar: 'about' }},
  {path:'Career',component:CareerComponent,data: { navbar: 'career' }},
  {path:'Privacypolicy',component:PrivacypolicyComponent},
  {path:'TermsofUse',component:TermsofUseComponent},
  {path:'Help',component:HelpComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Card',component:CardComponent}
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  export const routingComponents = [AppComponent,HomeComponent,AboutComponent,CareerComponent,PrivacypolicyComponent,TermsofUseComponent,HelpComponent,ContactComponent]

