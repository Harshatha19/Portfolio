import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  selectedCategory: string = 'all';
  filteredProjects: any[] = [];

  allProjects = [
    {
      title: 'TypeScript Gallery View',
      category: 'Web Development',
      description: 'Interactive gallery application built with TypeScript that displays images from JSON data with responsive design and smooth navigation.',
      image: 'assets/images/gallery-view.png',
      liveLink: 'https://harshatha19.github.io/TypeScript--GalleryView-using-JSON/',
      githubLink: 'https://github.com/Harshatha19/TypeScript--GalleryView-using-JSON',
      technologies: ['TypeScript', 'HTML5', 'CSS3', 'JSON', 'JavaScript'],
      features: [
        'Dynamic image loading from JSON',
        'Responsive gallery grid',
        'Image modal preview',
        'Smooth animations',
        'Clean TypeScript architecture'
      ]
    },
    {
      title: 'Angular Weather App with Firebase',
      category: 'Angular',
      description: 'Real-time weather application built with Angular and Firebase integration, featuring location-based weather forecasting and data persistence.',
      image: 'assets/images/weather-app.png',
      liveLink: 'https://harshatha19.github.io/Angular--Weather-App-with-Firebase/',
      githubLink: 'https://github.com/Harshatha19/Angular--Weather-App-with-Firebase',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Weather API', 'Angular Material'],
      features: [
        'Current weather conditions',
        'Location-based forecasting',
        'Firebase data integration',
        'Responsive design',
        'Real-time updates'
      ]
    },
    {
      title: 'Angular Dashboard with User Authentication',
      category: 'Angular',
      description: 'Comprehensive dashboard application with secure user authentication, role-based access control, and modern UI components.',
      image: 'assets/images/login-auth.png',
      liveLink: 'https://harshatha19.github.io/Angular-Dashboard-with-User-Auth/',
      githubLink: 'https://github.com/Harshatha19/Angular-Dashboard-with-User-Auth',
      technologies: ['Angular', 'TypeScript', 'Authentication', 'Angular Material', 'RxJS'],
      features: [
        'User authentication system',
        'Role-based access control',
        'Interactive dashboard',
        'Secure routing guards',
        'Modern Material Design UI'
      ]
    },
    {
      title: 'Full-Stack E-commerce Application',
      category: 'Full Stack',
      description: 'Complete e-commerce solution with both backend and frontend implementation, featuring product management, shopping cart, and order processing.',
      image: 'assets/images/ecommerce.jpg',
      liveLink: null,
      githubLink: 'https://github.com/Harshatha19/Ecommerce---Backend-FrontEnd',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'REST API'],
      features: [
        'Complete backend API',
        'Product catalog management',
        'Shopping cart functionality',
        'Order processing system',
        'User account management'
      ]
    }
  ];

  ngOnInit() {
    this.filteredProjects = this.allProjects;
  }

  filterProjects(category: string) {
    this.selectedCategory = category;

    if (category === 'all') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(
        project => project.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  }

  getTechnologiesCount(): number {
    const allTech = new Set();
    this.allProjects.forEach(project => {
      project.technologies.forEach(tech => allTech.add(tech));
    });
    return allTech.size;
  }

  onImageError(event: any) {
    console.log('Image failed to load:', event.target.src);
    event.target.style.backgroundColor = '#2a2a2a';
    event.target.style.display = 'flex';
    event.target.style.alignItems = 'center';
    event.target.style.justifyContent = 'center';
    event.target.innerHTML = '<span style="font-size: 2rem; color: #666;">📷</span>';
  }
}
