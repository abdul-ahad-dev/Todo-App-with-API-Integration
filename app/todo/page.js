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
import { FilePenLine, Indent, Trash2 } from "lucide-react";

async function Todo() {
  let res = await fetch("http://localhost:3000/api/todos");
  res = await res.json();

  return (
    <>
      <div className="text-3xl p-3 text-center font-semibold font-mono">Todo</div>

      <Table className="md:w-11/12 mx-auto border rounded-xl overflow-hidden shadow-lg">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="flex-none w-[100px]">S No.</TableHead>
            <TableHead className="shrink text-center w-[60%]">Todos</TableHead>
            <TableHead className="w-[180px] bg-slate-100 text-center">Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {res?.todos?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index}</TableCell>
              <TableCell className="text-center ">{item.todo}</TableCell>
              <TableCell className="text-center capitalize">
                {item.status === "active" ? (
                  <div className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                    Active
                  </div>
                ) : (
                  <div className="bg-yellow-500 text-white rounded-full px-2 py-1 text-xs">
                    Pending
                  </div>
                )}
              </TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button variant="outline" size="icon">
                  <FilePenLine className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
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