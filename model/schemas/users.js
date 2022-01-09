const { Schema, model, SchemaTypes } = require('mongoose');

const user = new Schema({
  // _id: SchemaTypes.ObjectId,
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  number: Number,
  mail: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = model('User', user);