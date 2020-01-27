import React, { Component } from "react";
import Axios from "axios";
import uniqid from "uniqid";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Card,
  Form,
  Button,
  Table,
  Modal
} from "react-bootstrap";
import { addTransaction } from "../../actions/transactionAction";

class Transaction extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      type: "",
      amount: "",
      date: "",
      description: ""
    };
  }

  // axios
  componentDidMount = () => {
    Axios.get("http://localhost:5000/transactions")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      _id: uniqid(),
      type: this.state.type,
      amount: this.state.amount,
      date: this.state.date,
      description: this.state.description
    };
    this.props.addTransaction(data);
  };

  // modal function
  modalClose = () => {
    this.setState({
      show: false
    });
  };
  modalShow = () => {
    this.setState({
      show: true
    });
  };

  render() {
    const { transactions } = this.props;
    const transactionList = transactions.length ? (
      transactions.map(t => (
        <tr key={t._id}>
          <td>{t.type}</td>
          <td>{t.account}</td>
          <td>{t.amount}</td>
          <td>{t.date}</td>
          <td>{t.description}</td>
        </tr>
      ))
    ) : (
      <tr className="text-center">
        <td colSpan="8">No result found!</td>
      </tr>
    );

    return (
      <Container className="shadow my-5">
        <Row>
          <Card className="w-100">
            <Card.Header>
              <i className="fa fa-file"></i>&nbsp;Transaction List
              <Button
                variant="dark"
                size="sm"
                className="float-right"
                onClick={this.modalShow}
              >
                <i className="fa fa-plus"></i>&nbsp;Add New
              </Button>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Account</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>{transactionList}</tbody>
              </Table>
            </Card.Body>
          </Card>
        </Row>

        {/* modal */}
        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Form onSubmit={e => this.handleSubmit(e)} className="w-100">
            <Modal.Header closeButton className="bg-light">
              <Modal.Title>
                <i className="fa fa-file"></i>&nbsp;Add Transaction
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="type">
                <Form.Control
                  as="select"
                  name="type"
                  size="lg"
                  onChange={e => this.handleChange(e)}
                >
                  <option value="" defaultValue>
                    Select Transaction Type
                  </option>
                  <option value="Credit">Income / Credit</option>
                  <option value="Debit">Expense / Debit</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="amount">
                <Form.Control
                  type="text"
                  name="amount"
                  size="lg"
                  placeholder="Enter Amount"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="date">
                <Form.Control
                  type="date"
                  name="date"
                  size="lg"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Control
                  type="text"
                  name="description"
                  size="lg"
                  placeholder="Enter Description"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="bg-light">
              <Button type="submit" variant="success" size="lg">
                <i className="fa fa-plus"></i>&nbsp;Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactionReducer.transactions
  };
};
const mapDispathchToProps = dispatch => {
  return {
    addTransaction: data => dispatch(addTransaction(data))
  };
};
export default connect(mapStateToProps, mapDispathchToProps)(Transaction);
