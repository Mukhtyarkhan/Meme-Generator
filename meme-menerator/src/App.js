
import './App.css';
import Header from './components/header';
import Main from './components/main';
// import Try from './components/try';
import React from 'react';

function App() {

// const [show, setShow]=React.useState(false)
// function toggle(){
//   return(
//     setShow(function(prevShow){
//       return(!prevShow)
//     })
//   )

// }

  return (
   <>
   <Header/>
   <Main/>

   {/* <main className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            <Try/>
        </main> */}
   {/* <Try/> */}

   </>
  );
}

export default App;
