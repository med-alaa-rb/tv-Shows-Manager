import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddShowsPage } from './add-shows.page';

describe('AddShowsPage', () => {
  let component: AddShowsPage;
  let fixture: ComponentFixture<AddShowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddShowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
