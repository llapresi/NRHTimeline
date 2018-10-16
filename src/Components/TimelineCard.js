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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
    maxWidth: 900,
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
    let { name, images, description, date, classes, source, imageDescriptions, imageSources } = this.props;
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
    if(description === undefined) {
      description = '';
    }
    if (description.length > 170 && expanded === false) {
      description = description.substring(0, 167);
      description += "...";
    }
    

    if (images !== undefined) {
      if (expanded) {
        cardMedia = (
          <Carousel>
            {images.map(function(img, i) {
              return (
                <div>
                  <img src={img} />
                </div>
              );
            })}
          </Carousel>
        );
      } else {
        cardMedia = (
          <CardActionArea onClick={() => this.setState({expanded: !expanded})}>
            <CardMedia
              className={mediaClassToUse}
              image={images[0]}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        );
      }
    }
    if(date !== undefined) {
      if (date.day === undefined && date.month === undefined) {
        dateString = `${date.year}`;
      } else if (date.day === undefined) {
        dateString = `${date.month}/${date.year}`;
      } else {
        dateString = `${date.month}/${date.day}/${date.year}`;
      }
    } else {
      dateString = '';
    }


    return (
      <Card className={cardClassToUse}>
        {cardMedia}
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
          {imageDescriptions !== undefined && expanded
            && (
              <React.Fragment>
                <Typography variant="h6" gutterBottom>
                  Images:
                </Typography>
                {imageDescriptions.map(function(desc, i) {
                  return (
                    <React.Fragment>
                      <Typography variant="body1" gutterBottom>
                        {i+1}: {imageDescriptions[i]}
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        Source: {imageSources[i]}
                      </Typography>
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
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