require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should have a Factory' do
    expect(FactoryGirl.create(:user)).to be_valid
  end

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password) }
    it { should validate_presence_of(:name) }
  end
end
