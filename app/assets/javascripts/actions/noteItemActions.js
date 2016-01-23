// ADDING NOTE ITEMS

function addNoteItem() {
  return {
    type: "ADD_NOTE_ITEM",
    noteItemType: "BASIC"
  }
}

function requestAddNoteItem(note) {
  alert('requestAddNoteItem');
  return {
    type: "REQUEST_ADD_NOTE_ITEM",
    note
  }
}

function receiveAddNoteItem(note, json) {
  return {
    type: "RECEIVE_ADD_NOTE_ITEM",
    note,
    receivedAt: Date.now()
  }
}

export function fetchAddNoteItem(note) {
  return dispatch => {
    dispatch(requestAddNoteItem(note))

    let options = {
      method: 'POST'
		}

		return fetch('/note_items.json', options)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveAddNoteItem(note, json))
      )
  }
}
