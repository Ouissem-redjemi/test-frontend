import React, {useEffect, useState} from "react";
import {Paper} from "@mui/material";
import './listTree.css'
import TreeService from "../service/TreeService";
const paperStyle ={padding:'10px 20px', width:900, margin :'20px auto', borderRadius:'20px'};
function ListTree (){
    const [trees, setTrees] = useState([]);
    const init = ()=> {
        TreeService.getlistArrondissement().then(res => {
            console.log('Tree Data ', res.data);
            setTrees(res.data);
        }).catch(error => {
            console.log("ERROR : " + error)
        })
    }

    useEffect(() => {
        init()
    }, []);


        return(
            <div>
                <div className="container">
                    <div className="row">
                        <h2>Liste des arrondissements </h2>
                    </div>
                    <Paper elevation={3} style={paperStyle}>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Arrondissement</th>
                                <th scope="col">Nombre d'arbres</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(trees).map((tree,id) => (
                                    <tr key={id}>
                                        <td>{tree}</td>
                                        <td>{trees[tree]}</td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </Paper>
                </div>

            </div>
        )

}


export default ListTree;