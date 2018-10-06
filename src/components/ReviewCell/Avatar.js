import React from 'react';

import MuiAvatar from '@material-ui/core/Avatar';

class Avatar extends React.Component {
  render() {
    const { name } = this.props

    return (
      <div style={{ display: 'flex',
        alignItems: 'center',
        paddingTop: 4,
        paddingBottom: 4, 
      }}>
        <MuiAvatar
          src="https://images-fe.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
        />
        <div style={{ paddingLeft: 10 }}>{name}</div>
      </div>
    )
  }
}

Avatar.defaultProps = {
  name: 'Name not defined',
}

export default Avatar;
