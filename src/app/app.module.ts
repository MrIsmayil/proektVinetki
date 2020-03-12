import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { PreschoolComponent } from './components/preschool/preschool.component';
import { ElementarySchoolComponent } from './components/elementary-school/elementary-school.component';
import { SchoolComponent } from './components/school/school.component';

const appRoutes: Routes = [
  {path:'', component:HeadingComponent},
  {path:'preschool', component:PreschoolComponent},
  {path:'elementary', component:ElementarySchoolComponent},
  {path:'schools', component:SchoolComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    PreschoolComponent,
    ElementarySchoolComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
