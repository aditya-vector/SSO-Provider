require 'rails_helper'

RSpec.describe Ticket, type: :model do
  it 'should have a Factory' do
    expect(FactoryGirl.create(:ticket)).to be_valid
  end

  describe 'validations' do
    it { should validate_presence_of(:category) }
    it { should validate_presence_of(:status) }
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:support_user_id) }
    it { should validate_inclusion_of(:category).in_array Ticket::CATEGORIES }
    it { should validate_inclusion_of(:status).in_array Ticket::STATUSES }
  end
end
