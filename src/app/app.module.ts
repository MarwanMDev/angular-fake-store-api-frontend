import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';
// import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [AppComponent, DocsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     fullLibraryLoader: () => import('highlight.js'),
    //   },
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
