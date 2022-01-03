namespace :seed do
    product_categories = ['Dairy & Eggs','Produce','Meat & Seafood','Bread & Baked Goods','Breakfast & Cereals',
        'Beverages','Frozen Foods','Chips, Crackers & Popcorn','Cookies & Sweets','Nuts & Dried Fruit',
        'Canned Goods','Spices','Soups & Broth','Spreads, Salsa & Dips','Condiments & Dressings',
        'Vitamins & Supplements','Other']
    post_categories = ['Vegan','Vegetarian','Gluten Free','Keto Friendly','Organic','Dairy Free',
        'Sugar Conscious','Natural Soaps','Zero Waste']
    places = ['Aldi','Costco','Earth Fare','Giant','Harris Teeter','Kroger','Lidl','MOMs Organic Market',
            'Natural Grocers','Publix','Sprouts',"Trader Joe's",'Wegmans','Whole Foods','Amazon','Online','Other']
    task places: :environment do
        3.times{p "Feeding places"}
        places.each do |place|
            p Place.create(name: place)
        end
    end
    task categories: :environment do
        3.times{p "Feeding categories"}
        product_categories.each do |a|
            p category = Category.create(name: a, role: "Product")
        end
        post_categories.each do |a|
            p category = Category.create(name: a, role: "Post")
        end
    end
    task products: :environment do
        3.times{p "Feeding dummy products"}
        collection = (1..32).to_a.reverse
        collection.each do |i|
            product = Product.create(name: "#{Faker::Food.dish} - #{Faker::Food.spice}", place_name: places.sample, category_name: product_categories.sample)
            product.img_front.attach(io: File.open("app/assets/images/#{i}.jpg"), filename: "#{i}.jpg", content_type: 'image/jpg')
            product.img_back.attach(io: File.open('app/assets/images/nutrition.png'), filename: 'nutrition.png', content_type: 'image/png')
            p product
            sleep(5)
        end
    end
    task keys: :environment do
        3.times{p "Feeding image keys"}
        products = Product.where.not(role: "Hidden")
        products.each do |product|
            if product.img_front.attached?
                product.img_front_key = product.img_front.blob.key
            end
            if product.img_back.attached?
                product.img_back_key = product.img_back.blob.key
            end
            if product.img_extra.attached?
                product.img_extra_key = product.img_extra.blob.key
            end
            p product.save
        end
        users = User.where.not(role: "Hidden")
        users.each do |user|
            if user.image.attached?
                user.img_key = user.image.blob.key
                p user.save
            end
        end
        images = Image.where.not(role: "Hidden")
        images.each do |image|
            if image.img.attached?
                image.img_key = image.img.blob.key
                p image.save
            end
        end
    end
    task avatars: :environment do
        3.times{p "Feeding avatars"}
        require 'csv'
        require 'securerandom'    
        CSV.foreach(File.open(Rails.public_path.join('avatars_zKgVhciXAvJDBgNCGcHHkBPr.csv')), :headers => true) do |row|
            p hashy = row.to_hash
            p avatar = Avatar.create(role: hashy["Name"])
            random_string = SecureRandom.hex + SecureRandom.hex + SecureRandom.hex
            avatar.img.attach(io: File.open("app/assets/images/avatars/#{hashy['Img Src']}"), filename: "#{random_string}.png", content_type: 'image/png')
            avatar.set_image_key
            sleep(5)
        end
    end
    task ratios: :environment do
        3.times{p "Feeding img ratios"}
        products = Product.where.not(role: "Hidden")
        products.each do |product|
            if product.img_front.attached?
                ratio = (product.img_front.blob.metadata['height'].to_f / product.img_front.blob.metadata['width'].to_f).to_f
                p ratio
                if ratio.nan?
                    ratio = 1.3333333333333333
                else
                    ratio = ratio
                end
                product.img_ratio = ratio
                product.save
            end
        end
    end
end