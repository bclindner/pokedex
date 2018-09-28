import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { getSpeciesList } from '../PokeAPI.js'
import { CenteredSpinner } from './LoadingSpinner.js'

export const Container = styled.aside`
  background-color: #1d1f21;
  width: 100%;
  height: 100%;
`

export const SearchBar = styled.input`
  padding: 1em;
  box-sizing: border-box;
  width: 100%;
  background-color: #2d2f31;
  color: #eee;
  border: none;
  border-radius: 0;'
`

export const List = styled.ul`
  color: white;
  width: 100%;
  padding-left: 0;
  margin: 0;
  overflow-y: scroll;
  height: 800px;
  max-height: 800px;
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const ListLink = styled(NavLink)`
  padding: 1em 0 1em 1em;
  display: block;
  &:link, &:visited {
    text-decoration: none;
    color: #d4d8db;
  }
  &.activeLink {
    background-color: crimson;
    &:hover {
      background-color: #ff1645;
    }
  }
  &:hover {
    background-color: #2d2f31;
  }
`

export class PokemonSidebar extends Component {
  constructor (props) {
    super(props)
    // initialize state values
    this.state = {
      speciesList: [],
      speciesListFiltered: [],
      searchTerm: ''
    }
    // bind the handleSearch function so it can be used in the search bar
    this.handleSearch = this.handleSearch.bind(this)
  }
  async componentWillMount () {
    getSpeciesList()
      // sort the list alphabetically
      .then(list => list.sort((a, b) => a.name > b.name))
      // add pretty names to the list
      .then(list => list.map((species) => {
        const uglyName = species.name
        // split the ugly name by its dashes, and for each word:
        const prettyName = uglyName.split('-').map((word) => {
          // capitalize the first letter of the word
          return word.charAt(0).toUpperCase() + word.substring(1)
          // then re-add the dashes
        }).join('-')
        species.prettyName = prettyName
        return species
      }))
      .then(list => this.setState({
        speciesList: list,
        speciesListFiltered: list
      }))
  }
  async filterList (name) {
    // take the raw species list and get every entry that contains the given name
    // this is quite laggy; is there a faster way i don't know about?
    return this.state.speciesList.filter(species => species.name.includes(name))
  }
  async handleSearch (e) {
    // get the search term from the event,
    // then convert it to lowercase (the PokeAPI names are lowercase so it has to match)
    const searchTerm = e.target.value.toLowerCase()
    // execute a filter
    this.filterList(searchTerm)
      // set the state accordingly
      .then(filteredList => this.setState({
        speciesListFiltered: filteredList,
        searchTerm: searchTerm
      }))
  }
  render () {
    if (this.state.speciesList.length && this.state.speciesListFiltered.length) {
      const list = this.state.speciesListFiltered
      return (
        <Container>
          <SearchBar placeholder='Search by name...' onChange={this.handleSearch} />
          <List>
            {list.map((species, i) => (
              <ListLink to={'/' + species.name} key={i} activeClassName='activeLink'>
                <ListItem>{species.prettyName}</ListItem>
              </ListLink>
            ))}
          </List>
        </Container>
      )
    } else {
      return (
        <Container>
          <SearchBar placeholder='Search by name...' value={this.state.searchTerm} onChange={this.handleSearch} />
          <CenteredSpinner />
        </Container>
      )
    }
  }
}
