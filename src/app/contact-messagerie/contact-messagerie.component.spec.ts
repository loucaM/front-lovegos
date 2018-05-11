import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessagerieComponent } from './contact-messagerie.component';

describe('ContactMessagerieComponent', () => {
  let component: ContactMessagerieComponent;
  let fixture: ComponentFixture<ContactMessagerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMessagerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
