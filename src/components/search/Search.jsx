import React, { Component } from 'react';
import DirectorItem from './DirectorItem';
import getLanguage from '../../utils/i18n';
import ResultsStyles from './results.module.css';

export default class Search extends Component {
  state = {
    value: '',
    filtered: [],
  }

  componentDidMount() {
    this.getResults();
  }

  onChangeHandler = ({ target }) => {
    this.setState({
      value: target.value,
    }, this.getResults);
  }

  getResults = () => {
    const { value } = this.state;
    const { directorsData } = this.props;
    const namespaces = Object.keys(directorsData);
    const results = {};
    const lng = getLanguage();

    namespaces.forEach((director) => {
      const prop = {
        [director]: directorsData[director][lng],
      };

      Object.assign(results, prop);
    });

    const filtered = Object.keys(results).filter((director) =>
      directorsData[director][lng].toLowerCase().includes(value.toLowerCase())
    );

    console.log(filtered);

    this.setState({
      filtered,
    })
  }

  render() {
    const { filtered, value } = this.state;
    console.log('render is calling');
    return (
      <>
        <input type="text" value={value} onChange={this.onChangeHandler} />
        <ul className={ResultsStyles.results}>
          {filtered.map((director) => <DirectorItem director={ director } key={director} />)}
        </ul>
      </>
    )
  }
}
