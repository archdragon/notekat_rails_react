class IndexController < ApplicationController
  def index
    if account_signed_in?
      render :index
    else
      render :index_logged_out
    end
  end

	# Needed by devise
	helper_method :resource_name, :resource, :devise_mapping

  def resource_name
    :account
  end
 
  def resource
    @resource ||= Account.new
  end
 
  def devise_mapping
    @devise_mapping ||= Devise.mappings[:account]
  end
end
