import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { BodyComponent } from './components/body/body.component';
import { EspecializacionComponent } from './components/body/especializacion/especializacion.component';
import { AbogadosComponent } from './components/body/abogados/abogados.component';
import { UbicacionComponent } from './components/body/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/body/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    LogoComponent,
    BannerComponent,
    BodyComponent,
    EspecializacionComponent,
    AbogadosComponent,
    UbicacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
