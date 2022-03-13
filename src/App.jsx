import CatList from "./components/CatList";

function App() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center" style={{ color: "#AD8B73" }}>
          DAFTAR KUCING
        </h1>
        <div className="container my-5">
          <div id="List-Kucing" className="row">
            <CatList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
