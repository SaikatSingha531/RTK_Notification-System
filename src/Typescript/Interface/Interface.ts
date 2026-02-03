export type NotificationType = "success" | "reject" | "info" | "warning";

export interface NotificationItem {
  id: string;
  type: NotificationType;
}

export interface NotificationState {
  count: number;
  items: NotificationItem[];
}
