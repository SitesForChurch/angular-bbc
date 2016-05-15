import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RadioDevotionsComponent } from './radio-devotions.component';

describe('Component: RadioDevotions', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RadioDevotionsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([RadioDevotionsComponent],
      (component: RadioDevotionsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(RadioDevotionsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(RadioDevotionsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <bbc-radio-devotions></bbc-radio-devotions>
  `,
  directives: [RadioDevotionsComponent]
})
class RadioDevotionsComponentTestController {
}

