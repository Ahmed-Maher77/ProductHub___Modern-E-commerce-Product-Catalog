import { useState, useEffect } from "react";

const CountTimer = ({ type, limitInDays }) => {
    const [secondsUp, setSecondsUp] = useState(0);
    const [minutesUp, setMinutesUp] = useState(0);
    const [hoursUp, setHoursUp] = useState(0);
    const [daysUp, setDaysUp] = useState(0);

    const totalSeconds = limitInDays * 24 * 60 * 60;
    const [daysDown, setDaysDown] = useState(Math.floor(limitInDays));
    const [hoursDown, setHoursDown] = useState(Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)));
    const [minutesDown, setMinutesDown] = useState(Math.floor((totalSeconds % (60 * 60)) / 60));
    const [secondsDown, setSecondsDown] = useState(Math.floor(totalSeconds % 60));

    // Counter-Down
    const changeTimeDown = () => {
        if (secondsDown > 0) {
            setSecondsDown((prev) => prev - 1);
        } else {
            if (minutesDown > 0) {
                setMinutesDown((prev) => prev - 1);
                setSecondsDown(59);
            } else {
                if (hoursDown > 0) {
                    setHoursDown((prev) => prev - 1);
                    setMinutesDown(59);
                    setSecondsDown(59);
                } else {
                    if (daysDown > 0) {
                        setDaysDown((prev) => prev - 1);
                        setHoursDown(23);
                        setMinutesDown(59);
                        setSecondsDown(59);
                    } else {
                        clearInterval(timeInterval); // Stop when countdown reaches 0
                    }
                }
            }
        }
    };

    // Counter-Up
    const changeTimeUp = () => {
        setSecondsUp((prev) => prev + 1);
        if (secondsUp === 59) {
            setMinutesUp((prev) => prev + 1);
            setSecondsUp(0);
        }
        if (minutesUp === 59) {
            setHoursUp((prev) => prev + 1);
            setMinutesUp(0);
        }
        if (hoursUp === 23) {
            setDaysUp((prev) => prev + 1);
            setHoursUp(0);
        }
    };

    useEffect(() => {
        let timeDownInterval;
        if (type === "countDown") {
            timeDownInterval = setInterval(changeTimeDown, 1000);
        }
        return () => clearInterval(timeDownInterval);
    }, [type, secondsDown]);

    useEffect(() => {
        let timeUpInterval;
        if (type === "countUp") {
            timeUpInterval = setInterval(changeTimeUp, 1000);
        }
        return () => clearInterval(timeUpInterval);
    }, [type, secondsUp]);


    return (
        <div className="countdown-timer d-flex gap-3 justify-content-center mt-5">
            <div className="d-flex flex-column gap-2 border p-2 rounded col">
                <span>{type === 'countDown'? daysDown : daysUp}</span>
                <span>Days</span>
            </div>
            <div className="d-flex flex-column gap-2 border p-2 rounded col">
                <span>{type === 'countDown'? hoursDown : hoursUp}</span>
                <span>Hours</span>
            </div>
            <div className="d-flex flex-column gap-2 border p-2 rounded col">
                <span>{type === 'countDown'? minutesDown : minutesUp}</span>
                <span>Minutes</span>
            </div>
            <div className="d-flex flex-column gap-2 border p-2 rounded col">
                <span>{type === 'countDown'? secondsDown : secondsUp}</span>
                <span>Seconds</span>
            </div>
        </div>
    );
};

export default CountTimer;