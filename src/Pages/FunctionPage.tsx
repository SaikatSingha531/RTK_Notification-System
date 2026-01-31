import { useNavigate } from "react-router-dom";
import { addNotification } from "../Hooks/Redux-Toolkit/Slice/NotificationSlice";
import { useAppDispatch, useAppSeletor } from "../Hooks/Utils/Redux";
import { toast } from "sonner";

const FunctionPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSeletor((state) => state.notifications.count);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-10 text-white">
      <div className="flex items-center justify-between w-96 px-6 py-4 bg-zinc-900 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔔</span>
          <span className="text-lg font-semibold">
            Notifications: <span className="text-blue-400">{count}</span>
          </span>
        </div>

        <button
          onClick={() => navigate("/notification")}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          View
        </button>
      </div>

      <div className="flex gap-8">
        <button
          onClick={() => {
            dispatch(addNotification("success"));
            toast.success("Success Notification Added");
          }}
          className="px-10 py-4 text-lg font-semibold rounded-xl bg-green-600 hover:bg-green-700 transition shadow-lg"
        >
          Success
        </button>

        <button
          onClick={() => {
            dispatch(addNotification("reject"));
            toast.error("Error Notification Added");
          }}
          className="px-10 py-4 text-lg font-semibold rounded-xl bg-red-600 hover:bg-red-700 transition shadow-lg"
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default FunctionPage;
