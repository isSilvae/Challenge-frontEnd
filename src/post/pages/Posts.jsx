import React, {  Fragment} from 'react';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';
import PostAdd  from '../components/PostAdd';

export const  Posts =()=> { 
    return (
        <Fragment>
            <div className='row pt-3'>
                <div className='col-12' >
                    <h3>Lista de Posts</h3>
                </div>
            </div>
            <div className='row p-3'>
                <div className="col-3"></div>
                <div className='col-9'>
                    <PostFilter/>
                </div>
            </div>
            <div className='row pt-4'>
                <div className='col-3 '>
                    <PostAdd/> 
                </div>
                <div className='col-9'>
                    <PostList/>
                </div>
            </div>
        </Fragment>
    );
}
