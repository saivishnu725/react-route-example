import { useTitle } from '../index';

function Home() {
    useTitle('Home Page');

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    HOME!!
                </p>
            </header>
        </div>
    );
}

export default Home;
