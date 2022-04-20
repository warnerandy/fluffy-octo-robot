import React, {useEffect, useState} from 'react';
import {Link, useParams, useLocation, useOutletContext} from "react-router-dom";

function ListView(props) {
  const {header, editable} = props;
  const [action, isAuthenticated] = useOutletContext()
  const match = useParams()
  const location = useLocation()
  const [items, setItems] = useState(['fry', 'bender', 'lela', 'professor', 'hermes'])

  function renderList() {
    return items.map(item => {
      return <li key={item}><Link to={item}>{item}</Link></li>
    })
  }

  
  return <div className="app-content main">
   <div className="jumbotron jumbotron-fluid">
     <div>
       <h1 className="type-list-header"><span className="logo">{header ? header : 'Explore'}</span>
       {action?action():''}
       </h1>
     </div>
   </div>
   <ul>
    {renderList()}
    </ul>
  </div>
}

export default ListView
