import LineChart from "../utils/LineChart";
import Navbar from "./Navbar";
import { useUserContext } from "../context/UserContext";

const UserManagement = () => {
  const { username } = useUserContext();
  const curveData = [
    { x: 0, y: 30 },
    { x: 1, y: 50 },
    { x: 2, y: 20 },
    { x: 5, y: 50 },
    { x: 6, y: 30 },
    { x: 9, y: 60 },
    { x: 10, y: 40 },
  ];

  return (
    <>
      <Navbar role="user" />
      <p className=" p-2 text-3xl font-bold bg-gray-100">
        Hey, {username.toUpperCase()}
      </p>
      <div className="p-4 bg-gray-100">
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="p-4 bg-white rounded shadow h-[320px] col-span-2">
            <h2 className="text-2xl font-bold">Sales</h2>
            <div className="mt-2 flex justify-center">
              <LineChart data={curveData} />
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow h-[320px] flex flex-col">
            <h2 className="text-2xl font-bold">Notifications</h2>
            <div className="mt-6">
              <ul>
                <li className="m-2 text-lg">User due is pending of $399</li>
                <li className="m-2 text-lg">
                  Payment of $150 for service completed
                </li>
                <li className="m-2 text-lg">
                  Outstanding balance of $200 for last month
                </li>
                <li className="m-2 text-lg">
                  Invoice of $500 is due in 5 days
                </li>
                <li className="m-2 text-lg">
                  Payment received: $300 for subscription renewal
                </li>
                <li className="m-2 text-lg">
                  User due is pending of $120 for late fees
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow ">
          <div className="text-2xl font-bold">Recently Paid Invoices</div>
          <div className="mt-4">
            <div className="flex justify-between mb-4">
              <span className="flex-1 text-xl text-center">
                Subscription Renewal
              </span>
              <span className="flex-1 text-xl text-center">14:21</span>
              <span className="flex-1 text-xl text-center">$300</span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="flex-1 text-xl text-center">
                New Member Signup
              </span>
              <span className="flex-1 text-xl text-center">15:00</span>
              <span className="flex-1 text-xl text-center">$150</span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="flex-1 text-xl text-center">
                One-Time Purchase
              </span>
              <span className="flex-1 text-xl text-center">16:05</span>
              <span className="flex-1 text-xl text-center">$45</span>
            </div>

            <div className="flex justify-between">
              <span className="flex-1 text-xl text-center">
                Vehicle Service Fee
              </span>
              <span className="flex-1 text-xl text-center">17:30</span>
              <span className="flex-1 text-xl text-center">$75</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
