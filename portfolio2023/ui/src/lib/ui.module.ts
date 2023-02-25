import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, LayoutModule],
    exports: [LayoutModule],
})
export class UiModule {}
