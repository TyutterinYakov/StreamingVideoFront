import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoMetadata } from '../data/video-metadata';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:HttpClient) { }

  getAllVideo() {
    return this.http.get<VideoMetadata[]>(`/api/video/all`);
  }

  getVideoById(videoId:any){
    return this.http.get<VideoMetadata>('/api/video/' + videoId);
  }

  uploadNewVideo(fd: FormData) {
    return this.http.post('/api/video/upload', fd);
  }
}
