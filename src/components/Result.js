const Result = ({ rightAnswers, userName }) => {
    return (
        <div style={{dir:"rtl", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", color:"wheat"}}>
            <h1>
                {userName}, סיימת את המבחן.<br /> ענית נכונה על  {rightAnswers} מתוך 3 שאלות.
            </h1>
        </div>
    );
};

export default Result;
