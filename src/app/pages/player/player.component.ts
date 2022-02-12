import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchAll } from 'rxjs';
import { VideoMetadata } from 'src/app/data/video-metadata';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public videoMetadata: VideoMetadata  = new VideoMetadata(0, '', '', '', '');

  @ViewChild("videoPlayer") videoPlayerRef!: ElementRef;
  
  videoId=0;
  constructor(public _video:VideoService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
      this._video.getVideoById(this._route.snapshot.params['id'])
        .subscribe((data) => {
          this.videoMetadata = data;

          let videoPlayer = this.videoPlayerRef.nativeElement;
          videoPlayer.load();

          let currentTime = sessionStorage.getItem("currentTime");
          if (currentTime) {
            videoPlayer.currentTime = currentTime;
          }

          videoPlayer.ontimeupdate = () => {
            sessionStorage.setItem("currentTime", videoPlayer.currentTime);
          }
        },
        (error)=>{
          alert("Error");
          console.log(error); 
        }
    );
  }

}
