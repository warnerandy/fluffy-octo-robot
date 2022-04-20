import React, {useState, useEffect} from 'react'
import {Route, Link, NavLink, Outlet, useParams, useNavigate} from "react-router-dom";

function SingleView (props) {
  const navigate = useNavigate();
  const {code} = useParams();
  const {editable} = props;
  const [isEditing, setIsEditing] = useState(false)
  const [item, setItem] = useState({name: code, desc:'some stuff here', labels:['label', 'list', 'here']})
  
  function makeBackCrumb() {
    if (props.editable) {
      return (<li><Link to="/manage">Manage</Link></li>)
    }
    return (<li><Link to="/">Explore</Link></li>)
  }

  function renderEditButton() {
    if (props.editable && !isEditing) {
      return (<a title="edit" onClick={() =>{setIsEditing(true)}} className="edit btn clickable">Edit<i className="fa-solid fa-pencil ico"></i></a>)
    }
    else if (props.editable) {
      return (<a title="cancel edit" onClick={() =>{setIsEditing(false)}} className="edit btn clickable">Cancel<i className="fa-solid fa-ban ico"></i></a>)
    }
  }
  function renderSaveButton() {
    if (isEditing) {
      return (<a title="save" onClick={saveItem} className="save btn clickable">Save<i className="fa-solid fa-floppy-disk ico"></i></a>)
    }
  }

  function renderLabels() {
    if (item && Array.isArray(item.labels)){
      let items = item.labels.map((label) =><li key={label} className="label">{label}</li>)
      return (<ul className="labels">{items}</ul>);
    }
  }

  return <section>
      <ul className="breadcrumbs">
        <div className="app-content">
        {makeBackCrumb()}
        <li>{item.name}</li>
        </div>
      </ul>
      <div className="instance-details app-content main">
        <img src={item.img} className="image"/>
        <div className="title">
          <h4>
            {item.name}
          </h4>
        </div>
        <div className="metadata">
            {renderLabels()}
        </div>
        <div className="download-section">
          <div className="actions">
            {renderEditButton()}
            {renderSaveButton()}
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="content-section">
          {item.desc}
        </div>
      </div>
    </section>
}


export default SingleView