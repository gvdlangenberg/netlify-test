import Todos from '../../src/components/todos';
import { wrapper } from '../../src/redux/store';
import { createGetTodosAction } from '../../src/redux/action/todoActionFactory';

function Index(props) {
  return (
    <Todos items={props.items} />
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({store}) => {
    const action = createGetTodosAction();
    const response = await store.dispatch(action);
    
    return {
      props: {
        items: response.value.data
      }
    }
  }
)

export default Index;
