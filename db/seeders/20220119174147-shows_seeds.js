'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Shows', [

      { name: 'John Doe', description: 'some text', overallRating: 5.00, watchStatus: false, genre: 'example fantasy', imageSrc: 'https://www.bkmmarketing.com/hs-fs/hub/149360/file-61596661-jpg/images/color_bars.jpg?width=251&height=169&name=color_bars.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'euphoria', description: 'An American adaptation of the Israeli show of the same name, "Euphoria" follows the troubled life of 17-year-old Rue, a drug addict fresh from rehab with no plans to stay clean. Circling in Rues orbit are Jules, a transgender girl searching for where she belongs; Nate, a jock whose anger issues mask sexual insecurities; Chris, a football star who finds the adjustment from high school to college harder than expected; Cassie, whose sexual history continues to dog her.', overallRating: 4.20, watchStatus: false, genre: 'Drama', imageSrc: 'https://resizing.flixster.com/-Qc3tUh3LV6HDnHjQj2Ip6frhlU=/206x305/v2/https://flxt.tmsimg.com/assets/p16792512_b_v13_af.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Riverdale', description: 'Archie Andrews starts the school year with the world weighing on his shoulders. Hes decided he wants to pursue a future in the music business, but his recently ended clandestine relationship with the music teacher has left him without a mentor, and his friendship with Jughead Jones is in a bad place. Things look like they might be turning around when Veronica Lodge, a new girl, arrives. Despite the instant chemistry, Veronica is hesitant to risk a friendship with Betty.', overallRating: 3.35, watchStatus: false, genre: 'Drama', imageSrc: 'https://resizing.flixster.com/O3ZdGfK77i7qn4hrPiLW3ZKWl0w=/206x305/v2/https://flxt.tmsimg.com/assets/p12914589_b_v13_an.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Succession', description: 'Although he has no plans to step aside as the head of Waystar Royco, the international media conglomerate controlled by his family, aging patriarch Logan Roy is contemplating what the future holds. He has lingered in the limelight longer than even he thought he would, and now family members want to run the company as they see fit. Despite a best-laid succession plan, tempers flare over Logans intentions. Kendall Roy.', overallRating: 4.40, watchStatus: false, genre: 'Drama', imageSrc: 'https://resizing.flixster.com/R01jfA3qt-nmTjuDBpTbaG0Y_94=/206x305/v2/https://flxt.tmsimg.com/assets/p15052900_b_v13_ax.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Resident', description: 'Conrad Hawkins is one of Chastain Park Memorial Hospitals best doctors. Charming and arrogant, Conrad likes to take an unconventional approach whenever possible and believes its his personal duty to shatter the romantic illusions of the first-year residents. Dr. Devon Pravesh is an innocent idealist who leans on his finely tuned moral compass, but with Conrads help, he begins to realize that the practice of medicine is a business.', overallRating: 3.85, genre: 'Drama', imageSrc: 'https://resizing.flixster.com/P503IDhpzSwOL2BLL2f25uIX_nc=/206x305/v2/https://flxt.tmsimg.com/assets/p14154583_b_v12_uc.jpg', watchStatus: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'New Amsterdam', description: 'Dr. Max Goodwin is brilliant, charming -- and the new medical director at Americas oldest public hospital. While hes set on tearing down the bureaucracy to provide exceptional care, the doctors and staff are not so sure. Theyve heard this before, and no one else has delivered on those promises. Not taking no for an answer, Max disrupts the status quo and proves he will stop at nothing to breathe new life into this understaffed.', overallRating: 4.00, watchStatus: false, genre: 'Drama', imageSrc: 'https://resizing.flixster.com/ownQCgn5G3xVE5caBKZyvYgFr3Q=/206x305/v2/https://flxt.tmsimg.com/assets/p15516929_b_v13_aj.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game of Thrones', description: 'George R.R. Martins best-selling book series "A Song of Ice and Fire" is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic. Its the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing a deadly game for control of the Seven Kingdoms of Westeros, and to sit atop the Iron Throne.', overallRating: 4.6, watchStatus: false, genre: 'Sci-Fi', imageSrc: 'https://resizing.flixster.com/S9avaJq_hKgj_lt8nphqPV5FqAE=/206x305/v2/https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Stranger Things', description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.', overallRating: 4.35, watchStatus: false, genre: 'Sci-Fi', imageSrc: 'https://resizing.flixster.com/22nqSYl_XrLDedpVhNdkkYW8t5Y=/206x305/v2/https://resizing.flixster.com/Tli5IdhnsmNHDvr9MsQmaHX8t_U=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjUyNDkxMy53ZWJw', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Star Trek: The Next Generation', description: 'Featuring a bigger and better USS Enterprise, this series is set 78 years after the original series -- in the 24th century. Instead of Capt. James Kirk, a less volatile and more mature Capt. Jean-Luc Picard heads the crew of various humans and alien creatures in their adventures in space -- the final frontier.', overallRating: 4.30, watchStatus: false, genre: 'Sci-Fi', imageSrc: 'https://resizing.flixster.com/VYNZ4eScvgJsvcX20z8gxO0HqIc=/206x305/v2/https://flxt.tmsimg.com/assets/p183887_b_v8_ah.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Outlander', description: 'After serving as a British Army nurse in World War II, Claire Randall is enjoying a second honeymoon in Scotland with husband Frank, an MI6 officer looking forward to a new career as an Oxford historian. Suddenly, Claire is transported to 1743 and into a mysterious world where her freedom and life are threatened. To survive.', overallRating: 4.2, watchStatus: false, genre: 'Sci-Fi', imageSrc: 'https://resizing.flixster.com/xvHek75xt4vxUPKFYxKGpNUoqMU=/206x305/v2/https://resizing.flixster.com/RxDemRYDV9P4Q67TftIpHmIzoWc=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI1NzU1MS53ZWJw', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The 100', description: 'When nuclear Armageddon destroys civilization on Earth, the only survivors are those on the 12 international space stations in orbit at the time. Three generations later, the 4,000 survivors living on a space ark of linked stations see their resources dwindle and face draconian measures established to ensure humanitys future.', overallRating: 3.60, watchStatus: false, genre: 'Sci-Fi', imageSrc: 'https://resizing.flixster.com/QfyYhHgf-riPp_0yZIeuG2IXjCM=/206x305/v2/https://resizing.flixster.com/9fFyokqVdsBfQ2xVynielMQJK_k=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjEzMzEzNy53ZWJw', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Masterchef', description: 'Amateur chefs compete in a series of cooking challenges overseen by a panel of accomplished chefs. Each week they have to survive elimination and become a culinary master, earning the title of MasterChef.', overallRating: 3.50, watchStatus: false, genre: 'Food', imageSrc: 'https://resizing.flixster.com/K75x9AOloyNfnaoT2dcb8o4Omc8=/206x305/v2/https://flxt.tmsimg.com/assets/p8071643_b_v8_bg.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hell\'s Kitchen', description: 'In the US, chefs compete against one another. Gordon Ramsay hosts the intense cooking competition where the winner will be given the chance to be a head chef, but first must prove themselves.', overallRating: 3.50, watchStatus: false, genre: 'Food', imageSrc: 'https://resizing.flixster.com/W8kbQhkQhRKxqNnG6KOKZPkMNAA=/206x305/v2/https://flxt.tmsimg.com/assets/p187529_b_v12_an.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chef\'s Table', description: 'Some of the most renowned chefs in the world share their deeply personal stories, inspirations, and unique styles. Each chef\'s discipline and culinary talent is explored while he or she prepares an awe-inspiring creation.', overallRating: 4.20, watchStatus: false, genre: 'Food', imageSrc: 'https://resizing.flixster.com/uHOh1Mm3a-dHMZ57A3Sx1OWmdoY=/206x305/v2/https://flxt.tmsimg.com/assets/p11738358_b_v13_af.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Anthony Bourdain: No Reservations', description: 'Bad-boy chef and best-selling author Anthony Bourdain hits both familiar culinary hotspots and out-of-the-way gems in his global quest for the ultimate dining experience. Along the way, Bourdain offers his perspective on both the food and the local customs he comes across in his travels..', overallRating: 4.40, watchStatus: false, genre: 'Food', imageSrc: 'https://resizing.flixster.com/QX9D5qY3mUsqMTPglxc-6_MkXz0=/206x305/v2/https://flxt.tmsimg.com/assets/p185397_b_v8_al.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Good Eats', description: 'Equal parts smart and sardonic, creator and host Alton Brown uses a combination of classroom methods and wacky comedy sketches to explain not just how to whip up an excellent dish, but also why the ingredients interact as they do when you put them all together. Brown has said that the show\'s inspiration is to combine Julia Child, Mr. Wizard and "Monty Python."', overallRating: 4.40, watchStatus: false, genre: 'Food', imageSrc: 'https://resizing.flixster.com/aK4bgN16GjGNCVtBv6clNCqQ10U=/206x305/v2/https://flxt.tmsimg.com/assets/p185322_b_v13_ae.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Die Hard', description: 'Die Hard follows New York City police detective John McClane (Willis) who is caught up in a terrorist takeover of a Los Angeles skyscraper while visiting his estranged wife. Reginald VelJohnson, William Atherton, Paul Gleason, and Hart Bochner feature in supporting roles.', overallRating: 4.40, watchStatus: false, genre: 'Action', imageSrc: 'https://resizing.flixster.com/BoAQTzrJhm91u3nLN-n_BVc1WVY=/206x305/v2/https://resizing.flixster.com/0KUoVfX1MjIfNpoGe3cAfdeowxk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2QwMWQ1MjNiLWQyYmYtNGJiMi1iYTQ4LWMxOTYxODY1NmNhZi53ZWJw', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Predator', description: 'It stars Arnold Schwarzenegger as the leader of an elite paramilitary rescue team on a mission to save hostages in guerrilla-held territory in a Central American rainforest, who encounter the deadly Predator (Kevin Peter Hall), a technologically advanced alien who stalks and hunts them down.', overallRating: 3.2, watchStatus: false, genre: 'Action', imageSrc: 'https://resizing.flixster.com/Zk1DHum0Aru8gNYGFIqwgnjQlFg=/206x305/v2/https://flxt.tmsimg.com/assets/p10094_p_v13_ah.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nobody', description: 'Hutch Mansell fails to defend himself or his family when two thieves break into his suburban home one night. The aftermath of the incident soon strikes a match to his long-simmering rage. In a barrage of fists, gunfire and squealing tires, Hutch must now save his wife and son from a dangerous adversary -- and ensure that he will never be underestimated again.', overallRating: 4.50, watchStatus: false, genre: 'Action', imageSrc: 'https://resizing.flixster.com/9YmUTM18Ok0dBrJin3-Y2BGul0A=/206x305/v2/https://resizing.flixster.com/4nhR9Wlfhr90xXnHKHC2pxsML38=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2VkMTU5NzE1LWM0YTYtNDVhZC04NmJmLTc1YzY2YTg4NjZiOC5qcGc=', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Baby Driver', description: 'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail. Baby is a young and partially hearing impaired getaway driver who can make any wild move while in motion with the right track playing.', overallRating: 4.20, watchStatus: false, genre: 'Action', imageSrc: 'https://resizing.flixster.com/bqbhmZLVtUaUrdyNBqLzPKqLGeY=/206x305/v2/https://resizing.flixster.com/wcnZwJKjL2YL-NNi_WJ3fd7Ku8g=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2QwZmU3ZDZlLTRhMmItNDgxMy04NjM1LWViNmE3ZjkzNjhkNC53ZWJw', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Taken', description: 'A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris. Seventeen year-old Kim is the pride and joy of her father Bryan Mills.', overallRating: 3.50, watchStatus: false, genre: 'Action', imageSrc: 'https://resizing.flixster.com/xNk4wXjYzVKFPM2gK6W3ySCymC0=/206x305/v2/https://flxt.tmsimg.com/assets/p12900236_b_v8_ad.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cobra Kai', description: "Thirty years after their final confrontation at the 1984 All Valley Karate Tournament, Johnny Lawrence is at rock-bottom as an unemployed handyman haunted by his wasted life. However, when Johnny rescues a bullied kid, Miguel, from bullies, he is inspired to restart the notorious Cobra Kai dojo. However, this revitalization of his life and related misunderstandings find Johnny restarting his old rivalry with Daniel LaRousso, a successful businessman who may be happily married, but is missing an essential balance in life since the death of his mentor, Mr. Miyagi.", overallRating: 4.30, watchStatus: false, genre: 'comedy', imageSrc: 'https://m.media-amazon.com/images/M/MV5BY2NmNzEzN2QtMTBhOC00OGY1LThkMGMtZTIwMTE3MmUyNDc1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Peacemaker', description: "Picking up where The Suicide Squad (2021) left off, Peacemaker returns home after recovering from his encounter with Bloodsport - only to discover that his freedom comes at a price.", overallRating: 4.20, watchStatus: false, genre: 'comedy', imageSrc: 'https://m.media-amazon.com/images/M/MV5BODk2NjAyOWMtM2FjZC00MjZhLTkxMjQtZTM3NjJlYTE5MDdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Office', description: "A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott. This mockumentary follows the everyday lives of the manager and the employees he \"manages.\" The crew follows the employees around 24/7 and captures their quite humorous and bizarre encounters as they will do what it takes to keep the company thriving.", overallRating: 4.60, watchStatus: false, genre: 'comedy', imageSrc: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ted Lasso', description: "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League soccer team.", overallRating: 4.50, watchStatus: false, genre: 'comedy', imageSrc: 'https://m.media-amazon.com/images/M/MV5BMDVmODUzNmEtMGMxZC00NWUzLTkxMTAtMDM5OTQzMWE0ZDM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Full House', description: "This is a story about sports-broadcaster-turned-morning-talk-show-host Danny Tanner and his three little girls, D.J. (Donna Jo), Stephanie, and Michelle Tanner. Before the show begins, Danny Tanner's wife is killed by a drunk driver, so he needs help raising his daughters. He asks his rock-musician brother-in-law Jesse Katsopolis and his comedian best friend Joey Gladstone to move in with them. As the show goes on, Jesse marries Rebecca Donaldson, Danny's talk-show co-host, and they have twin sons, Nicholas Katsopolis.", overallRating: 3.40, watchStatus: false, genre: 'comedy', imageSrc: 'https://m.media-amazon.com/images/M/MV5BN2VhZjA4ZGMtMTM0ZC00MTIyLWFjMzMtOWI4Y2JjN2IyNmYyXkEyXkFqcGdeQXVyNjc4NTExMTk@._V1_FMjpg_UX1000_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'SpongeBob SquarePants', description: "The character-driven cartoon chronicles the nautical and often nonsensical adventures of SpongeBob, an incurably optimistic and earnest sea sponge, and his underwater friends. Dwelling a few fathoms beneath the tropical isle of Bikini Atoll in the sub-surface city of Bikini Bottom, SpongeBob lives in a two-story pineapple. Instead of taking the logical approach to everyday challenges, SpongeBob approaches life in a wayward and unconventional way.", overallRating: 4.10, watchStatus: false, genre: 'kids', imageSrc: 'https://m.media-amazon.com/images/M/MV5BNTk2NzEyNTQtZTQ5MS00MjAyLTgzMDMtNDNkYTBkM2M2OTU3XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Blue\'s Clues', description: "Blue's Clues is a breakthrough play-along show that allows its preschool audience to \"step inside\" and become part of a bright, fanciful world where the host, Steve, lives with his animated puppy, Blue. The audience actively participates in Steve's daily routine and helps solve everyday problems, all within a context of entertaining games and activities.", overallRating: 3.50, watchStatus: false, genre: 'kids', imageSrc: 'https://m.media-amazon.com/images/M/MV5BZTgzZjdiNDMtNDVhNS00NjY2LWFjYzItODJmZGI4NWY0ZmU1XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fairly OddParents', description: "Timmy Turner, a 10-year-old boy, has had it with his babysitter! He summons his fairy godparents who have the power to grant him wishes. Some of the wishes are really helpful, others don't work out so well. Timmy's godparents Wanda and Cosmo have ideas of their own and always lead Timmy on interesting adventures.", overallRating: 3.10, watchStatus: false, genre: 'kids', imageSrc: 'https://m.media-amazon.com/images/M/MV5BNzUyOGEyMDQtOWVkMS00NGFkLTgxNWQtOWJiZTE0OTY3NjE2XkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_FMjpg_UX1000_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Backyardigans', description: "Follows five high-spirited young friends - Uniqua, Pablo, Tyrone, Tasha and Austin - who rely on their vivid imaginations to embark on amazing, epic adventures. In every episode, the backyard transforms into a new fantastic, photo-real landscape that serves as the backdrop for completely original, story-driven musicals. Broadway-caliber music spanning a variety of genres and cutting-edge 3D dance choreography propel the stories forward.", overallRating: 3.50, watchStatus: false, genre: 'kids', imageSrc: 'https://m.media-amazon.com/images/M/MV5BMTYzN2VmNzAtYzExYS00ODVhLTk5MGUtYmEwZTYzZmFhYWM4XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Avatar: The Last Airbender', description: "The world is divided into four elemental nations: The Northern and Southern Water Tribes, the Earth Kingdom, the Fire Nation, and the Air Nomads. The Avatar upholds the balance between the nations, but everything changed when the Fire Nation invaded. Only the Avatar, master of all four elements, can stop them. But when the world needs him most, he vanishes. A hundred years later Katara and Sokka discover the new Avatar, an airbender named Aang. Together they must help Aang master the elements and save the world.", overallRating: 4.7, watchStatus: false, genre: 'kids', imageSrc: 'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Shows', null, {});
  }
};
