class ApplicationController < ActionController::Base
  protect_from_forgery

  def index
    render :nothing => true, :layout => 'application.html.erb'
  end
end
