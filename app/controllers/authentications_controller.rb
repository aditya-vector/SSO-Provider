class AuthenticationsController < ApplicationController
  skip_before_action :authenticate_request, only: :authenticate

  # POST /authenticate
  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])
    if command.success?
      render json: { auth_token: command.result, roles: command.send(:user).roles_name }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def validate
    render json: {
      status: 'SUCCESS',
      sub: current_user.id,
      eidentifier: current_user.email
    }
  end
end
