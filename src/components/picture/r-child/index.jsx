import React, { Component } from 'react'

export default class Childt extends Component {
    
    render() {
        
        return (
            <div>
                <div className='t-child'> 
                  <p className='buttons'>雪</p>
                  <p className='buttons'>中</p>
                  <p className='buttons'>悍</p>
                  <p className='buttons'>刀</p>
                  <p className='buttons'>行</p>
                </div>
                <div className='s-child'>
                 {this.props.dom}
                 
                </div>
            </div>
        )
    }
}
