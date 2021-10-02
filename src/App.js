import './App.scss';
import Profile from './components/Profile/Profile';
import users from '../src/db/user.json';

import Statisctics from './components/Statistics/Statistics';
import statisticalData from '../src/db/statistical-data.json'

import FriendList from './components/FriendList/FriendList'
import friends from '../src/db/friends.json'

import TransactionHistory  from './components/TransactionHistory/TransactionHistory';
import transactions from '../src/db/transactions.json'

function App() {
  return (
    <div className="App">
      React module 1 lesson 1
      <Profile 
        name={users.name} 
        tag={users.tag} 
        location={users.location} 
        avatar={users.avatar} 
        stats={users.stats}
      />

      {/* <Section title="Upload stats"/> */}
      <Statisctics stats={statisticalData}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
