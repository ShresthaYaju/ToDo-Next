"use client"
type TodoItemProps = { id: string; title: string; completed: boolean; toggleTodo: (id: string, completed: boolean) => void };

const pastelColors = [
    "#C4C4C4", // Gray
    "#E7E7E7", // Light Gray
    "#9DB7C4", // Blue-Gray
    "#B7C9BF", // Green-Gray
    "#D5D3D1", // Silver
    "#C2DAD1", // Teal
    "#E0D7C8", // Beige
    "#D8CDCB", // Taupe
    "#C4B3B3", // Mauve
    "#D1C0B3", // Dusty Rose
  ];

export function TodoItem({ id, title, completed, toggleTodo }: TodoItemProps) {
  return (
    <div className={`p-4 border rounded-md my-4 bg-[${pastelColors[Math.floor(Math.random() * pastelColors.length)]}]`}>
        <li className={`flex gap-1 text-xl items-center `}>
      <input id={id} className="cursor-pointer peer" type="checkbox"  defaultChecked={completed} onChange={e=> toggleTodo(id, e.target.checked)}/>
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 "
      >
        {title}
      </label>
    </li>
    </div>
  );
}
