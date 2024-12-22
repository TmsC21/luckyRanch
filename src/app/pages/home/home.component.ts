import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit, AfterViewChecked {
  fullVideo: boolean = false;
  @ViewChild('mainVideo') mainVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('smallVideo') smallVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // Ensure that the small video is muted and play it after it's loaded
    if (this.smallVideo) {
      const videoElement = this.smallVideo.nativeElement;
      videoElement.muted = true;  // Ensure the small video is muted
      videoElement.onloadeddata = () => {
        // Play the small video once it's loaded
        videoElement.play().catch((err) => {
          console.error('Error playing small video:', err);
        });
      };
    }

    // Ensure that the main video is paused initially
    if (this.mainVideo) {
      this.mainVideo.nativeElement.pause();
    }
  }

  ngAfterViewChecked(): void {
    // Check if video is available after every view check and play it if fullVideo is true
    if (this.fullVideo && this.mainVideo) {
      const videoElement = this.mainVideo.nativeElement;
      // If the video is not playing yet, start it
      if (videoElement.paused) {
        videoElement.currentTime = 0;  // Reset time to 0 before playing
        videoElement.play().catch((err) => {
          console.error('Error playing video:', err);
        });
      }
    }
  }

  toggleVideo(): void {
    this.fullVideo = !this.fullVideo;  // Toggle between full-screen video and auto video

    if (this.fullVideo) {
      setTimeout(() => {
        // Ensure `mainVideo` is available after the DOM update
        if (this.mainVideo) {
          this.mainVideo.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
          this.mainVideo.nativeElement.play().catch((err) => {
            console.error('Error playing main video:', err);
          });
        }
      }, 1000);
    } else if (this.mainVideo) {
      // Pause the main video when switching back to small view
      this.mainVideo.nativeElement.pause();
    }
  }


}
