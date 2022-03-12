import React from "react";

const Card =({ id, title, artist, author, description, rating, views, mainCover })=>{
    return(
        
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                <img src={mainCover}/>
            </div>

    );
}

export default Card;