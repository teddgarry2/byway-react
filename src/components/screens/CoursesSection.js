import React from 'react'
import "../../App.css"
import StarIcon from "../assets/icons/star.svg"
import courseData from "../data/courseData"
import { Link } from 'react-router-dom';



function Courses(props) {
  return (
    <>
      <section id="courses">
            <section class="wrapper">
                <section class="courses">
                    <div class="head">
                        <h3>{props.course_title}</h3>
                        <a class="button" href="https://www.steyp.com">See All</a>
                    </div>
                    <div class="body">
                        <ul>

                        {courseData.map((course) => (

                            <Link to={`/course/${course.id}`} className='linkStyle'>
                                <li key={course.id} course={course}>
                                    <img class="bg" src={course.image} alt="Course-Image"/>
                                    <h3>Beginners's Guide to {course.title}</h3>
                                    <small>{course.instructor}</small> 
                                    <div class="rating">
                                        <img src={StarIcon} alt="Star-Icon"/>
                                        <img src={StarIcon} alt="Star-Icon"/>
                                        <img src={StarIcon} alt="Star-Icon"/>
                                        <img src={StarIcon} alt="Star-Icon"/>
                                        <img class="last" src={StarIcon} alt="Star-Icon"/>
                                        ({course.ratings})
                                    </div>
                                    <p>{course.total_hours} Total Hours. {course.no_of_lectures} Lectures. {course.level}</p>
                                    <h3 class="price">${course.price}</h3>
                                </li>
                            </Link>
                            
                        ))}
                
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    </>
  )
}

export default Courses
