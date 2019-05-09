import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App'; //original
// import App from './steps/1/Conut'//最简单的计数器
// import App from './steps/2/Parent'// 回调传递信息
import App from './steps/3/Count'// redux管理数据
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
