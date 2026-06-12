function CostReport({ totalCost }) {
  return (
    <div className="card">
      <h3>Total Cost</h3>
      <h2>₹ {totalCost}</h2>
    </div>
  );
}

export default CostReport;