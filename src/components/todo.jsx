import React from 'react';
import image from '../images/images.png';

const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src= {image} alt="todo-logo" />
            <figcaption>
                Add Your List
            </figcaption>
          </figure>
          <div className="addItems">
            <input 
              type="text" 
              placeholder="✍️ Add item..." 
              className="form-control" 
              value=""
            />
            <i className> + </i>
          </div>
        </div>
       

      </div>
    </>
  )
}

export default Todo;