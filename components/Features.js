export default function Features() {
  return (
    <div className="px-4 py-5 my-5 text-center">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-white linear-gradient-btn fs-2 mb-3">
        <i className="bi bi-server"></i>
        </div>
        <h3 className="fs-2">Easy to use</h3>
        <p className="text-muted">Our API service is easy to use with clear and concise documentation and an intuitive, well-structured interface.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-white linear-gradient-btn fs-2 mb-3">
        <i className="bi bi-chevron-right"></i>
        </div>
        <h3 className="fs-2">Scalability</h3>
        <p className="text-muted">Our API is scalable and can handle a high volume of requests, adapting to your business needs.</p>
        
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-white linear-gradient-btn fs-2 mb-3">
        <i className="bi bi-server"></i>
        </div>
        <h3 className="fs-2">Reliability</h3>
        <p className="text-muted">Our API is highly reliable with an impressive uptime percentage, minimizing downtime for your business needs.</p>
       
      </div>
    </div>
    </div>
  );
}