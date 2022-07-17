import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto tex-center text-title text-uppercase pt-5'>
        <h1 className='dispaly-3'>404</h1>
        <h1>error</h1>
        <h2>page not found</h2>
        <h3>the requested URL <span className='text-danger'>was not found</span> </h3>  
{/* i cant get this.props.location.pathname becuse in thes v it does not exists */}
        </div>
      </div>
      
      </div>
    )
  }
}
