import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params,
  NavigationStart,
  NavigationEnd
} from '@angular/router';
import { Location } from '@angular/common';
import {
  filter,
  map,
  distinctUntilChanged,
  first,
  mergeMap,
  switchMap
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {
  count = 0;
  pcount = 0;
  $pageParam: Observable<Params>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.$pageParam = this.route.queryParams;
    // this.location.subscribe((popStateEvent: PopStateEvent) => {
    //   if (popStateEvent.type === 'popstate') {
    //     this.router.events
    //       .pipe(
    //         filter(e => e instanceof NavigationEnd),
    //         first()
    //       )
    //       .subscribe(() => {
    //         console.log(this.route.snapshot.queryParams.page);
    //       });
    //   }
    // });

    this.router.events
      .pipe(
        filter(e => e instanceof NavigationStart),
        map(event => event as NavigationStart),
        filter(res => res.restoredState !== null),
        switchMap(() =>
          this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            first()
          )
        )
      )
      .subscribe(event => {
        console.log({ event });
        console.log(this.route.snapshot.queryParams.page);
      });
  }
  navigate() {
    this.count++;
    this.router.navigate([], { queryParams: { page: this.count } });
  }
}
