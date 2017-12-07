Ticketing application

* Ruby version: 2.4

* System dependencies: Mysql Version 14+, Ruby, Ruby On Rails

* Configuration
  - cd < project_directory >
  - gem install bundler (unless already installed)
  - bundle install

* Database creation
  - Setup `config/database.yml` (intentionally kept for minimal changes. Not recommended to be added in SCM)
  - rake db:setup (This should create the database from schema, migrate tables, and seed data)

* How to run the test suite
  - cd < project_directory >
  - rspec spec

* Starting the application
  - rails s -p 3001

* Setting up the React client
  - cd <project_directory>/client
  - Use the Readme.md from the `client` folder
