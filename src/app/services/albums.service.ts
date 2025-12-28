import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumDTO } from '../models/album.dto';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  //private apiBase = 'https://itunes.apple.com/'
  //private search = 'search?term=1994&entity=album&limit=10'
  //private api = this.apiBase + this.search;
  private api = "https://musicbrainz.org/ws/2/release?query=date:2010&fmt=json";

  

  constructor(private http: HttpClient) { 
    console.log(this.api);
  }

  getAlbums(): Observable<AlbumDTO[]> {
    return this.http.get<any>(this.api).pipe(
      map(resp => resp.releases)
    );
  }

  getAlbumById(id: string): Observable<AlbumDTO> {
      return this.http.get<any>(this.api).pipe(
      map(resp => {
        return resp.releases.filter((album: any) => album.id?.includes(id))[0]
      })
    );
  }
}
