# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Match.destroy_all 

zelie = User.create!(name: "Zelie Chowaiki", username: "zelie", password: "123", email: "zelie@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RD8WPKK3-a1610838cc34-512", bio: "I've been coding for a few months and found that I need to conenct with someone on an intellectual level, I have to stop dating dumb hot guys!", age: 18, interested_in: "Men", list_of_matches: [], images: [], list_of_messages:[], likes: [], dislikes: [])
will = User.create!(name: "William Burke", username: "will", password: "123", email: "will@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02QAD5MJ7L-7095844c4068-512", bio: "I'm looking for the one- my dj queen that loves to program. Could that be you?", age: 23, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
bridget = User.create!(name: "Bridget Kelly", username: "bridget", password: "123", email: "bridget@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Williamsburg", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02SB9SHEKC-4f1419905e86-512", bio: "I'm super nice and friendly, looking for a techie who matches my good energy!", age: 24, interested_in: "Mean", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
iba = User.create!(name: "Ibaihima Goat", username: "iba", password: "123", email: "iba@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02P7NZAZRV-9fba1edcdab3-512", bio: "Young, Handsome, Humble. Where my smart ladies at?", age: 18, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
alex = User.create!(name: "Alexander Manzi", username: "alex", password: "123", email: "alex@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RM9LDMS8-ea7f84db0661-512", bio: "If you can make me smile, we can make this work. I love hiking and skiing, do you?", age: 22, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
klem = User.create!(name: "Klemense Loh", username: "klem", password: "123", email: "klem@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Dubai", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02SKJBGK7E-63a9f5c78d6c-512", bio: "All I care about is making money and memories. Want to come along for the ride?", age: 24, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
tunisia = User.create!(name: "Tunisia Artope", username: "tunisia", password: "123", email: "tunisia@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RSJD6NLV-1a32695c3fde-512", bio: "I never thought I would find myself on one of these apps... but I guess there's a first for everything!", age: 26, interested_in: "Men", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
scarlett = User.create!(name: "Scarlette Johansson", username: "scarlett", password: "123", email: "scarlette@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Queens", profilepic: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Goldene_Kamera_2012_-_Scarlett_Johansson_3_%28cropped%2C_2%29.JPG", bio: "A lot of people wouldn't guess this about me, but I've been a backend developer for over 10 years! Ready to meet someone like me.", age: 29, interested_in: "Men", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
johnny = User.create!(name: "Johnny Depp", username: "johnny", password: "123", email: "johnny@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Soho", profilepic: "https://media.npr.org/assets/img/2020/11/06/gettyimages-1278081494-36704836ea1e6f5fedbc438e910ebb13a7b0aee1-s1100-c50.jpg", bio: "Don't ask me about Amber.", age: 30, interested_in: "Women", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])
mindy = User.create!(name: "Mindy Kaling", username: "mindy", password: "123", email: "mindy@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan", profilepic: "https://m.media-amazon.com/images/M/MV5BNzQ2OTUzNDU1MF5BMl5BanBnXkFtZTcwODQ2MTYyNw@@._V1_.jpg", bio: "My boyfriend Ryan and I just broke up so i'm looking for someone to help make him jealous. Will pay you!", age: 30, interested_in: "Men", list_of_matches: [], images: [], list_of_messages: [], likes: [], dislikes: [])

Match.create(requestor_id: zelie.id, receiver_id: iba.id, status: "pending")
Match.create(requestor_id: zelie.id, receiver_id: alex.id, status: "pending")
Match.create(requestor_id: zelie.id, receiver_id: klem.id, status: "pending")
Match.create(requestor_id: zelie.id, receiver_id: johnny.id, status: "pending")
Match.create(requestor_id: will.id, receiver_id: bridget.id, status: "pending")
Match.create(requestor_id: will.id, receiver_id: scarlett.id, status: "pending")
Match.create(requestor_id: will.id, receiver_id: tunisia.id, status: "pending")
Match.create(requestor_id: will.id, receiver_id: mindy.id, status: "pending")
Match.create(requestor_id: bridget.id, receiver_id: alex.id, status: "pending")
Match.create(requestor_id: klem.id, receiver_id: tunisia.id, status: "pending")
Match.create(requestor_id: johnny.id, receiver_id: scarlett.id, status: "pending")
Match.create(requestor_id: will.id, receiver_id: zelie.id, status: "pending")