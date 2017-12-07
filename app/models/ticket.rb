# Represents a ticket placed for support request in the system
class Ticket < ApplicationRecord
  CATEGORIES = %w(general issue).freeze
  STATUSES = %w(pending processing closed invalid).freeze

  validates :category, presence: true, inclusion: CATEGORIES
  validates :status, presence: true, inclusion: STATUSES

  validates :user_id, :support_user_id, presence: true
  belongs_to :user
  belongs_to :support_user, class_name: 'User'
end
