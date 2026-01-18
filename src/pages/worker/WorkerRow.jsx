import React from "react";

const WorkerRow = ({ worker, onDeleted }) => {
  const handleDelete = async () => {
    try {
      // Call backend DELETE endpoint
      const response = await fetch(`http://localhost:8080/workers/${worker.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Worker deleted successfully");
        // Notify parent to refresh list or remove from state
        onDeleted(worker.id);
      } else {
        console.error("Failed to delete worker:", response.status);
      }
    } catch (error) {
      console.error("Error deleting worker:", error);
    }
  };

  return (
    <div>
      <span>{worker.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WorkerRow;
