import { FreshContext, Handlers, PageProps} from "$fresh/server.ts"

export const hander:Handlers = {
    GET:(req:Request,ctx:FreshContext) =>{
        return ctx.render({})
    }
}

const Page = (props:PageProps) => {
    return(
        <div>
            <h1>My Agenda</h1><br/><br/><br/>
            <h3>Welcome to my agenda!</h3>
        </div>
    );
}

export default Page;