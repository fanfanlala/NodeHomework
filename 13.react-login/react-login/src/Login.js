/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
class Login extends Component{
    render(){
        return(
            <div>
                用户名：<input type="text" onChange={this.props.change}/><br/>
                密码：<input type="password"/><br/>
                <input type="submit" value='登录' onClick={this.props.click}/>
            </div>
        )
    }
}
export default Login;