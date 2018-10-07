import React     from "react"
import PropTypes from "prop-types"
import styled    from "styled-components";
import Product   from "./Product";

let Wrapper = styled.div`
  display:       grid;
  grid-template: auto / 1fr 1fr;
`;

const winnerStyle = {
  backgroundColor: '#08ff00',
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      prod1: {value:0.0, winner:{}},
      prod2: {value:0.0, winner:{}},
    }
  }

  handleUpdate = (id, perUnit) => {
    let { prod1, prod2 } = this.state
    prod1.value  = id == 'prod1' ? perUnit : prod1.value
    prod2.value  = id == 'prod2' ? perUnit : prod2.value
    prod1.winner = prod1.value < prod2.value ? winnerStyle : {}
    prod2.winner = prod2.value < prod1.value ? winnerStyle : {}
    this.setState({
      prod1: prod1,
      prod2: prod2,
    })
  }

  render () {
    const { prod1, prod2 } = this.state
    return (
      <Wrapper>
        <Product
          id='prod1'
          onUpdate={this.handleUpdate}
          style={this.state.prod1.winner}
        />
        <Product
          id='prod2'
          onUpdate={this.handleUpdate}
          style={this.state.prod2.winner}
        />
      </Wrapper>
    )
  }
}

export default App
