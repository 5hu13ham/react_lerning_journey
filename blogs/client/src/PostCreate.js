import React,{useImperativeHandle, useState} from 'react';
import axios from 'axios';


export default () => {
    const [tile, setTitle] = useState('');
    return (
        <div>
            <form>
                <div className='form-group'>
                    <label>
                        Title 
                    </label>
                    <input 
                    value = {title} 
                    onChange ={e => setTitle(e.tile.value)} 
                    className='form-control'
                    />
                </div>
                <button className ='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}