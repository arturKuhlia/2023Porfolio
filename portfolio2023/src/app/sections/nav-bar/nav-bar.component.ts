import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'portfolio-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result) => result.matches),
        shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver) {}
}
