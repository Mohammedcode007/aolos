import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const InputTags = ({title,selected,setSelected}) => {

  return (
    <div>
      <h3>{title}</h3>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter or comma to add new tag</em>
    </div>
  );
};

export default InputTags
