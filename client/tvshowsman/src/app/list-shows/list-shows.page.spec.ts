import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListShowsPage } from './list-shows.page';

describe('ListShowsPage', () => {
  let component: ListShowsPage;
  let fixture: ComponentFixture<ListShowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListShowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
