import TodoForm from "@/components/TodoForm";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FilePenLine, Trash2 } from "lucide-react";

async function Todo() {
  let res = await fetch("http://localhost:3000/api/todos");
  res = await res.json();

  return (
    <>
      <div className="text-3xl p-3 text-center font-semibold font-mono">Todo</div>

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
            <TableRow key={item.id}>
              <TableCell className="text-center">{index}</TableCell>
              <TableCell className="text-center ">{item.todo}</TableCell>
              <TableCell className="text-center capitalize">
                {item.isComplete ? (
                  <div className="bg-green-500 text-white rounded-full px-2 py-1 text-xs cursor-pointer active:scale-95 select-none">
                    Active
                  </div>
                ) : (
                  <div className="bg-yellow-500 text-white rounded-full px-2 py-1 text-xs cursor-pointer active:scale-95 select-none">
                    Pending
                  </div>
                )}
              </TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button variant="outline" size="icon" className="active:scale-95">
                  <FilePenLine className="h-4 w-4" />
                </Button>

                <Button variant="destructive" size="icon" className="active:scale-95">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default Todo