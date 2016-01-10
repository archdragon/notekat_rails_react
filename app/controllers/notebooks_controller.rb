class NotebooksController < ApplicationController
  def create
    @notebook = Notebook.new(params[:notebook])
    @notebook.save
  end

  def index
    @notebooks.all
  end
end
