import { useState } from "react";
const statusColor = {
  Confirmed: { bg: "#d1fae5", color: "#065f46", border: "#6ee7b7" },

  Cancelled: { bg: "#fee2e2", color: "#991b1b", border: "#fca5a5" },
};

function BookingsPage() {
  const [bookings, setBookings] = useState(() =>
    JSON.parse(localStorage.getItem("bookings") || "[]"),
  );

  const cancelBooking = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" } : b,
    );
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const deleteBooking = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div
      style={{
        padding: "16rem",
        fontFamily: "sans-serif",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: 26,
          fontWeight: 500,
          color: "#78350f",
          marginBottom: "0.25rem",
        }}
      >
        {/* My Bookings */}
      </h1>
      <p style={{ color: "#92400e", fontSize: 14, marginBottom: "1.5rem" }}>
        {bookings.length} appointment{bookings.length !== 1 ? "s" : ""} found
      </p>

      {bookings.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "5rem",
            background: "#fffbeb",
            borderRadius: 16,
            border: "1px dashed #fcd34d",
            color: "#92400e",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 12 }}>🐾</div>
          <p style={{ fontSize: 16, fontWeight: 500 }}>No bookings yet</p>
          <p style={{ fontSize: 14, opacity: 0.7 }}>
            Book your first appointment to see it here.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {bookings.map((b) => {
            const s = statusColor[b.status] || statusColor.Confirmed;
            return (
              <div
                key={b.id}
                style={{
                  background: "white",
                  borderRadius: 16,
                  border: "1px solid #fde68a",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "0 2px 12px rgba(120,53,15,0.07)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 17,
                        color: "#78350f",
                        margin: 0,
                      }}
                    >
                      {b.name}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#92400e",
                        margin: "2px 0 0",
                      }}
                    >
                      {b.date}
                    </p>
                  </div>
                  <span
                    style={{
                      background: s.bg,
                      color: s.color,
                      border: `1px solid ${s.border}`,
                      borderRadius: 20,
                      padding: "4px 12px",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {b.status}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6px 16px",
                    fontSize: 14,
                    color: "#44403c",
                    marginBottom: 14,
                  }}
                >
                  <span>✉️ {b.email}</span>
                  <span>📞 {b.phone}</span>
                  <span>
                    🐾 {b.petName} — {b.petType}
                  </span>
                  <span>🦴 {b.breed}</span>
                  <span>📋 {b.appointmentType}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    justifyContent: "flex-end",
                  }}
                >
                  {b.status !== "Cancelled" && (
                    <button
                      onClick={() => cancelBooking(b.id)}
                      style={{
                        background: "transparent",
                        color: "#b45309",
                        border: "2px solid #b45309",
                        borderRadius: 10,
                        padding: "7px 18px",
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    onClick={() => deleteBooking(b.id)}
                    style={{
                      background: "#fee2e2",
                      color: "#991b1b",
                      border: "1px solid #fca5a5",
                      borderRadius: 10,
                      padding: "7px 18px",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BookingsPage;
