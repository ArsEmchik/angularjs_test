class Comment < ActiveRecord::Base
  validates :name, :answer, presence: true
end
