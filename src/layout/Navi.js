import React,{useContext} from 'react';
import { NavLink} from 'react-router-dom';
import {DataContext} from '../App';

const Navi = () => {
    const {data, loading}=useContext(DataContext)

    if(loading){
    return <h1 className='loading'>데이터 로드 중 입니다</h1>
    }
    const categories = [...new Set(data.map((item)=>item.RCP_WAY2))];
    const activeStyle={
        color:'#ff0',
        textShadow:'2px 2px 5px #f00'
    }
    return(
        <nav className='nav'>
            <ul>
                <li><NavLink to="/" style={({isActive})=>(isActive?activeStyle:undefined )}>Home</NavLink></li>
                {
                    categories.map((category) => (
                        <li key={category}>
                            <NavLink to={`category/${category}`}style={({isActive})=>(isActive?activeStyle:undefined )}>{category}</NavLink>
                        </li>
                    ))                       
                }
            </ul>
        </nav>
    );
           
    
};

export default Navi;