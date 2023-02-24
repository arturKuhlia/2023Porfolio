import { AboutComponent } from './about/about.component';
import { BragComponent } from './brag/brag.component';
import { CodeComponent } from './code/code.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
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
    ],
    exports: [
        AboutComponent,
        ResumeComponent,
        SkillsComponent,
        ProjectsComponent,
        CodeComponent,
        ResumeComponent,
        BragComponent,
    ],
    imports: [
        CommonModule,
        MatTreeModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatGridListModule,
        MatPaginatorModule,
    ],
})
export class SectionsModule {}
