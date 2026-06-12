import FileUpload from "../components/fileupload";
import GraphView from "../components/graphview";
import CostReport from "../components/costreport";

function Home({ result, setResult }) {
  return (
    <>
      <FileUpload setResult={setResult} />
      <GraphView mst={result.mst} />
      <CostReport totalCost={result.totalCost} />
    </>
  );
}

export default Home;