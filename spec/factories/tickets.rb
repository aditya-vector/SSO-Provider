FactoryGirl.define do
  factory :ticket do
    category { Ticket::CATEGORIES.sample }
    status { Ticket::STATUSES.sample }
    user_description { Faker::Lorem.sentence }
    support_description { Faker::Lorem.sentence }
    user
    support_user
  end
end
