import React from "react";

export default function AddProductForm(props) {
  const { name, description, onNameChange, onDescriptionChange, onFormSubmit } =
    props;

  return (
    <>
      <form onSubmit={props.onFormSubmit}>
        <div>
          <label htmlFor="input-name">Name:</label>
          <input
            id="input-name"
            type="text"
            placeholder="Enter the name"
            className="textfield"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-desc">Description:</label>
          <input
            id="input-desc"
            type="text"
            placeholder="Enter the description"
            className="textfield"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation-message">
            {name === "" ? <p>Please enter a name.</p> : null}
            {description === "" ? <p>Please enter a description.</p> : null}
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add product"
            disabled={(name === "") | (description === "")}
          />
        </div>
      </form>
    </>
  );
}
