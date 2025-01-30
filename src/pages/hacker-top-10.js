import * as React from 'react'
import { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'

const HackerPage = () => {
  const [stories, setStories] = useState([])

  console.log(stories)
  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await fetch(
          'https://hacker-news.firebaseio.com/v0/topstories.json'
        )
        return (await response.json()).slice(0, 10)
      } catch (error) {
        console.error('Error fetching top stories:', error)
        return []
      }
    }

    const fetchStoryDetails = async (storyId) => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
        )
        return await response.json()
      } catch (error) {
        console.error(`Error fetching details for ${storyId} :`, error)
        return null
      }
    }

    const fetchAndSetStories = async () => {
      const topStoryIds = await fetchTopStories()
      const storyPromises = topStoryIds.map(fetchStoryDetails)
      const fetchedStories = await Promise.all(storyPromises)
      setStories(fetchedStories.filter((story) => story !== null))
    }

    fetchAndSetStories()
  }, [])

  return (
    <Wrapper>
      <div className="centered-content">
        <h1>Hacker News Top 10</h1>
        {stories.map((story, index) => (
          <div className="hacker-article" key={index}>
            <div className="article-count">
              <span className="article-number">{index + 1}</span>
              <a target="_blank" rel="noreferrer" href={story.url}>
                {story.title}
              </a>
            </div>
            <p>
              Story by: <em>{story.by}</em>
            </p>
            <p>Score: {story.score}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default HackerPage
