# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Match.destroy_all 

zelie = User.create!(name: "Zelie Chowaiki", username: "zelie", password: "123", email: "zelie@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RD8WPKK3-a1610838cc34-512", bio: "I've been coding for a few months and found that I need to conenct with someone on an intellectual level, I have to stop dating dumb hot guys!", age: 18, interested_in: "Men", list_of_matches: [], images: [], list_of_messages:[])
will = User.create!(name: "William Burke", username: "will", password: "123", email: "will@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02QAD5MJ7L-7095844c4068-512", bio: "I'm looking for the one- my dj queen that loves to program. Could that be you?", age: 23, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [])
bridget = User.create!(name: "Bridget Kelly", username: "bridget", password: "123", email: "bridget@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Williamsburg", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02SB9SHEKC-4f1419905e86-512", bio: "I'm super nice and friendly, looking for a techie who matches my good energy!", age: 24, interested_in: "Mean", list_of_matches: [], images: [], list_of_messages: [])
iba = User.create!(name: "Ibaihima Goat", username: "iba", password: "123", email: "iba@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02P7NZAZRV-9fba1edcdab3-512", bio: "Young, Handsome, Humble. Where my smart ladies at?", age: 18, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [])
alex = User.create!(name: "Alexander Manzi", username: "alex", password: "123", email: "alex@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RM9LDMS8-ea7f84db0661-512", bio: "If you can make me smile, we can make this work. I love hiking and skiing, do you?", age: 22, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [])
klem = User.create!(name: "Klemense Loh", username: "klem", password: "123", email: "klem@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Dubai", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02SKJBGK7E-63a9f5c78d6c-512", bio: "All I care about is making money and memories. Want to come along for the ride?", age: 24, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [])
tunisia = User.create!(name: "Tunisia Artope", username: "tunisia", password: "123", email: "tunisia@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RSJD6NLV-1a32695c3fde-512", bio: "I never thought I would find myself on one of these apps... but I guess there's a first for everything!", age: 26, interested_in: "Men", list_of_matches: [], images: [], list_of_messages: [])
scarlett = User.create!(name: "Scarlette Johansson", username: "scarlett", password: "123", email: "scarlette@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Queens", profilepic: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Goldene_Kamera_2012_-_Scarlett_Johansson_3_%28cropped%2C_2%29.JPG", bio: "A lot of people wouldn't guess this about me, but I've been a backend developer for over 10 years! Ready to meet someone like me.", age: 29, interested_in: "Men", list_of_matches: [], images: [], list_of_messages: [])
johnny = User.create!(name: "Johnny Depp", username: "johnny", password: "123", email: "johnny@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Soho", profilepic: "https://media.npr.org/assets/img/2020/11/06/gettyimages-1278081494-36704836ea1e6f5fedbc438e910ebb13a7b0aee1-s1100-c50.jpg", bio: "Don't ask me about Amber.", age: 30, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [])
mindy = User.create!(name: "Mindy Kaling", username: "mindy", password: "123", email: "mindy@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://m.media-amazon.com/images/M/MV5BNzQ2OTUzNDU1MF5BMl5BanBnXkFtZTcwODQ2MTYyNw@@._V1_.jpg", bio: "My boyfriend Ryan and I just broke up so i'm looking for someone to help make him jealous. Will pay you!", age: 30, interested_in: "Men", list_of_matches: [], images: [], list_of_messages: [])
bill = User.create!(name: "Bill Gates", username: "bill", password: "123", email: "bill@example.com", job: "Computter Programmer and Entrepeneur", birthdate: "08/28/1955", location: "Private", profilepic: "https://i.guim.co.uk/img/media/43de83936de69e99c2251f371442f9cb00cbbedd/0_1978_8700_6977/master/8700.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b690ea62c0c07f273544e1771f33d4a6", bio: "Life isn't as long as well all thought it would be. I'm looking to set someone up for the rest of theirs!", age: 66,  interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [] )
mark = User.create!(name: "Mark Zuckerburg", username: "mark", password: "123", email: "mark@example.com", job: "CEO", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://www.refinery29.com/images/10561947.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960", bio: "You either love me or you hate me, but you can't deny my legacy is infinite", age: 37, interested_in: "Women", list_of_matches: [], images: [], list_of_messages:[])
dean = User.create!(name: "Dean Scott", username: "dean", password: "123", email: "dean@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U0192F0QZNG-28dc60c3042f-512", bio: "Hey whats up guys it's ya boy Dean, I'm super into sneakers and very knowledgable about fashion. I need a girl that's , as smart AND fly as me ;)", age: 33, interested_in: "Women", list_of_matches: [], images: [], list_of_messages:[])
jack = User.create!(name: "Jack Albeck", username: "jack", password: "123", email: "jack@example.com", job: "Data Scientist", birthdate: "08/01/1997", location: "Brooklyn", profilepic: "https://img.dtcn.com/image/themanual/smiling-businessman-with-brown-bag-walking-in-city.jpg", bio: "I'm just a normal dude, I don't really know what to say here!", age: 24, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [])
mike = User.create!(name: "Mike Wazowski", username: "mike", password: "123", email: "mike@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToH_-JClJHLr7EhUgMl2RJ77hsqduvB8pLgaxi3xWQ79nklKLs86dmXxdnJlElJVxIDK4&usqp=CAU", bio: "Recently divorced, I'm not too sure what i'm doing here, but say hi!", age: 36, interested_in: "Women", list_of_matches: [], images: [], list_of_messages:[])
jeff = User.create!(name: "Jeffrey Michaels", username: "jeff", password: "123", email: "jeff@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn", profilepic: "https://thumbs.dreamstime.com/b/handsome-elegant-man-smoke-102339337.jpg", bio: "Young, Handsome, Humble. Where my smart ladies at?", age: 24, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [])




Match.create(requestor_id: zelie.id, receiver_id: iba.id, status: "accepted", likes: true)
Match.create(requestor_id: zelie.id, receiver_id: alex.id, status: "accepted", likes: true)
Match.create(requestor_id: zelie.id, receiver_id: klem.id, status: "accepted", likes: true)
Match.create(requestor_id: zelie.id, receiver_id: johnny.id, status: "accepted", likes: true)

Match.create(requestor_id: mike.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: zelie.id, receiver_id: jeff.id, status: "pending", likes: true)


Match.create(requestor_id: will.id, receiver_id: bridget.id, status: "pending", likes: true)
Match.create(requestor_id: will.id, receiver_id: scarlett.id, status: "pending", likes: true)
Match.create(requestor_id: will.id, receiver_id: tunisia.id, status: "pending", likes: true)
Match.create(requestor_id: will.id, receiver_id: mindy.id, status: "pending", likes: true)
Match.create(requestor_id: will.id, receiver_id: zelie.id, status: "accepted", likes: true)

Match.create(requestor_id: bridget.id, receiver_id: alex.id, status: "pending", likes: true)
Match.create(requestor_id: klem.id, receiver_id: tunisia.id, status: "pending", likes: true)
Match.create(requestor_id: johnny.id, receiver_id: scarlett.id, status: "pending", likes: true)


Match.create(requestor_id: bill.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: mark.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: zelie.id, receiver_id: dean.id, status: "accepted", likes: true)