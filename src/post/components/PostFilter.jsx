import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch  } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import {FILTERING_POSTS} from '../../store'

const  PostFilter = ({filteringPosts})=> {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <FontAwesomeIcon icon={faSearch} />
                    <input  id="inputPostName" className="form-control mx-sm-3" aria-describedby="inputNameHelpInline" onChange={e=>filteringPosts(e.target.value)}/>
                    <small id="inputNameHelpInline" className="text-muted">
                        Escribir nombre de post para buscar 
                    </small>
                </div>
            </form>
        );
}
const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    filteringPosts(name){
        dispatch({
            type:FILTERING_POSTS,
            name
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(PostFilter)