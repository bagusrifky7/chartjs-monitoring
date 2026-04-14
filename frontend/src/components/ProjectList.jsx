import React, { useState, useEffect } from 'react';

function ProjectList() {

    const [dataProject, setDataProject] = useState([])
    const titleBox = "Project List"
    const namaProject = "Project Name"
    const dateProject = "Date Project"

    useEffect(() => {
        const dataProjectMock = [
            { name: "BAST Migration System", date: "12 Apr 2026" },
            { name: "HR Dashboard Revamp", date: "10 Apr 2026" },
            { name: "API Integration SAP", date: "08 Apr 2026" },
            { name: "Frontend Optimization", date: "05 Apr 2026" },
            { name: "Security Audit", date: "01 Apr 2026" },
            { name: "Mobile App Release", date: "28 Mar 2026" },
        ];

        setDataProject(dataProjectMock);
    }, []);

    return (
      <div className="block max-w-6xl mx-auto w-300 h-120 bg-white items-center mt-5 p-6 rounded-2xl shadow-md">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {titleBox}
        </h2>
        <div className='block max-h-90 overflow-y-auto'>
          <table className="w-full border-collapse">
            
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm">
                <th className="p-3 text-left">{namaProject}</th>
                <th className="p-3 text-left">{dateProject}</th>
              </tr>
            </thead>

            <tbody>
              {dataProject.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 text-left text-blue-600 font-medium">
                    {item.name}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.date}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    )
}

export { ProjectList };