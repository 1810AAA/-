import React, { Component } from 'react'
import './index.css'
import Child from './l-child'
import Childt from './r-child'
import xufengnian from './img/xufengnian.jpg'
import jiajiajia from './img/姜泥.jpg'
import lichungang from './img/李淳罡3.jpg'
import xuzhihu from './img/徐脂虎3.jpg'
import wenhua from './img/温华.jpg'
import datat from './data.json'

export default class Html extends Component {
    constructor(){
        super();
        this.state ={
            is:'xufengnian'
        }
    }
    handlechange = flag =>{
        // console.log(flag)
        this.setState({
            is:flag
        })
    }
    render() {
        const flag = this.state.is
        const LIST =Object.freeze({
            XUFENGNIAN: {
                id: 'xufengnian',
                dom: 
                    <div>
                        <div>
                           徐凤年<br/>
                            北凉有天狼，背欺北莽，爪压朝堂
                        </div>
                        <div><img src={xufengnian} alt="" className='pic'/></div>
                    </div>
                    
            },
            JIAJIAJIA: {
                id: 'jiajiajia',
                dom:
                <div>
                <div>
                    呵呵姑娘<br/>
                    一世恩仇一枝簪，徐凤年这一路好走
                </div>
                <div><img src={jiajiajia} alt="" className='pic'/></div>
            </div>                    
            },
            LICHUNGANG: {
                id: 'lichungang',
                dom:                     
                <div>
                <div>
                  李淳罡<br/>
                  天不生我李淳罡，万古剑道如长夜
                </div>
                <div><img src={lichungang} alt="" className='pic'/></div>
            </div>
            },
            XUZHIHU: {
                id: 'xuzhihu',
                dom: 
                <div>
                <div>
                   徐脂虎<br/>
                   贫道愿再修三百年，求天开一线，让徐脂虎飞升
                </div>
                <div><img src={xuzhihu} alt="" className='pic'/></div>
            </div>
            },
            WENHUA: {
                id: 'wenhua',
                dom: 
                <div>
                <div>
                   温华<br/>
                   我以手足换手足，敢笑黄巢不丈夫
                </div>
                <div><img src={wenhua} alt="" className='pic'/></div>
            </div>

            },
        })
     
        let Dom =''

        switch(this.state.is){
            case LIST.XUFENGNIAN.id:
                Dom =LIST.XUFENGNIAN.dom
                break
            case LIST.JIAJIAJIA.id:
                Dom =LIST.JIAJIAJIA.dom
                break
            case LIST.LICHUNGANG.id:
                    Dom =LIST.LICHUNGANG.dom
                    break
            case LIST.XUZHIHU.id:
                     Dom =LIST.XUZHIHU.dom
                    break
            case LIST.WENHUA.id:
                     Dom =LIST.WENHUA.dom
                    break
                
        }
        return (
            <div className="b-box">
                <Child dianji={this.handlechange}></Child>
                <Childt  dom={Dom}>
                 
                </Childt>
              
            </div>
        )
    }
}
