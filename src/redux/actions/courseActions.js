import * as types from "./../../Constants";

//this function is called action creator as it creates actions
export function createCourse(course) {
  //all actinos must have type propertyr
  return { type: types.CREATE_COURSE, course: course };

  //this can also be written as
  //return { type: "CREATE_COURSE",course };
  //As course and course matches - SHORTHAND
}
