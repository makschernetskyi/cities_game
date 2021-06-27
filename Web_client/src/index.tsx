import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { App } from './App'
import {store} from './Redux/store';





const rerenderEntireTree = (state:any) =>{
	ReactDOM.render(<App state={state} dispatch={store.dispatch}/>, document.getElementById('App'));
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{rerenderEntireTree(store.getState)})