export default function DoctorList({ doctors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {doctors.map((doc) => (
        <div
          key={doc.id}
          className="bg-white p-4 rounded-md shadow-md flex flex-col gap-2"
          data-testid="doctor-card"
        >
          <img
            src={doc.photo}
            alt={doc.name}
            className="h-32 w-32 object-cover rounded-full mx-auto"
          />
          <h3 className="text-center font-bold" data-testid="doctor-name">
            {doc.name}
          </h3>
          <p
            className="text-center text-gray-600"
            data-testid="doctor-specialty"
          >
            {doc.specialities.map((s) => s.name).join(", ")}
          </p>
          <p className="text-center" data-testid="doctor-experience">
            {doc.experience}
          </p>
          <p
            className="text-center font-semibold text-primary"
            data-testid="doctor-fee"
          >
            {doc.fees}
          </p>
          {/* Show consultation mode */}
          <div className="text-center text-sm text-gray-500">
            {doc.video_consult && (
              <span
                className="inline-block px-3 py-1 rounded-full text-black bg-blue-300 border border-blue-400"
                data-testid="doctor-consult-mode"
              >
                Video Consult
              </span>
            )}
            {doc.in_clinic && (
              <span
                className="inline-block px-3 py-1 rounded-full text-black bg-yellow-300 border border-yellow-400 ml-2"
                data-testid="doctor-consult-mode"
              >
                In Clinic
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
