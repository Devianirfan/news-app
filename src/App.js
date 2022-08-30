import React, { useEffect, useState } from 'react';
import Post from './components/Posts/Post';
import Navbar from './components/Navbar';
import Data from "./data.json"


const App = () => {

    const [data, setData] = useState(Data);
    const [selectedLevel, setSelectedLevel] = useState('');

    useEffect(() => {
        console.log(selectedLevel)
        const filteredData = Data.filter((item) => item.level === selectedLevel)
        if (selectedLevel) {
            setData(filteredData)
        } else {
            setData(Data)
        }
    }, [selectedLevel])

    return (
        <div>
            <div>WELCOME TO MY NEWS</div>
            <Navbar setSelectedLevel={(e) => setSelectedLevel(e)} />
            <Post data={data} />
        </div>
    );
};

export default App;