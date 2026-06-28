import { useState } from "react";
import Select from "react-select";

const StepDot = ({ num, current }) => {
  const done = current > num;
  const active = current === num;
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium transition-all duration-300 ${
        done
          ? "bg-amber-900 text-white"
          : active
            ? "bg-amber-600 text-white ring-4 ring-amber-200 scale-110"
            : "bg-amber-100 text-amber-700 border-2 border-amber-300"
      }`}
    >
      {done ? "✓" : num}
    </div>
  );
};

const StepLine = ({ done }) => (
  <div
    className={`flex-1 h-0.5 rounded-full transition-colors duration-300 ${
      done ? "bg-amber-700" : "bg-amber-200"
    }`}
  />
);

const Label = ({ icon, children }) => (
  <div className="text-xs font-medium text-amber-700 uppercase tracking-wide mb-1.5">
    {icon && <span className="mr-1">{icon}</span>}
    {children}
  </div>
);

const inputClass =
  "w-full border-2 border-amber-700 rounded-2xl px-5 py-3 text-[15px] bg-amber-50 text-stone-900 outline-none transition-all duration-200 focus:border-amber-600 focus:ring-4 focus:ring-amber-200 focus:bg-white box-border";

const primaryBtnClass =
  "bg-gradient-to-br from-amber-600 to-amber-800 text-white px-7 py-3 rounded-xl text-[15px] font-medium border-none cursor-pointer shadow-[0_2px_8px_rgba(180,83,9,0.3)] transition-transform duration-150 hover:scale-105 active:scale-95";

const outlineBtnClass =
  "bg-transparent text-amber-700 border-2 border-amber-700 px-7 py-3 rounded-xl text-[15px] font-medium cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95";

const selectStyles = {
  control: (base, state) => ({
    ...base,
    border: `2px solid ${state.isFocused ? "#d97706" : "#b45309"}`,
    borderRadius: "14px",
    padding: "4px 8px",
    backgroundColor: state.isFocused ? "#fff" : "#fffbeb",
    boxShadow: state.isFocused ? "0 0 0 3px #fde68a" : "none",
    transition: "all 0.2s",
    "&:hover": { borderColor: "#d97706", backgroundColor: "#fff" },
  }),
  placeholder: (base) => ({ ...base, color: "#a16207", opacity: 0.7 }),
  singleValue: (base) => ({ ...base, color: "#1c1917" }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#d97706"
      : state.isFocused
        ? "#fef3c7"
        : "white",
    color: state.isSelected ? "white" : "#1c1917",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #fde68a",
  }),
};

const petOptions = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "rabbit", label: "Rabbit" },
  { value: "bird", label: "Bird" },
];

const breedOptions = [
  { value: "golden", label: "Golden Retriever" },
  { value: "husky", label: "Husky" },
  { value: "persian", label: "Persian Cat" },
];

const appointmentOptions = [
  { value: "checkup", label: "Routine Checkup" },
  { value: "vaccination", label: "Vaccination" },
  { value: "grooming", label: "Grooming" },
  { value: "emergency", label: "Emergency" },
];

function BookingForm({ onBooked }) {
  const [step, setStep] = useState(1);
  const [petType, setPetType] = useState(null);
  const [breed, setBreed] = useState(null);
  const [appointmentType, setAppointmentType] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = () => {
    const booking = {
      id: Date.now(),
      ...form,
      petType: petType?.label || "",
      breed: breed?.label || "",
      appointmentType: appointmentType?.label || "",
      date: new Date().toLocaleString(),
      status: "Confirmed",
    };

    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([booking, ...existing]));
    setStep(3);
  };

  return (
    <div className="px-4 sm:px-8 py-8 md:py-16 font-sans">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-3xl shadow-[0_4px_24px_rgba(120,53,15,0.10)] border border-amber-200 p-6 sm:p-10 animate-[fadeSlideUp_0.4s_ease-out_both]">
        {/* Progress stepper */}
        <div className="flex items-center gap-2 mb-8">
          <StepDot num={1} current={step} />
          <StepLine done={step > 1} />
          <StepDot num={2} current={step} />
          <StepLine done={step > 2} />
          <StepDot num={3} current={step} />
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="animate-[fadeSlideUp_0.35s_ease-out_both]">
            <div className="bg-amber-100 text-amber-700 border border-amber-300 rounded-full px-3.5 py-1 text-xs font-medium inline-block mb-2">
              👤 Step 1 of 2
            </div>
            <h1 className="text-2xl sm:text-3xl font-medium text-amber-900 mt-1 mb-6">
              Your details
            </h1>
            <div className="grid gap-4">
              <div>
                <Label icon="👤">Full name</Label>
                <input
                  className={inputClass}
                  placeholder="e.g. Jane Smith"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div>
                <Label icon="✉️">Email address</Label>
                <input
                  className={inputClass}
                  placeholder="e.g. jane@email.com"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </div>
              <div>
                <Label icon="📞">Phone number</Label>
                <input
                  className={inputClass}
                  placeholder="e.g. +91 9876543210"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button onClick={() => setStep(2)} className={primaryBtnClass}>
                Next step →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="animate-[fadeSlideUp_0.35s_ease-out_both]">
            <div className="bg-amber-100 text-amber-700 border border-amber-300 rounded-full px-3.5 py-1 text-xs font-medium inline-block mb-2">
              🐾 Step 2 of 2
            </div>
            <h1 className="text-2xl sm:text-3xl font-medium text-amber-900 mt-1 mb-6">
              Your pet's details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Pet's name</Label>
                <input
                  className={inputClass}
                  placeholder="e.g. Buddy"
                  value={form.petName}
                  onChange={handleChange("petName")}
                />
              </div>
              <div>
                <Label>Pet type</Label>
                <Select
                  options={petOptions}
                  value={petType}
                  onChange={setPetType}
                  placeholder="Select type"
                  styles={selectStyles}
                />
              </div>
              <div>
                <Label>Breed</Label>
                <Select
                  options={breedOptions}
                  value={breed}
                  onChange={setBreed}
                  placeholder="Select breed"
                  styles={selectStyles}
                />
              </div>
              <div>
                <Label>Appointment type</Label>
                <Select
                  options={appointmentOptions}
                  value={appointmentType}
                  onChange={setAppointmentType}
                  placeholder="Select type"
                  styles={selectStyles}
                />
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className={`${outlineBtnClass} w-full sm:w-auto`}
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                className={`${primaryBtnClass} w-full sm:w-auto`}
              >
                Book appointment 📅
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-4 animate-[fadeSlideUp_0.35s_ease-out_both]">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white shadow-lg animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)_both]">
              ✓
            </div>
            <h1 className="text-xl sm:text-2xl font-medium text-amber-900 mb-2">
              Appointment booked!
            </h1>
            <p className="text-amber-700 text-[15px] mb-6">
              We'll send a confirmation to your email shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setStep(1);
                  setForm({ name: "", email: "", phone: "", petName: "" });
                  setPetType(null);
                  setBreed(null);
                  setAppointmentType(null);
                }}
                className={`${outlineBtnClass} w-full sm:w-auto`}
              >
                Book another +
              </button>
              <button
                onClick={onBooked}
                className={`${primaryBtnClass} w-full sm:w-auto`}
              >
                View my bookings 📅
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
