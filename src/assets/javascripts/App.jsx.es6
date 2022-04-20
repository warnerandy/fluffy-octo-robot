import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import AppLayout from './layouts/AppLayout'
import ManageLayout from './layouts/ManageLayout'
import ListView from './views/ListView'
import SingleView from './views/SingleView'


function App () {
    const [search, setSearch] = useState();
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout search={search} setSearch={setSearch}/>}>
                    <Route path="manage" element={<ManageLayout />}>
                        <Route index element={<ListView editable header="Manage" />}/>
                        <Route index element={<SingleView editable />}/>
                    </Route>
                    <Route path=":code" element={<SingleView />} />
                    <Route index element={<ListView />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;