import React, { useState, useHistory } from "react";
import uuid from "uuid/v4";

function NewColorForm({ add }){
  const [colorObj, setColorObj] = useState({colorName:"", code:"#ffffff"});
  // const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log(value, name)
    setColorObj(formData => ({
      ...formData,
      [name]: value
    }))
  };

  const gatherInput = evt => {
    evt.preventDefault();
    add({...colorObj, id:uuid()});
    setColorObj({colorName:"", code:"#ffffff"});
    // history.push("/colors");
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="colorName">Color:</label>
          <input
            id="colorName"
            name="colorName"
            type="text"
            onChange={handleChange}
            value={colorObj.colorName}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Color Code:</label>
          <input
            id="backgroundColor"
            name="code"
            type="color"
            onChange={handleChange}
            value={colorObj.code}
          />
        </div>
        <button>Add a Color!</button>
      </form>
    </div>
  );
}

export default NewColorForm;
