import React, { useState, useEffect } from 'react';

function ProjectList() {

    const [dataProject, setDataProject] = useState([])
    const titleBox = "Project List"
    const kodeProject = "Kode Project";
    const PM = "PM";
    const tahapanBAST = "Tahapan BAST";
    const forecastFinance = "Forecast (Finance)";
    const planBast = "Plan BAST";
    const aging = "Aging";
    const remarks = "Remarks";
    const bastAmount = "BAST Amount";
    const internalKickoff = "Internal Kickoff";
    const poSpkReceive =  "PO/SPK Receive";
    const noPoSpk = "No PO/SPK";
    const issueCategory = "Issue Category";
    const issueDescription = "Issue Description";


    useEffect(() => {
        const dataProjectMock =  [{
            kodeProject: "PRJ001",
            PM: "Andi Saputra",
            tahapanBAST: "On Progress",
            forecastFinance: 150000000,
            planBast: "2026-05-01",
            aging: 30,
            remarks: "Waiting vendor delivery",
            bastAmount: 120000000,
            internalKickoff: "2026-03-01",
            poSpkReceive: "2026-03-05",
            noPoSpk: "PO12345",
            issueCategory: "Logistics",
            issueDescription: "Delay in hardware shipment"
          },
          {
            kodeProject: "PRJ002",
            PM: "Budi Santoso",
            tahapanBAST: "Done",
            forecastFinance: 300000000,
            planBast: "2026-04-01",
            aging: 10,
            remarks: "Completed successfully",
            bastAmount: 300000000,
            internalKickoff: "2026-02-01",
            poSpkReceive: "2026-02-03",
            noPoSpk: "PO67890",
            issueCategory: "None",
            issueDescription: "-"
          },
          {
            kodeProject: "PRJ003",
            PM: "Citra Lestari",
            tahapanBAST: "Delayed",
            forecastFinance: 500000000,
            planBast: "2026-06-15",
            aging: 60,
            remarks: "Client requested scope change",
            bastAmount: 200000000,
            internalKickoff: "2026-01-10",
            poSpkReceive: "2026-01-15",
            noPoSpk: "PO11223",
            issueCategory: "Scope",
            issueDescription: "Additional feature requests"
          }
        ];

        setDataProject(dataProjectMock || []);
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
                <th className="p-3 text-left">{kodeProject}</th>
                <th className="p-3 text-left">{PM}</th>
                <th className="p-3 text-left">{tahapanBAST}</th>
                <th className="p-3 text-left">{forecastFinance}</th>
                <th className="p-3 text-left">{planBast}</th>
                <th className="p-3 text-left">{aging}</th>
                <th className="p-3 text-left">{remarks}</th>
                <th className="p-3 text-left">{bastAmount}</th>
                <th className="p-3 text-left">{internalKickoff}</th>
                <th className="p-3 text-left">{poSpkReceive}</th>
                <th className="p-3 text-left">{noPoSpk}</th>
                <th className="p-3 text-left">{issueCategory}</th>
                <th className="p-3 text-left">{issueDescription}</th>
              </tr>
            </thead>

            <tbody>
              {dataProject.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 text-left text-blue-600 font-medium">
                    {item.kodeProject}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.PM}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.tahapanBAST}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.forecastFinance}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.planBast}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.aging}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.remarks}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.bastAmount}
                  </td>            

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.internalKickoff}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.poSpkReceive}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.noPoSpk}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.issueCategory}
                  </td>

                  <td className="p-3 text-left text-green-600 font-medium">
                    {item.issueDescription}
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