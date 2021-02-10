import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserFriendComponent } from './add-user-friend.component';

describe('AddUserFriendComponent', () => {
  let component: AddUserFriendComponent;
  let fixture: ComponentFixture<AddUserFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
