import { Component, signal } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumDTO } from '../../models/album.dto';

@Component({
  selector: 'app-albums-detail',
  imports: [RouterLink],
  templateUrl: './albums-detail.component.html',
  styleUrl: './albums-detail.component.scss'
})
export class AlbumsDetailComponent {

   album = signal<any | null >(null);
  
  constructor(
    private albumsService: AlbumsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.albumsService
        .getAlbumById(id)
        .subscribe((res) => {
          console.log(res);
          if(!res) {
            this.router.navigateByUrl('/')
          }
          this.album.set(res);
          console.log(this.album());
        });
    }
  }

}
