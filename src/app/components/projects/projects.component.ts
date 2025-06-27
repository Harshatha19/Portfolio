import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Project 1', description: 'Angular CRUD App', link: 'https://github.com/your-repo/project1' },
    { title: 'Project 2', description: 'Responsive Website', link: 'https://github.com/your-repo/project2' }
  ];
}
