import React from "react"


const PhonebookFilter = ({ filterName, onChangeFilter }) => {
  return (
    <div>
      <label>
        <p>Filter contacts</p>
        <input
          type="text"
          name="filter"
          id=""
          value={filterName}
          onInput={onChangeFilter}
        />
      </label>
    </div>
  );
};



export default PhonebookFilter;