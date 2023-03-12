/* eslint-disable @next/next/no-img-element */
export default function Heros() {
  return (
    <div className="px-4 py-5 my-5 text-center">
    {/* <img className="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
    <h1 className="display-2 fw-bold"><i className="bi bi-code"></i> Newb<span className="linear-gradient-txt">API</span>.com</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Empower your developer journey with the limitless potential of APIs.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-dark btn-lg px-4 gap-3">Explore</button>
        {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
      </div>
    </div>
  </div>
  );
}