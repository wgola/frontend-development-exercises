import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const name = "Jan Kowalski"

// const url = "https://www.reactjs.org"

// const element = (
//     <div>
//         <h1>Hello, {name}! <h2><a href={url}>Click here!</a></h2></h1>
//     </div>
// );

// const element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');

// root.render(element);

const tick = () => {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000)
