import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div ngui-tab> <!-- this makes all tab  possible -->
    <div class="tabs">
      <div index="html">HTML</div>
      <div index="js">Javascript</div>
    </div>
    <div class="tab-contents">
      <div contents="html">HTML {{foo}} </div>
      <div contents="js">Javascript {{bar}} </div>
    </div>
  </div>
  
  <br/><br/>
  <h4> Tab with animation </h4>
  <ngui-tab
    selected="js"
    selected-index-class="selected"
    selected-contents-class="fadeIn animated">
    <div class="tabs">
      <div index="html">HTML</div>
      <div index="js">Javascript</div>
    </div>
    <div class="tab-contents">
      <div contents="html">HTML {{1}}</div>
      <div contents="js">Javascript {{1}}</div>
    </div>
  </ngui-tab>
  `
})
export class AppComponent {
  foo = 'foo';
  bar = 'bar';
}
