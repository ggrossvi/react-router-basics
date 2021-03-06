import React, { useState} from "react";
import './App.css';


function FakeLogin(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [boxes, setBoxes] = useState([false, false, false]);


    let handleClick = (e) => {
        console.log(e);
        console.log("clicked");
        props.updateLoggedIn();
    }

    let updateBox = (e, boxNum) => {
        let copy = [...boxes];
        copy[boxNum] = e.target.checked;
        setBoxes(copy);
    }

  return (
    <div>
        <form onSubmit={handleClick}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
            <br />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <br />
            <fieldset>
                <label htmlFor="box1">Test checkbox 1</label>
                <input type="checkbox" name="box1" onChange={e => updateBox(e, 0)}/>
                <br />
                <label htmlFor="box2">Test checkbox 2</label>
                <input type="checkbox" name="box2" onChange={e => updateBox(e, 1)}/>
                <br />
                <label htmlFor="box3">Test checkbox 3</label>
                <input type="checkbox" name="box3" onChange={e => updateBox(e, 2)}/>
                <br />
            </fieldset>
            <input type="submit" value="login" />
            <br />
            <div>
                {boxes.map((box, i) => {
                    return (
                        <div key={i}>box {i+1}: {box ? "true": "false"}</div>
                    )
                })}
            </div>
        </form>
    </div>
  );
}

export default FakeLogin;