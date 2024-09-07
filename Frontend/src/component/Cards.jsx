import React from "react";

function Cards({ item }) {
  return (
    <div className="  mt-4 my-14 p-6">
      <div className="card w-92 text-white bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900  dark:border">
        <figure className="h-44">
          <img src={item.image} alt="Shoes" className="w-full md:h-52" />
        </figure>
        <div className="card-body sm:h-48 ">
          <div className="badge badge-secondary">NEW</div>
          <h2 className="card-title">{item.name}</h2>

          <div className="mx-4 card-actions absolute bottom-2  ">
            <div className="badge badge-outline mt-2 ">${item.price}</div>
            <button className="badge badge-outline bg-red-400 hover:bg-pink-500 lg:ml-20 px-5 py-4">
              By Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
