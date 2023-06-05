import Link from "next/link";
import { prisma } from "@/db";
import { TodoItem } from "@/components/TodoItems";

async function toggleTodo(id : string, completed: boolean){
  "use server";

  await prisma.todo.update({where: {id}, data: {completed}});
}

export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl">ToDo</h1>
        <Link
          href="/new"
          className="border border-slate-700 text-slate-700 px-2 py-1 rounded-md hover:bg-slate-700 hover:text-slate-100 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>

      <ul className="">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
