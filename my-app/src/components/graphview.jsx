function GraphView({ mst }) {
  return (
    <div className="card">
      <h3>Selected Pipelines</h3>

      {mst.map((edge, index) => (
        <p key={index}>
          {edge.from} → {edge.to} : {edge.cost}
        </p>
      ))}
    </div>
  );
}

export default GraphView;