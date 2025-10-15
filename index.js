const färger = ['Hjärter', 'Ruter', 'Spader', 'Klöver']
const värde = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const namn = ['Ess', 'Två', 'Tre', 'Fyra', 'Fem', 'Sex','Sju', 'Åtta', 'Nio', 'Tio', 'Knekt', 'Dam', 'Kung']
const spelare = [
    { person: 1, hand:[]},
    { person: 2, hand:[]},
    { person: 3, hand:[]},
    { person: 4, hand:[]}
]

let kort = [
    {
    färger: null,
    namn: 'joker',
    värde: 0
    }
]

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



    kort = Shuffle(kort)
    DelaUt(kort, spelare)

    console.dir(spelare, { depth: null }) 
    console.log(kort)




    function Shuffle(kort)
    {
        for (i = 0; i < kort.length; i++)
        {
            kort[i].sorteringsnummer = Math.random();
        }

        kort.sort((a, b) => a.sorteringsnummer - b.sorteringsnummer);

        for (i = 0; i < kort.length; i++)
        {
            delete kort[i].sorteringsnummer
        }

        return kort;
    }

    function DelaUt(kort, spelare) 
    {
        const restKvar = kort.length % spelare.length; 
    
        let spelarIndex = 0
    
        while(kort.length > restKvar)
        {
            spelare[spelarIndex].hand.push(kort.pop())
    
            if (spelarIndex == spelare.length - 1)
            {
                spelarIndex = 0
            }
            else {
                spelarIndex++
            }
        }
    }
    











    function Blanda(kort)
    {
        let blandadeKort = []

        while (kort.length > 0)
        {

            let slumpIndex = Math.floor(Math.random() * kort.length)
            let randomKort = kort.splice(slumpIndex, 1)
            blandadeKort.push(randomKort[0])
            
        }
        return blandadeKort
    }
/*     for (i = 0; i < kort.length; i++)
    {
        console.log(i + 1, kort[i])

        
    } */
 
    