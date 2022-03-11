import logo from './logo.svg';
import './App.css';




function Button() {
  return (
    
    <div className="App">
        <div className="mt-5 mb-5" justify-content= "space-between">
        <button type="button" className="btn btn-danger">Large</button>
        
        <button type="button" className="btn btn-default">Default</button>
        <button type="button" className="btn btn-success btn-sm">Small</button>
        
</div>
        
        <div className="mt-5 mb-3" justify-content= "space-between">
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-default">Default</button>
        <button type="button" className="border-dotted active">Dashed</button>
        </div>
       
        <button type="button" className="btn btn-link">Link</button>
     
       <div className="mt-5 mb-3" justify-content= "space-between">
        <button type="button" className="shadow-box z-depth-4" justify-content="center">
          Box-Shadow
        </button>
      
        
      
       
        <div className="mt-3 mb-3" >
        <button class="btn btn-link" type="button" data-toggle="collapse"     data-target="#collapseExample" aria-expanded="false"     aria-controls="collapseExample"> Button without Border
        </button>
        </div>
        <div className="mt-3 mb-3">
<button type="button" className="btn btn-primary-outline"> Transparent Button
</button>
</div>
        {/* <div className="mt-3 mb-3" >
        <button type="button" className="btn" and style="background-color:transparent">Transparent</button>
        </div> */}
        <div className="mt-3 mb-3">
        <button className="btn btn-danger    btn-rounded" >Rounded Button</button>
        </div> 

</div>

    </div>
    
  );
}

export default Button;
