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
import { ElectricosComponent } from './electricos/electricos.component';
import { SanitariosComponent } from './sanitarios/sanitarios.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DatosService } from './datos.service';
import { DatosListComponent } from './datos-list/datos-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    NavbarComponent,
    ContactenosComponent,
    NosotrosComponent,
    AguaComponent,
    ElectricosComponent,
    SanitariosComponent,
    FooterComponent,
    DatosListComponent,
    ProductDetailsComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([

        { path: '', component: HomeComponent },

        { path: 'Inicio', component: HomeComponent },

        { path: 'categorias', component: CategoriasComponent },

        { path: 'contactenos', component: ContactenosComponent },

        { path: 'sobre-nosotros', component: NosotrosComponent },

        { path: 'agua', component: AguaComponent },

        { path: 'electricos', component: ElectricosComponent },

        { path: 'sanitarios', component: SanitariosComponent },

        {path: 'datos/:id', component:ProductDetailsComponent}

    ])
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
