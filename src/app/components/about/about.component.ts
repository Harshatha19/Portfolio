import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  onImageError(event: any) {
    console.log('Profile image failed to load:', event.target.src);
    // Keep the placeholder circle if image fails
  }

  onImageLoad(event: any) {
    console.log('Profile image loaded successfully:', event.target.src);
  }
}
