export const sortByName=(countries, ascending)=>{
    return countries.sort((countryA, countryB)=>{
      if(ascending){
        return countryA.name>countryB.name ? 1 : -1;
      }else{
        return countryA.name<countryB.name ? 1 : -1;
      }
    })
  }