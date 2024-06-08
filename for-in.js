let school = {
    name: "Glory Vel",
    location: "Kotei",
    population: {
        students: 4000,
        teachers: 97,
        nonteaching: 15
    }
}

for( let details in school){
    console.log(details, school[details]);
}