import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CocktailsComponent } from './shared/cocktails/cocktails.component';
import { ListCocktailsComponent } from './cocktail/list-cocktails/list-cocktails.component';
import { FavoriteCocktailsComponent } from './cocktails/favorite-cocktails/favorite-cocktails.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsComponent,
    ListCocktailsComponent,
    FavoriteCocktailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
