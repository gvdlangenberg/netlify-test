import { Todo } from '../redux/reducer/todoReducerFactory';
import { FC } from 'react';
import Link from 'next/link';

type Props = {
    items: Todo[];
}

const Todos: FC<Props> = ({items}) => {
    return (
        <div className="container">
            <h1>TODOS</h1>
            {items && items.map((todo: Todo) => (
                <div key={todo.id}>
                    <Link href={`/todo/${todo.id}`}><a>{todo.title}</a></Link>
                </div>
            ))}
        </div>
    );
}

export default Todos;
