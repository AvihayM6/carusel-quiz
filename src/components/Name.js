import '../style/Name.css';

const Name = ({ setUserName, setIsSubmitted }) => {
    
    return (
        <div
            style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <input type='text' className='input' placeholder='הכנס את שמך' onChange={e => setUserName(e.target.value)} size='50' />
            <button
                className='button custButton2'
                onClick={() => {
                    setIsSubmitted(true);
                }}
            >
                המשך
            </button>
        </div>
    );
};

export default Name;
