import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FichesUtilisateursComponent } from './fiches-utilisateurs/fiches-utilisateurs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ContactMessagerieComponent } from './contact-messagerie/contact-messagerie.component';
import { MessagesComponent } from './messages/messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionService } from './connexion/connexion.service';
import { TokenService } from './services/token.service';
import { UtilisateurService } from './services/utilisateur.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FichesUtilisateursComponent,
    HomePageComponent,
    ConnexionComponent,
    ContactMessagerieComponent,
    MessagesComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ConnexionService,
    TokenService,
    UtilisateurService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
