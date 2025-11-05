import {useEffect, useState} from 'react'

import './App.css'

function App() {

    const[username, setUsername] = useState('allen')
    const[user, findUser] = useState<{login: string, avatar_url: string}[]>([]);


    useEffect(() => {
        fetch('https://api.github.com/search/users?q='+username+'+in:login')
            .then(res => res.json())
            .then(data => {
                    findUser(data.items)
                console.log(data)
            })
            .catch(err => console.log(err));
    }, [username]);

    return<>
        <input id="search" placeholder="Type here to search"/>
        <button onClick={() => {
            const name = (document.getElementById('search') as HTMLInputElement).value;
            setUsername(name);
        }
        }>Search</button>
        {
        user.map((item, i) =>
        <div id="result" key={i}>
            <img src = {item.avatar_url}/>
            <span id="name">{item.login}</span>
        </div>
        )
        }
    </>

}

export default App
