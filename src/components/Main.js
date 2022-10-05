import React from "react"
import { Button } from '@cred/neopop-web/lib/components';
import track from './audio/pal_do_pal_ka_shayar.wav';
import DigitRoll from 'digit-roll-react'

function Main() {
    const [audio] = React.useState(new Audio(track))
    const [playing, setPlaying] = React.useState(false)

    const toggle = ()=> setPlaying(prevPlaying => !prevPlaying)

    React.useEffect(()=> {
        playing? audio.play(): audio.pause()
    }, [playing])

    React.useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false))

        return () => {
            audio.removeEventListener("ended", () => setPlaying(false))
        }
    }, [])

    let daysSince = () => {
        let lastIccDay = new Date("06/23/2013")
        let today = new Date()
        let nowMillis = today.getTime()
        return  Math.floor((nowMillis - lastIccDay.getTime()) / (1000 * 3600 * 24))
    }

    return (
        <div className="main">
            <div className="main-text">
                <h3>Days since India's last Men's ICC Trophy </h3>
                <DigitRoll num={daysSince()} length={4} divider="" delay={5} />
            </div>
            <Button
            className="thala-remember"
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            onClick={toggle}
        >
            {playing? "Rehne Do": "Laut Aao Thala"}
        </Button>

      </div>
    )
}

export default Main
