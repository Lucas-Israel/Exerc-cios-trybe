import React from 'react';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    const { name, email } = this.props.users;

    return (
      <div className="order">
        <p key={name}>Nome: {name}</p>
        <p key={email}>Email: {email} </p>
      </div>
    );
  }
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

UserProfile.defaultProps = {
  name: 'Não teve usuario',
  email: 'Não teve email'
};

export default UserProfile;