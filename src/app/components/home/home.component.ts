import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  topProjects = [
    {
      title: 'TypeScript Gallery View',
      description: 'Interactive gallery application built with TypeScript that displays images from JSON data with responsive design.',
      link: 'https://harshatha19.github.io/TypeScript--GalleryView-using-JSON/',
      githubLink: 'https://github.com/Harshatha19/TypeScript--GalleryView-using-JSON'
    },
    {
      title: 'Angular Weather App with Firebase',
      description: 'Real-time weather application built with Angular and Firebase integration, featuring location-based forecasting.',
      link: 'https://harshatha19.github.io/Angular--Weather-App-with-Firebase/',
      githubLink: 'https://github.com/Harshatha19/Angular--Weather-App-with-Firebase'
    },
    {
      title: 'Angular Dashboard with User Auth',
      description: 'Comprehensive dashboard application with secure user authentication and role-based access control.',
      link: 'https://harshatha19.github.io/Angular-Dashboard-with-User-Auth/',
      githubLink: 'https://github.com/Harshatha19/Angular-Dashboard-with-User-Auth'
    },
    {
      title: 'Full-Stack E-commerce Application',
      description: 'Complete e-commerce solution with both backend and frontend implementation, featuring product management and shopping cart.',
      link: null,
      githubLink: 'https://github.com/Harshatha19/Ecommerce---Backend-FrontEnd'
    }
  ];

  constructor() { }

  onImageError(event: any) {
    console.log('Profile image failed to load:', event.target.src);
    // Keep the placeholder circle if image fails
  }

  onImageLoad(event: any) {
    console.log('Profile image loaded successfully:', event.target.src);
  }
}
