import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  constructor(private _router:Router, private _video:VideoService) { }

  isError: boolean = false;

  ngOnInit(): void {
  }
  submit() {
    let form:HTMLFormElement | null = document.forms.namedItem('uploadForm');
    if (form) {
      let fd = new FormData(form);
      this._video.uploadNewVideo(fd).subscribe(
        (data)=>{
          this.isError=false;
          this._router.navigate(['/']);
        },
        (error)=>{
          this.isError=true;
          console.log(error);
          
        }
      )
    }
  }

}
