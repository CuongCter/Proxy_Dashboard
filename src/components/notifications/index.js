import { Store } from "react-notifications-component";

export const showNotification = (type, title, message = "") => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};
