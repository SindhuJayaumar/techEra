import {Component} from 'react'
import TailSpin from 'react-loader-spinner'
import './index.css'

class CourseItemsDetails extends Component {
  state = {
    techEraDetails: {},
    isLoading: true,
    isFailure: false,
  }

  componentDidMount() {
    this.techEraDetails()
  }

  techEraDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`

    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        techEraDetails: updatedData,
        isLoading: false,
      })
    } else {
      this.setState({
        isFailure: true,
        isLoading: false,
      })
    }
  }

  fetchedDetails = () => {
    this.techEraDetails()
  }

  renderCourseDetails = () => {
    const {techEraDetails, isFailure} = this.state
    const {name, imageUrl, description} = techEraDetails

    return (
      <div>
        <div className="course-details-card">
          <div className="image-side">
            <img src={imageUrl} alt={name} className="courses-image" />
          </div>
          <div className="description-side">
            <h1 className="name">{name}</h1>
            <p className="contents">{description}</p>
          </div>
        </div>
        {isFailure && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
              alt=" failure view"
              className="failure-image"
            />
            <h1>Something Went Wrong</h1>
            <p>We seems to wrong</p>
            <button type="button" onClick={this.fetchedDetails()}>
              Retry
            </button>
          </div>
        )}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="courseDetails-card">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <TailSpin color="#4656a1" height="50" width="50" />
          </div>
        ) : (
          <div>{this.renderCourseDetails()}</div>
        )}
      </div>
    )
  }
}

export default CourseItemsDetails
