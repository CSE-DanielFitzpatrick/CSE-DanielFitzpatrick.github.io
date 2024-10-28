const getBrew = async() => {
    const url = "https://api.openbrewerydb.org/breweries"
    try {
        const response = await fetch("https://api.openbrewerydb.org/breweries");
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showBrew = async() => {
    const brews = await getBrew();
    
    brews.forEach(()=>{
        document.getElementById("breweries-section").append(getBrewSection());
    });
};

const getBrewSection = (brews) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = brews.name;
    section.append(h3);

    const brandP = document.createElement("p");
    brandP.innerHTML = brews.brand;
    section.append(brandP);

    const ul = document.createElement("ul");
    section.append(ul);

    //loop through the reviews
    brews.reviews.forEach((review)=>{
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });

    return section;
}


