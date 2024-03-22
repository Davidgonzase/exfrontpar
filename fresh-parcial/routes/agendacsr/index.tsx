import { FreshContext, Handlers, PageProps} from "$fresh/server.ts"
import Addjobs from "../../islands/Addjobs.tsx"

export const hander:Handlers = {
    GET: async (req:Request,ctx:FreshContext) =>{
        return ctx.render({})
    },
    POST: async (req: Request)=>{
    }
}

const Page = (props:PageProps) => {
    return(
        <div>
            <h1>My Agenda</h1>
            <Addjobs/>
        </div>
    );
}

export default Page;