import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App'; //original
// import App from './steps/1/Conut'//最简单的计数器
// import App from './steps/2/Parent'// 回调传递信息
// import App from './steps/3/Count'// redux管理数据
// import App from './steps/4/Parent'; // redux跨组件管理数据
import App from './steps/5/index'; // 引入react-redux管理跨组件管理数据
// import App from './steps/6/index'; // 引入redux-thunk管理异步数据派发
// import App from './steps/7/index'; // 路由+react-redux + redux + redux-thunk
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
