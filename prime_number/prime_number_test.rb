require './prime_number.rb'

describe 'is_prime?' do
  it 'returns NAN if the function is not given a number' do
    expect(is_prime?('hello world').nan?).to eq true
  end

  it 'Accepts a number and returns false if the number is not a prime' do
    expect(is_prime?(4)).to eq true
  end

  it 'Accepts a number and returns true if the number is prime' do
    expect(is_prime?(29)).to eq false
  end
end