import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import {ResultContextProvider} from './contexts/ResultContextProvider';
import './index.css';

ReactDOM.render(  
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
    </ResultContextProvider>
   ,document.getElementById('root'));
//参数一: 要渲染的内容, 可以是HTML元素, 也可以是React的组件
//参数二: 将渲染的内容, 挂载到哪一个HTML元素上