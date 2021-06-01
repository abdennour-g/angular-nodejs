import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { Carrousel1Component } from "./widgets/carrousel1/carrousel1.component";
import { Carrousel2Component } from "./widgets/carrousel2/carrousel2.component";
import { NavbarComponent } from "./widgets/navbar/navbar.component";
import { GalleryComponent } from "./widgets/gallery/gallery.component";
import { FooterComponent } from "./widgets/footer/footer.component";
import { ElfooterComponent } from "./widgets/elfooter/elfooter.component";
import { AdminComponent } from "./admin/admin.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Carrousel1Component,
    Carrousel2Component,
    NavbarComponent,
    GalleryComponent,
    FooterComponent,
    ElfooterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CarouselModule,
    WavesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
