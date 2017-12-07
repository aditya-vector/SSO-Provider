# Represents role of a user in the system
class Role < ApplicationRecord
  has_and_belongs_to_many :users, join_table: :users_roles

  belongs_to :resource, polymorphic: true, optional: true

  validates :resource_type, inclusion: { in: [:admin, :support] }, allow_nil: true

  scopify
end
