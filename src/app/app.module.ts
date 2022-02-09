import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { CdkScrollableModule } from '@angular/cdk/scrolling'
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatasourceLayoutItemComponent } from './components/datasource-layout-item/datasource-layout-item.component';
import { DatasourceLayoutComponent } from './components/datasource-layout/datasource-layout.component';
import { PortalModule } from '@angular/cdk/portal';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { LayoutModule } from '@angular/cdk/layout';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatasourceReadmeComponent } from './components/datasource-readme/datasource-readme.component';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { DatasourceContentListComponent } from './components/datasource-content-list/datasource-content-list.component';
import { DatasourceContentPreviewComponent } from './components/datasource-content-preview/datasource-content-preview.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { PdfPreviewComponent } from './components/pdf-preview/pdf-preview.component';
import { MarkdownPreviewComponent } from './components/markdown-preview/markdown-preview.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSortModule } from '@angular/material/sort';
import { CsvTableComponent } from './components/csv-table/csv-table.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { FormatIfNumberPipe } from './pipes/format-if-number.pipe';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { DatasourceCiteComponent } from './components/datasource-cite/datasource-cite.component';
import { DatasourceLicenceComponent } from './components/datasource-licence/datasource-licence.component';
import { DatasourceTagsComponent } from './components/datasource-tags/datasource-tags.component';
import { DatasourceContributorListComponent } from './components/datasource-contributor-list/datasource-contributor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AfterComponentInitDirective } from './directives/after-component-init.directive';
import { FileDownloadComponent } from './components/file-download/file-download.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ContributorRoleLabelPipe } from './pipes/contributor-role-label.pipe';
import { MatTooltipModule } from '@angular/material/tooltip'

registerLocaleData(localeDe, 'de');

function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  // renderer.blockquote = (text: string) => {
  //   return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  // };
  renderer.link = (href, title, text) => {
    return `<a href="${href}" ${title === null ? '' : 'title="' + title + '"'} target="_blank">${text}</a>`;
  }

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    DatasourceLayoutComponent,
    DatasourceLayoutItemComponent,
    DatasourceReadmeComponent,
    DatasourceContentListComponent,
    DatasourceContentPreviewComponent,
    ImagePreviewComponent,
    PdfPreviewComponent,
    MarkdownPreviewComponent,
    LoadingIndicatorComponent,
    CsvTableComponent,
    SafeHtmlPipe,
    ContributorRoleLabelPipe,
    FormatIfNumberPipe,
    DatasourceCiteComponent,
    DatasourceLicenceComponent,
    DatasourceTagsComponent,
    AfterComponentInitDirective,
    DatasourceContributorListComponent,
    FileDownloadComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
    MatProgressSpinnerModule,
    PdfViewerModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatTableModule,
    ClipboardModule,
    MatFormFieldModule,
    OverlayModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatInputModule,
    MatSortModule,
    CdkScrollableModule,
    MatChipsModule,
    TableVirtualScrollModule,
    MatToolbarModule,
    PortalModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
