class ContactsController < ApplicationController
  def index
    @contacts = {contacts: Contact.all}
  end

  def create
    ## Create a new contact based off info in form
  end

  def update
    ## Update a contact based off info in form
  end

  def destroy
    ## Delete a contact
    @contact = Contact.find(params[:id]).destroy
  end

  def show
    @contact = Contact.find(params[:id])
  end
end
