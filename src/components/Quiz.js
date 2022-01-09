import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FirstQ from './FirstQ';
import SecondQ from './SecondQ';
import ThirdQ from './ThirdQ';
import Result from './Result.js';
import '../style/Quiz.css';

const Quiz = ({ setResult, incressRightAnswers, rightAnswers, userName }) => {
    return (
        <div className='quiz-style' dir='rtl'>
            <CarouselProvider
                lockOnWindowScroll
                className='carousel-provider'
                naturalSlideWidth={100}
                naturalSlideHeight={75}
                totalSlides={4}
                dragEnabled={false}
            >
                <Slider >
                    <Slide index={0}>
                        <FirstQ incressRightAnswers={incressRightAnswers} />
                    </Slide>
                    <Slide index={1}>
                        <SecondQ incressRightAnswers={incressRightAnswers} />
                    </Slide>
                    <Slide index={2}>
                        <ThirdQ incressRightAnswers={incressRightAnswers} setResult={setResult} />
                    </Slide>
                    <Slide index={3}>
                        <Result rightAnswers={rightAnswers} userName={userName}/>
                    </Slide>
                </Slider>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <DotGroup />
                </div>
            </CarouselProvider>
        </div>
    );
};

export default Quiz;
