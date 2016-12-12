# ng2-tab
Angular2 Tab Component 

<a href="https://rawgit.com/ng2-ui/ng2-tab/master/app/index.html">
  Demo
</a>

## Install

1. install ng2-tab

        $ npm install ng2-tab --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-tab'] = 'node_modules/ng2-tab/dist';
        packages['ng2-tab'] = { main: 'ng2-tab.umd.js', defaultExtension: 'js' }

3. import Ng2Tab to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { Ng2Tab } from 'ng2-tab';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2Tab],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

## Use it in your code

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
          
## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 


## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-tab.git
    $ cd ng2-tab
    $ npm install
    $ npm start

