import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchListItem from './searchListItem';

// Holds a list of searchListItems




class SearchList extends Component {


  render() {
    // unpack the properties object
    const {subjects} = this.props

    return (
      <Grid item key={"post.title"} xs={12} md={12}>
        {subjects.map(subject => (
          <SearchListItem
              subject={subject}
              key={subject.subjectCode}></SearchListItem>
        ))}
      </Grid>
    )
  }
}

// if properties not passed
// Dummy list of subjects
SearchList.defaultProps = {
  subjects: [
    {
      subjectName: "Advanced Computing",
      subjectCode: "COMP9000Y",
      subjectDescription: "The subject where you'll learn everything you didn't learn in undergraduate.",
      subjectRating: 3.5
    },
    {
      subjectName: "Foundations of Computing",
      subjectCode: "COMP10001",
      subjectDescription: "The best computing subject.",
      subjectRating: 4.5
    },
    {
      subjectName: "Foundations of Algorithms",
      subjectCode: "COMP10002",
      subjectDescription: "Program in C with malloc and free.",
      subjectRating: 4
    },
    {
      subjectName: "Software Modelling and Design",
      subjectCode: "SWEN30006",
      subjectDescription: "Design patterns and UML diagrams.",
      subjectRating: 3
    }
  ]
};

export default SearchList;
