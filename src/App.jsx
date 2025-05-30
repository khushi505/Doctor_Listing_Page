import { useEffect, useState } from "react";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import DoctorList from "./components/DoctorList";

export default function App() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modeFilter, setModeFilter] = useState("");
  const [specialtyFilters, setSpecialtyFilters] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setFilteredDoctors(data);
      });
  }, []);

  useEffect(() => {
    let filtered = [...doctors];

    if (searchTerm) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (modeFilter) {
      if (modeFilter === "Video Consult") {
        filtered = filtered.filter((doc) => doc.video_consult);
      } else if (modeFilter === "In Clinic") {
        filtered = filtered.filter((doc) => doc.in_clinic);
      }
    }

    if (specialtyFilters.length > 0) {
      filtered = filtered.filter((doc) =>
        doc.specialities.some((s) =>
          specialtyFilters.some((filter) =>
            s.name.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }

    if (sortOption === "fees") {
      filtered.sort(
        (a, b) =>
          parseInt(a.fees.replace("₹", "")) - parseInt(b.fees.replace("₹", ""))
      );
    } else if (sortOption === "experience") {
      filtered.sort((a, b) => {
        const expA = parseInt(a.experience.split(" ")[0]);
        const expB = parseInt(b.experience.split(" ")[0]);
        return expB - expA;
      });
    }

    setFilteredDoctors(filtered);
  }, [searchTerm, modeFilter, specialtyFilters, sortOption, doctors]);

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow p-4">
        <h1 className="text-2xl font-semibold text-center mb-2 text-blue-800">
          Doctor Listing Page
        </h1>
        <Header doctors={doctors} setSearchTerm={setSearchTerm} />
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-6">
        {/* Filter Panel */}
        <div className="w-full md:w-1/4">
          <FilterPanel
            setModeFilter={setModeFilter}
            setSpecialtyFilters={setSpecialtyFilters}
            setSortOption={setSortOption}
          />
        </div>

        {/* Doctors List */}
        <div className="w-full md:w-3/4">
          <DoctorList doctors={filteredDoctors} />
        </div>
      </div>
    </div>
  );
}
