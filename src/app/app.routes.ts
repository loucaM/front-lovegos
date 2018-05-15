import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';
import { FichesUtilisateursComponent } from './fiches-utilisateurs/fiches-utilisateurs.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MessagesComponent } from './messages/messages.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';





export const ROUTES: Routes = [
    { path: '', redirectTo: 'connexion', pathMatch: 'full'},
    { path: 'connexion', component: ConnexionComponent },
    { path: 'suggestion', component: FichesUtilisateursComponent },
    { path: 'messagerie', component: MessagesComponent },
    { path: 'monprofil', component: MonProfilComponent },    
];
