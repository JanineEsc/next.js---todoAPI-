import  { Schema, model } from 'mongoose'

const todoSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

const Todo = mongoose.models.Todo || model ('Todo', todoSchema)