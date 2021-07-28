import React, { useState } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function ReviewBox() {

  const [data, setData] = useState([{
          id: 23453,
          title: "Straw Hat Pirates",
          date: '2021-06-09T00:00:00.000Z',
          rating: 4.25,
          helpfulness: 70,
          unhelpfulness: 3,
          name: 'Luffy',
          email: 'luffy@gmail.com',
          body: 'Monkey D. Luffy, also known as " Straw Hat Luffy" and commonly as "Straw Hat",[7] is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters.[24] His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger.[25] He believes that being the Pirate King means having the most freedom in the world[26].'
        },
        {
          id: 23432,
          title: "Pirate Hunter",
          rating: 3.5,
          helpfulness: 30,
          unhelpfulness: 5,
          name: 'Zoro',
          date: '2021-03-09T00:00:00.000Z',
          email: 'zoro@gmail.com',
          body: 'Roronoa Zoro,[1] also known as "Pirate Hunter" Zoro,[8] is the combatant of the Straw Hat Pirates, and one of their two swordsmen. Formerly a bounty hunter,[5] he is the second member of the crew and the first to join, doing so in the Romance Dawn Arc.[3]'
        },
        {
          id: 23431,
          title: "Cat Burglar",
          rating: 3.75,
          helpfulness: 10,
          unhelpfulness: 8,
          name: 'Nami',
          date: '2021-07-09T00:00:00.000Z',
          email: 'nami@gmail.com',
          body: '"Cat Burglar" Nami[6] is the navigator of the Straw Hat Pirates. She is the third member of the crew and the second to join, doing so during the Orange Town Arc.[20] She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère.She was formerly a member of the Arlong Pirates and initially joined the Straw Hats so that she could rob them in order to buy back her village from Arlong. However, she legitimately joined the Straw Hats after they rebelled against and defeated Arlong. Her dream is to make a map of the entire world.[21]'
        },
        {
          id: 23438,
          title: "Black Leg",
          rating: 4,
          helpfulness: 30,
          unhelpfulness: 2,
          name: 'Sanji',
          date: '2021-05-09T00:00:00.000Z',
          email: 'sanji@gmail.com',
          body: 'Black Leg" Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates. He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc.'
        },
        {
          id: 23486,
          title: "Tony Chopper ",
          rating: 5,
          helpfulness: 666,
          unhelpfulness: 0,
          name: 'Chopper ',
          date: '2021-03-09T00:00:00.000Z',
          email: 'chopper@gmail.com',
          body: 'Chopper is a reindeer that ate a Devil Fruit called the Hito Hito no Mi. He came from Drum Island, which makes him the only member of the Straw Hat Pirate Crew who was born on the Grand Line.'
        },
        {
          id: 23786,
          title: "the former Wild Zombies and Surprise Zombies Commander of Thriller Bark ",
          rating: 3.5,
          helpfulness: 66,
          unhelpfulness: 0,
          name: 'Perona ',
          date: '2021-03-09T00:00:00.000Z',
          email: 'Perona@gmail.com',
          body: 'She is able to produce ghosts from her body through the powers of the Horo Horo no Mi.'
        },
        {
          id: 29786,
          title: "A Marine officer and the Commander of the G-5 Marine Base",
          rating: 2.5,
          helpfulness: 6,
          unhelpfulness: 0,
          name: 'Smoker',
          date: '2021-09-09T00:00:00.000Z',
          email: 'smoker@gmail.com',
          body: 'He was first introduced as a captain in Loguetown, where he made it his mission to capture Luffy, and was later promoted to the rank of commodore, due to the events in Arabasta.'
        }]);



  return (
    <div>
      <p className="reviews-header">RATINGS & REVIEWS</p>
        <div className="reviews-container">
          <div className="reviews-summary"><ReviewSummary data={data} /></div>
          <div className="rating-breakdown"><RatingBreakdown /></div>
          <div className="reviews-list"><ReviewList data={data} /></div>
        </div>
    </div>
  )
}

export default ReviewBox;