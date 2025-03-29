const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A project must have a title'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  challenge: {
    type: String,
    default: 'Medium'
  },
  stackMatch: {
    type: Number,
    default: 70
  },
  workflow: [String],
  techStack: [String],
  features: [String],
  team: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team'
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Populate team when querying projects
projectSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'team',
    select: 'name members'
  });
  this.populate({
    path: 'createdBy',
    select: 'name email'
  });
  next();
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project; 