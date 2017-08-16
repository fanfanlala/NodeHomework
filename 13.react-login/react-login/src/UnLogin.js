/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
class UnLogin extends Component{
    render(){
        return(
            <div>
                <div>未登录</div>
                <input type="button" value='登录' onClick={this.props.click}/>
            </div>
        )
    }
}

export default UnLogin;