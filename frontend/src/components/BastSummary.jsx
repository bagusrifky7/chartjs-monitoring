import React, { useState, useEffect } from 'react';
import { formatRupiah, formatPercent } from '../utils/FormatParser';

function BastSummary({ API_URL }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL + "/dashboard/bast/summary?year=2026")
        const result = await res.json()  
        
        setData(result.data || [])
        console.log(result.data)
      } catch (err) {
        console.log(err)
        
      }
    };

    fetchData();
   }, [API_URL]);

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
                    {formatRupiah(item.open_bast)}
                  </td>

                  <td className="p-3 text-center text-green-600 font-medium">
                    {formatRupiah(item.done_bast)}
                  </td>

                  <td className="p-3 text-center text-yellow-600 font-medium">
                    {formatRupiah(item.carry_over)}
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      {/* <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div> */}
                      <span className="text-sm text-gray-600 ml-12 font-bold w-1">
                        {formatPercent(item.progress)}
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