const todos = [
    { todo: "Todo 1", status: "active" },
    { todo: "Todo 2", status: "pending" },
    { todo: "Todo 3", status: "active" },
    { todo: "Todo 4", status: "active" },
    { todo: "Todo 5", status: "pending" },
    { todo: "Todo 6", status: "active" },
    { todo: "Todo 7", status: "active" },
    { todo: "Todo 8", status: "active" },
    { todo: "Todo 1", status: "active" },
    { todo: "Todo 8", status: "pending" },
    { todo: "Todo 9", status: "active" },
    { todo: "Todo 10", status: "active" },
    { todo: "Todo 11", status: "pending" },]

export async function GET() {
    return Response.json({
        todos: todos,
        msg: 201
    })
}