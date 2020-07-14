export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            console.log(action)
            const newToDo = {
                item: action.payload.toDoInput,
                completed: false,
                id: Date.now(),
            }
            return [...state, newToDo]
        case 'TOGGLE_COMPLETED' :
            return state.map(item => {
                return item.id === action.payload ? {...item, completed: !item.completed} : item;
            });
        default:
            return state;
    };
};