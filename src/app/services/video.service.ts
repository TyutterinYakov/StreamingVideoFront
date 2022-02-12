import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoMetadata } from '../data/video-metadata';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class VideoService {


  constructor(private http:HttpClient) { }

  getAllVideo() {
    return this.http.get<VideoMetadata[]>(`${baseUrl}/api/video/all`);
  }

  getVideoById(videoId:any){
    return this.http.get<VideoMetadata>(`${baseUrl}/api/video/` + videoId);
  }

  uploadNewVideo(fd: FormData) {
    return this.http.post(`${baseUrl}/api/video/upload`, fd);
  }

  getAllVideoUser(userId: number) {
    return this.http.get(`${baseUrl}/api/filter/user/${userId}`);
  }
  getCreateVideoUser() {
    return this.http.get(`${baseUrl}/api/filter/user/all`);

  }
}
