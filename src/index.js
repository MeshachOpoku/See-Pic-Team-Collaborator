import React from 'react';
import {createRoot} from 'react-dom/client';
import SearchBar from './SearchBar';
import Clock from './Clock';

const App=()=>
{// maim platform for dispaying components created
    return<div>
       
           <div className="ui primary label">
           <div className="ui massive blue label">See-Pic</div>
             <div style={{fontSize:'26px'}} className='ui   label'><i className="icon medium picture "></i></div>
            <div className="ui large basic blue label">Nice pics......</div>   <br/> <br/> <br/>
         </div><br/>
         <Clock/>
<SearchBar/>
    </div>
}

const rootConnection=createRoot(document.getElementById('root')).render(<App/>);
