class ContactsController < ApplicationController
  layout "contacts"

  def index
    ## update this to go through all contacts and add url to individual contacts

    @contacts = { contacts: Contact.all }
  end

  def new
     @action = contacts_path
  end

  def create
    ## Create a new contact based off info in form
    Contact.create!(**params[:contact].permit(:name, :email, :phone), user:)
    redirect_to contacts_path
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
