import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumDTO } from '../../models/album.dto';
import { AlbumsService } from '../../services/albums.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-albums-list',
  imports: [RouterLink, MatTableModule, MatButtonToggleModule, MatCardModule, MatButtonModule],
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss'
})
export class AlbumsListComponent {
  albums = signal<AlbumDTO[]>([]);
  displayedColumns: string[] = ['id', 'title'];

  vista = signal<string>('cards');

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService
      .getAlbums()
      .subscribe((res) => this.albums.set(res));
    
  }

}
