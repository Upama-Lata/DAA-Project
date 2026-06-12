function Help() {
  return (
    <div className="page">
      <h2>User Guide</h2>

      <p>
        This application helps design a minimum-cost water
        distribution network using the Minimum Spanning Tree (MST)
        algorithm.
      </p>

      <ol>
        <li>Create a .txt file containing location pairs and pipeline costs.</li>
        <li>Upload the file using the Upload button.</li>
        <li>Click "Generate Network".</li>
        <li>The system will calculate the optimal network.</li>
        <li>View selected pipelines and total construction cost.</li>
      </ol>

      <h3>Sample Input Format</h3>

      <pre>
{`A B 10
A C 15
B C 5
B D 20
C D 8`}
      </pre>

      <p>
        Each line represents:
        <br />
        Location1 Location2 Cost
      </p>
    </div>
  );
}

export default Help;