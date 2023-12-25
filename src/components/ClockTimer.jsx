import React from "react";

const ClockTimer = () => {
  const date = new Date();

  return (
    <div>
      <p className='lead'>
        This is Current Time :- {date.toLocaleDateString()} -{" "}
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default ClockTimer;
