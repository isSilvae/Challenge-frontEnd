import React,{useState} from 'react';
import { connect } from "react-redux";
import { addPost} from '../../store'

 const PostAdd = ({ addPost}) =>{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div className='card bg-light mr-1'>
            <div className="card-body">
                <form>
                    <h4>Agregar post</h4>
                    <div className="form-group">
                        <input type="text" className="form-control" id="postName" aria-describedby="emailHelp" placeholder="Nombre"  onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="postDescription" placeholder="Descripcion"  onChange={e=>setDescription(e.target.value)}/>
                    </div>
                    <button type="button" className="btn btn-outline-success" onClick={()=>addPost({name,description})}>Agregar</button>
                </form>
            </div>
        </div>
    );
}
const mapStateToProps = state =>({
    
})
const mapDispatchToProps = dispatch =>{
    return {
    addPost(post){
        dispatch(addPost(post));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd)