import React, { useState, useEffect } from 'react'
import faker from 'faker'
import { FixedSizeList } from 'react-window'
import Fetch from './Fetch'
import UserRepositories from './UserRepositories'
import { GraphQLClient } from 'graphql-request'

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

const query = `
query findRepos($login: String!) {
  user(login: $login) {
    login
    name
    location
    avatar_url:avatarUrl
    repositories(first: 100) {
      totalCount
      nodes {
        name
      }
    }
  }
}
`

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GH_KEY}`,
  },
})

function UserDetails(props) {
  return (
    <>
      <div className="githubuser">
        <img src={props.avatar_url} alt={props.login} style={{ width: 200 }} />
        <h1>{props.login}</h1>
        {props.name && <p> {props.name} </p>}
        {props.location && <p>{props.location}</p>}
        {/* <UserRepositories
          login={props.login}
          onSelect={(repoName) => console.log(`${repoName} was selected`)}
        /> */}
      </div>
    </>
  )
}

function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
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
  const [login, setLogin] = React.useState('fpigeonjr')
  const [userData, setUserData] = React.useState()

  React.useEffect(() => {
    client
      .request(query, { login: 'fpigeonjr' })
      .then(({ user }) => user)
      .then(setUserData)
      .then((results) => JSON.stringify(results, null, 2))
      .then(console.log)
      .catch(console.error)
  }, [client, query, login])

  if (!userData) return <p>loading...</p>

  return (
    <>
      <UserDetails {...userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={(repo) => <span>{repo.name}</span>}
      />

      {/* <h2>Iterator</h2>

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
      {/* <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={bigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList>{' '} */}
    </>
  )
}
