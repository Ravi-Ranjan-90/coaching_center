// import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import summaryApi from './common';
import { ToastContainer} from 'react-toastify';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

// ------


function App() {
  const dispatch = useDispatch();
  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(summaryApi.current_user.url, {
      method: summaryApi.current_user.method,
      credentials: "include",
    })
      const dataApi = await dataResponse.json()

      if(dataApi.success){
        dispatch(setUserDetails(dataApi.data));
        
      }
      console.log(summaryApi.current_user.url)
      console.log("data-user",dataApi)
      }
  useEffect(()=>{
    fetchUserDetails()
  },[])
  return (
    <div className="App">
     <>
     <Context.Provider value={{
      fetchUserDetails
     }}>
     <ToastContainer />
     <Header/>
     <main className='min-h-[calc(100vh-120px)]'>
     <Outlet/>
     </main>
     <Footer/>
     </Context.Provider>
     </>
    </div>
  );
}

export default App;
