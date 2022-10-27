import React from 'react';
import '../style/components/StateTodo.css'

function TodosError({error}){
    return <p>{error}</p>;
}

function TodosLoading({error}){
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>Cargando TODOs...</p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
    );
}

function EmptyTodos({error}){
    return <p>Crea tu primer todo</p>;
}
export {TodosError, TodosLoading, EmptyTodos};