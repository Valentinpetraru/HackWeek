import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { GenerateActivityComponent } from './activity/generate-activity/generate-activity.component';
import { FavoriteActivityComponent } from './activity/favorite-activity/favorite-activity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { GetskillsService } from './services/getskills.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    GenerateActivityComponent,
    FavoriteActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [GetskillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
