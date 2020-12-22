import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
	<div id="educational" className="bg-white m-0 jumbotron jumbotron-fluid" style={{backgroundColor:'white'}}>
	      <div className="container container-fluid">
		<div className="row">
		    <div className="col d-lg-inline align-self-center">
			  <h1 className="display-4 pb-4 text-center">Educational</h1>
			    <Timeline align="alternate">

			      <TimelineItem>
				<TimelineOppositeContent>
				  <Typography variant="body" color="textSecondary">
				    September 2010 – July 2015
				  </Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
				  <TimelineDot color="primary">
				    <MenuBookIcon />
				  </TimelineDot>
				  <TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      High school leaving qualification in scientifical studies (Diploma Liceo Scientifico)
				    </Typography>
				    <Typography>Vote: 100/100 </Typography>
				    <Typography>Location: Istituto Istruzione Superiore "P. Mazzone", Roccella Jonica (RC), Italy</Typography>
				  </Paper>
				</TimelineContent>
			      </TimelineItem>

			      <TimelineItem>
				<TimelineOppositeContent>
				  <Typography variant="body" color="textSecondary">
				    September 2015 - September 2018
				  </Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
				  <TimelineDot color="secondary">
				    <SchoolIcon />
				  </TimelineDot>
				  <TimelineConnector />
				</TimelineSeparator>
				<TimelineOppositeContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      Bachelor’s Degree in Computer Science and Engineering (Laurea Triennale in Ingegneria Informatica)
				    </Typography>
				    <Typography>Vote: 110L/110 (with honors)</Typography>
				    <Typography>Location: Università della Calabria, Dipartimento DIMES, Arcavacata di Rende, Cosenza (CS), Italy</Typography>
				  </Paper>
				</TimelineOppositeContent>
			      </TimelineItem>


			      <TimelineItem>
				 <TimelineOppositeContent>
				  <Typography variant="body" color="textSecondary">
				    March 2020 - October 2020
				  </Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
				  <TimelineDot color="primary" variant="outlined">
				    <LaptopMacIcon />
				  </TimelineDot>
				  <TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      CyberChallenge.IT 2020 Project
				    </Typography>
				    <Typography>Location: Università della Calabria, Arcavacata di Rende, Cosenza (CS), Italy</Typography>
				  </Paper>
				</TimelineContent>
			      </TimelineItem>

			      <TimelineItem>
				<TimelineOppositeContent>
				  <Typography variant="body" color="textSecondary">
				    April 2020 – September 2020
				  </Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
				  <TimelineDot color="primary">
				    <MenuBookIcon />
				  </TimelineDot>
                                 <TimelineConnector className={classes.secondaryTail} />
				</TimelineSeparator>
				<TimelineOppositeContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      Percorso di Eccellenza LM DIMES 2020
				    </Typography>
				    <Typography>Location: Università della Calabria, Arcavacata di Rende, Cosenza (CS), Italy</Typography>
				  </Paper>
				</TimelineOppositeContent>
			      </TimelineItem>

			     <TimelineItem>
				<TimelineOppositeContent>
				  <Typography variant="body" color="textSecondary">
				    September 2018 – December 2020
				  </Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
				  <TimelineDot color="secondary">
				    <SchoolIcon />
				  </TimelineDot>
				</TimelineSeparator>
				<TimelineContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      Master’s Degree in Computer Science and Engineering, Cybersecurity (Laurea Magistrale in Ingegneria Informatica, specializzazione Sicurezza Informatica)
				    </Typography>
				    <Typography>Vote: 110L/100 (with honors) </Typography>
				    <Typography>Location: Università della Calabria, Dipartimento DIMES, Arcavacata di Rende, Cosenza (CS), Italy</Typography>
				  </Paper>
				</TimelineContent>
			      </TimelineItem>


			    </Timeline>
	      	   </div>
		</div>
	      </div>
	    </div>
  );
}
