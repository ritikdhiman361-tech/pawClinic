import { useState } from "react";
import { useNavigate } from "react-router-dom";

const statusClasses = {
  Confirmed: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Cancelled: "bg-red-100 text-red-800 border-red-300",
};

function BookingsPage() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(() =>
    JSON.parse(localStorage.getItem("bookings") || "[]"),
  );
  // Tracks ids currently playing their exit animation, so the card
  // animates out before it actually disappears from the list.
  const [removingIds, setRemovingIds] = useState(() => new Set());

  // ----- Logged-in user info -----
  const currentUserEmail = localStorage.getItem("currentUserEmail");
  const registeredUsers = JSON.parse(
    localStorage.getItem("registeredUsers") || "[]",
  );
  const currentUser = registeredUsers.find((u) => u.email === currentUserEmail);
  const displayName =
    currentUser?.name ||
    (currentUserEmail === "admin@gmail.com" ? "Admin" : currentUserEmail) ||
    "your account";

  // The demo admin account can see every booking; everyone else only
  // sees bookings they personally made.
  const isAdmin = currentUserEmail === "admin@gmail.com";
  const visibleBookings = isAdmin
    ? bookings
    : bookings.filter((b) => b.userEmail === currentUserEmail);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUserEmail");
    navigate("/login", { replace: true });
  };

  const cancelBooking = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" } : b,
    );
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const deleteBooking = (id) => {
    setRemovingIds((prev) => new Set(prev).add(id));
    setTimeout(() => {
      const updated = bookings.filter((b) => b.id !== id);
      setBookings(updated);
      localStorage.setItem("bookings", JSON.stringify(updated));
      setRemovingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 220);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-12 font-sans">
      {/* Logged-in user status */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 mb-6 text-sm animate-[fadeSlideUp_0.35s_ease-out_both]">
        <div className="flex items-center gap-2 text-amber-800">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span>
            Logged in as <span className="font-medium">{displayName}</span>
            {currentUser?.petName && (
              <span className="text-amber-600">
                {" "}
                · {currentUser.petName}'s parent
              </span>
            )}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="text-amber-700 hover:text-amber-900 underline text-xs font-medium transition"
        >
          Log out
        </button>
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold text-amber-900 mb-1">
        {isAdmin ? "All Bookings" : "My Bookings"}
      </h1>
      <p className="text-amber-700 text-sm mb-6">
        {visibleBookings.length} appointment
        {visibleBookings.length !== 1 ? "s" : ""} found
      </p>

      {visibleBookings.length === 0 ? (
        <div className="text-center py-16 sm:py-20 px-6 bg-amber-50 rounded-2xl border border-dashed border-amber-300 text-amber-700 animate-[fadeSlideUp_0.4s_ease-out_both]">
          <div className="text-4xl mb-3 inline-block animate-[wiggle_1.8s_ease-in-out_infinite]">
            🐾
          </div>
          <p className="text-base font-medium">No bookings yet</p>
          <p className="text-sm opacity-70">
            Book your first appointment to see it here.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {visibleBookings.map((b, i) => {
            const statusClass =
              statusClasses[b.status] || statusClasses.Confirmed;
            const isRemoving = removingIds.has(b.id);
            return (
              <div
                key={b.id}
                style={{ animationDelay: isRemoving ? "0ms" : `${i * 60}ms` }}
                className={`bg-white rounded-2xl border border-amber-200 p-5 sm:p-6 shadow-[0_2px_12px_rgba(120,53,15,0.07)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(120,53,15,0.15)] ${
                  isRemoving
                    ? "animate-[fadeOutDown_0.22s_ease-in_forwards]"
                    : "opacity-0 animate-[fadeSlideUp_0.45s_ease-out_forwards]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <p className="font-medium text-lg text-amber-900 m-0">
                      {b.name}
                    </p>
                    <p className="text-[13px] text-amber-700 mt-0.5">
                      {b.date}
                    </p>
                  </div>
                  <span
                    key={b.status}
                    className={`inline-block self-start border rounded-full px-3 py-1 text-xs font-medium ${statusClass} animate-[popIn_0.35s_cubic-bezier(0.34,1.56,0.64,1)_both]`}
                  >
                    {b.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-stone-700 mb-4">
                  <span>✉️ {b.email}</span>
                  <span>📞 {b.phone}</span>
                  <span>
                    🐾 {b.petName} — {b.petType}
                  </span>
                  <span>🦴 {b.breed}</span>
                  <span>📋 {b.appointmentType}</span>
                </div>

                <div className="flex flex-wrap gap-2.5 justify-end">
                  {b.status !== "Cancelled" && (
                    <button
                      onClick={() => cancelBooking(b.id)}
                      className="bg-transparent text-amber-700 border-2 border-amber-700 rounded-xl px-4 py-1.5 text-[13px] font-medium cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    onClick={() => deleteBooking(b.id)}
                    className="bg-red-100 text-red-800 border border-red-300 rounded-xl px-4 py-1.5 text-[13px] font-medium cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
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
