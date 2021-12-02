import React from 'react'
import Banner from "./Banner/Banner";
import Originals from "./RowPost/Originals";
import Drama from './RowPost/Drama';
import CrimeThriller from './RowPost/CrimeThriller';

function Home() {
    return (
        <div>
            <Banner/>
            <Originals title='Netflix Originals'/>
            <CrimeThriller title='CrimeThriller'/>
            <Drama title='Drama'/>
        </div>
    )
}

export default Home
