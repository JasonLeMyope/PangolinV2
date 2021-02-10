import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ShowInfosComponent } from './show-infos/show-infos.component';
import { AddPangolinComponent } from './add-pangolin/add-pangolin.component';
import { RemovePangolinComponent } from './remove-pangolin/remove-pangolin.component';
import { AuthService } from './services/auth.service';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserFriendComponent } from './add-user-friend/add-user-friend.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'addPangolin', component: AddPangolinComponent },
  { path: 'removePangolin', component: RemovePangolinComponent },
  { path: 'showInfos', component: ShowInfosComponent },
  { path: 'ajouterUserFriend', component: AddUserFriendComponent },
  { path: '**', component: AccueilComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    ShowInfosComponent,
    AddPangolinComponent,
    RemovePangolinComponent,
    AccueilComponent,
    AddUserFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
