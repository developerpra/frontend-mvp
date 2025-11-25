import {
  faShip,
  faFileInvoice,
  faBoxesStacked,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      {/* WELCOME SECTION */}
      <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">
          Welcome to CAMIN Dashboard
        </h1>
        <p className="text-blue-100 mt-2">
          Manage shipments, invoices, orders, and operations from a single,
          unified workspace.
        </p>
      </div>

      {/* KPI CARDS */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <FontAwesomeIcon icon={faShip} className="text-blue-600 text-3xl" />
          <h2 className="text-xl font-semibold mt-4">Active Voyages</h2>
          <p className="text-gray-600 mt-1">Monitor current ship movements</p>
          <div className="text-3xl font-bold text-blue-700 mt-3">12</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <FontAwesomeIcon
            icon={faFileInvoice}
            className="text-green-600 text-3xl"
          />
          <h2 className="text-xl font-semibold mt-4">Pending Invoices</h2>
          <p className="text-gray-600 mt-1">Invoices waiting for approval</p>
          <div className="text-3xl font-bold text-green-700 mt-3">34</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <FontAwesomeIcon
            icon={faBoxesStacked}
            className="text-yellow-500 text-3xl"
          />
          <h2 className="text-xl font-semibold mt-4">Cargo Files</h2>
          <p className="text-gray-600 mt-1">Total cargo records</p>
          <div className="text-3xl font-bold text-yellow-600 mt-3">258</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="text-purple-600 text-3xl"
          />
          <h2 className="text-xl font-semibold mt-4">Performance</h2>
          <p className="text-gray-600 mt-1">Operational efficiency score</p>
          <div className="text-3xl font-bold text-purple-700 mt-3">92%</div>
        </div>
      </div> */}

      {/* RECENT UPDATES + QUICK LINKS */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Recent Updates</h3>
          <ul className="space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium text-gray-800">New Voyage Added</p>
              <p className="text-gray-500 text-sm">SAV-3184 - American Pride</p>
            </li>

            <li className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-gray-800">
                Invoice #5241 Verified
              </p>
              <p className="text-gray-500 text-sm">Approved by Finance Team</p>
            </li>

            <li className="border-l-4 border-yellow-500 pl-4">
              <p className="font-medium text-gray-800">Cargo File Updated</p>
              <p className="text-gray-500 text-sm">MCK - Jacksonville</p>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Add Voyage
            </button>

            <button className="bg-green-600 text-white px-4 py-3 rounded-lg shadow hover:bg-green-700 transition">
              Create Invoice
            </button>

            <button className="bg-yellow-500 text-white px-4 py-3 rounded-lg shadow hover:bg-yellow-600 transition">
              Add Cargo File
            </button>

            <button className="bg-purple-600 text-white px-4 py-3 rounded-lg shadow hover:bg-purple-700 transition">
              Generate Report
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
