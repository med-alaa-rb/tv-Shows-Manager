import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneShowPage } from './one-show.page';

describe('OneShowPage', () => {
  let component: OneShowPage;
  let fixture: ComponentFixture<OneShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
