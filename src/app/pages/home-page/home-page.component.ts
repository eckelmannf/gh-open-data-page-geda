import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatasourceService } from 'src/app/services/datasource.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  readonly datasource = this.datasourceService.getDatasource();
  showTabs$ = of(false);

  constructor(private datasourceService: DatasourceService, private activeRoute: ActivatedRoute){
    this.showTabs$ = this.activeRoute.queryParamMap.pipe(map(x => {
      return x.has('tabs');
    }))
  }
  ngOnInit(): void {
  }

}
