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
import { WebComponent } from './components/web/web.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptor } from './service/cors.interceptor';

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
    ContactoComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CorsInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
