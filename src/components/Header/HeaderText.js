import React, { useState, useEffect } from 'react'
import Typist from 'react-typist';
import "./Header.css"


const HeaderText = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
    }, [count]);

    return(
        <div>
            <h2>
                My Name is <em className="Header-name">Dakota Rennemann</em>
            </h2>
            <h2 className="Header-typist">
                <span id="Header-static">I Strive to</span>
                &nbsp;
                <div>
                    {count ? (
                        <Typist className ="MyTypist" avgTypingDelay={80} onTypingDone={() => setCount(0)} startDelay={1000}>
                            <em>Design Solutions</em>
                            <Typist.Backspace count={16} delay={3000} />
                            <em>Solve Problems</em>
                            <Typist.Backspace count={14} delay={3000} />
                            <em>Innovate</em>
                            <Typist.Backspace count={8} delay={3000} />
                        </Typist>
                    ) : (
                        ""
                    ) }
                </div>
            </h2>
        </div>
    )
}

export default HeaderText;