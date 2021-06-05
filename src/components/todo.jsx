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
            //   className="form-control" 
              value=""
            />
            <i className= "fa fa-plus add-btn" title="add items"></i>
          </div>
          <div className="showItems">
            <div className="eachItem">
              <h3>Apple</h3>
              <i className= "far fa-trash-alt add-btn" title="Delete items"></i>
            </div>
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All"><span>CHECK LIST</span></button>
          </div>
        </div>
       

      </div>
    </>
  )
}

export default Todo;