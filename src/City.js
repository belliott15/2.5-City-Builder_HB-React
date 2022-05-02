import React from 'react';

export default function City({ skylineID, waterFrontID, castleID }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castleId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img src={ `skyline-${skylineID}.jpeg`} />
      <img src={ `waterfront-${waterFrontID}.jpeg`} />
      <img src={ `castle-${castleID}.jpeg`} />
    </div>
  );
}
