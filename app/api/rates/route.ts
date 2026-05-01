export async function GET() {
  const rates = [
    { material: "Plastic", rate: 65, trend: "up", trendPercent: 2.5 },
    { material: "Paper", rate: 45, trend: "down", trendPercent: -1.2 },
    { material: "Metal", rate: 95, trend: "up", trendPercent: 3.8 },
    { material: "Glass", rate: 25, trend: "down", trendPercent: -0.5 },
  ];

  return Response.json(rates);
}
