import Navbar from "./Navbar";

function Invoices() {
  return (
    <>
      <Navbar role="user" />
      <div className="p-4 flex flex-wrap justify-between bg-gray-100">
        <p className=" text-3xl font-bold ">
          Invoices as of {new Date().toLocaleDateString()}
        </p>
        <button className="bg-blue-500 p-2 text-white rounded">New Invoices</button>
      </div>

      <div className="p-4 bg-gray-100">
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="p-4 bg-white rounded shadow h-[150px] flex flex-col">
            <h2 className="text-2xl font-bold">Paid Invoices</h2>
            <div className="flex-grow flex items-center justify-center">
              <p className="text-4xl font-bold flex flex-wrap">15</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow h-[150px] flex flex-col">
            <h2 className="text-2xl font-bold">Due Invoices</h2>
            <div className="flex-grow flex items-center justify-center">
              <p className="text-4xl font-bold flex flex-wrap">13</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow h-[150px] flex flex-col">
            <h2 className="text-2xl font-bold">Total Invoices</h2>
            <div className="flex-grow flex items-center justify-center">
              <p className="text-4xl font-bold flex flex-wrap">28</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow ">
          <div className="text-2xl font-bold">Invoices</div>
          <div className="mt-4">
            <div className="flex justify-between mb-4">
              <span className="flex-1 text-xl text-center">
                Subscription Renewal
              </span>
              <span className="flex-1 text-xl text-center flex justify-center items-center">
                $300 <span className="text-green-600 ml-2">Paid</span>
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="flex-1 text-xl text-center">
                New Member Signup
              </span>
              <span className="flex-1 text-xl text-center flex justify-center items-center">
                $150 <span className="text-green-600 ml-2">Paid</span>
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="flex-1 text-xl text-center">
                One-Time Purchase
              </span>
              <span className="flex-1 text-xl text-center flex justify-center items-center">
                $450 <span className="text-green-600 ml-2">Paid</span>
              </span>
            </div>

            <div className="flex justify-between">
              <span className="flex-1 text-xl text-center">
                Vehicle Service Fee
              </span>
              <span className="flex-1 text-xl text-center flex justify-center items-center">
                $750 <span className="text-green-600 ml-2">Paid</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Invoices;
