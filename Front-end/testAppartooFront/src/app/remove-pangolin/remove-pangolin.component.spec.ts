import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePangolinComponent } from './remove-pangolin.component';

describe('RemovePangolinComponent', () => {
  let component: RemovePangolinComponent;
  let fixture: ComponentFixture<RemovePangolinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePangolinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePangolinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
