import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import olw-carrusel y animacion*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
/*fin import olw-carrusel y animacion*/
/*------------------------------------------------------------------------------------------- */
/*import fontawesome*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/*fin import fontawesome */ 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SliderComponent } from './paginas/inicio/slider/slider.component';
import { ServiciosComponent } from './paginas/inicio/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    SliderComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*import animacion owl-carrusel*/
    BrowserAnimationsModule,
    CarouselModule,
    /*fin owl carrusel*/
    /*-----------------------------------------------------------------*/
    /*import fontawesome */
    FontAwesomeModule
    /*fin import fontawesome */ 
    /*-----------------------------------------------------------------*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
