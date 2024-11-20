import mongoose from "mongoose";

const { Schema } = mongoose;

const TodoSchema = new Schema({
    todo: String,
    isComplete: Boolean,
}, { timestamps: true });

const TodoModel = mongoose.models.Todos || mongoose.model('Todos', TodoSchema);

export default TodoModel;   