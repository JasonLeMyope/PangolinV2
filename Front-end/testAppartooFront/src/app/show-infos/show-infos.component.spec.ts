import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfosComponent } from './show-infos.component';

describe('ShowInfosComponent', () => {
  let component: ShowInfosComponent;
  let fixture: ComponentFixture<ShowInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
