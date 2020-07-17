import React from 'react';
import { connect } from "react-redux";
import {deletePost} from '../../store'

const  PostList =({filteredPosts, deletePost})=> {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Accíon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredPosts.map(post => (
                                <tr key={post.id}>
                                    <th scope="row">{ post.name }</th>
                                    <td>{ post.description }</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger" onClick={()=>deletePost(post)}>
                                            Eliminar
                                        </button>
                                    </td>
                                 </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
}

const mapStateToProps = state =>({
    filteredPosts: state.filteredPosts
})

const mapDispatchToProps = dispatch =>({
    deletePost(post){
        dispatch(deletePost(post))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(PostList)