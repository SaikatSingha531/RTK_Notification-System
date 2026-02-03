import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import type {
  NotificationState,
  NotificationType,
} from "../../../Typescript/Interface/Interface";

const initialState: NotificationState = {
  count: 0,
  items: [],
};

const NotificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationType>) => {
      state.count += 1;
      state.items.push({
        id: nanoid(),
        type: action.payload,
      });
    },

    deleteNotification: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (elem) => elem.id !== action.payload
      );
      state.count = Math.max(0, state.count - 1);
      toast.info("Notification Removed");
    },

    clearNotification: (state) => {
      state.count = 0;
      state.items = [];
      toast.info("All Notifications Removed");
    },
  },
});

export const {
  addNotification,
  clearNotification,
  deleteNotification,
} = NotificationSlice.actions;

export default NotificationSlice.reducer;
