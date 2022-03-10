import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDashboardEmbedComponent } from './tableau-dashboard-embed.component';

describe('TableauDashboardEmbedComponent', () => {
  let component: TableauDashboardEmbedComponent;
  let fixture: ComponentFixture<TableauDashboardEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDashboardEmbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDashboardEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
