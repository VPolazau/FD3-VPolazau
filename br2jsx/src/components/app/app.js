import React from 'react'
import Br2jsx from '../br2jsx';



import './app.css'

const App = () => {
    let text="первый<br>второй<br/>третий<br />последний";
    return <Br2jsx text={text}/>;
}

export default App