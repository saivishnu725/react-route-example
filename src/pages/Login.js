import { useTitle } from '../index';

function Login() {
    useTitle('Login');
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Hello login!!
                </p>
            </header>
        </div>
    );
}

export default Login;
