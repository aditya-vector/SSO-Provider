# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!(
  name: 'admin', email: 'admin@admin.com', password: 'admin123', password_confirmation: 'admin123')
user.add_role :admin

user = User.create!(
  name: 'support', email: 'support@support.com', password: 'support123', password_confirmation: 'support123')
user.add_role :support

User.create!(
  name: 'lorem', email: 'lorem@example.com', password: 'lorem123', password_confirmation: 'lorem123')

FactoryGirl.create_list(:ticket, 5)
