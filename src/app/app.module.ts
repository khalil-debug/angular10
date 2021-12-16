import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AuthentificationComponent } from './general/authentification/authentification.component';
import { RegisterEnseignantComponent } from './general/register-enseignant/register-enseignant.component';
import { AProposComponent } from './general/a-propos/a-propos.component';
import { SharedService} from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    EtudiantComponent,
    EnseignantComponent,
    AuthentificationComponent,
    RegisterEnseignantComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
