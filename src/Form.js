import React, { useState } from "react";
const Form = props => {
    const [dude, setDude] = useState({
        title: '',
        body: '',
        body2: ''
    });
    const handleChanges = e => {
        setDude({ ...dude, [e.target.name]: e.target.value });
        console.log(dude);
    };
    const submitForm = e => {
        e.preventDefault();
        props.newGuy(dude);
        setDude({ title: '', body: '', body2: '' });
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Member Name</label>
            <input
                id="title"
                type="text"
                name="title"
                onChange={handleChanges}
                placeholder="title"
                value={dude.title}
            />
            <label htmlFor="note">Member Role</label>
            <textarea
                id="note"
                name="body"
                onChange={handleChanges}
                value={dude.body}
            />
            <label htmlFor="note">Member Email</label>
            <textarea
                id="note"
                name="body2"
                onChange={handleChanges}
                value={dude.body2}
            />
            <button type="submit">Add Member</button>
        </form>
    );
};

export default Form;