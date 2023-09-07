import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen() {

   const match = useParams()
   const location = useLocation()
   const productId = match.id
   const qty = location.search ? Number(location.search.split('=')[1]) : 1

   const dispatch = useDispatch()

   const cart = useSelector(state => state.cart)
   const { cartItems } = cart

   useEffect(() => {
      if(productId) {
         dispatch(addToCart(productId, qty))
      }
   }, [dispatch, productId, qty])

  return (
   <>
      <Row>
         <Col md={8}>
         </Col>

         <Col md={4}>
         </Col>
      </Row>
   </>
  )
}

export default CartScreen