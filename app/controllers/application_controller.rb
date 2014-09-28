class ApplicationController < ActionController::Base
  protect_from_forgery

  def index
    respond_to do |format|
      format.html { render :nothing => true, :layout => 'application.html.erb' }
    end
  end
end
