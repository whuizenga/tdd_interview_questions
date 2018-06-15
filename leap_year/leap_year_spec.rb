require './leap_year.rb'

describe 'is_leap_year?' do
  it 'Is not a leap year when it is not divisible by four.' do
    expect(is_leap_year?(2007)).to eq false
  end

  it 'Is a leap year when it is divisible by four.' do
    expect(is_leap_year?(2008)).to eq true
  end

  it 'Is not a leap year when the year is divisble by 100,' do
    expect(is_leap_year?(1700)).to eq false
  end

  it 'unless the year is divisible by both 100 and 400.' do
    expect(is_leap_year?(1600)).to eq true
  end

  it 'Years before 1582 AD are not leap years in the Gregorian Calendar' do
    expect(is_leap_year?(1560)).to eq false
  end

  it 'Throws an error when not supplied with a date' do
    expect(is_leap_year?({foo: 'bar'})).to raise_error 'invalid date'
  end
end