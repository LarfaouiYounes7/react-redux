import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleSub, setName, setPwd } from '../rtk/slices/LoginSlice';
import '../App.css';

export default function LoginPage() {
    const dispatch = useDispatch();
    const users = [
        {
            id: 1,
            name: 'younes',
            pwd: '1234'
        },
        {
            id: 2,
            name: 'younes',
            pwd: '12343'
        }
    ]

    const handleName = (e) => {
        dispatch(setName(e.target.value))
    };
    const handlePwd = (e) => {
        dispatch(setPwd(e.target.value))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleSub(users))
    }
    return (
        <div>
            <form>
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><input onChange={handleName} /></td>
                    </tr>

                    <tr>
                        <td>                              
                             <label >password</label>
                        </td>
                        <td>
                            <input onChange={handlePwd} />
                        </td>
                    </tr>

                    <tr>
                        <td  colSpan={2}>
                            <button onClick={handleSubmit}>se connecter</button>
                        </td>
                    </tr>


                </table>
                <div></div>
            </form>
        </div>
    )
}
