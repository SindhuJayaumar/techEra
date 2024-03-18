import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseItems} = props
  const {id, name, logoUrl} = courseItems

  return (
    <Link to={`courses/${id}`} className="link">
      <div>
        <ul className="course-items">
          <li className="list-items">
            <img src={logoUrl} alt={name} className="logo-course-img" />
            <p className="content">{name}</p>
          </li>
        </ul>
      </div>
    </Link>
  )
}

export default CourseItem
