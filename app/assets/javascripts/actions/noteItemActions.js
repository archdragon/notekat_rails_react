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
  alert('receiveAddNoteItem');
  return {
    type: "RECEIVE_ADD_NOTE_ITEM",
    note,
    data: json,
    receivedAt: Date.now()
  }
}

export function fetchAddNoteItem(note) {
  return dispatch => {
    dispatch(requestAddNoteItem(note))
  
    let authToken = $('meta[name=csrf-token]').attr('content');
    
    $.ajax({
      url: '/note_items',
      method: 'POST',
      data: {
        authenticity_token: authToken,
        note: note
			}
		}).done(function(data){
      dispatch(receiveAddNoteItem(note, data))
		})

  }
}
