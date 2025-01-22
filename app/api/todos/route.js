import { connectDB } from "@/app/lib/dbConnect";
import Todo from "@/app/lib/models/TodoModel";


export async function GET() {
    try {
        await connectDB();

        const todos = await Todo.find();

        return Response.json({
            todos,
            msg: "Todos fetched successfully",
        });

    } catch (error) {

        return Response.json({
            todos: [],
            msg: "Error fetching todos",
        });

    }
}


export async function POST(request) {
    try {

        await connectDB();

        const data = await request.json();

        const todos = await Todo.create({
            todo: data.todo,
        });

        return Response.json({
            todos: todos,
            msg: "Todo added successfully"
        });

    } catch (error) {

        return new Response(JSON.stringify({
            msg: "Error adding todo",
            error: error.message
        }));

    }
};


export async function PUT(request) {
    try {
        await connectDB();
        const data = await request.json();

        console.log("ID===>", data._id)
        console.log("data==>", data)
        if (!data._id) return Response.json({ msg: 'ID is required to update Todo' });

        const updatedTodo = await Todo.findByIdAndUpdate(
            data._id, // The ID to find the Todo
            { todo: data.todo, isComplete: data.isComplete }, // Update the fields
            { new: true } // Option to return the updated document
        );

        if (!updatedTodo) return Response.json({ msg: 'Todo not found' })

        return Response.json({
            todo: updatedTodo,
            msg: "Todo updated successfully"
        });

    } catch (error) {
        return new Response(JSON.stringify({
            msg: "Error updating todo",
            error: error.message
        }));
    }
}


export async function DELETE(request) {
    try {
        const data = await request.json();

        await connectDB();

        if (!data._id) return Response.json({ msg: 'ID is required to delete Todo' })


        const deletedTodo = await Todo.findByIdAndDelete(data._id);

        if (!deletedTodo) {
            return new Response.json({ msg: 'Todo not found' })
        }

        return Response.json({
            msg: "Todo deleted successfully",
            deletedTodoId: data._id
        })

    } catch (error) {
        return Response.json({
            msg: "Error deleting todo",
            error: error.message
        })
    }
}