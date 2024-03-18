import {Component} from 'react'
import TailSpin from 'react-loader-spinner'
import CourseItem from '../CourseItem'
import './index.css'

class Home extends Component {
  state = {
    techEraData: [],
    isLoading: true,
    isFailure: false,
  }

  componentDidMount() {
    this.getTechEraData()
  }

  getTechEraData = async () => {
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.courses.map(EachItem => ({
        id: EachItem.id,
        name: EachItem.name,
        logoUrl: EachItem.logo_url,
      }))
      this.setState({
        techEraData: fetchedData,
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
    this.getTechEraData()
  }

  render() {
    const {techEraData, isLoading, isFailure} = this.state
    return (
      <div>
        <h1 className="heading">Courses</h1>
        <div>
          {isLoading ? (
            <div data-testid="loader" className="loader-container">
              <TailSpin color="#4656a1" height="50" width="50" />
            </div>
          ) : (
            <ul className="course-items">
              {techEraData.map(eachList => (
                <CourseItem courseItems={eachList} key={eachList.id} />
              ))}
            </ul>
          )}
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
      </div>
    )
  }
}

export default Home
