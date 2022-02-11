import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatasourceContentPageComponent } from './pages/datasource-content-page/datasource-content-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



const routes: Routes = [
  { path: 'content', component: DatasourceContentPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
