import { List } from './List';
import { SendMess } from './SendMess';
import { ToFro } from './ToFro';
import { Log } from './Log';

export function Home() {
    return(
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
}