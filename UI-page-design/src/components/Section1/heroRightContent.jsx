import React from "react";
import Card from "./Card";

const heroRightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id="right-content" className="flex overflow-x-auto no-scrollbar">
      { props.users.map(function(elems, id)
      {
        console.log(id)
        return < Card id={id+1} img={elems.img} intro={elems.intro} tag={ elems.tag } color={elems.color} />
      }) }
    </div>
  );
};

export default heroRightContent;
