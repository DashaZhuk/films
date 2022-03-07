import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmDetailsComponent } from '../../dialog/film-details/film-details.component';
import { FilmInformation, Movie, MoviePreview, Omdb } from '../../model/omdb.model';
import { OmdbService } from '../../service/omdb.service';

@Component({
   selector: 'app-film-item',
   templateUrl: './film-item.component.html',
   styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
   @Input() film!: MoviePreview;
   isDisabled!: boolean;

   constructor(private omdbService: OmdbService,
      public dialog: MatDialog) { }

   ngOnInit(): void {
   }

   public getMovieById(id: string): void {
      this.dialog.open(FilmDetailsComponent, {
         data: id,
         disableClose: true,
      });
   }

}
