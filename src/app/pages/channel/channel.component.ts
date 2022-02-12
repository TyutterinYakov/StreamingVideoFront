import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoMetadata } from 'src/app/data/video-metadata';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  userId=0;
  videos:VideoMetadata[] = [];
  constructor(private _video:VideoService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['userId'];
    this._video.getAllVideoUser(this.userId).subscribe(
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
