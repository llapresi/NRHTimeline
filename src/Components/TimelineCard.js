import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '90%',
    maxWidth: 600,
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  media: {
    height: 140,
  },
};

const TimelineCard = ({ name, image, description, date, classes }) => {
  let cardMedia = '';
  let dateString = '';
  if (description.length > 170) {
    description = description.substring(0, 167);
    description += "...";
  }

  if (image !== undefined) {
    cardMedia = (
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
    );
  }

  if (date.day === undefined && date.month === undefined) {
    dateString = `${date.year}`;
  } else if (date.day === undefined) {
    dateString = `${date.month}/${date.year}`;
  } else {
    dateString = `${date.month}/${date.day}/${date.year}`;
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {cardMedia}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography variant="overline" gutterBottom>
            {dateString}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

TimelineCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default withStyles(styles)(TimelineCard);