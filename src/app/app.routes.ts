import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';
import { FichesUtilisateursComponent } from './fiches-utilisateurs/fiches-utilisateurs.component';
import { ConnexionComponent } from './connexion/connexion.component';





export const ROUTES: Routes = [
    { path: '', redirectTo: 'connexion', pathMatch: 'full'},
    { path: 'connexion', component: ConnexionComponent },
    { path: 'suggestion', component: FichesUtilisateursComponent }

];
