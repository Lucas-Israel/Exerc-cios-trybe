import './App.css';
import Header from './components/Header';
import EmailRender from './components/EmailRender';
import { useState } from 'react';
import messages from './data/messages';
import Timer from './components/Timer';

function App() {
  const [email, setEmail] = useState(messages);

  const changeRead = (paramId, paramStatus) => {
    const abc = email.map((item) => {
      if (item.id === paramId) {
        return {...item, status: paramStatus};
      }
      return item
    })
    setEmail(abc);
  }

  const emails = {email, changeRead};
  return (
    <div className="App">
      <Header />
      <EmailRender emails={emails} />
      <Timer />
    </div>
  );
}

export default App;
