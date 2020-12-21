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
				  <Typography variant="body1" color="textSecondary">
				    September 2015 – September 2016
				  </Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
				  <TimelineDot color="primary">
				    <SchoolIcon />
				  </TimelineDot>
				  <TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      Eat
				    </Typography>
				    <Typography>Because you need strength</Typography>
				  </Paper>
				</TimelineContent>
			      </TimelineItem>
			      <TimelineItem>
				<TimelineOppositeContent>
				  <Typography variant="body2" color="textSecondary">
				    10:00 am
				  </Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
				  <TimelineDot color="primary">
				    <LaptopMacIcon />
				  </TimelineDot>
				  <TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      Code
				    </Typography>
				    <Typography>Because it&apos;s awesome!</Typography>
				  </Paper>
				</TimelineContent>
			      </TimelineItem>
			      <TimelineItem>
				<TimelineSeparator>
				  <TimelineDot color="primary" variant="outlined">
				    <HotelIcon />
				  </TimelineDot>
				  <TimelineConnector className={classes.secondaryTail} />
				</TimelineSeparator>
				<TimelineContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      Sleep
				    </Typography>
				    <Typography>Because you need rest</Typography>
				  </Paper>
				</TimelineContent>
			      </TimelineItem>
			      <TimelineItem>
				<TimelineSeparator>
				  <TimelineDot color="secondary">
				    <RepeatIcon />
				  </TimelineDot>
				</TimelineSeparator>
				<TimelineContent>
				  <Paper elevation={3} className={classes.paper}>
				    <Typography variant="h6" component="h1">
				      Repeat
				    </Typography>
				    <Typography>Because this is the life you love!</Typography>
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
