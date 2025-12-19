const Filters = ({ setFilters }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <input
        placeholder="Search by name"
        className="flex-1 min-w-[200px] rounded-lg border border-slate-300
                   px-4 py-2 transition-all duration-200
                   focus:ring-2 focus:ring-blue-500"
        onChange={(e) =>
          setFilters((p) => ({ ...p, search: e.target.value }))
        }
      />

      <select
        className="rounded-lg border border-slate-300 px-4 py-2
                   bg-white hover:border-slate-400 transition"
        onChange={(e) =>
          setFilters((p) => ({ ...p, type: e.target.value }))
        }
      >
        <option value="">All Types</option>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select
        className="rounded-lg border border-slate-300 px-4 py-2
                   bg-white hover:border-slate-400 transition"
        onChange={(e) =>
          setFilters((p) => ({ ...p, sort: e.target.value }))
        }
      >
        <option value="desc">Newest Cleaned</option>
        <option value="asc">Oldest Cleaned</option>
      </select>
    </div>
  );
};

export default Filters;
