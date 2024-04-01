import * as React from 'react';
import { useEffect, useState } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import SearchAppBar from '../components/Other/menuAppBar';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';




const initialTodos = [
    {id: 1, text: 'Todo 1', completed: false},
    {id: 2, text: 'Todo 2', completed: true},
    {id: 3, text: 'Todo 3', completed: false},
    {id: 4, text: 'Todo 4', completed: false},
    {id: 5, text: 'Todo 5', completed: false},
]

const initialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if(!data) {
        return [];
    } return data;
}

const TodoList = () => {

    const [todos, setTodos] = useState(initialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


    const toggleTodo = (id) => {
        setTodos((todos) => {
            return todos.map((todo) => {
                if(todo.id == id) {
                    return {...todo, completed:!todo.completed}
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (newTask) => {
        if(newTask) {
            let num = todos.length + 1;
            let newEntry = {id:num, text:newTask, completed:false};
            setTodos([...todos,newEntry])
        }
    }
    
    const removeTodo = (id) => {
        setTodos(prevTodos => {
        return prevTodos.filter((t) => t.id !== id)
        })
    }
    const removeAllTodos = (id) => {
        setTodos(prevTodos => {
        return prevTodos.filter((t) => t.id == id)
        })
    }
    
   
    

    return (
        <>
    <SearchAppBar addTodo={addTodo} removeAllTodos={removeAllTodos}/>
    

    <List sx={{ width: '100%', maxWidth: 400, bgcolor: '#1a1a1a' }}>


        {todos.map(todo=> {
    
        const labelId = `checkbox-list-label-${todo.id}`;
    
        return (
            <ListItem
            key={todo.id}
            style={{listStyleType: "none"}}
            >
            <Checkbox 
                edge="start"    
                checked={todo.completed}
                tabIndex={-1}
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={() => {toggleTodo(todo.id)}}
            />
    
            <ListItemText id={todo.id} primary={todo.text} />
    
            <IconButton
                onClick={() => {removeTodo(todo.id)}}
            >
                <DeleteIcon/>
            </IconButton>

            </ListItem>
        );
        })}
        


    </List>


    </>
  )
}

export default TodoList
  









   
// return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );











