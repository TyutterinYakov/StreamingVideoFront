import { Component, OnInit } from '@angular/core';
import { VideoMetadata } from 'src/app/data/video-metadata';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-change-video',
  templateUrl: './change-video.component.html',
  styleUrls: ['./change-video.component.css']
})
export class ChangeVideoComponent implements OnInit {

  videos:VideoMetadata[] = [];
  constructor(private _video:VideoService) { }

  ngOnInit(): void {
    this._video.getCreateVideoUser().subscribe(
      (data:any)=>{
        this.videos=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
