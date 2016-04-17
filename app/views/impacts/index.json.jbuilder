json.array!(@impacts) do |impact|
  json.extract! impact, :id, :name, :country, :continent, :lat, :lon, :diameter, :age, :exposed, :drilled, :target_rock, :bolide_type, :image
  json.url impact_url(impact, format: :json)
end
