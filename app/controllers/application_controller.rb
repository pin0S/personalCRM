class ApplicationController < ActionController::Base

  def user
    @user ||= User.find_by(email: "paul@test.com")
  end

end
