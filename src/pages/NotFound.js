import { useTitle } from '../index';

function NotFound() {
    useTitle('404 Not Found');
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    womp womp page!!
                </p>
            </header>
        </div>
    );
}

export default NotFound;
