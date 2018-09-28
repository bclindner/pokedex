import React, { Component } from 'react'
import styled from 'styled-components'
import { RG } from './Layout.js'
import { getSpecies, getPokemon } from '../utils/PokeAPI.js'
import { PokeballSpinner } from './LoadingSpinner.js'
import colors from '../utils/colors.js'

/**
 * Container for the info display.
 */
export const Container = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  height: 100%;
  width: 100%;
`

/**
 * Slightly styled div for the info cards.
 */
export const Card = styled.div`
  padding: 1em;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }

`

/**
 * Literally just a span that capitalizes text, because I'm lazy.
 */
export const Capitalize = styled.span`
  text-transform: capitalize;
`

/**
 * Scrollable list for the moves.
 */
export const ScrollingMoveList = styled.div`
  overflow-y: scroll;
  max-height: 250px;
`

/**
 * A div which somewhat mimics the look of Bulbapedia's EV display boxes.
 * (if it ain't broke...)
 */
const EVDisplay = styled.div`
  background-color: ${props => props.color ? props.color : colors.light};
  color: ${colors.darker};
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
`

/**
 * Stat bar outer portion.
 */
const StatBarOuter = styled.td`
  position: relative;
  width: 100%;
  height: 1.25em;
  background-color: ${colors.darker};
`
/**
 * Stat bar inner portion.
 */
const StatBarInner = styled.div`
  position:relative;
  height: 100%;
  /* invert the color if the percentage is too low to display the stat inside the bar
   * so that it can still be viewed
   */
  color: ${props => props.percent < 10 ? 'white' : colors.darker};
  text-align: right;
  width: ${props => props.percent}%;
  background-color: ${props => props.color ? props.color : colors.light};
