// for multipal input
import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });  // so that we have only one state that check for changes 

  let inputChange = (event) => {
    // let feildName = event.target.name;
    // let feildValue = event.target.value;

    // setFormData((currData) => {
    //   return { ...currData, [feildName]: feildValue }; //for learning 
    // })
    
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    })
  } // a common fuction to chnage tkaes 2 var target name & target value

let handleSubmit = (event) => {
  event.preventDefault();
  setFormData({
    fullName: "",
    username: "",
  })
} // so that we can remove all the default submit

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName"> Full Name </label>
      <input
        placeholder="enter full name"
        type="text"
        value={formData.fullName}
        onChange={inputChange}
        id="fullName"
        name="fullName"
      /> 
      <br></br>
      <label htmlFor="username"> Username </label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.username}
        onChange={inputChange}
        id="username"
        name="username"
      />
      <br></br>
      <button>
        submit
      </button>
    </form>
  );
}
