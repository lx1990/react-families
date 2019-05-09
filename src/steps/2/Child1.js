import React from 'react';
export default ({child2,count,addChild1}) => <button onClick={addChild1}>child1--右边点击{child2}次，总共{count}次</button>