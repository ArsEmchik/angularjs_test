class CommentsController < InheritedResources::Base
  belongs_to :question
  respond_to :json
end
