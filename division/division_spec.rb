require './division.rb'

describe 'div' do
  it "should return a float" do
    expect(div(3, 4).is_a? Float).to eq true
  end

  it "returns the proper value" do
    expect(div(25, 5)).to eq 5.0
  end

  it "should return NaN if the inputs are invalid" do
    expect(div("25", 5).nan?).to eq true
  end

  it "should return NaN if the inputs try to divide by zero" do
    expect(div(6, 0).nan?).to eq true
  end
end