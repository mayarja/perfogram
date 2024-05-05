export const formatTime = (timestamp) => {
  const date = new Date(timestamp); // Assuming timestamp represents message time
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  return `${hours}:${minutes} ${ampm}`;
};
