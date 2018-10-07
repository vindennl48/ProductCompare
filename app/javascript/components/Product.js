import React     from "react"
import PropTypes from "prop-types"
import styled    from "styled-components"

const Wrapper = styled.div`
  display:         grid;
  grid-template:   auto / 1fr;
  grid-gap:        5px;
  padding:         10px;
`;
const Input = styled.input`
  box-sizing:    border-box;
  width:         100%;
  border:        1px solid #ccc;
  border-radius: 5px;
  font-size:     18px;
  text-align:    center;
  padding:       5px;

  &:focus {
    outline-width: 0px;
  }
`;
const Label = styled.label`
  text-align: center;
`;

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      price:    0.0,
      quantity: 0.0,
      perUnit:  0.0,
    }
  }

  handleUpdate = (e) => {
    const { onUpdate, id } = this.props
    const target           = e.target.getAttribute('placeholder')
    const value            = e.target.value

    const price    = target == 'price'    ? value : this.state.price
    const quantity = target == 'quantity' ? value : this.state.quantity
    const perUnit  = ( price / quantity )

    onUpdate(id, perUnit)

    this.setState({
      price:    price,
      quantity: quantity,
      perUnit:  perUnit
    })
  }

  render () {
    const { price, quantity, perUnit } = this.state
    return (
      <Wrapper {...this.props}>
        <Input
          onChange    = {this.handleUpdate}
          placeholder = "price"
          value       = {price ? price : ''}
        />
        <Input
          onChange    = {this.handleUpdate}
          placeholder = "quantity"
          value       = {quantity ? quantity : ''}
        />
        <Label>Per Unit: ${perUnit.toFixed(2)}</Label>
      </Wrapper>
    )
  }
}
export default Product
