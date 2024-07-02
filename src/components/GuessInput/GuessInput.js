import React from 'react';

function GuessInput({setGuess}) {
    const [currentGuess, setCurrentGuess] = React.useState('');
    return (
        <form className="guess-input-wrapper" onSubmit={event => {
            event.preventDefault();
            setGuess(currentGuess);
            setCurrentGuess('');
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" minLength="5" maxLength="5" value={currentGuess} onChange={event => { setCurrentGuess(event.target.value.toUpperCase())}} />
        </form>
    )
}

export default GuessInput;