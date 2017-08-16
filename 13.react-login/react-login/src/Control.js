/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
import UnLogin from './UnLogin';
import Login from './Login';
import User from './User';

class Control extends Component{
    constructor(props){
        super(props)
        this.state={
            Allstate:'unLogin',
            username:''
        }
    }

        UnLoginClick = ()=>{
            this.setState({
                Allstate:'login'
            })
        }

        LoginClick = () =>{
            this.setState({
                Allstate:'user'
            })
        }

        UserClick = ()=>{
            this.setState({
                Allstate:'unLogin'
            })
        }

        changeValue=(e)=>{
            this.setState({
                username:e.target.value
            })
        }


    render(){
       if(this.state.Allstate === 'unLogin'){
           return <UnLogin click={this.UnLoginClick}/>
       }
       if(this.state.Allstate === 'login'){
           return <Login click={this.LoginClick} change={this.changeValue}/>
       }
       if(this.state.Allstate === 'user'){
           return <User click={this.UserClick} username={this.state.username}/>
       }

    }
}
export default Control;