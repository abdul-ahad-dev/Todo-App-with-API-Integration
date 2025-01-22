import dynamic from 'next/dynamic';
import TodoForm from "@/components/TodoForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


async function Todo() {

  let res = await fetch(process.env.PUBLIC_API_URL);
  res = await res.json();

  const TodoList = dynamic(() => import('@/components/TodoList'));

  return (
    <div className="px-4">
      <div className="text-4xl p-3 text-center font-semibold font-mono">Todo</div>

      <TodoForm />

      <Table className="md:w-11/12 mx-auto border rounded-xl overflow-hidden shadow-lg">
        <TableCaption>A list of your recent todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-[100px]">S No.</TableHead>
            <TableHead className="shrink text-center w-[60%]">Todos</TableHead>
            <TableHead className="w-[180px] text-center">Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {res?.todos?.map((item, index) => (
            <TodoList item={item} index={index} key={item._id} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Todo;