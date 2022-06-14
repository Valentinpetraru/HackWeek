import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListCocktailsComponent } from './cocktail/list-cocktails/list-cocktails.component';
import { FavoriteCocktailsComponent } from './cocktails/favorite-cocktails/favorite-cocktails.component';
import { GetCocktailsService } from './get-cocktails.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCocktailsComponent,
    FavoriteCocktailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [GetCocktailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
