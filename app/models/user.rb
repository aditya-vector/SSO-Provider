# Represents user ina system
class User < ApplicationRecord
  rolify
  has_secure_password
  has_many :tickets, dependent: :destroy
  has_many :support_tickets, class_name: 'Ticket', foreign_key: :support_user_id,
    dependent: :nullify
  validates :email, presence: true, email: true
  validates :name, presence: true
  validates :deleted, inclusion: { in: [true, false] }
end
