import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  
  return (
    <Fragment>
      <div className="belt">
        {
          props.current.map(sushi => <Sushi sushi={sushi} eaten={props.eaten} id={sushi.id} handleSushiClick={props.handleSushiClick}/>)
        }
        <MoreButton handleCurrent={props.handleCurrent} />
      </div>
    </Fragment>
  )
}

export default SushiContainer