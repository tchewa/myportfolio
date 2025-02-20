// import React from 'react'
// import Wrapper from '../components/Wrapper'
// import _ from 'lodash'
// import { useState, useEffect } from 'react'

// const MemoryGame = () => {
//   const totalCards = 12

//   // shuffle flowers
//   const flowers = [
//     'https://images.unsplash.com/photo-1626808642875-0aa545482dfb',
//     'https://images.unsplash.com/photo-1546842931-886c185b4c8c',
//     'https://images.unsplash.com/photo-1520763185298-1b434c919102',
//     'https://images.unsplash.com/photo-1442458017215-285b83f65851',
//     'https://images.unsplash.com/photo-1496483648148-47c686dc86a8',
//     'https://images.unsplash.com/photo-1591181520189-abcb0735c65d',
//     'https://images.unsplash.com/photo-1626808642875-0aa545482dfb',
//     'https://images.unsplash.com/photo-1546842931-886c185b4c8c',
//     'https://images.unsplash.com/photo-1520763185298-1b434c919102',
//     'https://images.unsplash.com/photo-1442458017215-285b83f65851',
//     'https://images.unsplash.com/photo-1496483648148-47c686dc86a8',
//     'https://images.unsplash.com/photo-1591181520189-abcb0735c65d',
//   ]

//   const flowersAlt = [
//     'sunflower',
//     'peone',
//     'tulip',
//     'marigolds',
//     'daisies',
//     'hydrangeas',
//     'sunflower',
//     'peone',
//     'tulip',
//     'marigolds',
//     'daisies',
//     'hydrangeas',
//   ]

//   const [shuffledFlowers, setShuffledFlowers] = useState([])
//   const [shuffledFlowersAlt, setShuffledFlowersAlt] = useState([])
//   useEffect(() => {
//     setShuffledFlowers(_.shuffle(flowers))
//     setShuffledFlowersAlt(_.shuffle(flowersAlt))
//   }, [flowers, flowersAlt])

//   // set Overlays
//   const [overlays, setOverlays] = useState(Array(totalCards).fill(false))

//   const toggleOverlay = (index) => {
//     setOverlays((prevOverlays) =>
//       prevOverlays.map((value, i) => (i === index ? !value : value))
//     )
//   }

//   //also use state to update how many turns (clicks) have been made
//   const [count, setCount] = useState(0)
//   const [clicks, setClicks] = useState(0)

//   const handleCardClick = (index) => {
//     toggleOverlay(index)
//     setClicks((prevClicks) => {
//       const newClickCount = prevClicks + 1

//       if (newClickCount === 2) {
//         setCount((prevCount) => prevCount + 1)
//         return 0
//       }

//       return newClickCount
//     })
//   }

//   //create an empty array for the two images selected to compare them
//   //const compareCards = []

//   //populate the array with the cards selected on click

//   //if image is different than the one selected, reset the array and cards

//   // if image is same, add a class of locked to the card and permanently remove gray overlay. also deduct those cards from total cardCount (we can use this variable to compare and display winning message when available cardCount reaches 0)

//   return (
//     <Wrapper>
//       <div className="centered-wrapper">
//         <h1>Memory</h1>
//         <h2>Turn Counter: {count}</h2>
//         <div className="memory-game-wrapper">
//           {overlays.map((isOverlayHidden, index) => (
//             <div
//               key={index}
//               className="memory-card"
//               onClick={() => {
//                 toggleOverlay(index)
//                 handleCardClick()
//               }}
//               style={{
//                 backgroundImage: `url(${shuffledFlowers[index]})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               <div
//                 className={isOverlayHidden ? 'hide-overlay' : 'overlay'}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Wrapper>
//   )
// }

// export default MemoryGame
