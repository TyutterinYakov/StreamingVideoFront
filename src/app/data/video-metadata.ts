export class VideoMetadata {

  constructor(public videoId: number,
              public description: string,
              public contentType: string,
              public previewUrl: string,
              public title: string,
              public userName: string,
              public userId: number,
              public views:number,
              public likes:number,
              public dislike:number,
              public streamUrl: string) {
  }
}
