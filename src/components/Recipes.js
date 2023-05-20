import { Alert, Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

import React, { useEffect, useState, useRef } from 'react'
import Home from './Home';

const Recipes = () => {

     

    function search() {
        //    console.log("user input = ",inputRecipe.current.value);
        searchForRecipe(inputRecipe.current.value);
        setHomePage(0)
    }

    function searchForRecipe(query) {

        setLoading(true)
        let url = `search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        fetch(url, { mode: "no-cors" }).then(response => {
            return response.json();
        }).then(res => {
            console.log('Index 0th = ', res.hits);
            updateIngredientsList(res.hits);
            setLoading(false)
        }).catch(err => {
            console.log('Error', err)
            setLoading(false)
        })


    }


    const [ingredientsList, updateIngredientsList] = useState([]);
    const inputRecipe = useRef(null);
    const APP_ID = "ad14a385";
    const APP_KEY = "e0922a26bc9a0578b7aa36008ea36a10";
    const [loading, setLoading] = useState(false);
    const [homePage, setHomePage] = useState(1)

    useEffect(() => {
        searchForRecipe({ inputRecipe });
    }, [])

    return (

        <div>
            <Typography sx={{ margin: '12px' }}>

                <input className='text-field' ref={inputRecipe} placeholder='search here'></input>
                <button className='btn' onClick={search} >search</button>
            </Typography>
            {loading === true ? <p>Loading....</p> : null}
            {homePage == 1 ? <Home /> : null}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    ingredientsList.map((menu, i) => (
                        <Card sx={{ maxWidth: '200px', m: 2, borderRadius: '2rem', ":hover": { opacity: '0.7' } }} key={i}>
                            <CardActionArea>
                                <CardMedia component={'img'} src={menu.recipe.image} alt={menu.recipe.image} sx={{ height: '150px', width: '200px', borderRadius: '2rem', alignItems: 'center' }} />
                                <CardContent>
                                    <Typography varient='h5' sx={{ ml: '2px', textAlign: 'left', fontFamily: 'cursive' }}>
                                        <p className='datafield'><b>{menu.recipe.label} </b> </p>
                                    </Typography>
                                    <Typography varient='h5' sx={{ ml: '2px', textAlign: 'left', fontFamily: 'cursive', "& li": { fontSize: '10px', alignItems: 'left' } }}>
                                        <ul >
                                            {
                                                menu.recipe.ingredientLines.map((steps, j) => {
                                                    return <li key={j}>&nbsp;&nbsp;{steps}</li>;
                                                })
                                            }
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </div>
    )
}

export default Recipes
