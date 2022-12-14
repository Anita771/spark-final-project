import { useState, useEffect } from "react";
import React from "react";
import CourseInfo from "./CourseInfo";
import Nav from "./Nav";
import '../App.css';
import { fetchCourseData } from "../fetch-data.js";


function Home() {
  const [courseData, setCourseData] = useState();
  const fetchData = async function () {
    const data = await fetchCourseData();
    setCourseData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // this is the code to put them in order.
  console.log("courseData", courseData)
  const coursesInOrder = courseData && courseData.data && [...courseData.data.CourseData].sort((a, b) => a.course_name.localeCompare(b.course_name));
  return (
    <div className="App">
      <Nav />
      <section>
        <div className='headline'>
          <h1>Courses</h1>
        </div>
        <div className="section">
          {coursesInOrder && coursesInOrder.map(course => <CourseInfo key={course.id} course={course} />)}
        </div>
      </section>
    </div>
  );
}
export default Home;