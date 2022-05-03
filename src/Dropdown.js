import React from 'react';

export default function Dropdown({ setSkylineID, setWaterFrontID, setCastleID }) {
  return (
    <div>
      <div>
      Select a Skyline
        {/* this component should have a prop called setSkyline, which is a function */}
        {/* on change, this component should use e.target.value to pass the correct id to the setSkyline function */}
        {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
        <select onChange={(e) => setSkylineID(e.target.value)}>
          <option value='1'>Pink</option>
          <option value='2'>Busy</option>
          <option value='3'>Foggy</option>
        </select>
      </div>
      <div>
      Select a Waterfront
        {/* this component should have a prop called setWaterfront, which is a function */}
        {/* on change, this component should use e.target.value to pass the correct id to the setWaterfront function */}
        {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
        <select onChange={(e) => setWaterFrontID(e.target.value)}>
          <option value='1'>Dock</option>
          <option value='2'>Sunset</option>
          <option value='3'>Boats</option>
        </select>
      </div>
      <div>
      Select a Castle
        {/* this component should have a prop called setCastle, which is a function */}
        {/* on change, this component should use e.target.value to pass the correct id to the setCastle function */}
        {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
        <select onChange={(e) => setCastleID(e.target.value)}>
          <option value="1">Serious</option>
          <option value="2">Mysterious</option>
          <option value="3">Regal</option>
        </select>
      </div>
    </div>
  );
}
