import React from 'react';
import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';
// import ReactDOM from 'react-dom';

// class MyComponent extends Component {
//   myMethod() {
//     const node = ReactDOM.findDOMNode(this);
//   }
// }
//
// if (node instanceof HTMLElement) {
//   const selectBody = node.querySelector('body');
// }

const useDarkMode = () => {
  const [mode, setMode] = useLocalStorage('key1');

  useEffect( () => {

    return mode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
  }, []);

}
