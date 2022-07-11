import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const inputEvent = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const addEvent = () => {
    props.passNote(note)
    setNote({
        title: '',
        content: '',
      });
  }
  const expandIt = () => {
    setExpand(true);
}
const shrinkIt = () => {
    setExpand(false);
}
  return (
    <>
      <div className="main_note" onDoubleClick={shrinkIt}>
        <form>
        {
            expand?<input
                    type="text"
                    value={note.title}
                    name="title"
                    onChange={inputEvent}
                    placeholder="Title"
                    autoComplete="off"
                />
                :null
        }
          <textarea
            rows=""
            column=""
            value={note.content}
            name="content"
            onChange={inputEvent}
            onClick={expandIt}
            placeholder="Write a Note..."
          ></textarea>
          {
              expand ?
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
          :null 
          }
        </form>
      </div>
    </>
  );
};

export default CreateNote;
