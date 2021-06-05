import React from "react"

const PhonebookList = ({ contacts }) => (
    <ul>{contacts.map(({ name, number, id }) => (
        <li key={id}><p>{name}</p><p>{ number}</p></li>
  ))}</ul>
);

export default PhonebookList;