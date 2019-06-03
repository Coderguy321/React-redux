import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  /*
    below code can be written like 
    state = {
        course : {
            title : ""
        }
    }
    this will make the state as clas field , no need to write constructor here
    */
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };
  }

  handleTextChange = event => {
    //spread operator is used to copy
    const CourseCopy = { ...this.state.course, title: event.target.value };
    this.setState({ course: CourseCopy });
  };

  handleSubmit = event => {
    event.preventDefault();
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    // alert(this.state.course.title);

    //this.props.createCourse(this.state.course);

    this.props.actions.createCourse(this.state.course);
  };
  render() {
    console.log(this.props.courses);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h2>this is the course title: {this.state.course.title}</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleTextChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

//mapStateToProps: Basically defines what state is available on the container component.
//(As the function returns the current state which are subscribed from the redux store)
function mapStateToProps(state, ownProps) {
  return {
    //REQUEST ONLY THE DATA THAT COMPONENT NEEDS
    //this courses come combineReducer in index.js
    courses: state.courses
  };
}
///1
// function mapDispatchtoProps(dispatch) {
//   return {
//     createCourse: course => dispatch(courseActions.createCourse(course))
//   };
// }

//2
//WE CAN USE BIND METHOD ALSO TO MAPDISPATCHTOPRPS
function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CoursesPage);

//connect functio connects our COMPONENT with REDUX
//basically calling 2 function one after another
// export default connect(mapStateToProps)(CoursesPage);
