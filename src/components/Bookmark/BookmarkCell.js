import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class BookmarkCell extends React.Component {
    
    remove(id){
        //Code
    }

    render() {
        const { text } = this.props

        return(
            <div style={{
                display: 'static',
                margin: 16,
                paddingBottom: 16,
                borderBottom: '1px solid black'}}>
                <text style={{
                    verticalAlign: '-webkit-baseline-middle', 
                    fontWeight: 'bold',
                }}>
                    { text }
                </text>
                <Button
                    color='secondary'
                    style={{
                        fontWeight: 'bold',
                        float: 'right',
                    }}
                    onClick={() => {
                        this.props.handleRemove(this.props.index);
                    }}
                > 
                    Remove
                </Button>
                {/* <Button color='primary' style={{
                        fontWeight: 'bold',
                        float: 'right',
                    }}>
                    Add
                </Button> */}
                
            </div>
        )
    }
}
  

export default BookmarkCell