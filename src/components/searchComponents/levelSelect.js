import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

// For selecting the subject level
// pass in a prop with the id, the name, and the
class LevelSelect extends React.Component {
  state = {
    level: '',  // subject level
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { inputId, inputValues, classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor={inputId} >Level</InputLabel>
        <Select
          value={this.state.level}
          onChange={this.handleChange}
          inputProps={{
            name: "level",   // "value" needs to be the same as this.state."value"
            id: inputId,
          }}
          displayEmpty>
          {/* Default value if empty*/}
          <MenuItem value={""} key={"None"}><em>Any</em></MenuItem>
          {inputValues.map(value => (
            <MenuItem value={value} key={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

LevelSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

LevelSelect.defaultProps = {
  inputId: "",  // id replace this with something unique. Same id for InputLabel and Select
  inputValues: [1, 2, 3],
};

// export default LevelSelect;
export default withStyles(styles)(LevelSelect);

