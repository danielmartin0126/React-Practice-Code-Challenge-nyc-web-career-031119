import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi" id={props.sushi.id}>
      <div className="plate" 
           onClick={props.handleSushiClick} id={props.sushi.id}>
        { 
          props.eaten.includes(props.sushi) ?
            null
          :
            <img id={props.sushi.id} src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details" id={props.sushi.id}>
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi