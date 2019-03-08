import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCategoryDirective } from './menu-category.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    MenuComponent,
    MenuCategoryDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
