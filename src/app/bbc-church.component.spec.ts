import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BbcChurchAppComponent } from '../app/bbc-church.component';

beforeEachProviders(() => [BbcChurchAppComponent]);

describe('App: BbcChurch', () => {
  it('should create the app',
      inject([BbcChurchAppComponent], (app: BbcChurchAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bbc-church works!\'',
      inject([BbcChurchAppComponent], (app: BbcChurchAppComponent) => {
    expect(app.title).toEqual('bbc-church works!');
  }));
});
