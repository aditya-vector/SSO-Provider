# Validates email format
class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return true if value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    record.errors[attribute] << (options[:message] || I18n.t('errors.invalid_email'))
  end
end
