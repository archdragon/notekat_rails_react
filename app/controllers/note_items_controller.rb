class NoteItemsController < ApplicationController
  def create
    NoteItem.create(text: 'one', note_id: params[:note][:id])

    render json: { status: :ok }
  end
end
