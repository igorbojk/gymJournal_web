import React from 'react';
import PropTypes from 'prop-types';

class Avatar extends React.Component {

    render() {
        const currentUser = this.props.user;
        const avatarStyles = {
            backgroundImage: currentUser && currentUser.photoUrl ? `url(${currentUser.photoUrl})` : null
        };
        return (
            <div className={'avatar'} style={avatarStyles} onClick={this.props.handleClick}></div>
        )
    }

}

Avatar.propTypes = {
    user: PropTypes.object.isRequired,
    handleClick: PropTypes.func
};

export default Avatar;