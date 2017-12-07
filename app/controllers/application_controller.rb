class ApplicationController < ActionController::API
  before_action :authenticate_request
  include CanCan::ControllerAdditions
  attr_reader :current_user

  rescue_from CanCan::AccessDenied do |_|
    render json: { error: I18n.t('errors.unauthorized') }, status: :unauthorized
  end

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: I18n.t('errors.unauthorized') }, status: 401 unless @current_user
  end
end
