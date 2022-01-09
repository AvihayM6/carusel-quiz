import './App.css';
import Name from './components/Name';
import { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';
import Result from './components/Result';

function App() {
    const [userName, setUserName] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [result, setResult] = useState(null);
    const [rightAnswers, setRightAnswers] = useState(0);
    const incressRightAnswers = () => setRightAnswers(rightAnswers + 1);
    return (
        <div className='app-container'>
            <div className='block'>
                {!isSubmitted && <Name setUserName={setUserName} setIsSubmitted={setIsSubmitted} />}
                {isSubmitted && <Quiz setResult={setResult} incressRightAnswers={incressRightAnswers} setIsSubmitted={setIsSubmitted} rightAnswers={rightAnswers} userName={userName}/>}
            </div>
        </div>
    );
}

export default App;