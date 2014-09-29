class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  skip_before_filter :verify_authenticity_token

  def index
    respond_to do |format|
      format.html { render :nothing => true, :layout => 'application.html.erb' }
    end
  end
end
