import React from 'react';
import AddModal from './components/AddModal';
import DisplayModal from './components/DisplayModal';
import PhoneBookPage from './components/PhoneBookPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalVisible: false,
      displayModalVisible: false,
      userNames: [],
      userDetails: {},
      displayFirstName: '',
      displayLastName: '',
      displayPhoneNumber: '',
      displayEmail: '',
      displayCompany: '',
      trie: {
        '-1': {
          reference: [],
          children: {},
        },
      },
      searchedUsers: [],
      value: ''
    }
  }

  addPhone = () => {
    this.setState({ addModalVisible: true });
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  insert = (phone, newTrie, name) => {
    const copyTrie = newTrie;
    newTrie = newTrie['-1'].children;
    for (const letter of phone) {
      if (newTrie[letter] && newTrie[letter].reference && newTrie[letter].reference.length) {
        newTrie = newTrie[letter];
        newTrie.reference.push(name);
        newTrie = newTrie.children;
      } else {
        newTrie[letter] = {
          reference: [name],
          children: {},
        }
        newTrie = newTrie[letter].children;
      }
    }
    console.log(copyTrie);
    return copyTrie;
  }

  onFinish = (values) => {
    const { userNames, userDetails, trie } = this.state;
    const name = `${values['firstName']} ${values['lastName']}`;
    if (!userDetails[name]) {
      userNames.length === 0 ? userNames.push(name) : userNames.splice(0, 0, name);
      const email = values['email'];
      const company = values['company'];
      const phone = values['phone'];
      const copyTrie = this.insert(phone, trie, name);
      userDetails[name] = {
        email: email,
        company: company,
        phone: phone,
        color: this.getRandomColor(),
      }
      this.setState({ trie: copyTrie, userDetails: userDetails, userNames: userNames });
    }
  }

  removeRecord = (name) => {
    const { userNames, userDetails } = this.state;
    delete userDetails[name];
    this.setState({ userNames: userNames.filter(userName => userName !== name), userDetails });

  }

  closeDisplayModal = () => {
    this.setState({ displayModalVisible: false });
  }

  displayModal = (name) => {
    const { userDetails } = this.state;
    this.setState({
      displayFirstName: name.split(' ')[0], displayLastName: name.split(' ')[1], displayPhoneNumber: userDetails[name].phone,
      displayCompany: userDetails[name].company, displayEmail: userDetails[name].email, displayModalVisible: true
    });
  }

  handleChange = (value) => {
    const { trie, userNames } = this.state;
    let newTrie = trie['-1'];
    for (const letter of value) {
      newTrie = newTrie.children;
      if (newTrie[letter] && newTrie[letter].children)
        newTrie = newTrie[letter];
      else
        break;
    }

    const newUsers = userNames.filter(name => newTrie.reference && newTrie.reference.includes(name));
    this.setState({ searchedUsers: newUsers || [], value: value });
  }


  closeModal = () => {
    this.setState({ addModalVisible: false });
  }

  render() {
    const { addModalVisible, displayModalVisible, displayFirstName, displayLastName,
      displayPhoneNumber, displayCompany, displayEmail, userNames, userDetails, searchedUsers, value } = this.state;
    return (
      <>
        <PhoneBookPage handleChange={this.handleChange} searchedUsers={searchedUsers} value={value} userNames={userNames} userDetails={userDetails} addPhone={this.addPhone} displayModal={this.displayModal} />
        <AddModal addModalVisible={addModalVisible} onFinish={this.onFinish} closeModal={this.closeModal} />
        <DisplayModal firstName={displayFirstName} lastName={displayLastName} phoneNumber={displayPhoneNumber}
          email={displayEmail} displayModalVisible={displayModalVisible} closeDisplayModal={this.closeDisplayModal}
          company={displayCompany} removeRecord={this.removeRecord} />
      </>
    )
  }
}


export default App;
