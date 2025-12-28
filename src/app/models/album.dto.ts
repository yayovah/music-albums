export interface AlbumDTO {
  id: string;
  title: string;
  date?: string;
  country?: string;
  status?: string;
  'track-count': number;
  'artist-credit': any[];
 // 'release-group': any;
 // score: number;
}

/*
itunes model
export interface AlbumDTO {
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  collectionPrice?: number;
  releaseDate: string;
  primaryGenreName: string;
  trackCount: number;
  copyright: string;
  country: string;
}*/