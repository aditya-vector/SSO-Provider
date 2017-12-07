require 'rails_helper'

RSpec.describe AuthenticationsController, type: :controller do
  describe 'POST #authenticate' do
    it 'authenticates when valid credentials are provided' do
      create(:user,
        email: 'testuser@email.com', password: 'test123', password_confirmation: 'test123')
      post :authenticate, params: { email: 'testuser@email.com', password: 'test123' }
      expect(response).to be_success
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)['auth_token']).not_to be_blank
    end

    it 'does not authenticate when invalid credentials are provided' do
      create(:user)
      post :authenticate, params: { email: Faker::Internet.email,
                                    password: Faker::Internet.password }
      expect(response).to have_http_status(401)
    end
  end
end
