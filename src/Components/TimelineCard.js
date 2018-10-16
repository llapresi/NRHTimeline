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
    transition: 'all 225ms cubic-bezier(0.4, 0.0, 0.2, 1);'
  },
  cardExpanded: {
    width: '100%',
    maxWidth: 850,
    marginBottom: '2rem',
    marginTop: '2rem',
    transition: 'all 225ms cubic-bezier(0.4, 0.0, 0.2, 1);'
  },
  media: {
    height: 140,
    transition: 'all 225ms cubic-bezier(0.4, 0.0, 0.2, 1);'
  },
  mediaExpanded: {
    height: 600,
    transition: 'all 225ms cubic-bezier(0.4, 0.0, 0.2, 1);'
  },
};

class TimelineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    let { name, image, description, date, classes, source, imageDescription, imageSource } = this.props;
    const { expanded } = this.state;
        
    let cardClassToUse = classes.card;
    let mediaClassToUse = classes.media;
    let buttonText = 'Learn More';
    if (expanded) {
      cardClassToUse = classes.cardExpanded;
      mediaClassToUse = classes.mediaExpanded;
      buttonText = 'Close';
    }


    let cardMedia = '';
    let dateString = '';
    if (description.length > 170 && expanded === false) {
      description = description.substring(0, 167);
      description += "...";
    }

    if (image !== undefined) {
      cardMedia = (
        <CardMedia
          className={mediaClassToUse}
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
      <Card className={cardClassToUse}>
        <CardActionArea onClick={() => this.setState({expanded: !expanded})}>
          {cardMedia}
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography variant="overline" gutterBottom>
            {dateString}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          {source !== undefined && expanded
            && (
              <Typography variant="caption" gutterBottom>
                Source: {source}
              </Typography>
            )
          }
          {imageDescription !== undefined && expanded
            && (
              <React.Fragment>
                <Typography variant="h6" gutterBottom>
                  Image:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {imageDescription}
                </Typography>
              </React.Fragment>
            )
          }
          {imageSource !== undefined && expanded
            && (
              <Typography variant="caption" gutterBottom>
                Image Source: {imageSource}
              </Typography>
            )
          }
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => this.setState({expanded: !expanded})}>
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    );
  }
  
}

TimelineCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default withStyles(styles)(TimelineCard);