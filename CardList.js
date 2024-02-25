import React from 'react';
import Card from '../Card/Card';


const CardList =({namelist,deleteFunc})=>{
console.log(CardList);
const cards =namelist.map(({id,...otherprops})=>{
return<Card key={id} id={id} {...otherprops}deleteFunc={deleteFunc}/>;
});
return <div>{cards}</div>
};

export default CardList;
