import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTicket } from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";

function TicketItem({ ticket }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dispatch = useDispatch();
  
  const onTicketDelete = () => {
    dispatch(deleteTicket(ticket._id));
    window.location.reload();
    toast.success("Ticket Deleted");
  };

  return (
    <div className="ticket">
      <div>{new Date(ticket.createdAt).toLocaleString("en-US", options)}</div>
      <div>{ticket.category}</div>
      <div>{ticket.subject}</div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <button onClick={onTicketDelete} className="btn btn-sm btn-danger">
          Delete
        </button>
    </div>
  );
}

export default TicketItem;
