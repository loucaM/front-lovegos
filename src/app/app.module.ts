import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FichesUtilisateursComponent } from './fiches-utilisateurs/fiches-utilisateurs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FichesUtilisateursComponent,
    HomePageComponent,
    ConnexionComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
