import React from 'react';
import { Provider } from "react-redux"
import { Posts } from '../src/post/pages/Posts'
import  store  from './store'
import {postList} from './store'
store.dispatch(postList());

function App() {
  return (
    <div className='container'>
      <Provider store={store}>
         <Posts/>
      </Provider>
    </div>
  );
}

export default App;
