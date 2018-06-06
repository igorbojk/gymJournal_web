import React from 'react';

function List(props) {
    let listItems = props.numbers.map((i) => <li key={i}>{i}</li>);
    return (<ul>{listItems}</ul>);
}

export default List