import React, { Component } from 'react';


class SavedColorList extends Component {


  render() {
    return (
      <ul>
        <li>
          {Main.state.savedColors.forEach(function (item) {
            console.log(item)
              (< section > {item}</section >)
          })}
        </li>
      </ul>
    );
  }
}

export default SavedColorList;