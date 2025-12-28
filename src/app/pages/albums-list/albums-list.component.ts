import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumDTO } from '../../models/album.dto';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums-list',
  imports: [RouterLink],
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss'
})
export class AlbumsListComponent {
  albums = signal<AlbumDTO[]>([]);
  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService
      .getAlbums()
      .subscribe((res) => this.albums.set(res));
    
  }

}
