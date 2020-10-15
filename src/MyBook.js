import React from "react";
import { Grid, Paper, Typography} from '@material-ui/core';
import NavBar from './NavBar';
import { makeStyles } from "@material-ui/core/styles";


function MyBook() {
    const useStyles = makeStyles((theme) => ({
        cardRoot: {
          width: 200,
          height: 200,
          margin: 30
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },

        root: {
            flexGrow: 1,
            margin: 70
          },
          paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
      }));

      
      const classes = useStyles();    
      return (
          <div>
              <NavBar />
              <div className={classes.root}>
                <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}><Typography inline variant='h6' align="left">Title_1</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="right">Due Oct 25, 2020</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="left">Author_1</Typography></Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align='right' style={{color:'red'}}>Overdue: 0 days</Typography></Grid>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align="right" style={{color:'red'}}>Fine:$0.00</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}><Typography inline variant='h6' align="left">Title_2</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="right">Due Oct 28, 2020</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="left">Author_2</Typography></Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align='right' style={{color:'red'}}>Overdue: 3 days</Typography></Grid>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align="right" style={{color:'red'}}>Fine:$0.75</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>             
            </Grid>
          </div>
          </div>
      );
}

export default MyBook;