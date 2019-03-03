import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/store";
import {Provider} from "react-redux"

import App from './App';
import { addComment, voteUpComment } from './actions/commentAction';



window.store = store;
window.addComment = addComment;
window.voteUpComment = voteUpComment;

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
document.getElementById('root')

);
store.dispatch(addComment("The first comment!"));
store.dispatch(addComment("The second comment!"));