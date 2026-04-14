import React, { useState, useEffect } from 'react';

function BastSummary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock data (replace with API later)
    const mockData = [
      { month: "Jan", open_bast: 12, done_bast: 20, carry_over: 5, progress: 62 },
      { month: "Feb", open_bast: 10, done_bast: 18, carry_over: 4, progress: 64 },
      { month: "Mar", open_bast: 8,  done_bast: 22, carry_over: 3, progress: 73 },
      { month: "Apr", open_bast: 15, done_bast: 25, carry_over: 6, progress: 63 },
      { month: "May", open_bast: 9,  done_bast: 19, carry_over: 2, progress: 68 },
      { month: "Jun", open_bast: 7,  done_bast: 21, carry_over: 3, progress: 75 },
      { month: "Jul", open_bast: 11, done_bast: 24, carry_over: 4, progress: 69 },
      { month: "Aug", open_bast: 6,  done_bast: 20, carry_over: 2, progress: 77 },
      { month: "Sep", open_bast: 13, done_bast: 23, carry_over: 5, progress: 64 },
      { month: "Oct", open_bast: 10, done_bast: 26, carry_over: 3, progress: 72 },
      { month: "Nov", open_bast: 8,  done_bast: 22, carry_over: 2, progress: 73 },
      { month: "Dec", open_bast: 14, done_bast: 28, carry_over: 6, progress: 67 }
    ];

    setData(mockData);
  }, []);

  return (
    <div className="block p-6 bg-gray-100 min-h-screen w-400 items-center">
      <div className="max-w-6xl mx-auto bg-white items-center mt-20 ml-90 rounded-2xl shadow-lg p-6">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {"Bast Summary"}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm">
                <th className="p-3 text-left">Month</th>
                <th className="p-3 text-center">Open</th>
                <th className="p-3 text-center">Done</th>
                <th className="p-3 text-center">Carry Over</th>
                <th className="p-3 text-center">Progress</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-semibold text-gray-700">
                    {item.month}
                  </td>

                  <td className="p-3 text-center text-blue-600 font-medium">
                    {item.open_bast}
                  </td>

                  <td className="p-3 text-center text-green-600 font-medium">
                    {item.done_bast}
                  </td>

                  <td className="p-3 text-center text-yellow-600 font-medium">
                    {item.carry_over}
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-10">
                        {item.progress}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export { BastSummary };