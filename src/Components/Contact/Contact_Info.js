import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (

        <div  className="card"  style={{ backgroundColor: "rgba(220, 220, 220, 0.4)" ,color: "white",width: "18rem"}}>
        <div  className="card-body">
          <h5  className="card-title">Contact Information</h5>
          <p  className="card-text">{this.props.Address}</p>
          <p  className="card-text">{this.props.Contact_Num}</p>
          
        </div>
      </div>
    )
  }
}
