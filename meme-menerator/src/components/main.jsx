// import React from "react";

// function Main( ){
//     const[meme, setMeme] = React.useState(
//         {
//             topText: "One does not simply",
//             bottomText: "walk into Mordor",
//             imageUrl: ""
//         }
//     );
//     const [memesAll, setMemesAll]=React.useState([])
//     React.useEffect(function(){
//         fetch("https://api.imgflip.com/get_memes")
//         .then(function(response){
//             return(response.json())
//         })

//         .then(function(data){
//             return(setMemesAll(data.data.memes))    
//         })
//     }, [])
     
//     function imgeDisply(){
//         const randomMeme =Math.floor(Math.random()*memesAll.length);
//         const newMeme=memesAll[randomMeme].url;
//         setMeme(prevMeme => ({
//             ...prevMeme, 
//             imageUrl:newMeme
            
//         })) 
//     }

//     function handleChange(event){
//         const {value, name}=event.currentTarget
//         setMeme(function(prevMeme){
//             return({
//                 ...prevMeme, [name]:value
    
//         })
           
//         })
//     }




//     return(
//         <main>
//         <div className="form">
//             <label>Top Text
//                 <input
//                     type="text"
//                     placeholder="One does not simply"
//                     name="topText"
//                     onChange={handleChange}
                    
//                 />
//             </label>

//             <label>Bottom Text
//                 <input
//                     type="text"
//                     placeholder="Walk into Mordor"
//                     name="bottomText"
//                     onChange={handleChange}
//                 />
//             </label>
//             <button onClick={imgeDisply}>Get a new meme image 🖼</button>
//         </div>
//         <div className="meme">
//             <img src={meme.newMeme}  alt="meme"/>
//             <span className="top">{meme.topText}</span>
//             <span className="bottom">{meme.bottomText}</span>
//         </div>
//     </main>
//     )
// }
// export default Main;



import React from "react";

function Main() {
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "walk into Mordor",
        imageUrl: "" // Initially, there is no image
    });
    
    const [memesAll, setMemesAll] = React.useState([]);

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setMemesAll(data.data.memes);
            });
    }, []);

    function imgeDisply() {
        const randomMeme = Math.floor(Math.random() * memesAll.length);
        const newMeme = memesAll[randomMeme].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMeme
        }));
    }

    function handleChange(event) {
        const { value, name } = event.currentTarget;
        setMeme(function(prevMeme) {
            return {
                ...prevMeme,
                [name]: value
            };
        });
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={imgeDisply}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                {meme.imageUrl && (
                    <img src={meme.imageUrl} alt="meme" />
                )}
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}

export default Main;
