import {Component, Template, bootstrap} from 'angular2/angular2';

// import {MyAppComponent} from './myappcomponent';

// Annotation section
@Component({
  selector: 'my-app'
})

@Template({
  inline: '<h1>Hello {{ name }}</h1>'
})

// Component controller
export class MyAppComponent {
  constructor() {
    this.name = 'Alice';
  }
}

bootstrap(MyAppComponent);

// import foo from './src/components/foo';

// console.log(Foo.foo());


      // let map = new Map();
      // map.set('key', 'value');

      // console.log(map)