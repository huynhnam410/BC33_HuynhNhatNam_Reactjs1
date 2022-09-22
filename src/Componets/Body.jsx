import React, { Component } from 'react'
import Banner from './body/Banner'
import Item from './body/Item'

export default class Body extends Component {
  render() {
    return (
      <>
      <div className='py-5'>
      <Banner/>
      <Item/>
      </div>
      
      </>
    )
  }
}
