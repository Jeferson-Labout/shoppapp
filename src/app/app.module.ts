import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './home/header/header.component';

import { MaterialModule } from './material.module';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutoEmDestaqueComponent } from './products/produto-em-destaque/produto-em-destaque.component';
import { SectionProdutosDestaquesComponent } from './section/section-produtos-destaques/section-produtos-destaques.component';
import { SectionBannerComponent } from './section/section-banner/section-banner.component';

@NgModule({
  declarations: [				
    AppComponent,
    HomeComponent,
    HeaderComponent,
      ProductsComponent,
      MainComponent,
      SectionComponent,
      FooterComponent,
      ProdutoEmDestaqueComponent,
      SectionProdutosDestaquesComponent,
      SectionBannerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
