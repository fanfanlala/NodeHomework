/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
class User extends Component{
    render(){
        return(
            <div>
                <p>用户：{this.props.username}</p>
                <input type="submit" value='退出' onClick={this.props.click}/>
            </div>
        )
    }
}
export default User;