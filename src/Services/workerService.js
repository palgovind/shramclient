const API_URL = "http://localhost:8080/workers";

export async function fetchWorkers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workers");
  }

  return response.json(); // returns List<Worker> as JS array
}
