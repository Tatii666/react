import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 10},
                { id: 2, message: 'It is my first post!', likesCount: 15},
                { id: 3, message: 'What a pretty day!', likesCount: 8},
                { id: 4, message: 'Hello', likesCount: 7},
            ],
            newPostText: 'checking'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alexey', avatar: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png'},
                {id: 2, name: 'Anna', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3aU6qeDmjCFjOiKJ5vDU_IgPqR_7_LmWJA&usqp=CAU'},
                {id: 3, name: 'Maria', avatar: 'https://media.istockphoto.com/vectors/pretty-girl-avatar-flat-cartoon-style-vector-illustration-vector-id1140166223?k=20&m=1140166223&s=170667a&w=0&h=wgeq7igZ8rP0WrzCBGJL70dLF9bPri1nrMXNerQ6kOA='},
                {id: 4, name: 'Victor', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'},
                {id: 5, name: 'Sasha', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU'},
                {id: 6, name: 'Olga', avatar: 'https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cute-girl-avatar-is-available-for-commercial-use-png-image_678746.jpg'},
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Nice day' },
                { id: 4, message: 'Yo' }
            ],
            newMessageText: 'Merry Christmas!'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state); //уведомляем подписчика об изменении
    }
}

window.store = store;

export default store;