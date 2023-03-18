/* eslint-disable @next/next/no-img-element */
export default function Heros() {
  return (
    <div className="px-4 py-5 text-center">
    {/* <img className="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
    <h1 className="display-2 fw-bold">Newb<span className="linear-gradient-txt">API</span>.com</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead text-muted mb-4">Empower your developer journey with the limitless potential of APIs.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="https://rapidapi.com/user/newbAPIOfficial" target="_blank" className="btn text-white btn-lg px-4 gap-3 linear-gradient-btn">Explore <i className="bi bi-box-arrow-up-right"></i></a>
        <a href="https://docs.newbapi.com" target="_blank" className="btn btn-outline-dark btn-lg px-4">Documentation <i className="bi bi-box-arrow-up-right"></i></a>
      </div>
    </div>
  </div>
  );
}