import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AguaComponent } from './agua/agua.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    NavbarComponent,
    ContactenosComponent,
    NosotrosComponent,
    AguaComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([

        { path: '', component: HomeComponent },

        { path: 'Inicio', component: HomeComponent },

        { path: 'categorias', component: CategoriasComponent },

        { path: 'contactenos', component: ContactenosComponent },

        { path: 'sobre-nosotros', component: NosotrosComponent },

        { path: 'agua', component: AguaComponent },



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
