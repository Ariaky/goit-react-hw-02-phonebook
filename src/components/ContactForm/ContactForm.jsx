class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    handleChange = (e) => {
      const { name, value } = e.target;
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
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </label>
          <label>
            Number:
            <input type="tel" name="number" value={this.state.number} onChange={this.handleChange} required />
          </label>
          <button type="submit">Add contact</button>
        </form>
      );
    }
  }
  
  export default ContactForm;