`
/**
 * Simple stat bar component.
 * Takes percentage, color, and label attributes.
 */
export const StatBar = (props) => (
  <StatBarOuter>
    <StatBarInner percent={props.percent} color={props.color}>{props.label}</StatBarInner>
  </StatBarOuter>
)

/**
 * Card to display a centered image.
 * Used in the info display here to display the sprite.
 */
export const ImageCard = (props) => (
  <RG.Centered>
    <RG.Image src={props.url} />
  </RG.Centered>
)

/**
 * Card to display basic info about the Pokemon.
 */
export const NameCard = (props) => (
  <Card>
    <Capitalize>
      <small>#{props.species.pokedex_numbers.find(p => p.pokedex.name === 'national').entry_number}</small>
      <h1>{props.species.names.find(name => name.language.name === 'en').name}</h1>
      <p>{props.species.genera.find(genus => genus.language.name === 'en').genus}</p>
      <p>Types:&nbsp;{props.pokemon.types.length > 1
        ? (props.pokemon.types[0].type.name + ' / ' + props.pokemon.types[1].type.name)
        : (props.pokemon.types[0].type.name)
      }
      </p>
      <p>Abilities:&nbsp;{props.pokemon.abilities.length > 1
        ? (props.pokemon.abilities[0].ability.name + ' / ' + props.pokemon.abilities[1].ability.name)
        : (props.pokemon.abilities[0].ability.name)
      }
      </p>
      <p>Height: {props.pokemon.height / 10}m</p>
      <p>Weight: {props.pokemon.weight / 10}kg</p>
    </Capitalize>
  </Card>
)

/**
 * Card to display the Pokemon's stats with graphical bars.
 */
export const StatCard = (props) => (
  <Card>
    <h2>Stats</h2>
    <table>
      <tbody>
        <tr>
          <td>HP</td>
          <StatBar
            label={props.stats.find(x => x.stat.name === 'hp').base_stat}
            percent={props.stats.find(x => x.stat.name === 'hp').base_stat / 255 * 100}
            color={colors.stat.hp}
          />
        </tr>
        <tr>
          <td>Attack</td>
          <StatBar
            label={props.stats.find(x => x.stat.name === 'attack').base_stat}
            percent={props.stats.find(x => x.stat.name === 'attack').base_stat / 255 * 100}
            color={colors.stat.atk}
          />
        </tr>
        <tr>
          <td>Defense</td>
          <StatBar
            label={props.stats.find(x => x.stat.name === 'defense').base_stat}
            percent={props.stats.find(x => x.stat.name === 'defense').base_stat / 255 * 100}
            color={colors.stat.def}
          />
        </tr>
        <tr>
          <td>Sp.Atk.</td>
          <StatBar
            label={props.stats.find(x => x.stat.name === 'special-attack').base_stat}
            percent={props.stats.find(x => x.stat.name === 'special-attack').base_stat / 255 * 100}
            color={colors.stat.spatk}
          />
        </tr>
        <tr>
          <td>Sp.Def.</td>
          <StatBar
            label={props.stats.find(x => x.stat.name === 'special-defense').base_stat}
            percent={props.stats.find(x => x.stat.name === 'special-defense').base_stat / 255 * 100}
            color={colors.stat.spdef}
          />
        </tr>
        <tr>
          <td>Speed</td>
          <StatBar
            label={props.stats.find(x => x.stat.name === 'speed').base_stat}
            percent={props.stats.find(x => x.stat.name === 'speed').base_stat / 255 * 100}
            color={colors.stat.speed}
          />
        </tr>
      </tbody>
    </table>
  </Card>
)

/**
 * Card to display the effort values the Pokemon gives when defeated in battle.
 */
export const EVCard = (props) => (
  <Card>
    <h2>Effort Values</h2>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.hp}>
          HP<br />
          {props.stats.find(x => x.stat.name === 'hp').effort}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.atk}>
          Atk<br />
          {props.stats.find(x => x.stat.name === 'attack').effort}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.def}>
          Def<br />
          {props.stats.find(x => x.stat.name === 'defense').effort}
        </EVDisplay>
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.spatk}>
          Sp.Atk.<br />
          {props.stats.find(x => x.stat.name === 'special-attack').effort}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.spdef}>
          Sp.Def.<br />
          {props.stats.find(x => x.stat.name === 'special-defense').effort}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.speed}>
          Speed<br />
          {props.stats.find(x => x.stat.name === 'speed').effort}
        </EVDisplay>
      </RG.Col>
    </RG.Row>
  </Card>
)

/**
 * Card which lists the Pokemon's moves.
 */
export const MoveCard = (props) => (
  <Card>
    <h2>Moveset</h2>
    <RG.StaticRow>
      <RG.Col span='2'><strong>Lv.</strong></RG.Col>
      <RG.Col span='5'><strong>Move</strong></RG.Col>
      <RG.Col span='5'><strong>Learned By</strong></RG.Col>
    </RG.StaticRow>
    <ScrollingMoveList>
      {props.moves.map(move => (
        <RG.StaticRow>
          <RG.Col span='2'>{move.version_group_details[0].level_learned_at || '-' }</RG.Col>
          <RG.Col span='5'>
            <Capitalize>
              {move.move.name.split('-').join(' ')}
            </Capitalize>
          </RG.Col>
          <RG.Col span='5'>
            <Capitalize>
              {move.version_group_details[0].move_learn_method.name}
            </Capitalize>
          </RG.Col>
        </RG.StaticRow>
      ))}
    </ScrollingMoveList>
  </Card>
)
/**
 * Card which lists other miscellaneous information.
 */
export const MiscCard = (props) => (
  <Card>
    <Capitalize>
      <h2>Other Info</h2>
      <p>
        <b>Egg Group</b>&nbsp;
        {props.species.egg_groups.length > 1
          ? (props.species.egg_groups[0].name + ' / ' + props.species.egg_groups[1].name)
          : (props.species.egg_groups[0].name)
        }
      </p>
      <p>
        <b>Catch Rate</b> {props.species.capture_rate}
      </p>
      <p>
        <b>Growth Rate</b> {props.species.growth_rate.name}
      </p>
      <p>
        <b>Base Happiness</b> {props.species.base_happiness}
      </p>
    </Capitalize>
  </Card>

)
/**
 * Pokemon informational display, including name, stats, moves, and a picture.
 */
export const InfoDisplay = (props) => (
  <Container>
    <RG.Row>
      <RG.Col span='4'>
        <ImageCard url={props.pokemon.sprites.front_default} />
      </RG.Col>
      <RG.Col span='8'>
        <NameCard pokemon={props.pokemon} species={props.species} />
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='6'>
        <StatCard stats={props.pokemon.stats} />
      </RG.Col>
      <RG.Col span='6'>
        <EVCard stats={props.pokemon.stats} />
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='6'>
        <MoveCard moves={props.pokemon.moves} />
      </RG.Col>
      <RG.Col span='6'>
        <MiscCard pokemon={props.pokemon} species={props.species} />
      </RG.Col>
    </RG.Row>
  </Container>
)
export class InfoDisplayContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      speciesName: '',
      pokemonName: '',
      pokemonData: {},
      speciesData: {}
    }
  }
  // restrict updating since we put a hook to refetch on componentWillUpdate
  async shouldComponentUpdate (newProps, newState) {
    return newState.speciesName === newProps.match.params.speciesName
  }
  async updateData () {
    try {
      // get the species data first
      // unfortunately pokemon data can't be fetched in parallel because
      // species name !== the default variant name. see: deoxys, aegislash, etc
      const speciesName = this.props.match.params.speciesName
      const speciesData = await getSpecies(speciesName)
      // get the default variant out of speciesData
      const defaultVariant = speciesData.varieties.find(variant => variant.is_default).pokemon.name
      // get the pokemon data for the default variant
      const pokemonData = await getPokemon(defaultVariant)
      // set our state accordingly
      this.setState({
        error: '',
        speciesName: speciesName,
        pokemonName: defaultVariant,
        pokemonData: pokemonData,
        speciesData: speciesData
      })
    } catch (err) {
      this.setState({
        error: err,
        speciesName: this.props.match.params.speciesName
      })
    }
  }
  // run the update when the component mounts (in the event the page is accessed with a pokemon already in URL)
  async componentDidMount () {
    return this.updateData()
  }
  // run the update when the component updates (which happens whenever the location changes) AND when the data already fetched does not appear to match the new URL
  async componentDidUpdate () {
    if (this.state.speciesName !== this.props.match.params.speciesName) {
      return this.updateData()
    }
  }
  render () {
    if ('name' in this.state.pokemonData && this.state.speciesName === this.props.match.params.speciesName) {
      return (
        <InfoDisplay
          pokemon={this.state.pokemonData}
          species={this.state.speciesData}
        />
      )
    } else if (this.state.error) {
      // error screen
      return (
        <Container>
          <RG.Centered>
            <h1>Something went wrong, sorry!</h1>
          </RG.Centered>
        </Container>
      )
    } else {
      // loading screen
      return (
        <Container>
          <RG.Centered>
            <PokeballSpinner />
          </RG.Centered>
        </Container>
      )
    }
  }
}
