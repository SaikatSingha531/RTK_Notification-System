export type NotificationType = "success" | "reject";

export interface NotificationItem {
  id: string;
  type: NotificationType;
}

export interface NotificationState {
  count: number;
  items: NotificationItem[];
}
