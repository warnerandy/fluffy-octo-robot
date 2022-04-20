import React, {useState, useEffect} from 'react'
import Login from "../auth/Login";
import ReactModal from 'react-modal';
import {Outlet, useNavigate} from "react-router-dom";

ReactModal.setAppElement('#root');

function ManageLayout() {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [authMessage, setAuthMessage] = useState('');

  function logOutUser() {
    logout().then(() =>{
      goHome()
    })
  }

  function loginUser(username, password) {
    login({username: username, password: password})
    .then(json => {
      setAuthenticated(true)
      //dont really need this but worth knowing its there
    })
    .catch((e) => {
      setAuthenticated(false)
      setAuthMessage(e.message)
    })
  }

  function goHome() {
    navigate("/", { replace: true });
  }
  if (!isAuthenticated) {

  }

  function action() {
    if (!isAuthenticated) {
      return
    }
    return (<div className="actions"><Upload />
        <button className="logout" onClick={logOutUser}>Logout</a></button>)
  }
  
   return <React.Fragment>
      <ReactModal isOpen={!isAuthenticated} className="marketplace-modal">
        <Login
          loginUser={loginUser}
          authMessage={authMessage}
          isAuthenticated={isAuthenticated}
          onRequestClose={goHome}
          />
      </ReactModal>
      <Outlet context={[action, isAuthenticated]}/>
    </React.Fragment>
}


// ManageLayout.propTypes = {
//   users: array
// }

export default ManageLayout