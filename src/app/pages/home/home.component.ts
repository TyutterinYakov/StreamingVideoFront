import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import {VideoMetadata} from "../../data/video-metadata";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: VideoMetadata[] = [];
  isError: boolean = false;

  constructor(private _video:VideoService) { }

  ngOnInit(): void {
    this._video.getAllVideo().subscribe(
      (data)=>{
        this.videos=data;
        console.log(data);
        
      },
      (error)=>{
        this.isError=true;
      }
    )
  }

}
