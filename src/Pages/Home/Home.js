import React from 'react';
import './Home.css';
import { Grid } from '@material-ui/core';
import Button from '../../Components/Button/Button';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer'
import App from '../../Components/App/App'


function Home() {
    return (
        <Grid container spacing={4}>
            <App />
            <Button buttonName="Library" />
            <Button buttonName="Back" />
            <Button buttonName="New Artist" />
            <Button buttonName="Discover" />
            <MusicPlayer />

        </Grid>
    )
}

export default Home;