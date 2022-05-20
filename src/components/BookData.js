import React from 'react'

const BookData = [
    {
        id: '1',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449868701l/11127._SY475_.jpg',
        name: 'The chronicles of Narnia',
        author: 'C S Lewis',
        category: 'Adventure',
        bg: '#d1a33d',
        description:'Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia.For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations. This edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronlogical order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published.'
    },
    {
        id: '2',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg',
        name: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        category: 'Adventure',
        bg: '#627796',
        description:'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.'
    },
    {
        id: '3',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg',
        name: 'Dune',
        author:'Frank Herbert',
        category: 'Horror',
        bg: '#c66321',
        description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for... When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.',
    },
    {
        id: '4',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511302904l/890._SX318_.jpg',
        name: 'Of Mice and Men',
        author: 'John Steinbeck',
        category: 'Romance',
        bg: '#6a4451',
        description:'They are an unlikely pair: George is "small and quick and dark of face"; Lennie, a man of tremendous size, has the mind of a young child. Yet they have formed a "family," clinging together in the face of loneliness and alienation. Laborers in California dusty vegetable fields, they hustle work when they can, living a hand-to-mouth existence. For George and Lennie have a plan: to own an acre of land and a shack they can call their own. When they land jobs on a ranch in the Salinas Valley, the fulfillment of their dream seems to be within their grasp. But even George cannot guard Lennie from the provocations of a flirtatious woman, nor predict the consequences of Lennie unswerving obedience to the things George taught him. "A thriller, a gripping tale . . . that you will not set down until it is finished. Steinbeck has touched the quick." —The New York Times'
    },
    {
        id: '5',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg',
        name: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        category: 'Fantasy',
        bg: '#e65623',
        description: 'It is Christmas time and Holden Caulfield has just been expelled from yet another school. Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters - shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning. The Catcher in the Rye is an all-time classic in coming-of-age literature- an elegy to teenage alienation, capturing the deeply human need for connection and the bewildering sense of loss as we leave childhood behind. J.D. Salinger is classic novel of teenage angst and rebellion was first published in 1951. The novel was included on Time is 2005 list of the 100 best English-language novels written since 1923. It was named by Modern Library and its readers as one of the 100 best English-language novels of the 20th century. It has been frequently challenged in the court for its liberal use of profanity and portrayal of sexuality and in the 1950 is and 60 is it was the novel that every teenage boy wants to read. '
    },
    {
        id: '6',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631088473l/35031085._SY475_.jpg',
        name: 'Frankenstein: The 1818 Text',
        author: 'Mary Wollstonecraft Shelley',
        category: 'Fantasy',
        bg: '#010302',
        description: 'Mary Shelley is seminal novel of the scientist whose creation becomes a monster. This edition is the original 1818 text, which preserves the hard-hitting and politically charged aspects of Shelley is original writing, as well as her unflinching wit and strong female voice. This edition also includes a new introduction and suggestions for further reading by author and Shelley expert Charlotte Gordon, literary excerpts and reviews selected by Gordon and a chronology and essay by preeminent Shelley scholar Charles E. Robinson.'
    },
    {
        id: '7',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629680008l/18135._SY475_.jpg',
        name: 'Romeo and Juliet',
        author: 'William Shakespeare',
        category: 'Romance',
        bg: '#c45983',
        description: 'In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud. In this death-filled setting, the movement from love at first sight to the lovers’ final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers.'
    },
    {
        id: '8',
        imgSrc: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367545443l/157993.jpg',
        name: 'The Little Prince',
        author: 'George Orwell',
        category: 'Horror',
        bg: '#065195',
        description: 'A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. "Please," asks the stranger, "draw me a sheep." And the pilot realizes that when life is events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers. Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince, presented here in a stunning new translation with carefully restored artwork. The definitive edition of a worldwide classic, it will capture the hearts of readers of all ages.'
    },
    {
        id: '9',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781529176759.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Thriller',
        bg: '#f6802a',
        description: "What is wrong with you?' Laura has spent most of her life being judged. She's seen as hot-tempered, troubled, a loner. Some even call her dangerous. Miriam knows that just because Laura is witnessed leaving the scene of a horrific murder with blood on her clothes, that doesn't mean she's a killer. "
    },
    {
        id: '10',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781526617576.jpg',
        name: 'Light Seekers',
        author: 'Femi',
        category: 'Thriller',
        bg: '#90b19e',
        description: "Winner of the 2019 UEA Crime Writing Prize, Lightseekers is the start of a major new crime series introducing investigative psychologist Dr Philip Taiwo. When three young students are brutally murdered in a Nigerian university town, their killings - and their killers - are caught on social media."
    },
    {
        id: '11',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781398707566.jpg',
        name: 'The Siege',
        author: 'John Sutherland',
        category: 'Romance',
        bg: '#20202a',
        description: "What is wrong with you?' Laura has spent most of her life being judged. She's seen as hot-tempered, troubled, a loner. Some even call her dangerous. Miriam knows that just because Laura is witnessed leaving the scene of a horrific murder with blood on her clothes, that doesn't mean she's a killer. "
    },
    {
        id: '12',
        imgSrc: 'https://storage.googleapis.com/lr-assets/main/covers/1652346850-lying-beside-you-jacket-260x400.jpg',
        name: 'Lying Besides You',
        author: 'Paula Hawkins',
        category: 'Horror',
        bg: '#06215b',
        description: "What is wrong with you?' Laura has spent most of her life being judged. She's seen as hot-tempered, troubled, a loner. Some even call her dangerous. Miriam knows that just because Laura is witnessed leaving the scene of a horrific murder with blood on her clothes, that doesn't mean she's a killer. "
    },
    {
        id: '13',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9780008450403.jpg',
        name: 'Final strife',
        author: 'Paula Hawkins',
        category: 'Thriller',
        bg: '#a52d2a',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    },
    {
        id: '14',
        imgSrc: 'https://storage.googleapis.com/lr-assets/main/covers/1639048809-9102x2zthps-277x400.jpg',
        name: 'Shadow of Men',
        author: 'Paula Hawkins',
        category: 'Horror',
        bg: '#3e332c',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    },
    {
        id: '15',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781838953751.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Adventure',
        bg: '#92ce92',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    },
    {
        id: '16',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9780571365449.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Thriller',
        bg: '#64c3bb',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    },
    {
        id: '17',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781838852528.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Fantasy',
        bg: '#e74e22',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    },
    {
        id: '18',
        imgSrc: 'https://storage.googleapis.com/lr-assets/main/covers/1647594500-all-the-seas-of-the-world-260x400.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Fantasy',
        bg: '#d8b250',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    
    },
    {
        id: '19',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781472983954.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Adventure',
        bg: '#36392e',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    
    },
    {
        id: '20',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781472286543.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Fantasy',
        bg: '#ab6c1f',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    
    },
    {
        id: '21',
        imgSrc: 'https://storage.googleapis.com/lr-assets/_nielsen/400/9781838933579.jpg',
        name: 'A Slow Fire Burning',
        author: 'Paula Hawkins',
        category: 'Adventure',
        bg: '#92a8a3',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt, officia illum voluptatibus voluptatem sapiente! Explicabo ipsam commodi reiciendis! Reprehenderit laudantium illo nisi perspiciatis rem nam odit ut, incidunt dignissimos."
    },
    
]
export function getBookData() {
    return BookData;
  }
// export function getBook(id) {
//     return getBookData.find((book) => book.id === id);
//   }