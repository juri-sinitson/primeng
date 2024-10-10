import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { CustomDoc } from './customdoc';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
    imports: [
        CommonModule,
        AppCodeModule,
        AppDocModule,
        ToolbarModule,
        RouterModule,
        ButtonModule,
        SplitButtonModule,
        InputTextModule,
        AvatarModule,
        IconFieldModule,
        InputIconModule,
    ],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, CustomDoc, StyleDoc, AccessibilityDoc],
})
export class ToolbarDocModule {}
