class Comment < ActiveRecord::Base
  belongs_to :question
  validates :name, :answer, presence: true
  validates_length_of :name, minimum: 1
end
