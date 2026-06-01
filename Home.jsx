import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Customers from "./pages/Customers.jsx";
import Sales from "./pages/Sales.jsx";
import Procurement from "./pages/Procurement.jsx";
import Inventory from "./pages/Inventory.jsx";
import Accounting from "./pages/Accounting.jsx";
import Hr from "./pages/Hr.jsx";
import Projects from "./pages/Projects.jsx";
import Branches from "./pages/Branches.jsx";
import Admin from "./pages/Admin.jsx";
import Reports from "./pages/Reports.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/80 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 px-4 py-3 overflow-x-auto">
          <Link to="/" className="font-bold text-base mr-2 whitespace-nowrap">falcon-erp-enterprise</Link>
          <div className="flex gap-1 ml-auto">
          <Link to="/" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Dashboard</Link>
          <Link to="/customers" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">CustomerManagement</Link>
          <Link to="/sales" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">SalesManagement</Link>
          <Link to="/procurement" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">ProcurementManagement</Link>
          <Link to="/inventory" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">InventoryManagement</Link>
          <Link to="/accounting" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">FinancialManagement</Link>
          <Link to="/hr" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">HumanResources</Link>
          <Link to="/projects" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">ProjectManagement</Link>
          <Link to="/branches" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">BranchManagement</Link>
          <Link to="/admin" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">SystemAdministration</Link>
          <Link to="/reports" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Analytics</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/hr" element={<Hr />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
      <footer className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2026 falcon-erp-enterprise
      </footer>
    </div>
  );
}
