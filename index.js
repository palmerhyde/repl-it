// TODO: get from config
supportedLeagues = [
  'Spain-LaLiga-2019-2020',
  'Germany-Bundesliga-2019-2020',
  'England-Premier-League-2019-2020'
]

const matches = [
  'https://www.whoscored.com/Matches/1388411/Live/Germany-Bundesliga-2019-2020-Hertha-Berlin-Schalke-04',
  'https://www.whoscored.com/Matches/1401668/Live/Argentina-Superliga-2019-2020-Velez-Sarsfield-Aldosivi',
  'https://www.whoscored.com/Matches/1376114/Live/England-Premier-League-2019-2020-Brighton-Chelsea',
  'https://www.whoscored.com/Matches/1394275/Live/Spain-LaLiga-2019-2020-Getafe-Real-Madrid',
  'https://www.whoscored.com/Matches/1381664/Live/England-Championship-2019-2020-Brentford-Nottingham-Forest'
]

const yesterdaysMatches = matches.filter(match => isSupportedLeague(match))

console.log(yesterdaysMatches)

function isSupportedLeague(match) {
  console.log(match)
  for (let league in supportedLeagues) {
    if (match.includes(supportedLeagues[league])) {
      return true
    }
  }

  return false
}