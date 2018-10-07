import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PlanSubject from '../common/PlanSubject';
import ReviewTable from '../components/ReviewCell/ReviewTable';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class SubjectPage extends Component {
  constructor(props){
    super(props);
    autoBind(this);
  }

  render() {
      return (
        <div style = {{
            padding: 30,
            paddingTop: 50,
        }}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={8}>
            <Typography variant="display2" gutterBottom color = "textPrimary">
              Sample Subject
            </Typography>
            <div>
              <Typography variant="headline" color= "textSecondary" style = {{
                  padding: 10,
              }}>
                MELU10001
              </Typography>
            </div>
            </Grid>
            {/* Start summary grid */}
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="subheading">
                    Overall: 4/5
                  </Typography>
                  <Typography variant="subheading">
                    Lecturer: 4/5
                  </Typography>
                  <Typography variant="subheading">
                    Content: 4/5
                  </Typography>
                  <Typography variant="subheading">
                    Difficulty: 3/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br/>
        <div>
        <Typography variant="title" color= "textPrimary" style = {{
            padding: 10,
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit tellus et leo tristique dictum.
          Praesent ut fringilla ex. Ut a lacinia ipsum, ut congue ligula. Cras eget tellus vel quam condimentum feugiat.
          Pellentesque nisl nulla, ullamcorper a nisl a, fringilla facilisis elit. Donec finibus justo erat,
          a tristique diam imperdiet vel. Etiam elit ipsum, gravida vitae dolor quis, pellentesque luctus turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas id enim at aliquam. Integer sagittis
          mi a elit vulputate, in lobortis nunc aliquam. Cras vel blandit lacus, et ultricies tellus.
        </Typography>
        <Typography variant="title" color= "textPrimary" style = {{
            padding: 10,
        }}>
          Aenean vehicula odio non hendrerit aliquam. Cras commodo, tellus rhoncus scelerisque molestie,
          risus sem consequat dui, ut porttitor eros lacus dictum mauris. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Ut tristique ligula nunc. Sed ut vulputate metus.
          Ut et arcu ut massa ultricies tempor. Integer efficitur, justo eget imperdiet lacinia, sem orci interdum tellus,
          sit amet viverra arcu sem vitae lacus. Fusce vitae faucibus velit, at vestibulum tortor.
        </Typography>
        </div>
        <div style = {{
          paddingTop:20,
        }}>
          <Button
            variant="raised">
            Link to hand book
          </Button>
        </div>
        <div style = {{
          display: "flex",
          padding:20,
        }}>
        <Typography variant="headline" color= "textSecondary" style = {{
            padding:20,
        }}>
          Prerequisites
        </Typography>
        <div style = {{
          padding:20,
        }}>
        <PlanSubject major='major' />
        </div>
        <div style = {{
          padding:20,
        }}>
        <PlanSubject major='major' />
        </div>
        </div>
        <div style = {{
          display: "flex",
          padding:20,
        }}>
        <Typography variant="headline" color= "textSecondary" style = {{
            padding: 15,
        }}>
          Postrequisites
        </Typography>
        <div style = {{
          padding:20,
        }}>
        <PlanSubject major='major' />
        </div>
        <div style = {{
          padding:20,
        }}>
        <PlanSubject major='elective' />
        </div>
        </div>
        <ReviewTable />
        </div>
        );
  }
}

export default SubjectPage;
