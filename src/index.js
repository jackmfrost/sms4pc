import ReactDOM from 'react-dom/client';
import { List } from './Components/List';
import { SendMess } from './Components/SendMess';
import { ToFro } from './Components/ToFro';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="contacts">
      <List />
    </div>
    <div className="rightFrame">
      <ToFro />
      <footer>
        <SendMess />
      </footer>
    </div>
  </>
);