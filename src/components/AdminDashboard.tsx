import ArcChart from "../utils/ArcsChart";
import Navbar from "./Navbar";
import upArrow from "../utils/images/upArrow.png";
import downArrow from "../utils/images/downArrow.png";
import download from "../utils/images/download.png";
import CurveChart from "../utils/CurveCharts";

const AdminDashboard = () => {
  const acrData = [30, 70, 50, 40];

  const curveData = [
    { x: 0, y: 30 },
    { x: 1, y: 50 },
    { x: 2, y: 20 },
    { x: 3, y: 60 },
    { x: 4, y: 40 },
    { x: 5, y: 70 },
    { x: 6, y: 50 },
    { x: 7, y: 80 },
    { x: 8, y: 60 },
    { x: 9, y: 90 },
    { x: 10, y: 70 },
  ];

  return (
    <>
      <Navbar role="admin" />
      <div className="p-4 bg-gray-100">
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="p-4 bg-white rounded shadow h-[230px]">
            <h2 className="text-2xl font-bold">User Distribution</h2>
            <div className="mt-4 flex justify-center">
              <ArcChart data={acrData} />
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow h-[230px] flex flex-col">
            <h2 className="text-2xl font-bold">Total Sales</h2>
            <div className="flex-grow flex items-center justify-center">
              <p className="text-4xl font-bold flex flex-wrap">
                $15,000 <img width="40" height="40  " src={upArrow} alt="up" />
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow h-[230px] flex flex-col">
            <h2 className="text-2xl font-bold">Total Customers</h2>
            <div className="flex-grow flex items-center justify-center">
              <p className="text-4xl font-bold flex flex-wrap">
                <span>120</span>
                <img width="40" height="40" src={downArrow} alt="up" />
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow ">
          <div className="flex flex-wrap justify-between">
            <p className="text-2xl font-bold">Sales Report</p>
            <p className="text-2xl font-bold flex flex-wrap cursor-pointer">
              <img width="30" height="20" src={download} alt="download" />
              <span className="ml-2 text-3xl">PDF</span>
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <CurveChart data={curveData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
