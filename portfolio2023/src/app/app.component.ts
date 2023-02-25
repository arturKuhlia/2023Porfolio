import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionsModule } from './sections/sections.module';
import { UiModule } from '@portfolio/ui';

@Component({
    standalone: true,
    imports: [RouterModule, SectionsModule, UiModule],
    selector: 'portfolio-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'portfolio';
}
