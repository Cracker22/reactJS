import React from 'react';
import './App.css';
import { memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import Hub from './components/hub/hub';
import SnackbarProvider from 'react-simple-snackbar'

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
        <SnackbarProvider>
               <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Register />}></Route>
                    <Route  path='/hub' element={<Hub/>}></Route>
                </Routes>
            </div>
        </Router>
        </SnackbarProvider>
     
    );


}

export default memo(App);
