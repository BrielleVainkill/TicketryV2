import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ category, subject, description }));
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <BackButton url="/" />
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--Select a Category--</option>
              <option value="Software Issue">Software Issue</option>
              <option value="Hardware Issue">Hardware Issue</option>
              <option value="Servers Down">Servers Down</option>
              <option value="Assistance Request">Assistance Request</option>
              <option value="Locked out of PC">Locked out of PC</option>
              <option value="Projector not working">Projector not working</option>
            </select>
          </div>
          <div className="form-group">
          <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              name="subject"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
            ></input>

            <label htmlFor="description">Description of the issue</label>
            <textarea
              className="form-control"
              placeholder="Description"
              value={description}
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
