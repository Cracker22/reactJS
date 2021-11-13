import React, { useState,useEffect, Component } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import { memo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Register from './components/register/register';
import Hub from './components/hub/hub';
import { setImages } from "./components/redux/action/action"


function App() {
    // const dispatch = useDispatch();

    // console.log("app called devil")

    // useEffect(() => {
    //     console.log("useEffect called devil")
    //     axios.get(`https://picsum.photos/v2/list?limit=30`).then((res) => {
    //         console.log("data called devil")
    //         let responseDatas=res.data.map(responseData=>{
    //             responseData.isLiked=false;
    //             responseData.isDisliked=false;
    //             return responseData
    //         })
    //         console.log("Response data",responseDatas)
    //         dispatch(setImages(responseDatas))
    //     })

    // }, [])

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Register />}></Route>
                    <Route  path='/hub' element={<Hub/>}></Route>
                </Routes>
            </div>
        </Router>
    );


}

export default memo(App);
