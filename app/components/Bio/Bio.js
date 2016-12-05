import React from 'react'
import _ from 'lodash'

// this is the es6 way
// class Bio extends React.Component {

// this is es7
// react expects this syntax; it will extend the react component. react knows that if there's no render function inside this function, then
const Bio = ({ imgSrc, imgAlt, myName, age, pronoun, favoriteActivity }) =>
  // this is not actually html; it's really xml. so stuff you can get away with in html5, you can't get away with in xml.
  // you have to close an image tag with the /> because you have to terminate every tag in xml. it needs a space before that closing />
  // have to use classname for CSS classes in jsx because class is a reserved word in
  <div className='Bio'>
    <img src={imgSrc} alt={imgAlt} />
    <p>{myName} is {age}.</p>
    <p>{_.capitalize(pronoun.nominative)} enjoys {favoriteActivity}</p>
  </div>
  // this will spew an error in the console during dev mode (it won't be in the console for clients after webpack) if a prop fails validation. optional feature, but strongly encouraged.
  // static propTypes = {
  // }
const propTypes = {
  myName: React.PropTypes.string,
  age: React.PropTypes.number,
  pronoun: React.PropTypes.object,
  favoriteActivity: React.PropTypes.string
}

// Object.assign combines two objects together into one. will error out if there's a collision (same prop in both objects)
export default Object.assign(Bio, propTypes)
