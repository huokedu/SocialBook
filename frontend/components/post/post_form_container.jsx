import { fetchPost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostForm from './post_form';

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.session.currentUser,
    post: state.post,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);