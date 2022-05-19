const botaoNext = document.getElementById('next');
const botaoPrevious = document.getElementById('previous');
const container = document.getElementById('container')
// const body = document.getElementsByTagName('body')[0]


const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};


const reduce = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case "NEXT_COLOR": return { ...state, index: state.index + 1}
    case "PREVIOUS_COLOR": return { ...state, index: state.index - 1}
    default: return state;
  }
}

const store = Redux.createStore(reduce) 



const  actionCreator = (type) => ({ type })

store.subscribe(()=> {
  container.style.backgroundColor = store.getState().colors[store.getState().index]
  console.log(store.getState())

})

botaoNext.addEventListener('click', () => { store.dispatch(actionCreator("NEXT_COLOR"))})
botaoPrevious.addEventListener('click', () => { store.dispatch(actionCreator("PREVIOUS_COLOR"))})

// const botaoLuz = document.getElementById('light');
// const body = document.getElementsByTagName('body')[0]


// INITIAL_STATE = {
//   theme: 'dark'
// }

// const reduce = (state = 
//   INITIAL_STATE, action) => {
//     switch(action.type) {
//       case "CHANGE_THEME":
//         return { 
//           ...state,
//           theme: state.theme === 'light' ? 'dark' : 'light'
//         }
//       default:
//         return state;
//     }
// }

// function actionCreator() {
//   return {
//     type: "CHANGE_THEME",
//   }
// }

// const store = Redux.createStore(reduce);
// console.log(store.getState())

// store.subscribe(() => {
//   body.className = store.getState().theme
//   // (console.log(body))
// })

// botaoLuz.addEventListener('click', () => {
//   store.dispatch(actionCreator())
// })