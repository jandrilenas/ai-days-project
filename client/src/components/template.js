import React from 'react'
import '../css/styles.css'

const Template = () => {
  return (
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <title>Agency - Start Bootstrap Theme</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  {/* Font Awesome icons (free version)*/}
  {/* Google fonts*/}
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link href="css/styles.css" rel="stylesheet" />
  {/* Navigation*/}
  {/* Masthead*/}
  
  {/* Services*/}
  {/* <section className="page-section" id="services">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">E-Commerce</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Responsive Design</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-lock fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Web Security</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section> */}
  {/* Portfolio Grid*/}
  {/* <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Portfolio</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Threads</div>
              <div className="portfolio-caption-subheading text-muted">Illustration</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Explore</div>
              <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Finish</div>
              <div className="portfolio-caption-subheading text-muted">Identity</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Lines</div>
              <div className="portfolio-caption-subheading text-muted">Branding</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Southwest</div>
              <div className="portfolio-caption-subheading text-muted">Website Design</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Window</div>
              <div className="portfolio-caption-subheading text-muted">Photography</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* About*/}
  {/* <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2009-2011</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>March 2011</h4>
              <h4 className="subheading">An Agency is Born</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>December 2015</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>July 2020</h4>
              <h4 className="subheading">Phase Two Expansion</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section> */}
  {/* Team*/}
  {/* <section className="page-section bg-light" id="team">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
            <h4>Parveen Anand</h4>
            <p className="text-muted">Lead Designer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
            <h4>Diana Petersen</h4>
            <p className="text-muted">Lead Marketer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Developer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
      </div>
    </div>
  </section> */}
  {/* Clients*/}
  {/* <div className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
        </div>
      </div>
    </div>
  </div> */}
  {/* Contact*/}

  {/* Footer*/}
  {/* <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">Copyright © Your Website 2022</div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
          <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer> */}
  {/* Portfolio Modals*/}
 
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  {/* * *                               SB Forms JS                               * **/}
  {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
</div>

)
}

export default Template
