import React from 'react';

import axios from 'axios';

const BASE_URL = 'http://ip-api.com/json';
const array_IPS = ["1.1.1.1",'2.2.2.2','3.3.3.3','4.4.4.4'];

export default class IPSList extends React.Component {
  state = {
    results: []
  }

  getData(array) {
    const allData = [];
    array.map( (url) =>  {
      axios.get(`${BASE_URL}/${url}`)
        .then(res => {
          const ips = res.data;
          allData.push(ips)
        })
        .then( res => {
          return this.setState({
            results: allData
          })
        })
        .catch( error => console.log(error))
    })
    
  }

  

  componentDidMount() {
    this.getData(array_IPS)
  }

  render() {
    return (
      <ul>

        {
        
          this.state.results.map( (result) => {
            return <li key={result.isp}>{result.isp}{result.as}{result.query}{result.country}</li>
          })

        }

      </ul>
    )
  }
}

