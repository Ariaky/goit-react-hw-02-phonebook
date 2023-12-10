import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };

    nameId = nanoid()
    tagId = nanoid()

  
    handleChange = (e) => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = this.state;
      this.props.onAddContact(name, number);
      this.setState({ name: '', number: '' });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            Name
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required 
            pattern={"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}/>
          </label>
          <label htmlFor={this.tagId}>
            Number
            <input type="tel" name="number" value={this.state.number} onChange={this.handleChange} required 
            pattern={"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}/>
          </label>
          <button type="submit">Add contact</button>
        </form>
      );
    }
  }
  
