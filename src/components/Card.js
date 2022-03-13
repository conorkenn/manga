import React from "react";

const Card =({ id, title, artist, author, description, rating, views, mainCover })=>{
    return(

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt={title} class="block h-auto w-full" src={mainCover}/>
                </a>          

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            {title}
                        </a>
                    </h1>
                </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <p className="ml-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </footer>

            </div>
        </div>




    );
}

export default Card;