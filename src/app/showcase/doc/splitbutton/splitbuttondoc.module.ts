import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { ImportDoc } from './importdoc';
import { NestedDoc } from './nesteddoc';
import { OutlinedDoc } from './outlineddoc';
import { RaisedDoc } from './raiseddoc';
import { RaisedTextDoc } from './raisedtextdoc';
import { RoundedDoc } from './roundeddoc';
import { SeverityDoc } from './severitydoc';
import { SizesDoc } from './sizesdoc';
import { StyleDoc } from './styledoc';
import { TextDoc } from './textdoc';
import { TemplateDoc } from './templatedoc';
import { IconsDoc } from './iconsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SplitButtonModule, ToastModule],
    exports: [AppDocModule],
    declarations: [
        ImportDoc,
        BasicDoc,
        IconsDoc,
        NestedDoc,
        SeverityDoc,
        RaisedDoc,
        RoundedDoc,
        TextDoc,
        RaisedTextDoc,
        OutlinedDoc,
        SizesDoc,
        DisabledDoc,
        TemplateDoc,
        StyleDoc,
        AccessibilityDoc,
    ],
})
export class SplitButtonDocModule {}
