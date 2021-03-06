import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,      // Reihenfolge beachten, wg. routing von der catch all route
    AppRoutingModule, // Reihenfolge beachten, wg. routing von der catch all route
    HttpClientModule  // nicht teilen! sonst funktionieren die Interceptoren nicht mehr,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
