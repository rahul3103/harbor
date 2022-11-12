export const sortOptions = [
  { name: "Default", key: null, order: null },
  { name: "Name A-Z", key: "name", order: "ascending" },
  { name: "Name Z-A", key: "name", order: "descending" },
  { name: "Status", key: "status", order: "ascending" },
  { name: "Date created", key: "created_at", order: "ascending" },
  { name: "Last modified", key: "updated_at", order: "ascending" },
];

export const filterOptions = [
  { name: "All", key: null, val: "ALL" },
  { name: "Running", key: "status", val: "RUNNING" },
  { name: "Standing Up", key: "status", val: "STANDING UP" },
  { name: "Updating", key: "status", val: "UPDATING" },
  { name: "Failed", key: "status", val: "FAILED" },
  { name: "Killed", key: "status", val: "KILLED" },
  { name: "Pending", key: "status", val: "PENDING" },
  { name: "Cloning", key: "status", val: "CLONING" },
];
