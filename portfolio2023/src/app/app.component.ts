import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionsModule } from './sections/sections.module';

@Component({
    standalone: true,
    imports: [RouterModule, SectionsModule],
    selector: 'portfolio-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'portfolio';
}
