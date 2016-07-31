import { Component } from '@angular/core';
import { Ng2TabComponent } from 'ng2-tab';

@Component({
  selector: 'my-app',
  directives: [Ng2TabComponent],
  template: `
  <div ng2-tab> <!-- this makes all tab  possible -->
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
  <ng2-tab
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
  </ng2-tab>
  `,
  styles: [`
    .tabs {
      position: relative;
      top: 1px;
      background: transparent;
      display: block;
    }
    .tabs [index] {
      display: inline-block;
      border: 1px solid #999;
      padding: 5px 10px;
      border-radius: 2px 2px 0 0;
    }
    .tabs [index].selected {
      padding-top: 0;
      background: #f7f7f7;
      border-top: 5px solid #00BCD4;
      border-bottom: 1px solid transparent;
    }
    .tab-contents {
      border: 1px solid #999;
      border-radius: 2px;
      min-height: 3em;
    }`]
})
export class AppComponent {
  foo = 'foo';
  bar = 'bar';
}
