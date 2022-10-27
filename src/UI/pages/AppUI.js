import React from 'react'
import '../../style/pages/App.css';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { CreateTodoButton } from '../../components/CreateTodoButton';
import { TodoContext } from '../../TodoContext/index';
import { Modal } from '../../components/ModalTodo';
import { TodoForm } from '../../components/TodoForm';
import { TodosError, TodosLoading, EmptyTodos } from '../../components/StateTodo'

function AppUI() {

    const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                    { loading && <TodosLoading />}
                    { error && <TodosError error={error}/>}
                    { (!loading && !searchedTodos.length) && <EmptyTodos />}
    
                    {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
                </TodoList>
                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };