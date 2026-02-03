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

  const styles = {
    success: "bg-green-600/20 border-green-600 text-green-400",
    reject: "bg-red-600/20 border-red-600 text-red-400",
    warning: "bg-yellow-600/20 border-yellow-600 text-yellow-400",
    info: "bg-blue-600/20 border-blue-600 text-blue-400",
  };

  const labels = {
    success: "✅ Success Notification",
    reject: "❌ Error Notification",
    warning: "⚠️ Warning Notification",
    info: "ℹ️ Info Notification",
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-[420px] bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-xl font-semibold text-center">Notifications</h1>

        <ul className="space-y-3 max-h-64 overflow-y-auto">
          {items.length === 0 && (
            <li className="text-center text-zinc-500">
              No notifications available
            </li>
          )}

          {items.map((elem) => (
            <li
              key={elem.id}
              className={`flex items-center justify-between px-4 py-3 rounded-lg border ${styles[elem.type]}`}
            >
              <span className="font-medium">{labels[elem.type]}</span>

              <button
                onClick={() => dispatch(deleteNotification(elem.id))}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-between pt-4 border-t border-zinc-700">
          <button
            onClick={() => dispatch(clearNotification())}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
          >
            Clear All
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            Set Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
