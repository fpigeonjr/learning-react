import React, { useState, useEffect } from 'react'
import faker from 'faker'
import { FixedSizeList } from 'react-window'
import { useFetch } from './useFetch'

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

function GitHubUser({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  )

  if (loading) return <h1>loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="githubuser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p> {data.name} </p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  )
}

// render props

const tahoe_peaks = [
  {
    name: 'Feel Free',
    elevation: 10891,
  },
  {
    name: 'Mountain Peak',
    elevation: 10067,
  },
  {
    name: 'Pyramid Peak',
    elevation: 9983,
  },
  {
    name: 'Mt. Tallac',
    elevation: 9735,
  },
]

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

// virtualized lists

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}))

const renderProfile = (item) => (
  <div style={{ display: 'flex' }}>
    <img src={item.avatar} alt={item.name} width={50} />
    <p>
      {item.name} - {item.email.toLowerCase()}
    </p>
  </div>
)

const renderRow = ({ index, style }) => (
  <div style={{ ...style, ...{ display: 'flex' } }}>
    <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
    <p>
      {bigList[index].name} - {bigList[index].email.toLocaleLowerCase()}
    </p>
  </div>
)

export default function App() {
  return (
    <>
      <GitHubUser login="fpigeonjr" />
      <h2>Tahoe Peaks Static</h2>
      <ul>
        {tahoe_peaks.map((peak, i) => (
          <li key={i}>
            {peak.name} - {peak.elevation.toLocaleString()}ft
          </li>
        ))}
      </ul>
      <h2>Using List</h2>
      <List
        data={tahoe_peaks}
        renderEmpty={<p>This List is empty.</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation.toLocaleString()}ft
          </>
        )}
      />
      <h2>Render Faker List</h2>
      {/* <List data={bigList} renderItem={renderProfile} /> */}
      <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={bigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList>
    </>
  )
}
