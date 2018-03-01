

import Senators from './senators.json'

// export const mytest = () => {
//     return 'Hello from Test'
// }
//
export const republicans = () => {
  return Senators.filter((senator) => { return senator.party.match("Republican")})
}

export const democrats = () => {
    return Senators.filter((senator)=>{ return senator.party.match("Democrat")})
}

export const independents = () => {
  return Senators.filter((senator)=>{return senator.party.match("Independent")})
}

export const males = () => {
  return Senators.filter((senator)=>{return senator.person.gender.match("male")})
}

export const females = () => {
  return Senators.filter((senator)=>{return senator.person.gender.match("female")})
}

export const byState = (state = 'UT') => {
  return Senators.filter((senator)=>{return senator.state.match(state)})
}

export const mapping = () => {
    return Senators.map((senator)=> ({
    firstName: senator.person.firstname,
    lastName: senator.person.lastname,
    gender: senator.person.gender,
    party: senator.party
}))

}

export const birthplaceSeniorSenator = () => {
  return Senators.filter((senator)=>senator.senator_rank === 'senior' && senator.state === 'PA').reduce((prev,curr)
}


// const REPLACE_ME_WITH_CODE = false
