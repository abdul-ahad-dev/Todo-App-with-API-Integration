const todos = [{todo:"1"},{todo:"2"},{todo:"3"},{todo:"4"},{todo:"5"},{todo:"6"},{todo:"7"},{todo:"8"},{todo:"1"},{todo:"8"},{todo:"9"},{todo:"10"},{todo:"11"},]

export async function GET() {
    return Response.json({
        todos:todos,
        msg: 201
    })
}