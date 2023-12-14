import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main
      className="d-flex align-items-center justify-content-center "
      style={{ height: "100vh", backgroundColor: "#A553F4" }}
    >
      <div className=" rounded border text-center p-5 text-white ">
        <div className="mb-5">صفحه مورد نظر یافت نشد!</div>
        <button
          onClick={moveBack}
          className="btn"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          &larr; بازگشت
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
