import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
  console.log(props);
  return <div>StreamEdit{props.match.params.id}</div>
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(StreamEdit);
