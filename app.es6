import {Component, Template, bootstrap} from 'angular2/angular2';
import {MyAppComponent} from 'components/my-app-component/my-app-component';

let ws = new WebSocket('ws://localhost:1337');
let data = '';

ws.onopen = e => {
  console.log('Connection opened.');
  ws.send('medications');
}

ws.onmessage = e => {
  console.log('Response from server: ' + e.data);
  data = e.data;
}

ws.onclose = e => {
  console.log('Connection closed.');
}

ws.onerror = e => {
  console.log('An error occurred.');
}

bootstrap(MyAppComponent);
