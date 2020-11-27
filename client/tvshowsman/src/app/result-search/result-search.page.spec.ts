import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultSearchPage } from './result-search.page';

describe('ResultSearchPage', () => {
  let component: ResultSearchPage;
  let fixture: ComponentFixture<ResultSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
