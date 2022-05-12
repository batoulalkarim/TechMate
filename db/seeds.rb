# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Match.destroy_all 
Message.destroy_all

zelie = User.create!(name: "Zelie Chowaiki", username: "zelie", password: "123", email: "zelie@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan, NY", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RD8WPKK3-a1610838cc34-512", bio: "I've been coding for a few months and found that I need to conenct with someone on an intellectual level, I have to stop dating dumb hot guys!", age: 18, interested_in: "Men")
will = User.create!(name: "William Burke", username: "will", password: "123", email: "will@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn, NY", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02QAD5MJ7L-7095844c4068-512", bio: "I'm looking for the one- my dj queen that loves to program. Could that be you?", age: 23, interested_in: "Women")
bridget = User.create!(name: "Bridget Kelly", username: "bridget", password: "123", email: "bridget@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Williamsburg, NY", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02SB9SHEKC-4f1419905e86-512", bio: "I'm super nice and friendly, looking for a techie who matches my good energy!", age: 24, interested_in: "Mean")
iba = User.create!(name: "Ibaihima Goat", username: "iba", password: "123", email: "iba@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn, NY", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02P7NZAZRV-9fba1edcdab3-512", bio: "Young, Handsome, Humble. Where my smart ladies at?", age: 18, interested_in: "Women")
alex = User.create!(name: "Alexander Manzi", username: "alex", password: "123", email: "alex@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan, NY", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RM9LDMS8-ea7f84db0661-512", bio: "If you can make me smile, we can make this work. I love hiking and skiing, do you?", age: 22, interested_in: "Women")
klem = User.create!(name: "Klemense Loh", username: "klem", password: "123", email: "klem@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Dubai", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02SKJBGK7E-63a9f5c78d6c-512", bio: "All I care about is making money and memories. Want to come along for the ride?", age: 24, interested_in: "Women")
tunisia = User.create!(name: "Tunisia Artope", username: "tunisia", password: "123", email: "tunisia@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan, NY", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U02RSJD6NLV-1a32695c3fde-512", bio: "I never thought I would find myself on one of these apps... but I guess there's a first for everything!", age: 26, interested_in: "Men")
scarlett = User.create!(name: "Scarlette Johansson", username: "scarlett", password: "123", email: "scarlette@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Queens, NY", profilepic: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Goldene_Kamera_2012_-_Scarlett_Johansson_3_%28cropped%2C_2%29.JPG", bio: "A lot of people wouldn't guess this about me, but I've been a backend developer for over 10 years! Ready to meet someone like me.", age: 29, interested_in: "Men")
johnny = User.create!(name: "Johnny Depp", username: "johnny", password: "123", email: "johnny@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Soho, NY", profilepic: "https://media.npr.org/assets/img/2020/11/06/gettyimages-1278081494-36704836ea1e6f5fedbc438e910ebb13a7b0aee1-s1100-c50.jpg", bio: "Don't ask me about Amber.", age: 30, interested_in: "Women")
mindy = User.create!(name: "Mindy Kaling", username: "mindy", password: "123", email: "mindy@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan, NY", profilepic: "https://m.media-amazon.com/images/M/MV5BNzQ2OTUzNDU1MF5BMl5BanBnXkFtZTcwODQ2MTYyNw@@._V1_.jpg", bio: "My boyfriend Ryan and I just broke up so i'm looking for someone to help make him jealous. Will pay you!", age: 30, interested_in: "Men")
bill = User.create!(name: "Bill Gates", username: "bill", password: "123", email: "bill@example.com", job: "Computter Programmer and Entrepeneur", birthdate: "08/28/1955", location: "Private", profilepic: "https://i.guim.co.uk/img/media/43de83936de69e99c2251f371442f9cb00cbbedd/0_1978_8700_6977/master/8700.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b690ea62c0c07f273544e1771f33d4a6", bio: "Life isn't as long as well all thought it would be. I'm looking to set someone up for the rest of theirs!", age: 66,  interested_in: "Women")
mark = User.create!(name: "Mark Zuckerburg", username: "mark", password: "123", email: "mark@example.com", job: "CEO", birthdate: "08/01/1997", location: "Manhattan, NY", profilepic: "https://www.refinery29.com/images/10561947.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960", bio: "You either love me or you hate me, but you can't deny my legacy is infinite", age: 37, interested_in: "Women")
dean = User.create!(name: "Dean Scott", username: "dean", password: "123", email: "dean@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan, NY", profilepic: "https://ca.slack-edge.com/T02MD9XTF-U0192F0QZNG-28dc60c3042f-512", bio: "Hey whats up guys it's ya boy Dean, I'm super into sneakers and very knowledgable about fashion. I need a girl that's , as smart AND fly as me ;)", age: 33, interested_in: "Women")
jack = User.create!(name: "Jack Albeck", username: "jack", password: "123", email: "jack@example.com", job: "Data Scientist", birthdate: "08/01/1997", location: "Brooklyn, NY", profilepic: "https://img.dtcn.com/image/themanual/smiling-businessman-with-brown-bag-walking-in-city.jpg", bio: "I'm just a normal dude, I don't really know what to say here!", age: 24, interested_in: "Women")
mike = User.create!(name: "Mike Wazowski", username: "mike", password: "123", email: "mike@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Manhattan, NY", profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToH_-JClJHLr7EhUgMl2RJ77hsqduvB8pLgaxi3xWQ79nklKLs86dmXxdnJlElJVxIDK4&usqp=CAU", bio: "Recently divorced, I'm not too sure what i'm doing here, but say hi!", age: 36, interested_in: "Women")
jeff = User.create!(name: "Jeffrey Michaels", username: "jeff", password: "123", email: "jeff@example.com", job: "Software Engineer", birthdate: "08/01/1997", location: "Brooklyn, NY", profilepic: "https://thumbs.dreamstime.com/b/handsome-elegant-man-smoke-102339337.jpg", bio: "Young, Handsome, Humble. Where my smart ladies at?", age: 24, interested_in: "Women")

daja = User.create!(name: "Daija Nienow", username: "daja", password: "123", email: "daja@example.com", job: "Information Architect" , birthdate: "01/07/1980", location: "Manhattan, NY", profilepic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "It’s time for me to accept who I am and love myself too. I need to find somebody who loves me for that too! Love doesn't come from someone else. It comes from within, when you love yourself. I have the power to create whatever life I want for myself, and if that means finding love in whatever shape it takes, then so be it.", age: 42, interested_in: "Man")
gilda = User.create!(name: "Gilda Wisozk", username: "gilda", password: "123", email: "gilda@example.com" , job: "Data Scientist" , birthdate: "09/03/2000", location: "Brooklyn, NY", profilepic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "I'm a shy and introverted person, but I am looking for someone to make me feel like we've known each other for ages.", age: 22, interested_in: "Man")
sanford = User.create!(name: "Sanford Jewess", username: "sanford", password: "123", email: "sanford@example.com", job: "UX Designer", birthdate: "10/18/2000", location: "Bronx, NY", profilepic: "https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60", bio: "I am a funny person that always makes people laugh. I love soccer and playing video games with my friends. Get to know me if you want", age: 22, interested_in: "Women")

mauricio = User.create!(name: "Mauricio Turner", username: "mauricio", password: "123", email: "mauricio@example.com", job: "Data Analyst", birthdate: "08/12/2000", location: "Brooklyn, NY", profilepic: "https://images.unsplash.com/photo-1587023568809-cfe1930ee6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60", bio: "I work full time, live with my parents and I'm looking for a relationship that lasts.", age: 22, interested_in: "Everyone")
karen = User.create!(name: "Karen Blick", username: "karen", password: "123", email: "karen@example.com", job: "Data Engineer", birthdate: '02/04/1999', location: "Manhattan, NY", profilepic: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "I am a romantic person and I believe that love can last forever.", age: 23, interested_in: "Men")
damaris = User.create!(name: "Damaris Jacobi", username: "damaris", password: "123", email: "damaris@example.com", job: "UI Designer", birthdate: "08/14/2001", location: "Brooklyn, NY", profilepic: "https://images.unsplash.com/photo-1630265947548-994d8bf4d895?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", bio: "I'm looking for someone who loves me and wants to provide me with a life full of happiness and care.", age: 21, interested_in: "Everyone")

gladyce = User.create!(name: "Gladyce Halvorson", username: "gladyce", password: "123", email: "gladyce@example.com", job: "Accessibility Specialist", birthdate: "08/09/2003", location: "Harlem, NY", profilepic: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "Can cook amazing instant noodles, also a Semi-professional bathroom singer", age: 18, interested_in: "Everyone")
micaela = User.create!(name: "Micaela Hahn", username: "micaela", password: "123", email: "micaela@example.com", job: "Interaction Designer", birthdate: "01/01/2000", location: "Manhattan, NY", profilepic: "https://images.pexels.com/photos/1772474/pexels-photo-1772474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "Morality is simply the attitude we adopt towards people we personally dislike. - Oscar Wilde, A wise man can learn more from a foolish question than a fool can learn from a wise answer. - Bruce Lee", age: 22, interested_in: "Everyone")
lavina = User.create!(name: "Lavina Olson", username: "hahn", password: "123", email: "hahn@example.com", job: "Front-End Designer", birthdate: "03/14/2000", location: "Brooklyn, Ny", profilepic: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "Adapt what is useful, reject what is useless, and add what is specifically your own - Bruce Lee", age: 22, interested_in: "Men")

elinor = User.create!(name: "Elinor Walker", username: "elinor", password: "123", email: "elinor@example.com", job: "Ruby Specialist", birthdate: "09/20/2001", location: "SOHO, NY", profilepic: "https://images.pexels.com/photos/394545/pexels-photo-394545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "To me, ‘busy’ implies that the person is out of control of their life. - Derek Sivers", age: 21, interested_in: "Everyone")
edna = User.create!(name: "Edna Bradtke", username: "edna", password: "123", email: "edna@example.com", job: "Content Strategist", birthdate: "07/13/1997", location: "Queens, NY", profilepic: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "Action speaks louder than words but not nearly as often. - Mark Twain", age: 24, interested_in: "Men")
geo = User.create!(name: "Geo Kunze", username: "geo", password: "123", email: "geo@example.com", job: "Growth Hacker", birthdate: "07/13/1997", location: "Brooklyn, NY", profilepic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", bio: "Eat a live frog first thing in the morning, and nothing worse will happen to you the rest of the day. - Mark Twain", age: 24, interested_in: "Women")

keanu = User.create!(name: "Keanu Robel", username: "keanu", password: "123", email: "keanu@example.com", job: "Digital Marketing Manager", birthdate: "08/04/1995", location: "Queens, NY", profilepic: "https://images.unsplash.com/photo-1647436595356-603cea353274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", bio: "The measure of success is not how much time you spend doing what you love, it's how little time you spend doing what you hate. - Casey Neistat", age: 26, interested_in: "Everyone")
roberto = User.create!(name: "Roberto Heaney", username: "roberto", password: "123", email: "roberto@example.com", job: "Web Analytics Developer", birthdate: "04/16/1998", location: "Manhattan, NY", profilepic: "https://images.unsplash.com/photo-1623200470420-e7546d2f786c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", bio: "Wealth is liberty - liberty to seek recreation, liberty to enjoy life, liberty to improve the mind: it is disposable time and nothing more. - Karl Marx", age: 23, interested_in: "Women")
gerald = User.create!(name: "Gerald Donnelly", username: "gerald", password: "123", email: "gerald@example.com", job: "SEO Consultant", birthdate: "08/03/1998", location: "Brooklyn, NY", profilepic: "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcyfHxtZW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", bio: "Shallow men believe in luck or in circumstance. Strong men believe in cause and effect. - Ralph Waldo Emerson", age: 23, interested_in: "Women")

jacky = User.create!(name: "Jacky Blick", username: "jacky", password: "123", email: "jacky@example.com", job: "Marketing Technologist", birthdate: "05/02/1992", location: "Manhattan, NY", profilepic: "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest. - Adam Smith", age: 30, interested_in: "Man")
kameron = User.create!(name: "Kameron Torphy", username: "kameron", password: "123", email: "kameron@example.com", job: "Data Analyst", birthdate: "05/18/1993", location: "Brooklyn, NY", profilepic: "https://images.unsplash.com/photo-1613322800554-25691677df22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=833&q=80", bio: "Be clear about your intentions, thoughtful in your choices, simple in your desires and content in your days... Life will present us with enough challenges. We don’t need to set ourselves up for more by fueling expectations or living rigidly. - Mark Sisson on Stoic philosophy", age: 29, interested_in: "Women")
alaina = User.create!(name: "Alaina Christiansen", username: "alaina", password: "123", email: "alaina@example.com", job: "Software Engineer", birthdate: "11/18/1997", location: "SOHO, NY", profilepic: "https://images.pexels.com/photos/894077/pexels-photo-894077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "If you find yourself criticizing other people, you’re probably doing it out of resistance. When we see others beginning to live their authentic selves, it drives us crazy if we have not lived out our own. – The Art of War", age: 29, interested_in: "Men")

alec = User.create!(name: "Alec Stamm", username: "alec", password: "123", email: "alec@example.com", job: "Software Engineer", birthdate: "12/20/2000", location: "NY, NY", profilepic: "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxtZW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", bio: "I'm just an average guy looking for love. I work hard, have my own house and car, but don't have much time to date. I would really like to find someone who is understanding and will put in a little effort.", age: 22, interested_in: "Everyone")
cathryn = User.create!(name: "Cathryn Howell", username: "cathryn", password: "123", email: "cathryn@example.com", job: "Data Analyst", birthdate: "06/25/1998", location: "Manhattan, NY", profilepic: "https://images.pexels.com/photos/6163283/pexels-photo-6163283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", bio: "If you want to accomplish uncommon things, you need to live everyday of your life uncommonly. If you spend your day like everyone else, you will end up like everyone else. -Unknown", age: 24, interested_in: "Men")

Match.create(requestor_id: micaela.id, receiver_id: keanu.id, status: "pending", likes: true)
Match.create(requestor_id: mauricio.id, receiver_id: micaela.id, status: "pending", likes: true)
Match.create(requestor_id: lavina.id, receiver_id: mauricio.id, status: "pending", likes: true)
Match.create(requestor_id: geo.id, receiver_id: lavina.id, status: "pending", likes: true)
Match.create(requestor_id: elinor.id, receiver_id: geo.id, status: "pending", likes: true)
Match.create(requestor_id: damaris.id, receiver_id: elinor.id, status: "pending", likes: true)
Match.create(requestor_id: edna.id, receiver_id: gerald.id, status: "pending", likes: true)
Match.create(requestor_id: keanu.id, receiver_id: edna.id, status: "pending", likes: true)
Match.create(requestor_id: jacky.id, receiver_id: keanu.id, status: "pending", likes: true)
Match.create(requestor_id: roberto.id, receiver_id: jacky.id, status: "pending", likes: true)
Match.create(requestor_id: alec.id, receiver_id: alaina.id, status: "pending", likes: true)
Match.create(requestor_id: cathryn.id, receiver_id: alec.id, status: "pending", likes: true)
Match.create(requestor_id: alex.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: daja.id, receiver_id: sanford.id, status: "pending", likes: true)
Match.create(requestor_id: karen.id, receiver_id: mauricio.id, status: "pending", likes: true)
Match.create(requestor_id: sanford.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: mauricio.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: damaris.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: karen.id, receiver_id: alex.id, status: "pending", likes: true)
Match.create(requestor_id: gilda.id, receiver_id: alex.id, status: "accepted", likes: true)
Match.create(requestor_id: daja.id, receiver_id: alex.id, status: "daja", likes: true)
Match.create(requestor_id: geo.id, receiver_id: zelie.id, status: "pending", likes: true)
Match.create(requestor_id: lavina.id, receiver_id: dean.id, status: "pending", likes: true)
Match.create(requestor_id: lavina.id, receiver_id: dean.id, status: "pending", likes: true)
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


Message.create(requestor_id: iba.id, receiver_id: zelie.id, content: "Hey, You seem really fun 😁")
Message.create(requestor_id: zelie.id, receiver_id: iba.id, content: "You got that right ;)")
Message.create(requestor_id: iba.id, receiver_id: zelie.id, content: "So how long have you been in New York?")
Message.create(requestor_id: zelie.id, receiver_id: iba.id, content: "It's been a few months! I've been attending a Software Engineering bootcamp!")
Message.create(requestor_id: iba.id, receiver_id: zelie.id, content: "..Please don't tell me it's Flatiron...")

Message.create(requestor_id: alex.id, receiver_id: zelie.id, content: "Hi! I'm so glad we matched!!")
Message.create(requestor_id: zelie.id, receiver_id: alex.id, content: "Me too! I feel like I've been on this app forever lol")
Message.create(requestor_id: alex.id, receiver_id: zelie.id, content: "ummm.. kindof a red flag but ok")
Message.create(requestor_id: alex.id, receiver_id: zelie.id, content: "so what do you do for fun??")
Message.create(requestor_id: zelie.id, receiver_id: alex.id, content: "...")

Message.create(requestor_id: dean.id, receiver_id: zelie.id, content: "Hey Zelie, I'm dean")
Message.create(requestor_id: zelie.id, receiver_id: dean.id, content: "Hey Dean, sorry, I didnt mean to match you")
Message.create(requestor_id: dean.id, receiver_id: zelie.id, content: "Ouch. My kicks aren't fly enough for you??")
Message.create(requestor_id: zelie.id, receiver_id: dean.id, content: "alright")

Message.create(requestor_id: alex.id, receiver_id: gilda.id, content: "Wow, you are stunning! 🥰 ")
Message.create(requestor_id: gilda.id, receiver_id: alex.id, content: "Oh wow- this app works fast ")
Message.create(requestor_id: daja.id, receiver_id: alex.id, content: "You seem very genuine!")
Message.create(requestor_id: alex.id, receiver_id: daja.id, content: "Well now thats a great compliment!! Thank you Daja :)")