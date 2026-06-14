import { useState } from "react";
import Select from "react-select";

const StepDot = ({ num, current }) => {
  const done = current > num;
  const active = current === num;
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 500,
        transition: "all 0.3s",
        background: done ? "#78350f" : active ? "#d97706" : "#fef3c7",
        color: done || active ? "white" : "#b45309",
        border: active ? "none" : done ? "none" : "2px solid #fcd34d",
        boxShadow: active ? "0 0 0 4px #fde68a" : "none",
      }}
    >
      {done ? "✓" : num}
    </div>
  );
};

const StepLine = ({ done }) => (
  <div
    style={{
      flex: 1,
      height: 2,
      borderRadius: 1,
      background: done ? "#b45309" : "#fde68a",
      transition: "background 0.3s",
    }}
  />
);

const Label = ({ icon, children }) => (
  <div
    style={{
      fontSize: 12,
      fontWeight: 500,
      color: "#92400e",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      marginBottom: 6,
    }}
  >
    {icon && <span style={{ marginRight: 4 }}>{icon}</span>}
    {children}
  </div>
);

const inputStyle = {
  border: "2px solid #b45309",
  borderRadius: 14,
  padding: "12px 20px",
  fontSize: 15,
  width: "100%",
  backgroundColor: "#fffbeb",
  color: "#1c1917",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
};

const selectStyles = {
  control: (base, state) => ({
    ...base,
    border: `2px solid ${state.isFocused ? "#d97706" : "#b45309"}`,
    borderRadius: "14px",
    padding: "4px 8px",
    backgroundColor: state.isFocused ? "#fff" : "#fffbeb",
    boxShadow: state.isFocused ? "0 0 0 3px #fde68a" : "none",
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

const handleFocus = (e) => {
  e.target.style.borderColor = "#d97706";
  e.target.style.boxShadow = "0 0 0 3px #fde68a";
  e.target.style.backgroundColor = "#fff";
};

const handleBlur = (e) => {
  e.target.style.borderColor = "#b45309";
  e.target.style.boxShadow = "none";
  e.target.style.backgroundColor = "#fffbeb";
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
    <div style={{ padding: "1.5rem", fontFamily: "sans-serif" }}>
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          background: "white",
          borderRadius: 20,
          boxShadow: "0 4px 24px rgba(120,53,15,0.10)",
          border: "1px solid #fde68a",
          padding: "2.5rem 2rem",
        }}
      >
        {/* Progress stepper */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: "2rem",
          }}
        >
          <StepDot num={1} current={step} />
          <StepLine done={step > 1} />
          <StepDot num={2} current={step} />
          <StepLine done={step > 2} />
          <StepDot num={3} current={step} />
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <div
              style={{
                background: "#fef3c7",
                color: "#92400e",
                border: "1px solid #fcd34d",
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 12,
                fontWeight: 500,
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              👤 Step 1 of 2
            </div>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 500,
                color: "#78350f",
                margin: "4px 0 1.5rem",
              }}
            >
              Your details
            </h1>
            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <Label icon="👤">Full name</Label>
                <input
                  style={inputStyle}
                  placeholder="e.g. Jane Smith"
                  value={form.name}
                  onChange={handleChange("name")}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <Label icon="✉️">Email address</Label>
                <input
                  style={inputStyle}
                  placeholder="e.g. jane@email.com"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <Label icon="📞">Phone number</Label>
                <input
                  style={inputStyle}
                  placeholder="e.g. +91 9876543210"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1.5rem",
              }}
            >
              <button
                onClick={() => setStep(2)}
                style={{
                  background: "linear-gradient(135deg, #d97706, #b45309)",
                  color: "white",
                  padding: "12px 28px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(180,83,9,0.3)",
                }}
              >
                Next step →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <div
              style={{
                background: "#fef3c7",
                color: "#92400e",
                border: "1px solid #fcd34d",
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 12,
                fontWeight: 500,
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              🐾 Step 2 of 2
            </div>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 500,
                color: "#78350f",
                margin: "4px 0 1.5rem",
              }}
            >
              Your pet's details
            </h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <div>
                <Label>Pet's name</Label>
                <input
                  style={inputStyle}
                  placeholder="e.g. Buddy"
                  value={form.petName}
                  onChange={handleChange("petName")}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.5rem",
              }}
            >
              <button
                onClick={() => setStep(1)}
                style={{
                  background: "transparent",
                  color: "#b45309",
                  padding: "12px 28px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "2px solid #b45309",
                  cursor: "pointer",
                }}
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  background: "linear-gradient(135deg, #d97706, #b45309)",
                  color: "white",
                  padding: "12px 28px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(180,83,9,0.3)",
                }}
              >
                Book appointment 📅
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: "#d97706",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
                fontSize: 28,
                color: "white",
              }}
            >
              ✓
            </div>
            <h1
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: "#78350f",
                marginBottom: 8,
              }}
            >
              Appointment booked!
            </h1>
            <p
              style={{ color: "#92400e", fontSize: 15, marginBottom: "1.5rem" }}
            >
              We'll send a confirmation to your email shortly.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button
                onClick={() => {
                  setStep(1);
                  setForm({ name: "", email: "", phone: "", petName: "" });
                  setPetType(null);
                  setBreed(null);
                  setAppointmentType(null);
                }}
                style={{
                  background: "transparent",
                  color: "#b45309",
                  padding: "12px 24px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "2px solid #b45309",
                  cursor: "pointer",
                }}
              >
                Book another +
              </button>
              <button
                onClick={onBooked}
                style={{
                  background: "linear-gradient(135deg, #d97706, #b45309)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(180,83,9,0.3)",
                }}
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
