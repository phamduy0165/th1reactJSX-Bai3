import React from "react";
import "./App.css";
import TheStarryNight from './picture/The-Starry-Night-1.jpg';

export default function App() {
    return(
        <div className="container">
            <div>Dùng ảnh trong ReactJS</div>
            <img src={TheStarryNight} width = "200" height="180" className='img' />
            <div className='require-title'>Ảnh dùng require</div>
            <img src={require('./picture/The-Starry-Night-1.jpg')} width = "200" height="180" className='img2' />
            <div className='require-title'>Ảnh dùng link online</div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/330px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'className='img2' />
        </div>
    )
}

