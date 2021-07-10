import addToMailchimp from 'gatsby-plugin-mailchimp';

import React from 'react';

import { FaTelegramPlane } from 'react-icons/fa';

export default class EmailList extends React.Component {
  state = {
    email: '',
    resultMessage: '',
    result: '',
  };

  // 2. via `async/await`
  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    this.setState({ resultMessage: result.msg });
    this.setState({ result: result.result });
    this.setState({ email: '' });
  };

  render() {
    const successColor = 'green';
    const failureColor = 'red';
    return (
      <form onSubmit={this._handleSubmit} action="/newsletter">
        <div>
          <input
            type="email"
            placeholder="YOUR EMAIL"
            value={this.state.email}
            onChange={(event) =>
              this.setState({ email: event.target.value, resultMessage: '' })
            }
          />
          <button>
            Signup <FaTelegramPlane />
          </button>
        </div>
        <div>
          <p
            style={{
              color:
                this.state.result === 'success' ? successColor : failureColor,
              fontSize: '1rem',
              marginTop: '1rem',
            }}
          >
            {this.state.resultMessage}
          </p>
        </div>
      </form>
    );
  }
}
