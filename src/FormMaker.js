import React from "react";

const Notes = props => {
    return (
        <div className="note-list">
            {props.members.map(people => (
                <div className="note" key={people.id}>
                    <h2>{people.title}</h2>
                    <p>{people.body}</p>
                    <p>{people.body2}</p>
                </div>
            ))}
        </div>
    );
};

export default Notes;