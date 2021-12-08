import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    CadastroComponent,
    FooterComponent,
    InstitucionalComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
