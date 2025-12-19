import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import { getEquipment } from "./api/equipmentApi";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    sort: "desc",
  });

  const loadEquipment = async () => {
    const res = await getEquipment();
    setEquipment(res.data);
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const filteredEquipment = equipment
    .filter((e) =>
      e.name.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter((e) => (filters.type ? e.type === filters.type : true))
    .sort((a, b) =>
      filters.sort === "asc"
        ? new Date(a.lastCleaned) - new Date(b.lastCleaned)
        : new Date(b.lastCleaned) - new Date(a.lastCleaned)
    );

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #2a0a4a 50%, #7b2cff 100%)",
      }}
    >
      <div
        className="w-full max-w-6xl bg-white rounded-xl p-6
                   shadow-2xl transition-all duration-200
                   hover:shadow-xl"
      >
        <h1 className="text-3xl font-semibold text-slate-800 mb-6">
          Equipment Tracker
        </h1>

        <Filters setFilters={setFilters} />

        <EquipmentForm
          reload={loadEquipment}
          editItem={editItem}
          setEditItem={setEditItem}
        />

        <EquipmentTable
          data={filteredEquipment}
          reload={loadEquipment}
          setEditItem={setEditItem}
        />
      </div>
    </div>
  );
}

export default App;
