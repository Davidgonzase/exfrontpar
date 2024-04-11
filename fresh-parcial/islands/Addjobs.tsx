import { FunctionComponent } from "preact";
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

export const Addjobs :FunctionComponent<context> = (props) => {
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
    }else if(users.usuarios.find((e)=>e.mail==mail)){
      setError({
        error:true,
        message:"El correo ya existe"
      });
    }else{
      console.log(users.usuarios.find((e)=>e.mail==mail))
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
    setusers({usuarios:nuser})
    verify(mail)
  };

  const  show = () => {
    const nuser = users.usuarios as user[];
    return <ul>{nuser.map((i)=><li><span>{i.name}</span><span>{i.mail}</span></li>)}</ul>
  };

  return(
    
    <div>
      {users.usuarios.length>0&&<div class="contc"><h1>Contactos</h1>{show()}</div>}
    <div class="agendaForm">
      <h2>Añadir contacto</h2>
      <input type="email" placeholder="Email" value={mail} name="email" onInput={(e)=>verify(e.currentTarget.value)}></input>
      <input type="name" placeholder="Nombre" value={name} onInput={(e)=>setname(e.currentTarget.value)}></input>
      <button class="inputbut" onClick={(e)=>add()} disabled={error.error || name=="" || mail==""}>Submit</button>
      <text style="color:red">{error.message}</text>
    </div>
    </div>
  );
}


export default Addjobs;
