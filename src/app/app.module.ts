import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmItemComponent } from './shared/components/film-item/film-item.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FilmDetailsComponent } from './shared/dialog/film-details/film-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
   declarations: [
      AppComponent,
      FilmItemComponent,
      FilmSearchComponent,
      FilmDetailsComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      HttpClientModule,
      FormsModule,
      MatDialogModule,
      MatPaginatorModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatProgressSpinnerModule,

   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
