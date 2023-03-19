import styles from '@/styles/Home.module.css'
import TextField from '@material-ui/core/TextField'
import { MenuItem, Select } from '@material-ui/core'
import CountryCard from '../components/CountryCard'
import { useEffect, useState } from 'react'
import {COUNTRY} from '../types'
import {COUNTRY_API} from '../constants/endpoints'
import configs from '../tsconfig.json'
import { FILTER_BY_CONTINENT } from '../constants/strings'

interface PROPS {
  data: COUNTRY[]
}

export default function Home({ data }: PROPS) {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState(data)

  useEffect(() => {
    const filteredCountries = data.filter((country: any) => {
      const COUNTRY_NAME = country.countryOfficalName.toLowerCase()
      const VALUE_DOES_NOT_EXIST = -1
      const DOES_EXIST = COUNTRY_NAME.search(searchValue.toLowerCase()) !== VALUE_DOES_NOT_EXIST
      return DOES_EXIST
    })
    setCountries(filteredCountries)
  }, [searchValue, data])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <TextField
            id="input-with-icon-textfield"
            label="Search"
            variant="standard"
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <Select
            labelId="demo-simple-select-label"
            value={10}
          >
            <MenuItem value={10}>{FILTER_BY_CONTINENT}</MenuItem>
          </Select>
        </div>
        <div className={styles.flagsContainer}>
          {countries.map((country: COUNTRY, index: number) => <CountryCard {...country} id={index} key={index} />)}
        </div>
      </div>
    </>

  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${configs.compilerOptions.baseUrl}${COUNTRY_API}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
