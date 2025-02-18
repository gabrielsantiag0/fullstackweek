import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input";
 
const ProductsPage = () => {
    return ( 
        <div className="p-5 border-red-500 border-2 rounded-lg">
            <h1 className="text-red-500">Products Page</h1>  
            <Button>FWS 7.0</Button>
            <Input placeholder="Bora fechar esse projeto"/>
        </div>

    );
  }
   
  export default ProductsPage;