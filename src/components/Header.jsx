import { useState } from "react";

export default function Header({ doctors, setSearchTerm }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = (e) => {
    const val = e.target.value;
    setInput(val);
    setSearchTerm(val);
    if (val.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = doctors
      .filter((doc) => doc.name.toLowerCase().includes(val.toLowerCase()))
      .slice(0, 3);
    setSuggestions(matches);
  };

  const handleSelect = (name) => {
    setInput(name);
    setSearchTerm(name);
    setSuggestions([]);
  };

  return (
    <div className="bg-primary p-4">
      <div className="max-w-4xl mx-auto relative">
        <input
          type="search"
          value={input}
          onChange={handleInput}
          data-testid="autocomplete-input"
          placeholder="Search Symptoms, Doctors, Specialists, Clinics"
          className="w-full p-3 rounded-md text-sm focus:outline-none bg-blue-300 text-black border-2 border-blue-400 focus:border-primary focus:bg-blue-400 transition-all duration-300"
        />
        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md z-10">
            {suggestions.map((doc, idx) => (
              <div
                key={idx}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                data-testid="suggestion-item"
                onClick={() => handleSelect(doc.name)}
              >
                {doc.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
