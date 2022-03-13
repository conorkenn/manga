import React from "react";


const CardGrid = (props) =>{
    return(
        
        <div className="container my-12 mx-auto px-6 md: px-12 lg:px-24">
            <div className="flex flex-wrap -mx-1 lg:-mx-55">
                    {props.children}
                </div>
            </div>
        
    );
};


export default CardGrid;