// Angular
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';

// RxJS
import { filter, map, Subject, takeUntil } from 'rxjs';

// Bootstrap
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';


/**
 * Header Component
 * Handles navigation
 *
 * @param router - The injected router
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy, OnInit {
  /**
   * Destroy subhect used for releasing resources
   */
  private readonly destroy$ = new Subject();

  /**
   * The current route path
   */
  currentPath: string = '';

  /**
   * The path map - maps key/value to routes
   */
  pathMap: Record<string, string> = {};

  /**
   * Nav child component reference
   */
  @ViewChild(NgbNav) target: NgbNav;

  /**
   * Header Component constructor
   */
  constructor(
    private readonly router: Router,
  ) {}

  /**
   * AfterViewInit lifecycle implementation
   */
  ngAfterViewInit() {
    this.target.links.forEach((link) => {
      const path = link.elRef.nativeElement.getAttribute('data-path');

      this.pathMap[path] = link.navItem.domId;
    });
  }

  /**
   * OnDestroy lifecycle implementation
   * General cleanup / release resources
   */
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  /**
   * OnInit lifecycle implementation
   * Subscribes to router events and updates the current path on change
   */
  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event): event is RouterEvent => event instanceof NavigationStart),
        map((event) => this.pathMap[event.url.replace(/^\//, '') || 'home'])
      )
      .subscribe((path) => {
        if (this.currentPath === '') {
          this.currentPath = path;
        }
      });
  }

  /**
   * Navigate to the home page
   */
  goHome() {
    this.router.navigate(['home']);
  }
}
