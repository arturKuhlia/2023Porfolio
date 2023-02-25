import { AboutComponent } from './about/about.component';
import { BragComponent } from './brag/brag.component';
import { CodeComponent } from './code/code.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
    declarations: [
        AboutComponent,
        ResumeComponent,
        SkillsComponent,
        ProjectsComponent,
        CodeComponent,
        ResumeComponent,
        BragComponent,
        NavBarComponent,
    ],
    exports: [
        AboutComponent,
        ResumeComponent,
        SkillsComponent,
        ProjectsComponent,
        CodeComponent,
        ResumeComponent,
        BragComponent,
        NavBarComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatTreeModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatGridListModule,
        MatPaginatorModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
    ],
})
export class SectionsModule {}
