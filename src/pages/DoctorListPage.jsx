import { useEffect, useState } from "react";
import AutocompleteSearch from "../components/AutocompleteSearch";
import FilterPanel from "../components/FilterPanel";
import DoctorCard from "../components/DoctorCard";
import { fetchDoctors } from "../utils/api";
import { useSearchParams } from "react-router-dom";

export default function DoctorListPage() {
  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchDoctors().then(setDoctors);
  }, []);

  useEffect(() => {
    const query = Object.fromEntries([...searchParams]);
    let filteredList = [...doctors];

    if (query.search) {
      filteredList = filteredList.filter((d) =>
        d.name.toLowerCase().includes(query.search.toLowerCase())
      );
    }
    if (query.mode) {
      filteredList = filteredList.filter((d) => d[query.mode] === true);
    }
    if (query.speciality) {
      const specs = query.speciality.split(",");
      filteredList = filteredList.filter((d) =>
        d.specialities.some((s) => specs.includes(s.name))
      );
    }
    if (query.sort === "fees") {
      filteredList.sort(
        (a, b) =>
          parseInt(a.fees.replace(/[^\d]/g, "")) -
          parseInt(b.fees.replace(/[^\d]/g, ""))
      );
    }
    if (query.sort === "experience") {
      filteredList.sort(
        (a, b) => parseInt(b.experience) - parseInt(a.experience)
      );
    }
    setFiltered(filteredList);
  }, [doctors, searchParams]);

  return (
    <div className="flex">
      <FilterPanel
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="flex-1 p-4">
        <AutocompleteSearch
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
