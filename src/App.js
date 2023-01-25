import React, {useRef} from 'react';
import useUndo from 'use-undo';
import { ActionCreators as UndoActionCreators } from 'redux-undo'

import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from "react-redux";

//引入Codemirror组件
// import Cm from './extendCodeMirror.js';
// import { UnControlled as CodeMirror } from 'react-codemirror2';


import CodeMirror from "codemirror";
import "codemirror/addon/mode/multiplex";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/sql-hint";

//样式
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/lib/codemirror.js';

// import 'codemirror/theme/dracula.css';   //主题

　　//代码折叠

// import 'codemirror/addon/fold/foldgutter.css';
// import 'codemirror/addon/lint/lint.css';
// import 'codemirror/addon/fold/foldcode.js';
// import 'codemirror/addon/fold/foldgutter.js';
// import 'codemirror/addon/fold/brace-fold.js';
// import 'codemirror/addon/hint/javascript-hint.js';
// import 'codemirror/addon/hint/show-hint.js';
// import 'codemirror/addon/lint/lint.js';
// import 'codemirror/addon/lint/json-lint.js';
// import 'codemirror/addon/lint/javascript-lint.js';
// import 'codemirror/addon/display/placeholder.js';
// import 'codemirror/mode/javascript/javascript.js';

// import 'codemirror/mode/sql/sql.js';


import { setCount1,drag } from './actions/rootAction';






function App() {

  const [
    countState,
    {
      set: setCount,
      reset: resetCount,
      undo: undoCount,
      redo: redoCount,
      canUndo,
      canRedo,
    },
  ] = useUndo(0);
  const { present: presentCount } = countState;
  const counter = useSelector((state) => state.rootReducer.counter);
  // const second = useSelector((state) => state.rootReducer.counter);
  const {second} = useSelector((state) => state.draggable.present);
  const state = useSelector((state) => state);
  console.log(counter, '<----counter')
  console.log(second, '<-second')
  const dispatch = useDispatch();

  //字符串截取40
  // const str = counter.slice(0, 40);
  
  console.log(state, '<----state');
  const logView = useRef(null);


  const onEditorDidMount = (editors) => {
    // editor.setSize('width', 'height'); // 设置编辑器宽高
    // 绑定其他快捷键, 这里以按下ctrl-1 格式化编辑器代码做示例
    // editor.addKeyMap({
    //   F1: autoFormatSelection(),
    // });
  };
  return (
    <div className="App">

{/* <CodeMirror
        className={"editor"}
        ref={logView}
        key={"test"}
        editorDidMount={onEditorDidMount}
        value={'editorVal'}
        options={{
          lineNumbers: true,
          // mode: { name: props.type == 'sql' ? 'text/x-sql' : 'application/json' },
          // extraKeys: { Ctrl: autoFormatSelection },
          autofocus: false,
          styleActiveLine: true,
          theme: 'dracula',
          lineWrapping: true,
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          lint: false,
          indentUnit: 2,
          cursorHeight: 0.85,
          // placeholder: props.placeholder || '',
        }}
        onBlur={() => {
          // takeEditorValue();   //失去焦点保存
        }}
      /> */}

<CodeMirror
  value='<h1>I ♥ react-codemirror2</h1>'
  options={{
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }}
  onChange={(editor, data, value) => {
  }}
/>


      <div>
        <p>You clicked {presentCount} times</p>
        <button key="increment" onClick={() => setCount(presentCount + 1)}>
          +
        </button>
        <button key="decrement" onClick={() => setCount(presentCount - 1)}>
          -
        </button>
        <button key="undo" onClick={undoCount} disabled={!canUndo}>
          undo
        </button>
        <button key="redo" onClick={redoCount} disabled={!canRedo}>
          redo
        </button>
        <button key="reset" onClick={() => resetCount(0)}>
          reset to 0
        </button>
      </div>

      <hr />
      <div>
        <h1>second: {second}</h1>
        <button onClick={()=>{
          dispatch(drag(second+1))
        }}>+</button>

<button onClick={()=>{
          dispatch(drag(second-1))
        }}>-</button>
         <button onClick={()=>{
          
          dispatch(UndoActionCreators.undo());

        }}>redux undo</button>
         <button onClick={()=>{
          
          dispatch(UndoActionCreators.redo());

        }}>redux redo</button>

<button onClick={()=>{
          
          dispatch(UndoActionCreators.jump(0));

        }}>redux clear</button>

<button onClick={()=>{
          
          dispatch(UndoActionCreators.clearHistory());

        }}>redux jump</button>


      </div>
      <hr />

      <header className="App-header">
        <h1>Counter: {counter}</h1>
        {/* <button onClick={() => dispatch({ type: "INCREMENT" })}> INCREMENT </button> */}
        <button onClick={() => dispatch(setCount1(counter))}> INCREMENT </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}> DECREMENT </button>
      </header>
    </div>
  );
}

export default App;
