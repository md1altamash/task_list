import React,{useRef, useState} from 'react';
import Card from './Card';
function Foreground() {

    const ref = useRef(null);

  const data =[
    {
      description : "An example of the card created for the project, thank you!",
      filesize : "0.9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor : "green"},
    },
    {
      description : "An example of the card created for the project, thank you!",
      filesize : "0.9mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Completed", tagColor : "blue"},
    },
    {
      description : "An example of the card created for the project, thank you!",
      filesize : "0.9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor : "green"},
    },
    {
      description : "An example of the card created for the project, thank you!",
      filesize : "0.9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Upload", tagColor : "green"},
    },
    {
      description : "An example of the card created for the project, thank you!",
      filesize : "0.9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Pending", tagColor : "blue"},
    }
  ]

  return (
      <div ref = {ref} className = 'fixed flex top-0 left-0 z-[3] w-full h-full gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card data = {item} refer = {ref}/>
        ))}

      </div>
    
  );
}

export default Foreground;
