import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpUsersPage } from './sign-up-users.page';

describe('SignUpUsersPage', () => {
  let component: SignUpUsersPage;
  let fixture: ComponentFixture<SignUpUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
