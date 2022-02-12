export class VideoMetadata {

  constructor(public videoId: number,
              public description: string,
              public contentType: string,
              public previewUrl: string,
              public streamUrl: string) {
  }
}
