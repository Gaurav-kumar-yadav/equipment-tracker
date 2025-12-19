import { deleteEquipment } from "../api/equipmentApi";

const EquipmentTable = ({ data, reload, setEditItem }) => {
  const remove = async (id) => {
    if (confirm("Delete this equipment?")) {
      await deleteEquipment(id);
      reload();
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Cleaned</th>
            <th className="px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr
              key={e._id}
              className="border-t hover:bg-slate-50
                         transition-all duration-150"
            >
              <td className="px-4 py-3 font-medium">{e.name}</td>
              <td>{e.type}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium
                  ${
                    e.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : e.status === "Inactive"
                      ? "bg-gray-200 text-gray-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {e.status}
                </span>
              </td>
              <td>{e.lastCleaned?.slice(0, 10)}</td>
              <td className="px-4 py-3 text-right space-x-3">
                <button
                  className="text-blue-600 hover:underline transition"
                  onClick={() => setEditItem(e)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline transition"
                  onClick={() => remove(e._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-6 text-slate-500">
                No equipment found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTable;
