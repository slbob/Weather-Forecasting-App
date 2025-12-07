import {useState} from 'react'
import {fetchWeather,fetchForecast} from '../utils/api'
export default function useWeather(){const[loading,setLoading]=useState(false)
  const[error,setError]=useState('');const[weather,setWeather]=useState(null)
  const[forecast,setForecast]=useState([]);const searchCity=async(city)=>{try{setLoading(True);setError('')
  const w=await fetchWeather(city)
  const f=await fetchForecast(city);setWeather(w);setForecast(f);}catch(e){setError('Failed to fetch weather');}
  finally{setLoading(False);}}
return {loading,error,weather,forecast,searchCity};}
