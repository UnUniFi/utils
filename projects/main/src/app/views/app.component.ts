import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'view-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  drawerMode$: Observable<MatDrawerMode>;
  drawerOpened$: Observable<boolean>;

  constructor(private router: Router, private mediaObserver: MediaObserver) {
    this.drawerMode$ = this.mediaObserver
      .asObservable()
      .pipe(
        map((changes) =>
          changes.find((change) => change.mqAlias === 'xs') ? 'over' : 'side',
        ),
      );

    this.drawerOpened$ = this.mediaObserver
      .asObservable()
      .pipe(
        map((changes) =>
          changes.find((change) => change.mqAlias === 'xs') ? false : true,
        ),
      );

    combineLatest([this.drawerMode$, this.router.events]).subscribe(
      ([drawerMode, event]) => {
        if (drawerMode === 'over' && event instanceof NavigationEnd) {
          this.sidenav?.close();
        }
      },
    );
  }

  ngOnInit(): void {}
}
