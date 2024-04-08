import "../Footer/Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
          <p className="find-us">Find us on:</p>
        <div className="media-footer">
          <ul id="list">
            <li className="list-item">
              <a className="social-link" href="#">Facebook</a>
            </li>
            <li className="list-item">
              <a className="social-link" href="#">Instagram</a>
            </li>
            <li className="list-item">
              <a className="social-link" href="#">Ticktok</a>
            </li>
          </ul>
          <section className="copyright">
          <small>&copy; Fireplace Palace</small>
          <a>info@fireplace.co.uk</a>
          </section>
        </div>
      </footer>
    </>
  );
}
