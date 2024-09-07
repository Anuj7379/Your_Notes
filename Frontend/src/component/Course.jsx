import React from 'react'
import list from '../assets/list.json'
import  Cards from './Cards'


function Course() {
  return (
    <>
    <div className="md:my-24 my-20">
      <div className="text-center md:text-4xl text-2xl dark:text-white">
        <h1 className="py-5">
          Paid Notes are <span className="text-red-400">here!</span>
        </h1>
        <div className="mb-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/143/197/non_2x/abstract-red-stripes-and-dots-sparse-pattern-background-and-texture-vector.jpg"
            alt="Background Pattern"
            className="w-full md:h-52 h-24 object-cover"
          />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {list.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
    </div>
  </>
  )
}

export default Course;
