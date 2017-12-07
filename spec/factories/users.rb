FactoryGirl.define do
  factory :user, aliases: [:support_user] do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password '123456'
    password_confirmation '123456'
    deleted false
  end
end
