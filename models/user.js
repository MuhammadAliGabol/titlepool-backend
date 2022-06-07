const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: {
    type: String,
    default: '',
    required: true,
  },
  last_name: {
    type: String,
    default: '',
    required: true,
  },
  imbd_profile_link: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    default: '',
  },
  street_address: {
    type: String,
    default: '',
  },
  street_address_2: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  state: {
    type: String,
    default: '',
  },
  zip: {
    type: String,
    default: '',
  },
  company: {
    type: String,
    default: '',
  },
  phone_number: {
    type: String,
    default: '',
  },
  date_of_birth: {
    type: Date,
    default: new Date(),
  },
  role: {
      type: String,
      enum : ['filmmaker','sales_agent', 'distributor', 'exhibitor', 'investor', 'studio'],
      default: 'filmmaker',
      required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }, 
});

module.exports = mongoose.model("User", userSchema);