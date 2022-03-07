import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Omdb } from '../shared/model/omdb.model';
import { OmdbService } from '../shared/service/omdb.service';


interface Type {
   value: string;
   viewValue: string;
}

@Component({
   selector: 'app-film-search',
   templateUrl: './film-search.component.html',
   styleUrls: ['./film-search.component.scss']
})

export class FilmSearchComponent implements OnInit {

   isFilmsLoading!: boolean;

   public types: Type[] = [
      { value: 'movie', viewValue: 'Movie' },
      { value: 'series', viewValue: 'Series' },
      { value: 'episode', viewValue: 'Episode' },
   ];
   public data!: Omdb;
   public name!: string;
   public type!: string;

   @Output() onMovieSearch: EventEmitter<Omdb> = new EventEmitter();
   @Input() pageIndex!: number;

   constructor(private omdbService: OmdbService) { }

   ngOnChanges(changes: SimpleChanges) {
      if (this.pageIndex !== undefined) {
         this.getFilms(this.pageIndex + 1);

      }
   }

   ngOnInit(): void {
   }

   public getFilms(pageIndex: number): void {
      this.isFilmsLoading = true;
      this.omdbService.getMovies(this.name, this.type, pageIndex).subscribe((data: Omdb) => {
         this.data = data;
         this.onMovieSearch.emit(this.data);
         this.isFilmsLoading = false;
         console.log(data);
      });
   }

}
