import { cache } from "react";
import  {createClient} from ('redis');
const client = await createClient();

client.connect()
client.on('error', function(err){
    console.log(err)
})

function cacheUserprofile(){
    await client.set('user:1', JSON.stringify({
        name: 'Yash',
        age: 30,
    }));
}

function readProfile(){
    let data=await client.get('user:1');
    return data;
}
// cacheUserprofile()
// .then(()=>console.log('User cached'))
readProfile().then((data)=>console.log(data))
.catch(e=>console.log(e))
