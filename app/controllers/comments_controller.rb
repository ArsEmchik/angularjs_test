class CommentsController < InheritedResources::Base
  belongs_to :question
  respond_to :json

  private

  def comment_params
    params.require(:comment).permit(:name, :answer)
  end
end
