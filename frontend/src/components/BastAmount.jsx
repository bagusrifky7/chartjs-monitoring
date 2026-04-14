import React, { useState } from 'react';

function TotalBastAmount() {
    const titleBoxName = "Total BAST Amount"
    
    return (
    <div className="block bg-white shadow-md rounded-2xl p-5 w-150 h-85">
      <h2 className="text-2xl justify-self-center font-bold font-medium text-gray-500">
        {titleBoxName}
      </h2>
      <p className="font-bold text-8xl justify-self-center mt-20 text-blue-600 mt-2">
        {0}
      </p>
    </div>
  );
}

export { TotalBastAmount };