import React from 'react';

class SearchBar extends React.Component
{
    formSubmit=(e)=>
    {// code prevent search words from disappearing 
  e.preventDefault();

    }
    state={variable:''}//state declaration
render()
{   
// all about search bar
if(true)
   { return( 
        <div className='ui massive segment'>
            <form onSubmit={this.formSubmit} className='ui basic yellow form'>   
            <div className='field'>
                <label>Image Search
                <input type='text'placeholder='Enter a word and hit enter'value={this.state.variable} onChange={e=>this.setState({variable:e.target.value})}/>
               </label>
                </div>
            </form>
            {this.state.variable}
        </div>
    )
}
else {<div className="ui spinner"></div>}

}

}
export default SearchBar;
