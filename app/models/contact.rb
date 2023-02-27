class Contact < ApplicationRecord
  belongs_to :user
  has_many :interactions
  has_many :notes
end
