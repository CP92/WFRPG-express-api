const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  bow: {
    type: Boolean,
    required: true
  },
  pickaxe: {
    type: Boolean,
    required: true
  },
  sword: {
    type: Boolean,
    required: true
  },
  x: {
    type: Number,
    require: true
  },
  y: {
    type: Number,
    required: true
  },
  gold: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Player', playerSchema)
