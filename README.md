# react-template


test git nothing 15





### redux-thunk  
  - 1: 传值调用, 传名调用

```js
var x = 1;

function f(m){
  return m * 2;     
}
f(x + 5);
// 等同于
var thunk = function () {
  return x + 5;
};

function f(thunk){
  return thunk() * 2;
}
```

redux-thunk 包装一个action creator, 原生的action creator 是返回一个object。
包装后返回一个function (function调用在返回object)


Thunk是一個以action為本的包裹器
