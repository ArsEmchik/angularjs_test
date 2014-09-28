class Question < ActiveRecord::Base
  has_many :comments, dependent: :destroy
  validates :name, presence: true
  validates_length_of :name, minimum: 1
end
