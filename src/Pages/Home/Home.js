import React from 'react';
import './Home.css';
import { Grid } from '@material-ui/core';
import Button from '../../Components/Button/Button';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer'




function Home() {
    return (
        <Grid container spacing={3}>
            <Button />
            <Button />
            <Button />
            <Button />
            <MusicPlayer />
        </Grid>
    )
}

export default Home;