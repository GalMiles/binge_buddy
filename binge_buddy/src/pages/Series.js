import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import '../App.css';
import SeriesCard from '../components/SeriesCard';


function Series() {
    const[series, setSeries] = useState([]);
  
    useEffect(() => {
        fetchSeries();
    }, [])


    const fetchSeries = async () => {
        const {data} = await axios.get('https://api.tvmaze.com/shows');

        console.log(data);
        setSeries(data);
    };
  
    return (
    <div>
        <div className="series"> 
        {series.map((s) => 
        <SeriesCard key={s.id} id={s.id} name={s.name} poster={s.image.medium} description={s.summary}/> )}
        </div>
    </div>
  )
}

export default Series