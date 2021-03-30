import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const useStyles = makeStyles((theme) => ({
    root: {
        verticalAlign: 'middle',
        display: 'flex',
        padding: '200px',
        opacity: 0.5,
        backgroundColor: 'cadetblue',
        //justifyContent: 'center',
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        flex: '0 0 auto',
    },
    cover: {
        width: 700,
        height: 500,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 100,
        width: 100,
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Live From Space
          </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
          </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image="https://media2.giphy.com/media/Yra2PCUYMjOIbx2wgN/200w.webp?cid=ecf05e470o8rm25heaasdatr51v4r7hegx43okee163kulc9&rid=200w.webp"

                title="Music Player Background"
            />
        </Card>
    );
}
