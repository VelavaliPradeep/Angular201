import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTookbyUsersComponent } from './books-tookby-users.component';

describe('BooksTookbyUsersComponent', () => {
  let component: BooksTookbyUsersComponent;
  let fixture: ComponentFixture<BooksTookbyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksTookbyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTookbyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
