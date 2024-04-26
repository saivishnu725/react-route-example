import { useTitle } from '../index';

function Settings() {
  useTitle('Settings');
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello settings!!
        </p>
      </header>
    </div>
  );
}

export default Settings;
