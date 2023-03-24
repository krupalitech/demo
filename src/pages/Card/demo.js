// import React from 'react'

// const DemoTest = () => {
//   return (
//     <>
    
//     </>
//   )
// }

// export default DemoTest;





import React, { useState } from 'react';

function DemoTest() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const shuffleData = () => {
    const shuffledData = shuffle(data);
    setData(shuffledData);
  };

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div>
      <button onClick={shuffleData}>Shuffle Data</button>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoTest;
