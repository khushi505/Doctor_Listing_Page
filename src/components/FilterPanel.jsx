export default function FilterPanel({
  setModeFilter,
  setSpecialtyFilters,
  setSortOption,
}) {
  const specialties = [
    "General Physician",
    "Dentist",
    "Dermatologist",
    "Paediatrician",
    "Gynaecologist",
    "ENT",
    "Diabetologist",
    "Cardiologist",
    "Physiotherapist",
    "Endocrinologist",
    "Orthopaedic",
    "Ophthalmologist",
    "Gastroenterologist",
    "Pulmonologist",
    "Psychiatrist",
    "Urologist",
    "Dietitian/Nutritionist",
    "Psychologist",
    "Sexologist",
    "Nephrologist",
    "Neurologist",
    "Oncologist",
    "Ayurveda",
    "Homeopath",
  ];

  const handleSpecialtyChange = (e) => {
    const value = e.target.value;
    setSpecialtyFilters((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="bg-white p-4 shadow rounded-md space-y-6 sticky top-6 z-10">
      {/* Consultation Mode Section */}
      <div>
        <h2 className="font-bold mb-2" data-testid="filter-header-moc">
          Consultation Mode
        </h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="mode"
              value="Video Consult"
              onChange={(e) => setModeFilter(e.target.value)}
              data-testid="filter-video-consult"
            />
            Video Consult
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="mode"
              value="In Clinic"
              onChange={(e) => setModeFilter(e.target.value)}
              data-testid="filter-in-clinic"
            />
            In Clinic
          </label>
        </div>
      </div>

      {/* Speciality Section */}
      <div>
        <h2 className="font-bold mb-2" data-testid="filter-header-speciality">
          Speciality
        </h2>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {specialties.map((spec) => (
            <label key={spec} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={spec}
                onChange={handleSpecialtyChange}
                data-testid={`filter-specialty-${spec.replaceAll(" ", "-")}`}
              />
              {spec}
            </label>
          ))}
        </div>
      </div>

      {/* Sort Section */}
      <div>
        <h2 className="font-bold mb-2" data-testid="filter-header-sort">
          Sort
        </h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              onChange={() => setSortOption("fees")}
              data-testid="sort-fees"
            />
            Fees (Low to High)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              onChange={() => setSortOption("experience")}
              data-testid="sort-experience"
            />
            Experience (High to Low)
          </label>
        </div>
      </div>
    </div>
  );
}
