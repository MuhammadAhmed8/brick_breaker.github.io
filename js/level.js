const level1 = [
    [1,0,0,1,1,1,0,1,0,1],
    [1,0,1,1,0,0,1,1,1,1],
    [0,0,0,0,0,1,0,1,1,0]
]

function levelBuilder(level,ball,w,h){

    let bricks = [];

    level.forEach( (row,i) => {

        row.forEach( (brick,j) => {

            if(brick === 1){
                let pos = {
                    x: w * j,
                    y: h * i,
                };
                bricks.push(new Brick(pos, ball))

            }

        })
        
    })

    return bricks;

}