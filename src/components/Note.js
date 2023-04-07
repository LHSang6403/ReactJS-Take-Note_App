import TodoList from './TodoList';
import AnimatePage from './AnimatedPage';

function Note(){
    return (
        <AnimatePage>
            <div className='todo-app shadow' >
                <TodoList />
            </div>
        </AnimatePage>
    )
}

export default Note