class QuestionsController < InheritedResources::Base
  respond_to :json

  private

  def question_params
    params.require(:question).permit(:name)
  end
end
