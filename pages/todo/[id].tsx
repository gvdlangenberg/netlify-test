import { FC } from 'react';
import { wrapper } from '../../src/redux/store';
import { createGetTodosAction, createGetTodoByIdAction } from '../../src/redux/action/todoActionFactory';
import { useTodo } from '../../src/hooks/useTodo';
import { useRouter } from 'next/dist/client/router';
import { Todo as ITodo } from '../../src/redux/reducer/todoReducerFactory';

type Props = {
    todo: ITodo;
}

const Todo: FC<Props> = ({todo}) => {
    console.log(todo);

    return (
        <>
            <h1>{todo.title}</h1>
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ query }) => {
        const response = await createGetTodoByIdAction(query.id);

        return {
            props: {
                todo: response.data
            }
        }     
    }
)

export default Todo;
