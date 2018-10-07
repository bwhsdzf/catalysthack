// Represents the form in the search page
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import SearchInput from './searchInput';
import LevelSelect from './levelSelect';
import SemesterSelect from './semesterSelect';
import SearchList from './searchList';
import FacultySelect from './facultySelect';
import SortBySelect from './sortBySelect';


class SubjectSearchForm extends Component {

  state = {
    subjectsList: [],  // subject level
  };

  constructor(props) {
    super(props);
    this.state = {
      subjectsList: subjectsListAll
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);  // Alt: use arrow function
  }

  render() {
    // classes doesn't work?
    // const { classes } = this.props;

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={12}>
              <SearchInput></SearchInput>
              <LevelSelect
                  inputId={"subject-level-simple"}
                  inputValues={[1, 2, 3, 9]}
                  ></LevelSelect>
              <SemesterSelect></SemesterSelect>
              <FacultySelect></FacultySelect>
              <SortBySelect inputValues={["Rating"]}></SortBySelect>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  className={"classes.submit"}
                  >
                Search
              </Button>
            </Grid>
          </Grid>
          <br/>
          {/* Search results */}
          <Typography variant="headline" color="textSecondary"
                  style={{textAlign:"left"}}>
                Search Results
          </Typography>
        </form>
        <SearchList subjects={this.state.subjectsList}></SearchList>
      </div>
    )
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log("Sumbitted the subject search");
    const searchQuery = e.target.elements.search.value;
    const level = e.target.elements.level.value;
    const availability = e.target.elements.availability.value;
    console.log("Faculty:", e.target.elements.faculty.value);

    const sortby = e.target.elements.sortby.value;
    let filtered = subjectsListAll;
    // Filter by search query
    if (searchQuery && searchQuery !== "") {
      const queryLower = searchQuery.toLowerCase();
      filtered = filtered.filter((subject) => {
        return (subject.subjectCode.toLowerCase().indexOf(queryLower) >= 0)
            || (subject.subjectName.toLowerCase().indexOf(queryLower) >= 0);
      });
    }
    // Filter by subject level
    if (level && level !== "") {
      filtered = filtered.filter((subject) => {
        return subject.subjectCode[4] == level;
      });
    }
    // Filter by availability
    if (availability && availability !== "") {
      const availabilities = availability.split(',');
      // keep if any values shared in the two arrays
      filtered = filtered.filter((subject) => {
        for (let i = 0; i < subject.availability.length; i++) {
          const num = subject.availability[i];
          if (availabilities.indexOf(availabilityMap[num]) >= 0) {
            return true;
          }
        }
        return false;
      });
    }
    // Apply the sort
    if (sortby === "") {
      // sort alphabetically
      filtered.sort((subjectA, subjectB) => {
        // should both be ints
        const nameA = subjectA.subjectCode;
        const nameB = subjectB.subjectCode;
        // Compare the two ratings
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
        return 0;
      });
    }
    if (sortby === "Rating") {
      // sort ascending in place
      filtered.sort((subjectA, subjectB) => {
        // should both be ints
        const ratingA = subjectA.subjectRating;
        const ratingB = subjectB.subjectRating;
        // Compare the two ratings
        if(ratingA < ratingB) return 1;
        if(ratingA > ratingB) return -1;
        return 0;
      });
    }
    console.log(filtered)
    this.setState({ subjectsList: filtered });
  }
}

// SubjectSearchForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// List of all subjects before filtering
const subjectsListAll = [
  {
    subjectName: "Advanced Computing",
    subjectCode: "COMP9000Y",
    subjectDescription: "The subject where you'll learn everything you didn't learn in undergraduate.",
    subjectRating: 3.5,
    availability: [1]
  },
  {
    subjectName: "Foundations of Computing",
    subjectCode: "COMP10001",
    subjectDescription: "The best computing subject.",
    subjectRating: 4.5,
    availability: [1, 2]
  },
  {
    subjectName: "Foundations of Algorithms",
    subjectCode: "COMP10002",
    subjectDescription: "Program in C with malloc and free.",
    subjectRating: 4,
    availability: [1, 2]
  },
  {
    subjectName: "Object Oriented Software Development",
    subjectCode: "SWEN20003",
    subjectDescription: "Java, UML diagrams.",
    subjectRating: 4.5,
    availability: [1, 2]
  },
  {
    subjectName: "Software Modelling and Design",
    subjectCode: "SWEN30006",
    subjectDescription: "Design patterns and UML diagrams.",
    subjectRating: 3,
    availability: [1, 2]
  },
  {
    subjectName: "Engineering Systems Design 2",
    subjectCode: "ENGR10003",
    subjectDescription: "Will develop the students' understanding of the engineering method and the importance of engineering in society.",
    subjectRating: 3.5,
    availability: [0, 2]
  },
  {
    subjectName: "Computer Systems",
    subjectCode: "COMP30023",
    subjectDescription: "Networks, processes and things that should have been taught in first year.",
    subjectRating: 4,
    availability: [1]
  },
  {
    subjectName: "Database Systems",
    subjectCode: "INFO20003",
    subjectDescription: "Relational databases, MySQL.",
    subjectRating: 3,
    availability: [1, 2]
  },
  {
    subjectName: "Artificial Intelligence",
    subjectCode: "COMP30024",
    subjectDescription: "Graph search. Before machine learning.",
    subjectRating: 4,
    availability: [1]
  },
  {
    subjectName: "IT Project",
    subjectCode: "COMP30022",
    subjectDescription: "Get thrown into the deep end. Capstone for computing.",
    subjectRating: 2.5,
    availability: [2]
  }
];

// Map from integer (used in subjectsListAll) to form input value
const availabilityMap = {
  0: "Summer",
  1: "Semester 1",
  2: "Semester 2",
  3: "Winter"
}

export default SubjectSearchForm;
