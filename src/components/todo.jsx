import React, {useState} from 'react';
import image from '../images/images.png';

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);


   const changeHandler = (e) => {
      let newInput = e.target.value
      setInput(newInput);
    }

    const clickHandler = () => {
        if(!input) {
            alert("no data")
        } else {
            setItems([...items, input])
            setInput("")
        }
    }

    const delHandler = (id) => {
        console.log(id);
        const updatedValue = items.filter((ele, ind) => {
            return ind !== id;
        })
        setItems(updatedValue)

    }

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
              value={input}
              onChange={changeHandler}
            />
            <i 
            className= "fa fa-plus add-btn" 
            title="add items"
            onClick={clickHandler}
            ></i>
          </div>
          <div className="showItems">
           {items.map((elem, ind) => {
             return (
                <div className="eachItem" key = {ind}>
              <h3>{elem}</h3>
              <i className= "far fa-trash-alt add-btn" 
                 title="Delete items"
                 onClick = {()=>delHandler(ind)}
              >
              </i>
            </div>
             )
           })}
           
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
