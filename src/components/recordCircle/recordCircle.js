import { useRef, useState } from "react"
import './recordCircle.css'

export default function RecordCircle() {

    const [goal, setGoal] = useState(70)
    const [score, setScore] = useState(25)
    const goalCircle = useRef(null);
    const goalInput = useRef(null);
    const scoreInput = useRef(null);

    function circleLoad() {
        let goalValue = Number(goalInput.current.value)
        if (goalValue !== goal) {
            let radians = goalValue * -3.6 * Math.PI / 180;
            let top = 70 * (1 - Math.cos(radians)) - 15 * Math.cos(radians);
            let left = 70 * (1 - Math.sin(radians)) - 15 * Math.sin(radians);
            goalCircle.current.style.top = top + 'px';
            goalCircle.current.style.left = left + 'px';
            setGoal(goalValue)
        }
        let scoreValue = Number(scoreInput.current.value)
        if(scoreValue !== score){
            let radians = scoreValue * -3.6 * Math.PI / 180;
            let top = 90 * (1 - Math.cos(radians)) + 5 * Math.cos(radians);
            let left = 90 * (1 - Math.sin(radians)) + 5 * Math.sin(radians);
            let newSVG = "M 90 5 A 85 85 0 " + (scoreValue > 50 ? "1" : "0") +" 1" + left + " " + top
            document.getElementById('recordPath').setAttribute("d", newSVG)
            setScore(scoreValue)
        }
    }

    function validateValues() {
        let exp = new RegExp('^[1-9][0-9]?$|^100$');
        if( exp.test(goalInput.current.value) && exp.test(scoreInput.current.value) ){
            circleLoad();
        }
    }

    return (
        <div className="record">
            <div className="recordCircle">
                <div className="recordCircle__stroke">
                    <svg width="180" height="180">
                        <path id="recordPath" d="M 90 5 A 85 85 0 0 1 175 90" stroke="rgb(79, 140, 255)" strokeWidth="10" fill="transparent" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="recordCircle__score">
                    <p className="recordCircle__score__title">{score}</p>
                    <p className="recordCircle__score__subtitle">score</p>
                </div>
                <div className="recordCircle__goal" ref={goalCircle}>
                    <p className="recordCircle__goal__title">{goal}</p>
                    <p className="recordCircle__goal__subtitle">Goal</p>
                </div>
            </div>

            <div className="recordStats">
                <label className="recordStats__label">Score from 0 to 100</label>
                <input className="recordStats__input" ref={scoreInput} defaultValue={score} />
                <label className="recordStats__label">Set goal</label>
                <input className="recordStats__input"  ref={goalInput} defaultValue={goal}/>
                <button className="recordStats__button" onClick={() => validateValues()}>Apply</button>
            </div>
        </div>
    )
}