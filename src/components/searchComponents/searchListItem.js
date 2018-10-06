import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class SearchListItem extends Component {
  render() {
    // unpack the properties object
    const {
      subjectName,
      subjectCode,
      subjectDescription,
      subjectRating
    } = this.props.subject;
    console.log(this.props);

    return (
      <Card className={"classes.card"}>
        <div className={"classes.cardDetails"}>
          <CardContent>
            <Grid container spacing={8} className={"classes.mainGrid"}>
            <Grid item key={"post.title"} xs={8} md={8}>
            <Typography component="h2" variant="headline"
                style={{textAlign:"left"}}>
              {subjectName}
            </Typography>
            <Typography variant="subheading" color="textSecondary"
                style={{textAlign:"left"}}>
              {subjectCode}
            </Typography>
            <Typography variant="body1" paragraph
                style={{textAlign:"left"}}>
              {subjectDescription}
            </Typography>
            {/* <Typography variant="body1" color="primary"
                style={{textAlign:"left"}}>
              Continue reading...
            </Typography> */}
            </Grid>
            <Grid item key={"post.rating"} xs={4} md={4}>
              <p>Rating {subjectRating}/5</p>
            </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    )
  }
}

// if properties not passed
SearchListItem.defaultProps = {
  subject: {
    subjectName: "Advanced Computing",
    subjectCode: "COMPX000Y",
    subjectDescription: "The subject where you'll learn everything.",
    subjectRating: 4
  }
};

export default SearchListItem;
