import React from "react";

class Usuario extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      api: [],
      name: '',
      cell: '',
      email: '',
      age: '',
      gender: '',
      mPicture: '',
      lPicture: '',

    }
  }

  fetchApi = async () => {
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url);
    const dataJson = await response.json();
    const data = await dataJson.results[0]
    const { name, cell, email, dob: { age }, picture: {medium, large}, gender } = data;
    this.setState({
      loading: true,
      api: data,
      email,
      name,
      cell,
      age,
      mPicture: medium,
      lPicture: large,
      gender,
    }, () => {
      this.setState({ loading: true })
    });
  }

  shouldComponentUpdate() {
    const maxAge = 50;
    const { age } = this.state
    return (age <= maxAge)
  }

  newUser = () => {
    this.setState({loading: false}, async () => {
      await this.fetchApi();
      this.setState({loading: false})
    })
  }

  async componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { api, email, name: {first, last, title}, cell, age,lPicture, loading } = this.state
    console.log(api)
    const user = (
    <div>
      <h2>{ title } { first } { last }</h2>
      <img src={ lPicture} alt="nada"/>
      <p>Age: { age } </p>
      <h3>Contact</h3>
      <p>Phone: { cell }</p>
      <p>Email: { email }</p>
      <p>BATATA</p>
    </div>
    )
    // console.log(Object.values(api)[0].email)
    return (
      <div>
      {!loading ? <p id="loading">loading</p> : user}
      <button type="button" onClick={this.newUser}>Novo</button>
      </div>

    )
  }
}

export default Usuario;