import React, { Component } from 'react'

export default class Lchild extends Component {
    render() {
        return (
            <div className="l-child">
               <button className='butto' onClick={()=>this.props.dianji('xufengnian')}>
                   徐凤年
               </button>
               <button className='butto' onClick={()=>this.props.dianji('jiajiajia')}>
                   贾嘉佳
               </button>
               <button className='butto' onClick={()=>this.props.dianji('lichungang')}>
                   李淳罡
               </button>
               <button className='butto' onClick={()=>this.props.dianji('xuzhihu')}>
                   徐脂虎
               </button>
               <button className='butto' onClick={()=>this.props.dianji('wenhua')}>
                   温华
               </button>
               
            </div>
        )
    }
}
