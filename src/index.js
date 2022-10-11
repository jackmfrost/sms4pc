import ReactDOM from 'react-dom/client';
import { List } from './Components/List';
import { SendMess } from './Components/SendMess';
import { ToFro } from './Components/ToFro';
import { Log } from './Components/Log';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="contacts">
      <List />
    </div>
    <div className="rightFrame">
      <ToFro />
      <div id="logs">      
        <Log />
      </div>
      <footer>
        <SendMess />
      </footer>
    </div>
  </>
);