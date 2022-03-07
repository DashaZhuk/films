import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviePreview, Omdb } from './shared/model/omdb.model';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title(title: any) {
      throw new Error('Method not implemented.');
   }
   error!: string;
   data!: Omdb;
   length!: string;
   movies: MoviePreview[] = [];
   pageIndex!: number;

   getMovies(data: Omdb) {
      this.error = "";
      if (data.Response === "True") {
         this.movies = data.Search;
         this.length = data.totalResults;
      } else {
         this.error = data.Error;
      }

   }

   getEventsData(event: PageEvent): void {
      console.log(event);
      this.pageIndex = event.pageIndex++;
   }
}
