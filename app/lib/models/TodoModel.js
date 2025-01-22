import mongoose from "mongoose";


const { Schema } = mongoose;

const TodoSchema = new Schema({
    todo: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
}, { timestamps: true });


const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);


export default Todo;   