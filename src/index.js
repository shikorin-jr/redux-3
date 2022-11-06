import React from 'react';
import ReactDOM from 'react-dom';
// 3) Подключаем createStore, ктр будет создавать store
import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  // 1) Модифицируем конструкцию в switch, где будем проверять объекты action
  // 2) Укажем параметр по умолчанию state = 0
  // 17) Добавим action для уменьшения занчения счетчика DEC
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default: 
      return state;
  }
}

// 4) Создаем переменную store и вызываем ф-ию createStore. Она принимает в себя reducer.
// 5) Создается сущность store, ктр включает в себя reducer, а reducer создаст state = 0.
const store = createStore(reducer);

// 5) Получаем state ктр находится внутри store. Начальный state = 0
// console.log(store.getState());


// 14) Когда возникают действия над store, мы хотим чтобы интерфейс реагировал на какие либо изменеия. Для этого используется subscibe
// 15) Во внутрь передаем ф-ию, ктр будет срабатывать каждый раз, когда у нас происх. изменение значения внутри state
// store.subscribe(() => {
//   console.log(store.getState());
// })
// 16) Результат: 1, 2. Срабатывает каждый раз, когда диспэтчится какое-то действие. Срабатывает подписка subscribe и в консоль выводим текущее состояние store


// 19) Когда внутри store что-то меняется, будем подписываться на изменения и что-то изменять внутри интерфейса. В нашем случае счетчик
// 20) У эл-та counter будем менять текстовый контент. Будем обращаться к store, получать его state и записывать значение во внутрь эл-та.

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

// 21) В subscribe передаем функцию update. Ее не вызываем, передаем ссылку.
store.subscribe(update);

// 18) На эл-т inc и dec навешиваем событие click
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({type: 'INC'});
}); 

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({type: 'DEC'});
}); 

// 6) Для того чтобы поменять state в redux, необходимо вызвать ф-ию dispatch, ктр берет action и передает в reducer, где выполняются какие-либо действия
// 7) Ф-ия dispatch хранится внутри store.  
// 8) Для того чтобы что-то поменять, внутри dispatch помещаем действие. Напр: {type: 'INC'}
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// 9) store.dispatch({type: 'INC'})    заменяет     let state = reducer(initialState, {type: 'INC'});    
// console.log(store.getState());
// 10) Результат 2. dispatch сработал 2 раза. state изменился с помощью reducer: return state + 1;
// 11) store - хранилище, state - состояние
// 12) В dispatch нам не надо передавать state, он и так знает с каким state он будет работать
// 13) Мы создали одно хранилище - const store = createStore(reducer). Это хранилище содержит state и dispatch.





ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
);
