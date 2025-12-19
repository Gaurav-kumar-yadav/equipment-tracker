import { useEffect, useState } from "react";
import { addEquipment, updateEquipment } from "../api/equipmentApi";

const emptyForm = {
  name: "",
  type: "Machine",
  status: "Active",
  lastCleaned: "",
};

const EquipmentForm = ({ reload, editItem, setEditItem }) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editItem) setForm(editItem);
  }, [editItem]);

  const submit = async (e) => {
    e.preventDefault();
    editItem
      ? await updateEquipment(editItem._id, form)
      : await addEquipment(form);

    setForm(emptyForm);
    setEditItem(null);
    reload();
  };

  return (
    <form className="grid gap-4 md:grid-cols-4 mb-8" onSubmit={submit}>
      <input
        className="rounded-lg border px-4 py-2 transition
                   focus:ring-2 focus:ring-blue-500"
        placeholder="Equipment Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        className="rounded-lg border px-4 py-2 bg-white transition hover:border-slate-400"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select
        className="rounded-lg border px-4 py-2 bg-white transition hover:border-slate-400"
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        className="rounded-lg border px-4 py-2 transition
                   focus:ring-2 focus:ring-blue-500"
        value={form.lastCleaned}
        onChange={(e) =>
          setForm({ ...form, lastCleaned: e.target.value })
        }
      />

      <button
        className="md:col-span-4 bg-blue-600 text-white font-medium py-2.5
                   rounded-lg shadow-md
                   hover:bg-blue-700 hover:shadow-lg
                   active:scale-[0.98]
                   transition-all duration-200"
      >
        {editItem ? "Update Equipment" : "Add Equipment"}
      </button>
    </form>
  );
};

export default EquipmentForm;
