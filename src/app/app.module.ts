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
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { RecommendationsService } from './fiches-utilisateurs/recommendation.service';
import { ContactMessagerieService } from './contact-messagerie/contact-messagerie.service';
import { LoveService } from './services/love.service';
import { MessagesService } from './messages/messages.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FichesUtilisateursComponent,
    HomePageComponent,
    ConnexionComponent,
    ContactMessagerieComponent,
    MessagesComponent,
    MonProfilComponent,
    FooterComponent

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
    UtilisateurService,
    RecommendationsService,
    ContactMessagerieService,
    LoveService,
    MessagesService  
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
