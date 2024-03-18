import {Switch, Route} from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import NotFound from './Component/NotFound'
import CourseItemsDetails from './Component/CourseItemsDetails'

import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemsDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
