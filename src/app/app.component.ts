import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  mobileQuery: MediaQueryList;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.mobileQuery = matchMedia('(max-width: 768px)');
  }

  ngOnInit() {
    // Listen for mobile query changes
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  private mobileQueryListener = () => {
    // This will trigger change detection when mobile state changes
  };

  closeSidenavIfMobile(sidenav: any) {
    if (this.mobileQuery.matches) {
      sidenav.close();
    }
  }
}
