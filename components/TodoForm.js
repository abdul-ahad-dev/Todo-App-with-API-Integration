import { addTodo } from "@/app/actions/todos"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default async function TodoForm() {
    return (
        <form
            action={addTodo}
            className="flex md:w-11/12 mx-auto py-4 items-center space-x-2"
        >
            <Input type="text" name="todo" placeholder="Add Todos" />
            <Button type="submit">Add Todo</Button>
        </form>
    )
}