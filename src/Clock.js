import React from 'react';
class Clock extends  React.Component
{
state={tim:''}
componentDidMount()
{

setInterval(()=>{

    this.setState({tim:new Date().toLocaleTimeString()})
},1000)

}
     
render()
{

return(

    <div className="ui large basic blue label">The time is:{this.state.tim}</div>
)


}


}
export default Clock;