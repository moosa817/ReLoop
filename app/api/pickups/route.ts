export async function POST() {
  const pickup = {
    id: Math.random().toString(36),
    status: "scheduled",
    estimatedArrival: "2 hours",
    collectorName: "Ahmed",
    rating: 4.8,
  };

  return Response.json(pickup);
}
