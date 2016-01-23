export default function noteItems(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ADD_NOTE_ITEM':
      alert('noteItemsReducer -> ADD_NOTE_ITEM')
      return [
        {
          id: action.data.id,
          text: action.data.text
        }, 
        ...state
      ]

    default:
      return state
  }
}
