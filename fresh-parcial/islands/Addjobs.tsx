import {FunctionComponent} from "preact";
import {useState} from "preact/hooks";


type context = {

}

type Error = {
  error:boolean;
  message:string;
}

export type user={
  name:string,
  mail:string
}

export type users={
  usuarios:user[]
}

export const Addjobs :FunctionComponen<context> = (props) => {
  const [error, setError] = useState({
    error:false,
    message:""
  });
  const [mail, setmail] = useState("")
  const [name, setname] = useState("")
  const empty:user[] = []
  const guy:user = {
    name:"David",
    mail:"correo@gmail.com"
  }
  empty.push(guy) 
  const [users, setusers] = useState<users>({usuarios:empty})

  const verify = (mail:string) => {
    console.log(users.length)
    if(!mail.includes("@")){
      setError({
        error:true,
        message:"Falta @"
      });
    }else if(!mail.includes(".")){
      setError({
        error:true,
        message:"Falta ."
      });
    }else {
      setError({
        error:false,
        message:""
      });
    }
    setmail(mail);
  };

  const  add = () => {
    const nuser = users.usuarios as user[];
    nuser.push({name:name,mail:mail})
    setusers(nuser)
  };

  const  show = () => {
    const nuser = users.usuarios as user[];
    return nuser.map((i)=><div>{i.name}<br></br>{i.mail}</div>)
  };

  return(
    
    <div>
      <div>
        <h1>Contactos</h1>
        {show()}
      </div>
    <div class="agendaForm">
      <h2>Añadir contacto</h2>
      <input type="email" placeholder="Email" value={mail} name="email" oninput={(e)=>verify(e.currentTarget.value)}></input>
      <input type="name" placeholder="Nombre" value={name} oninput={(e)=>setname(e.currentTarget.value)}></input>
      <button class="inputbut" onclick={(e)=>add() }>Submit</button>
      {error.message}
    </div>
    </div>
  );
}


export default Addjobs;

