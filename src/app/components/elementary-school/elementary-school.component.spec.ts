import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementarySchoolComponent } from './elementary-school.component';

describe('ElementarySchoolComponent', () => {
  let component: ElementarySchoolComponent;
  let fixture: ComponentFixture<ElementarySchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementarySchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementarySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
