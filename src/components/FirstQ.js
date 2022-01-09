import { ButtonNext } from 'pure-react-carousel';
import { useState } from 'react';
import '../style/FirstQ.css';
import { Alert } from 'bootstrap';

const FirstQ = ({ incressRightAnswers }) => {
    const [isAnswered, setIsAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);


    const question = {
        questionText: 'מה שם המפתח?',
        answerOption: [
            { answerText: 'אביחי', isCorrect: true, id: 1 },
            { answerText: 'אלי', isCorrect: false, id: 2 },
            { answerText: 'דודי', isCorrect: false, id: 3 },
            { answerText: 'יוסי', isCorrect: false, id: 4 },
        ],
    };
    const handleClick = answerOption => {
        setIsAnswered(true);
        setSelectedAnswer(answerOption.id);
        if (answerOption.isCorrect === true) {
            incressRightAnswers();
            alert('ענית על התשובה נכון, לחץ המשך על מנת להתקדם');
        } else {
            alert('ענית על התשובה לא נכון, לחץ המשך על מנת להתקדם');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                dir: 'rtl',
                color: 'wheat',
            }}
        >
        <h1>שאלה 1:</h1>
            <div>
                <h2
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '30px',
                    }}
                >
                    {question.questionText}
                </h2>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {question.answerOption.map(answerOption => (
                        <button
                            key={answerOption.id}
                            style={{ backgroundColor: answerOption.id === selectedAnswer ? 'blue' : '' }}
                            disabled={isAnswered}
                            className='selfBtn'
                            onClick={() => handleClick(answerOption)}
                        >
                            {answerOption.answerText}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonNext className='button' disabled={!isAnswered}>
                    המשך
                </ButtonNext>
            </div>
        </div>
    );
};

export default FirstQ;
