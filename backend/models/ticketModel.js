const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    subject: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: [
        'Software Issue',
        'Hardware Issue',
        'Servers Down',
        'Assistance Request',
        'Locked out of PC',
        'Projector not working'
      ]
    },
    description: {
      type: String,
      required: [true, 'Please enter a decription of the issue']
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'close'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
