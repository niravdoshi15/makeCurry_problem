makeCurry([3, 7, 2, 5, 4])
makeCurry([3, 6, 9])

function makeCurry(input){
    let output = new Array(input.length)
    let ingredients = ['P', 'Q', 'R']
    let sumInput = 0

    sumInput = input.reduce((a, c) => a+c)

    if(sumInput % ingredients.length === 0){
        let start = 0
        let required = sumInput/ingredients.length
        const fillArray = (input, output, start, required, ing) => {
            let flag = false
            for (let i=0; i<output.length; i++) {
                if(!output[i]){
                    let present = start + input[i]
                    if(present === required){
                        flag = true
                        output[i] = ing
                        break;
                    } else if (present < required){
                        let temp = [...output]
                        temp[i] = ing
                        let result = fillArray(input, temp, present, required, ing)
                        if(result){
                            flag = true
                            output = result
                            break;
                        }
                    }
                }
            }
            return flag ? output : false
        }



        ingredients.map((i) => {
            output ? output = fillArray(input, output, start, required, i) : undefined
        })

        output ? console.log(output.join('')) : console.log('noLuck')


    }
    else {
        console.log('noLuck')
    }
}