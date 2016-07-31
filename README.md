# ng2-tab
Angular2 Tab Component 

<a href="https://ng2-ui.github.io/#/ng2-tab">
  Demo
</a>

## Install

1. install ng2-tab

        $ npm install ng2-tab --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-tab'] = 'node_modules/ng2-tab'
        packages['ng2-tab'] = { main: 'dist/index.js', defaultExtension: 'js']

## Use it in your code

Import directives and add `ng2-tab` to your component

        import { Ng2TabComponent} from 'ng2-tab';

        @Component({
          selector: 'my-app',
          directives: [Ng2TabComponent],
          template: `
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
          `
        })

## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-tab.git
    $ cd ng2-tab
    $ npm install
    $ npm start

