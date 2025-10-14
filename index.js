const färger = ['Hjärter', 'Ruter', 'Spader', 'Klöver']
const värde = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const namn = ['Ess', 'Två', 'Tre', 'Fyra', 'Fem', 'Sex','Sju', 'Åtta', 'Nio', 'Tio', 'Knekt', 'Dam', 'Kung']

const kort = []


for (f = 0; f < färger.length; f++)
    {
        for (i = 0; i < namn.length; i++)
            {

                let ettKort = {
                    färger: färger[f],
                    namn: namn[i],
                    värde: värde[i],
                };

                kort.push(ettKort)
            }
    }

    for (i = 0; i < kort.length; i++)
    {
        console.log(i + 1, kort[i])
    }
 