import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <>
      <section className="heading">
        <h1>Welcome back!</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  );
}

export default AdminHome;
