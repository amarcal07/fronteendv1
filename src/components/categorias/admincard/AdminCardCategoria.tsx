import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';

function AdminCardCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        });
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])



    return (
        <>
            {
                categorias.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined" className='cardPostagem'>
                            <CardContent >
                                <Typography variant="h5" component="h2">
                                    {categoria.tipo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {categoria.descricao}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link to={`/formulariocategoria/${categoria.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarcategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>)
}

export default AdminCardCategoria;