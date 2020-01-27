import React, { Component } from "react";
import Axios from "axios";
import uniqid from "uniqid";
// import SweetAlert from "react-bootstrap-sweetalert";
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
import { addAccount } from "../../actions/accountAction";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      group: "",
      balance: "",
      note: ""
    };
  }

  componentDidMount = () => {
    Axios.get("http://localhost:5000/accounts")
      .then(res => {
        console.log(res);
        // this.props.vehicleList(res.data);
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
      name: this.state.name,
      group: this.state.group,
      balance: this.state.balance,
      note: this.state.note
    };
    this.props.addAccount(data);
    this.modalClose();
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
    const { accounts } = this.props;
    const accountList = accounts.length ? (
      accounts.map(account => (
        <tr key={account._id}>
          <td>{account.name}</td>
          <td>{account.group}</td>
          <td>
            <i className="fa fa-inr"></i>&nbsp;{account.balance}
          </td>
          <td>{account.note}</td>
        </tr>
      ))
    ) : (
      <tr className="text-center">
        <td colSpan="4">No result found!</td>
      </tr>
    );
    return (
      <>
        <Container className="shadow my-5">
          <Row>
            <Card className="w-100">
              <Card.Header>
                <h1 className="h3 font-weight-bold mb-0">
                  <i className="fa fa-file"></i>&nbsp;Account List
                  <Button
                    variant="dark"
                    size="sm"
                    className="float-right"
                    onClick={this.modalShow}
                  >
                    <i className="fa fa-plus"></i>&nbsp;Add Account
                  </Button>
                </h1>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Account Name</th>
                      <th>Account Type</th>
                      <th>Balance</th>
                      <th>Note [Optional]</th>
                    </tr>
                  </thead>
                  <tbody>{accountList}</tbody>
                </Table>
              </Card.Body>
            </Card>
          </Row>
        </Container>

        {/* modal */}
        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Form onSubmit={e => this.handleSubmit(e)} className="w-100">
            <Modal.Header closeButton className="bg-light">
              <Modal.Title>
                <span className="font-weight-bold">
                  <i className="fa fa-file"></i>&nbsp;Add Transaction
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="name">
                <Form.Control
                  type="text"
                  name="name"
                  size="lg"
                  placeholder="Account Name"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="group">
                <Form.Control
                  as="select"
                  name="group"
                  size="lg"
                  onChange={e => this.handleChange(e)}
                >
                  <option value="" defaultValue>
                    Group...
                  </option>
                  <option>Bank Account</option>
                  <option>Cash</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="balance">
                <Form.Control
                  type="text"
                  name="balance"
                  size="lg"
                  placeholder="Balance"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="note">
                <Form.Control
                  as="textarea"
                  name="note"
                  size="lg"
                  placeholder="Enter Description (Optional)"
                  rows="3"
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
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addAccount: data => dispatch(addAccount(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
