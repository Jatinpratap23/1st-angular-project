import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaderPartComponent } from './hader.part.component';

describe('HaderPartComponent', () => {
  let component: HaderPartComponent;
  let fixture: ComponentFixture<HaderPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaderPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaderPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
