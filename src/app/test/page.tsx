"use client";
import React, { useState } from "react";

const App = () => {
    const [questionsCompleted, setQuestionsCompleted] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(10);

    return (
        <div>
            <div className='progress-bar'>
                <div
                    className='progress-bar-fill'
                    // style='animation: fill-progress-bar 1s ease-in-out;'
                ></div>
            </div>
            <div>
                {questionsCompleted} / {totalQuestions}
            </div>
        </div>
    );
};

export default App;
