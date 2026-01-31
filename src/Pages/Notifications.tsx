import { useEffect } from "react";
import {
  clearNotification,
  deleteNotification,
} from "../Hooks/Redux-Toolkit/Slice/NotificationSlice";
import { useAppDispatch, useAppSeletor } from "../Hooks/Utils/Redux";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const { items } = useAppSeletor((state) => state.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      dispatch(deleteNotification(items[0].id));
    }, 3000);

    return () => clearInterval(interval);
  }, [items, dispatch]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-[420px] bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-xl font-semibold text-center">Notifications</h1>
        <p className="text-sm text-zinc-400 text-center">
          Notifications will auto-remove every 3 seconds
        </p>

        <ul className="space-y-3 max-h-64 overflow-y-auto">
          {items.length === 0 && (
            <li className="text-center text-zinc-500">
              No notifications available
            </li>
          )}

          {items.map((elem) => (
            <li
              key={elem.id}
              className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                elem.type === "success"
                  ? "bg-green-600/20 border border-green-600"
                  : "bg-red-600/20 border border-red-600"
              }`}
            >
              <span className="font-medium">
                {elem.type === "success"
                  ? "✅ Success Notification"
                  : "❌ Error Notification"}
              </span>

              <button
                onClick={() => dispatch(deleteNotification(elem.id))}
                className="text-sm text-white/70 hover:text-white transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-between pt-4 border-t border-zinc-700">
          <button
            onClick={() => dispatch(clearNotification())}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            Clear All
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Set Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
