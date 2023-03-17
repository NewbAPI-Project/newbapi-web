/* eslint-disable @next/next/no-img-element */
export default function Heros() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        {/* <img className="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
        <h1 className="display-2 fw-bold">NewbAPI: Fake API</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead text-muted mb-3 mt-2">Free fake API created by a backend developer<br /> for frontend developers to use</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {/* <button type="button" className="btn text-white btn-lg px-4 gap-3 linear-gradient-btn">Explore</button> */}
            <button type="button" className="btn btn-outline-dark btn-lg px-4">Documentation</button>
          </div>
        </div>
      </div>
    </>
  );
}